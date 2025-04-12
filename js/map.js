class map{
    constructor(){
        this.cols = 28;
        this.rows = 24; 
        this.tsize = 64;
        this.layers = [[
            3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 
            3, 2, 2, 2, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12,
            3, 2, 2, 2, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12,
            3, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12,
            3, 3, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12,
            3, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 12, 12, 12, 12, 12, 12, 12, 12, 12,  2,  2,
            3, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,  2,  2,  2,  2,   2,  2,  2,  2,  2,
            3, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,  2,  2,  2,  2,   2,  2,  2,  2,  2,
            3, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12,
            3, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12,
            3, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12,
            3, 1, 1, 3, 2, 2, 3, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12,
            3, 1, 1, 3, 2, 2, 3, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12,
            3, 1, 1, 3, 2, 2, 3, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12,
            3, 3, 3, 3, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,  3,  3,  3,   3,  3,  3, 12, 12, 12,
            3, 3, 3, 3, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,  3,  3,  3,   3,  3,  3, 12, 12, 12,
            3, 3, 3, 3, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,  3,  3,  3,   3,  3,  3, 12, 12, 12,
            3, 3, 3, 3, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,  3,  3,  3,   3,  3,  3, 12, 12, 12,
            3, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2,  3,  3,  3,   3,  3,  3, 12, 12, 12,
            3, 1, 1, 1, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,  3,  3,  3,   3,  3,  3, 12, 12, 12,
            3, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1,  3,  3,  3,   3,  3,  3, 12, 12, 12,
            3, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,  3,  3,  3,   3,  3,  3, 12, 12, 12,
            3, 3, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,  3,  3,  3,   3,  3,  3, 12, 12, 12,
            3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,  3,  3,  3,   3,  3,  3, 12, 12, 12
        ], [
            4, 3, 3, 3, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 3, 14, 13, 13, 13, 3, 3, 3, 3, 3, 3, 3,
            4, 0, 0, 0, 4, 3, 0, 0, 0, 0, 0, 0, 0, 5, 8, 4, 0, 14, 13, 13, 13, 0, 0, 0, 0, 0, 0, 0, 
            4, 0, 0, 0, 0, 6, 0, 0, 0, 5, 0, 6, 0, 0, 0, 4, 0, 14, 13, 13, 13, 0, 0, 0, 0, 0, 0, 0,
            4, 4, 4, 0, 0, 0, 5, 0, 0, 0, 6, 8, 6, 0, 0, 4, 0, 14, 13, 13, 13, 0, 0, 0, 0, 0, 0, 0,
            4, 4, 3, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 5, 4, 0, 14, 13, 13, 13, 0, 0, 0, 0, 0, 0, 0,
            4, 3, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 7, 0, 0, 14, 13, 13, 13, 0, 0, 0, 0, 0, 0, 0,
            4, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 14, 13, 13, 13, 0, 0, 0, 0, 0, 0, 10,
            4, 0, 5, 0, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 9, 4, 0, 14, 13, 13, 13, 0, 0, 0, 0, 0, 0, 0,
            4, 0, 0, 0, 0, 0, 0, 3, 0, 0, 5, 3, 0, 0, 7, 4, 0, 14, 13, 13, 13, 0, 0, 0, 0, 0, 0, 0,
            4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 14, 13, 13, 13, 0, 0, 0, 0, 0, 0, 0,
            4, 0, 0, 4, 0, 0, 4, 0, 5, 6, 0, 0, 5, 0, 0, 4, 0, 14, 13, 13, 13, 0, 0, 0, 0, 0, 0, 0,
            4, 0, 0, 4, 0, 0, 4, 0, 0, 0, 0, 0, 6, 0, 0, 4, 0, 14, 13, 13, 13, 0, 0, 0, 0, 0, 0, 0,
            4, 6, 6, 4, 0, 0, 4, 0, 0, 0, 5, 0, 8, 0, 0, 4, 0, 14, 13, 13, 13, 0, 0, 0, 0, 0, 0, 0,
            4, 4, 4, 4, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 14, 13, 13, 13, 4, 4, 4, 4, 4, 4, 4,
            4, 4, 4, 4, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
            4, 4, 4, 4, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
            4, 4, 4, 4, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
            4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4,
            4, 6, 0, 7, 0, 0, 7, 0, 0, 0, 0, 5, 0, 0, 5, 5, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4,
            4, 6, 0, 0, 0, 0, 5, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4,
            4, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 4,  4, 4, 4, 4, 4, 4, 4, 4,
            4, 4, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 9, 0, 0, 0, 0, 0, 0, 4,  4, 4, 4, 4, 4, 4, 4, 4,
            4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,  4, 4,  4, 4, 4
        ]];
    }

    getTile = function (layer, column, rowt) {
        return this.layers[layer][rowt * this.cols + column];
    };

    setTile = function (layer, column, rowt) {
       return this.layers[layer][rowt * this.cols + column];
    };

    isSolidTileAtXY = function (x, y) {
        var column = Math.floor(x / this.tsize);
        var rowt = Math.floor(y / this.tsize);
        
        return this.layers.reduce(function (res, layer, index) {
            var tile = this.getTile(index, column, rowt);
            var isSolid = tile === 3 || tile === 5 || tile === 7 || tile === 12;
            return res || isSolid;
        }.bind(this), false);
    };

    isEnemy = function (x, y) {
        var column = Math.floor(x / this.tsize);
        var rowt = Math.floor(y / this.tsize);
        var enemy = false;
        return this.layers.reduce(function (res, layer, index) {
            var tile = this.getTile(index, column, rowt);
            if(tile === 9){ 
                console.log(tile);
                enemy = true;
            };
            return res || enemy;
        }.bind(this), false);
    }

    isRupee = function (x, y) {
        var column = Math.floor(x / this.tsize);
        var rowt = Math.floor(y / this.tsize);
        var rupee = false;
        return this.layers.reduce(function (res, layer, index) {
            var tile = this.getTile(index, column, rowt);
            var rupe = document.getElementsByClassName('countRupees');
            if(tile === 6){ 
                rupee = true;
                rupe[0].innerText++;
                this.layers[1][rowt * this.cols + column] = 0;
            }else if(tile === 8){
                rupee = true;
                rupe[0].innerHTML =  parseInt(rupe[0].innerHTML) + 5;
                this.layers[1][rowt * this.cols + column] = 0;
            }
            return res || rupee;
        }.bind(this), false);
    }

    iskey = function (x,y) {
        var column = Math.floor(x / this.tsize);
        var rowt = Math.floor(y / this.tsize);
        var key = false;
        return this.layers.reduce(function (res, layer, index) {
            var tile = this.getTile(index, column, rowt);
            var keyMaker = document.getElementsByClassName('key');
            if(tile === 11){ 
                key = true;
                this.layers[1][rowt * this.cols + column] = 0;
                keyMaker[0].classList.remove('hidden');
                this.layers[1][182] = 0;
                this.layers[1][210] = 0;
            }
            return res || key;
        }.bind(this), false);
    }

    isZelda = function (x,y) {
        var column = Math.floor(x / this.tsize);
        var rowt = Math.floor(y / this.tsize);
        var zelda = false;
        return this.layers.reduce(function (res, layer, index) {
            var tile = this.getTile(index, column, rowt);
            if(tile === 10){ 
                zelda = true;
                var finish = document.getElementById('finishgame');
                finish.classList.remove('hidden');
            }
            return res || zelda;
        }.bind(this), false);
    }

    getCol = function (x) {
        return Math.floor(x / this.tsize);
    };

    getRow = function (y) {
        return Math.floor(y / this.tsize);
    };

    getX = function (col) {
        return col * this.tsize;
    };

    getY = function (row) {
        return row * this.tsize;
    };
}