function View(buffer, start = 0, end = buffer.length, padding = start) {
  return {
    padding: padding,
    i: 0,
    buffer: buffer.slice(start, end)
  }
}
/**
 * Read the next UInt8 in the view and increment offset
 *
 * @param {View} view 
 * @returns {byte}
 */
function readUInt8(view) {
  return view.buffer.readUInt8(view.i++)
}
/**
 * Read the size coded at the current offset
 * 
 * @param {View} view 
 * @param {boolean} b 
 * @returns {number} size
 */
function readSize(view, b) {
  let c = readUInt8(view)
  if (c === 1) {
    for (let d = c = 0; d < 7; d++)
      c = c * 256 + readUInt8(view)
    return c
  }
  let e = 128
  for (let d = 0; d < 6 && c < e; d++) {
    c = c * 256 + readUInt8(view)
    e *= 128
  }
  return b ? c - e : c
}
/**
 * Move the current offset to current position + size read at current position
 *
 * @param {View} view 
 */
function jump(view) {
  const size = readSize(view, true)
  view.i += size
}
/**
 * Jump to the next occurence of the given "magic" bytes
 *
 * @param {View} view 
 * @param {number} bytes 
 * @returns {boolean} wheter the magic was found
 */
function gotoNext(view, magic) {
  if (view.i >= view.buffer.length)
    return false
  while (readSize(view, false) !== magic) {
    jump(view)
    if (view.i >= view.buffer.length)
      return false
  }
  return true
}
/**
 * Read value encoded at current offset
 *
 * @param {View} view 
 * @returns value
 */
function readValue(view) {
  let size = readSize(view, true)
  let value = readUInt8(view)
  for (let i = 1; i < size; i++)
    value = 256 * value + readUInt8(view)
  return value
}
/**
 * Create a view of the buffer starting after the size coded at current position
 *
 * @param {View} view 
 * @returns {View} new view
 */
function getNestedview(view) {
  const size = readSize(view, true)
  const start = view.i
  const newView = View(view.buffer, start, start + size, view.padding + start)
  view.i += size
  return newView
}

/**
 * Build the index of the file segments
 * 
 * @param {Buffer} buffer buffer containing the init + index section of the file
 * @param {Object} range range of the index in the file
 * @param {Number} range.start start offset of the index 
 * @param {Number} range.end end offset of the index
 * @return {Object} the built index
 */
module.exports = function buildIndex(buffer, range) {
  const MAGIC_FILE_START = 440786851 // 1A 45 DF A3
  const MAGIC_HEADER = 357149030 // 15 49 A9 66 
  const MAGIC_INDEX = 475249515 // 1C 53 BB 6B
  const MAGIC_SEGMENT = 187 // BB
  const MAGIC_TIMESTAMP = 179 // B3
  const MAGIC_OFFSET = 183 // B7
  const MAGIC_OFFSET_REAL = 241 // F1

  let index = {
    segments: []
  }
  let e = 0
  let view = View(buffer)
  if (!gotoNext(view, MAGIC_FILE_START)) error("Magic bytes not found (File start)")
  jump(view)
  if (!gotoNext(view, 408125543 /* whatever magic */)) error("Magic bytes not found")
  view = getNestedview(view)
  e = view.padding + view.i
  
  view = View(buffer, range.start, range.end)

  if (gotoNext(view, MAGIC_INDEX)) {
    view = getNestedview(view)
    while (gotoNext(view, MAGIC_SEGMENT)) {
      let offset = e
      let timestamp = 0
      let segmentView = getNestedview(view)
      if (gotoNext(segmentView, MAGIC_TIMESTAMP)) {
        timestamp = readValue(segmentView)
        if (gotoNext(segmentView, MAGIC_OFFSET)) {
          segmentView = getNestedview(segmentView)
          while (gotoNext(segmentView, MAGIC_OFFSET_REAL)) {
            offset = readValue(segmentView) + e
          }
        } else
          error("Offset magic bytes not here")
      } else
        error("Timestamp magic bytes not here")
      let segment = { timestamp, offset }
      index.segments.push(segment)
    }
  } else
    error("Index magic bytes not here")
  
  return index
  function error(e) {
    throw new Error(e);
  }
}