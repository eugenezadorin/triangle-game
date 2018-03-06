function game()
{
    let appContainer = document.getElementById('app');

    const edgeLen = 100;
    const pos = [0, 400];
    let holes = [];

    for (let i = 0; i < 5; i++) {
        holes.push(new Hole([
            pos[0] + (edgeLen * i),
            pos[1]
        ]));
    }

    holes.push(new Hole(getVertex(
        holes[0].coords, holes[1].coords
    )));
    holes.push(new Hole(getVertex(
        holes[1].coords, holes[2].coords
    )));
    holes.push(new Hole(getVertex(
        holes[2].coords, holes[3].coords
    )));
    holes.push(new Hole(getVertex(
        holes[3].coords, holes[4].coords
    )));

    holes.push(new Hole(getVertex(
        holes[0].coords, holes[2].coords
    )));
    holes.push(new Hole(getVertex(
        holes[1].coords, holes[3].coords
    )));
    holes.push(new Hole(getVertex(
        holes[2].coords, holes[4].coords
    )));

    holes.push(new Hole(getVertex(
        holes[0].coords, holes[3].coords
    )));
    holes.push(new Hole(getVertex(
        holes[1].coords, holes[4].coords
    )));

    holes.push(new Hole(getVertex(
        holes[0].coords, holes[4].coords
    )));

    for (hole of holes) {
        appContainer.appendChild(hole.el);
    }

    let keys = Object.keys(holes);
    let randomKeys = keys.sort(() => .5 - Math.random()).slice(0, 13);
    let chip;
    for (let key of randomKeys) {
        chip = new Chip( holes[ parseInt(key) ].coords );
        appContainer.appendChild(chip.el);
    }    
}

function getVertex(p1, p2) {
    const x1 = p1[0];
    const y1 = p1[1];
    const x2 = p2[0];
    const y2 = p2[1];

    const x3 = (x1 + x2 + (y2 - y1)*Math.sqrt(3)) / 2;
    const y3 = (y1 + y2 + (x1 - x2)*Math.sqrt(3)) / 2;

    return [x3, y3];
}

class Hole
{
    constructor(coords) {
        this.WIDTH = 24;
        this.HEIGHT = 24;

        this.el = document.createElement('div');
        this.el.classList.add('hole');
        this.el.style.width = `${this.WIDTH}px`;
        this.el.style.height = `${this.HEIGHT}px`;

        this.coords = coords;
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

class Grid
{

}

class Chip
{
    constructor(coords) {
        this.WIDTH = 48;
        this.HEIGHT = 48;

        this.selected = false;

        this.el = document.createElement('div');
        this.el.classList.add('chip');
        this.el.style.width = `${this.WIDTH}px`;
        this.el.style.height = `${this.HEIGHT}px`;
        this.el.style.backgroundColor = randomColor();

        this.el.addEventListener('click', e => {
            e.preventDefault();
            this.selected = true;
        });

        this.coords = coords;
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

function randomColor() {
    const randomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    const h = randomInt(0, 360);
    const s = randomInt(42, 98);
    const l = randomInt(40, 90);
    return `hsl(${h},${s}%,${l}%)`;
}

window.addEventListener('load', game);