window.onload = function(e){
    var div = document.querySelector('.fields');
    var matrix = new Matrix(div, 15, 15);
    matrix.create();
    
    var fruit = new Fruit(matrix, [[1, 4]]);
    fruit.show();
    
    var wall = new Wall(matrix, [[3, 7], [4, 7], [5, 7], [6, 7]]);
    wall.show();
    
    var snake = new Snake(matrix, [[5, 5], [4, 5], [3, 5]], 'right');
    snake.show();
    
    document.onkeydown = function(e){
        snake.course = e.keyCode;
        //wefwef222
        /* добавить защиту от смены курса на противоположный */
        switch(e.keyCode){
            case 37:
                snake.course = 'left';
                break;
            case 38:
                snake.course = 'up';
                break;
            case 39:
                snake.course = 'right';
                break;
            case 40:
                snake.course = 'down';
                break;
        }
    }
    
    let timer = setInterval(() => {
        snake.move();
        
        if(!snake.alive){
            clearInterval(timer);
            alert('gameover');
        }
        
        /* 
         * если покушала, новый фрукт на случайном поле + очки
         * 
         * */
    }, 500);
}

class Matrix{
    constructor(elem, rows = 20, cols = 20){
        this.elem = elem;
        this.cells = [];
        this.rows = rows;
        this.cols = cols;
    }
    
    create(){
        for(let i = 0; i < this.rows * this.cols; i++){
            let div = document.createElement('div');
            
            if(i % this.cols === 0){
                div.classList.add('row-start');
            }
            
            div.setAttribute('data-game', '');
            this.elem.appendChild(div);
            this.cells[i] = '';
        }
    }
    
    getCell(x, y){
        let num = this._calcNum(x, y);
        return this.cells[num];
    }
    
    setCell(x, y, val){
        let num = this._calcNum(x, y);
        this.cells[num] = val;
        this.elem.children[num].setAttribute('data-game', val);
    }
    
    /* пересчитать № строки и № столбца в i */ 
    _calcNum(x, y){
        return (y - 1) * this.cols + x - 1;
    }
}

class Elem{
    constructor(matrix, cords){
        this.matrix = matrix;
        this.cords = cords;
        this.value = '';
    } 
    show(){
        for(let cord of this.cords){
            this.matrix.setCell(cord[0], cord[1], this.value);
        }
    }
}

class Snake extends Elem{
    
    constructor(matrix, coords, course){
        super(matrix, coords);
        this.value = 'snake';
        this.course = course;
        this.alive = true;
    }

    move(){
        if(!this.alive){
            return;
        }
        
        var head = this.cords[0].slice();

        switch(this.course){
            case 'right':
                head[0]++;
                break;
            case 'left':
                head[0]--;
                break;
            case 'up':
                head[1]--;
                break;
            case 'down':
                head[1]++;
                break;
        }
        
        if(!this._checkAlive(head)){
            this.alive = false;
            return;
        }
        
        /* getCell 
         *  фрукт - покушали, хвост не отпал
         *  стена - gameover
         *  змея - gameoverстена - gameover
         * */
        
        var tail = this.cords.pop();
        this.matrix.setCell(tail[0], tail[1], '');
        
        this.cords.unshift(head);
        this.matrix.setCell(head[0], head[1], 'snake');
    }

    _checkAlive(head){
        return head[0] >= 1 && head[0] <= this.matrix.cols &&
               head[1] >= 1 && head[1] <= this.matrix.rows;
    }
}

class Fruit extends Elem{
    constructor(matrix, cords){
        super(matrix, cords);
        this.value = 'fruit';
    }
}

class Wall extends Elem{
    constructor(matrix, cords){
        super(matrix, cords);
        this.value = 'wall';
    }
}

























