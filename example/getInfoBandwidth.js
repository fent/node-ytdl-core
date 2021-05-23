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
                'cookie': 'Put your cookie here'
            
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
