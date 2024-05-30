class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number') {
      throw new TypeError('Size must be a number');
    }
    if (typeof location !== 'string') {
      throw new TypeError('Location must be a string');
    }

    this._size = size;
    this._location = location;
  }

  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  // Overriding the valueOf method to return the size when cast to a number
  valueOf() {
    return this._size;
  }

  // Overriding the toString method to return the location when cast to a string
  toString() {
    return this._location;
  }
}

export default HolbertonClass;
