import {Pane} from './Pane'

class Stage{
    Children: Pane[]
    constructor(){}
    getChildren(): Pane[] {
        return this.Children
    }
    render(){}
}