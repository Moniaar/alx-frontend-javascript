class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('Square footage must be a number');
    }

    this._sqft = sqft;

    // Check if the subclass implements evacuationWarningMessage
    if (this.constructor !== Building && this.constructor.prototype.evacuationWarningMessage
      === Building.prototype.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }

  // Abstract method placeholder
  static evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}

export default Building;
