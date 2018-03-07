export default class GridNode
{
    constructor() {
        this._x = null;
        this._y = null;
        this.WIDTH = 0;
        this.HEIGHT = 0;
        this.el = document.createElement('div');
    }

    set x(val) {
        this._x = val;
        this.el.style.left = `${this._x - this.WIDTH / 2}px`;
        return this;
    }

    get x() {
        return this._x;
    }

    set y(val) {
        this._y = val;
        this.el.style.top = `${this._y - this.HEIGHT / 2}px`;
        return this;
    }

    get y() {
        return this._y;
    }

    set coords(val) {
        this.x = val[0];
        this.y = val[1];
        return this;
    }

    get coords() {
        return [this._x, this._y];
    }
}