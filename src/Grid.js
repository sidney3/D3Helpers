"use strict";
exports.__esModule = true;
exports.Grid = void 0;
var Grid = /** @class */ (function () {
    function Grid(config) {
        this.config = config;
        this.initialize_cells();
    }
    Grid.prototype.initialize_cells = function () {
        this.cells = [];
        for (var w = 0; w < this.config.grid_dimensions.width; w++) {
            this.cells.push([]);
            for (var r = 0; r < this.config.grid_dimensions.height; r++) {
                var empty_cell = {
                    full: false,
                    center: {
                        x: this.config.coords.x + this.config.cell_size.x_size * w +
                            +this.config.cell_size.x_size / 2,
                        y: this.config.coords.y + this.config.cell_size.y_size * r +
                            +this.config.cell_size.y_size / 2
                    }
                };
                console.log("w: " + w + ",r: " + r + "\n x center: " + empty_cell.center.x + " y center: " + empty_cell.center.y);
                this.cells[w].push(empty_cell);
            }
        }
    };
    Grid.prototype.fill_cell = function (x_coord, y_coord, add_object) {
        if (!Number.isInteger(x_coord) || Number.isInteger(y_coord)) {
            throw "non-integer indices given for grid coords";
        }
        if (x_coord < 0 || y_coord < 0) {
            throw "negative indices given for grid coords";
        }
        if (x_coord > this.config.cell_size.x_size - 1 || y_coord > this.config.cell_size.y_size - 1) {
            throw "coordinates out of bounds. Grid is of width ".concat(this.config.cell_size.x_size, " and height ").concat(this.config.cell_size.y_size);
        }
        //check for inside bounding box
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
