import GridNode from './GridNode';

export default class Chip extends GridNode
{
    constructor(coords) {
        super();

        this.WIDTH = 48;
        this.HEIGHT = 48;
        
        this.el.classList.add('chip');
        this.el.style.width = `${this.WIDTH}px`;
        this.el.style.height = `${this.HEIGHT}px`;
        this.el.style.backgroundColor = this.randomColor();

        this.coords = coords;
    }

    randomColor() {
        const randomInt = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        const h = randomInt(0, 360);
        const s = randomInt(42, 98);
        const l = randomInt(40, 90);
        return `hsl(${h},${s}%,${l}%)`;
    }
}