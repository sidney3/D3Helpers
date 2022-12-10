export class VisualObject{
    x: number
    y: number
    children: VisualObject[]

    //idea: give each object the functionality to render themselves. When one calls "render" on the stage it
    //iterates through each of the panes, asking each pane to render all of its children (which the pane does
    //by calling this method)

    constructor(x: number, y: number){
        this.children = []
    }

    boundingBox(){}

    //question: what actually makes up an object? Is every object a collection of shapes? What about text
    render(svg){
        this.children.forEach((child: VisualObject) => child.render(svg))
    }
}