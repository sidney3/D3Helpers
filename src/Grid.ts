import {VisualObject, Coords} from './VisualObject'

interface gridProps{
    coords: Coords,
    cell_size:{
        x_size:number,
        y_size:number
    },
    grid_dimensions:{
        height:number,
        width:number
    },
    // grid_location:{ //note: this is the upper left location
    //     x:number,
    //     y:number
    // },
    // outline: boolean

}

interface gridCell{
    full: boolean,
    contents?: VisualObject,
    text: string,
}

export class Grid{
    /*
    As one of the most common expressions of a graph is a matrix, we offer functionality
    for building a grid of cells, where you can add visual objects to each square in the grid,
    and they are automatically formatted into the grid (where the center of the object is aligned
    to the center of the grid)
    */
    config: gridProps
    cells: Array<Array<gridCell>>

    constructor(config: gridProps){
        this.config = config
        this.initialize_cells()
    }

    initialize_cells(){
        console.log("this happened")
        this.cells = []
        for(let r = 0; r < this.config.grid_dimensions.height; r++){
            console.log("row =" + r)
            this.cells.push([]);
            for(let w = 0; w < this.config.grid_dimensions.width; w++){
                console.log("width =" + w)
                const empty_cell:gridCell = {
                    full: false,
                    text: "hi"
                }
                this.cells[r].push(empty_cell)
            }
        }
        console.log(this.cells)
    }
}

const grid = new Grid({
    coords: {x:0,y:0},
    cell_size:{
        x_size:1,
        y_size:1
    },
    grid_dimensions:{
        height:3,
        width:4
    },
})