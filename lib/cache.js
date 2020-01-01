// A cache that expires.
module.exports = class Cache extends Map {
  constructor() {
    super();
    this.timeout = 1000;
  }
  set(key, value) {
    super.set(key, {
      tid: setTimeout(this.delete.bind(this, key), this.timeout),
      value,
    });
  }
  get(key) {
    let entry = super.get(key);
    if (entry) {
      return entry.value;
    }
  }
  delete(key) {
    let entry = super.get(key);
    if (entry) {
      clearTimeout(entry.tid);
      super.delete(key);
    }
  }
  clear() {
    for (let entry of this.values()) {
      clearTimeout(entry.tid);
    }
    super.clear();
  }
};
