// ytdl get info bandwidth example

const ytdl = require('ytdl-core');
const zlib = require('zlib');

function report(total) {
    console.log('-----------------------------');
    total.call.forEach((e,i,a) => {
        console.log('call: '+(i+1));
        console.log('path: '+e.path);
        console.log('uncompressed: '+e.uncompressed);
        console.log('compressed: '+e.compressed);
        console.log('-----------------------------');
    });
    console.log('Total requests: '+total.call.length)
    console.log('Total Uncompressed: '+total.uncompressed);
    console.log('Total Compressed: '+total.compressed);
    console.log('');
    console.log('-------------------------');
    console.log('');
}

function run(id,callback) { 
    
    let total = {
        call : [],
        uncompressed : 0,
        compressed : 0
    }

    let zip;
    
    ytdl.getInfo(id, {
        
        requestCallback : (req) => {
            
            let data = {
                uncompressed : 0,
                compressed : 0
            } 

            req.once('request', (request) =>{
                data.path = request.protocol+'//'+request.host+request.path;
            });

            req.on('data',(chunk)=>{
                data.uncompressed += chunk.length;
            });

            req.on('end',()=>{
                (zip === null) ? data.compressed = data.uncompressed : data.compressed = zip.bytesWritten;
                total.uncompressed += data.uncompressed;
                total.compressed += data.compressed;
                total.call.push(data);
                zip = null;
            });

        },

        requestOptions: {
            headers: {
                'accept-encoding': 'gzip, deflate, br',
                'cookie': 'VISITOR_INFO1_LIVE=VqymHCpMaPI; CONSENT=YES+ZA.en+202012; SID=8wcX1jHhhb3JOmKliHc7_0KrA5BZOLDfSOCcwsoCYG-vwHK1b-WkvPD6TwUnQFTQOhuMfQ.; __Secure-3PSID=8wcX1jHhhb3JOmKliHc7_0KrA5BZOLDfSOCcwsoCYG-vwHK1RNeWpQjELFE9X100mr7WUw.; HSID=AXa7sEoiEXO-gPJt2; SSID=AVJR5JDyUaAT_6yoR; APISID=ObCKE-ZGcBbs_9Rj/AIQgtoxuV5piuMpHJ; SAPISID=yoe6hoqlwMaV3EMP/AcDhtRSLQsw0ywV06; __Secure-3PAPISID=yoe6hoqlwMaV3EMP/AcDhtRSLQsw0ywV06; LOGIN_INFO=AFmmF2swRgIhAKttcIEDKiBz70i8jJ8Na2s9_ZL35xuHb8A8wnUtg3crAiEAnqlt79sQT4_pylS-H0SeNxfqwsB08MAIu84rSD6Vwj0:QUQ3MjNmeFhqem55VWdSUmdzSXE4N3JiT0FyWk5TeXV5VHdmYVBURlVOeWFOLVZpYUZ1TUdVUEJEZGhYR094dVY5MlVHeThQbUtDLXJERVlSemtGQUtZOU9wanlIbGk1QlBXSjllaEJfVU45RHFaek5hTElBdTRPWUY4U0g5b2p3NVVVdEsyakROcWhXTW04VEVfY19MOGFDUnItcFdBT2RfLTY2d0pRSGFFcV8tcFk2TGNKZXlJcktuWjNJaWNDVEFSYjlMTGhBMlM4; PREF=volume=35&f6=400&tz=Africa.Johannesburg&f5=30000&f4=4000000; YSC=knxSadeoDJs; SIDCC=AJi4QfH78pBF14tFqkol5C-2kbYKPSUVpb_B7fuDxC4n-A2f5LRr5Totj0uYx3kIG2Jqc5H2Hw; __Secure-3PSIDCC=AJi4QfFjHyMBQ7b67tkIFtSpQHMWIiVOE9GUCHoFwW6oIEkXer--OG0IoiXHSnJKb3FM8xnQPI8'    
            },
            acceptEncoding: { 
                gzip: () => { zip = zlib.createGunzip(); return zip; },
                deflate: () => { zip = zlib.createDeflate(); return zip; },
                br: () => { zip = zlib.createBrotliDecompress(); return zip; }
            }
        }
        
    }).then(info => {
        console.log('got info for '+id);
        report(total);
        callback(total);
    }, err => {
        console.log('failed to get info for '+id);
        report(total);
        callback(total);
    });
}

if (process.argv.length==3) {    
    run(process.argv[2],()=>{});
} else {
    console.log('running the 4 test cases');
    console.log('');
    console.log('-------------------------');
    console.log('');
    run('5qap5aO4i9A',(bw1)=>{
         run('B3eAMGXFw1o',(bw2)=>{
            run('21X5lGlDOfg',(bw3)=>{
                run('LuZu9N53Vd0',(bw4)=>{
                    console.log('Global bandwidth uncompressed: '+(bw1.uncompressed+bw2.uncompressed+bw3.uncompressed+bw4.uncompressed));
                    console.log('Global bandwidth compressed: '+(bw1.compressed+bw2.compressed+bw3.compressed+bw4.compressed));
                });
            });
         });
    });
}