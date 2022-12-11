"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Shape = void 0;
var VisualObject_1 = require("./VisualObject");
var Constants_1 = require("./Constants");
var Shape = /** @class */ (function (_super) {
    __extends(Shape, _super);
    /*
    All shapes will extend this class

    Idea: want functionality to be able to conjoin two shapes (i.e. for tic-tac-toe,
        throw an X over a square and call it a single type)
    */
    function Shape(coords) {
        var _this = _super.call(this, coords) || this;
        _this.color = Constants_1.DEFAULT_BORDER_COLOR;
        _this.borderWidth = Constants_1.DEFAULT_STROKE_WIDTH;
        _this.borderColor = Constants_1.DEFAULT_COLOR;
        return _this;
    }
    Shape.prototype.setColor = function (color) { this.color = color; };
    Shape.prototype.setStrokeWidth = function (borderWidth) { this.borderWidth = borderWidth; };
    Shape.prototype.setBorderColor = function (borderColor) { this.borderColor = borderColor; };
    return Shape;
}(VisualObject_1.VisualObject));
exports.Shape = Shape;
