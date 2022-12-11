import {VisualObject, Coords} from './VisualObject.js'

interface gridProps{
    coords: Coords, //note: coords refers to the top left portion of the grid
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
    center: Coords,
}


export class Grid{
    /*
    As one of the most common expressions of a graph is a matrix, we offer functionality
    for building a grid of cells, where you can add visual objects to each square in the grid,
    and they are automatically formatted into the grid (where the center of the object is aligned
    to the center of the grid)

    Note: grid size is fixed! You can't change the size of a grid once it's created
    */
    config: gridProps
    cells: Array<Array<gridCell>>

    constructor(config: gridProps){
        this.config = config
        this.initialize_cells()
    }

    initialize_cells(){
        this.cells = []
        for(let w = 0; w < this.config.grid_dimensions.width; w++){
            this.cells.push([]);
            for(let r = 0; r < this.config.grid_dimensions.height; r++){
                const empty_cell:gridCell = {
                    full: false,
                    center:{
                        x:this.config.coords.x + this.config.cell_size.x_size*w + 
                        + this.config.cell_size.x_size/2,
                        y:this.config.coords.y + this.config.cell_size.y_size*r + 
                        + this.config.cell_size.y_size/2,
                    }
                }
                console.log("w: " + w + ",r: " + r + "\n x center: " + empty_cell.center.x + " y center: " + empty_cell.center.y)
                this.cells[w].push(empty_cell)
            }
        }
    }


    fill_cell(x_coord: number, y_coord:number, add_object:VisualObject){
        if(!Number.isInteger(x_coord) || Number.isInteger(y_coord)){
            throw "non-integer indices given for grid coords";
        }
        if(x_coord < 0 || y_coord < 0){
            throw "negative indices given for grid coords";
        }
        if(x_coord > this.config.cell_size.x_size-1 || y_coord > this.config.cell_size.y_size-1){
            throw `coordinates out of bounds. Grid is of width ${this.config.cell_size.x_size} and height ${this.config.cell_size.y_size}`
        }
        //check for inside bounding box
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