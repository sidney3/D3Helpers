"use strict";
exports.__esModule = true;
exports.VisualObject = void 0;
var VisualObject = /** @class */ (function () {
    //idea: give each object the functionality to render themselves. When one calls "render" on the stage it
    //iterates through each of the panes, asking each pane to render all of its children (which the pane does
    //by calling this method)
    function VisualObject(coords) {
        this.children = [];
    }
    VisualObject.prototype.boundingBox = function () { };
    //question: what actually makes up an object? Is every object a collection of shapes? What about text
    VisualObject.prototype.render = function (svg) {
        this.children.forEach(function (child) { return child.render(svg); });
    };
    return VisualObject;
}());
exports.VisualObject = VisualObject;
