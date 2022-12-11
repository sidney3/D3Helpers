"use strict";
exports.__esModule = true;
exports.Pane = void 0;
var Pane = /** @class */ (function () {
    /*
    Note that we can have many types of panes that ultimately inherit from Pane.
    But for starters in the project let's just get one pane that works
    */
    function Pane() {
    }
    Pane.prototype.getChildren = function () {
        return this.Children;
    };
    Pane.prototype.render = function () {
        //for child: tell that child to render itself
    };
    return Pane;
}());
exports.Pane = Pane;
