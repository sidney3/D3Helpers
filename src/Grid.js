"use strict";
exports.__esModule = true;
exports.Grid = void 0;
var Grid = /** @class */ (function () {
    function Grid(config) {
        this.config = config;
        this.initialize_cells();
    }
    Grid.prototype.initialize_cells = function () {
        console.log("this happened");
        this.cells = [];
        for (var r = 0; r < this.config.grid_dimensions.height; r++) {
            console.log("row =" + r);
            this.cells.push([]);
            for (var w = 0; w < this.config.grid_dimensions.width; w++) {
                console.log("width =" + w);
                var empty_cell = {
                    full: false,
                    text: "hi"
                };
                this.cells[r].push(empty_cell);
            }
        }
        console.log(this.cells);
    };
    return Grid;
}());
exports.Grid = Grid;
var grid = new Grid({
    coords: { x: 0, y: 0 },
    cell_size: {
        x_size: 1,
        y_size: 1
    },
    grid_dimensions: {
        height: 3,
        width: 4
    }
});
