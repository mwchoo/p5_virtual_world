class Text { // implemented by Minwoo Choo
  constructor(t, sz, xp, yp, c, font) {
    this._text = createGraphics(window.innerWidth - 4, window.innerHeight - 4);
    this._text.content = t; // content of text
    this._text.fontSize = sz; // font size
    this._text.x = xp; // position
    this._text.y = yp;
    this._text.fontColor = c; // font color
    this._text.fontFamily = font; // font family
    this._text.alignCenter = false;
  }

  setText(t) {
    this._text.content = t;
  }

  setSize(sz) {
    this._text.fontSize = sz;
  }

  setPosition(xp, yp) {
    this._text.x = xp;
    this._text.y = yp;
  }

  setColor(c) {
    this._text.fontColor = c;
  }

  display() {
    push();
    this._text.textFont(this._text.fontFamily);
    this._text.textSize(this._text.fontSize);
    this._text.fill(this._text.fontColor);
    this._text.text(this._text.content, this._text.x, this._text.y);
    texture(this._text);
    plane(window.innerWidth - 4, window.innerHeight - 4);
    pop();
  }
}
