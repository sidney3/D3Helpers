import {Shape} from './Shape'
import d3 from 'd3'

export class Rectangle extends Shape{
    length: number;
    width: number;
    /*
    All shapes will extend this class

    Idea: want functionality to be able to conjoin two shapes (i.e. for tic-tac-toe,
        throw an X over a square and call it a single type)
    */

    constructor(
        x: number,
        y: number,
        length: number,
        width: number
    ){
        super(x, y)
        this.length = length
        this.width = width
    }

    render(){
    }
}