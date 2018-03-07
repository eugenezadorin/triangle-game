import GridNode from './GridNode';

export default class Hole extends GridNode
{
    constructor(coords) {
        super();

        this.WIDTH = 24;
        this.HEIGHT = 24;

        this.el.classList.add('hole');
        this.el.style.width = `${this.WIDTH}px`;
        this.el.style.height = `${this.HEIGHT}px`;

        this.coords = coords;
        this.siblings = [];
    }
}