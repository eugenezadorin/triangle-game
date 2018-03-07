import Hole from './Hole';
import Chip from './Chip';

export default class Grid
{
    constructor(container) {
        this.el = container;

        this.EDGE_LEN = 100;
        this.INIT_POS = [0, 400];

        this.holes = [];
        this.chips = [];
    }

    initHoles() {
        for (let i = 0; i < 5; i++) {
            this.holes.push(new Hole([
                this.INIT_POS[0] + (this.EDGE_LEN * i),
                this.INIT_POS[1]
            ]));
        }

        this.holes.push(new Hole(this.getVertex(
            this.holes[0].coords, this.holes[1].coords
        )));
        this.holes.push(new Hole(this.getVertex(
            this.holes[1].coords, this.holes[2].coords
        )));
        this.holes.push(new Hole(this.getVertex(
            this.holes[2].coords, this.holes[3].coords
        )));
        this.holes.push(new Hole(this.getVertex(
            this.holes[3].coords, this.holes[4].coords
        )));
    
        this.holes.push(new Hole(this.getVertex(
            this.holes[0].coords, this.holes[2].coords
        )));
        this.holes.push(new Hole(this.getVertex(
            this.holes[1].coords, this.holes[3].coords
        )));
        this.holes.push(new Hole(this.getVertex(
            this.holes[2].coords, this.holes[4].coords
        )));
    
        this.holes.push(new Hole(this.getVertex(
            this.holes[0].coords, this.holes[3].coords
        )));
        this.holes.push(new Hole(this.getVertex(
            this.holes[1].coords, this.holes[4].coords
        )));
    
        this.holes.push(new Hole(this.getVertex(
            this.holes[0].coords, this.holes[4].coords
        )));

        for (let hole of this.holes) {
            this.el.appendChild(hole.el);
        }
    }

    initChips() {
        let keys = Object.keys(this.holes);
        let randomKeys = keys.sort(() => .5 - Math.random()).slice(0, 13);
        let chip;
        for (let key of randomKeys) {
            chip = new Chip( this.holes[ parseInt(key) ].coords );
            this.el.appendChild(chip.el);
        }
    }

    getVertex(p1, p2) {
        const x1 = p1[0];
        const y1 = p1[1];
        const x2 = p2[0];
        const y2 = p2[1];
    
        const x3 = (x1 + x2 + (y2 - y1)*Math.sqrt(3)) / 2;
        const y3 = (y1 + y2 + (x1 - x2)*Math.sqrt(3)) / 2;
    
        return [x3, y3];
    }
}