// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export function Size(width = 80,  height = 60) {
    this.width = width;
    this.height = height;
}
Size.prototype.resize = function(newWidth, newHeight){
    this.width = newWidth;
    this.height = newHeight;
}

export function Position(x = 0, y = 0) {
    this.x = x;
    this.y = y;
}
Position.prototype.move = function(newX, newY) {
    this.x = newX;
    this.y = newY;
}
/*
export class Size {
    constructor(width = 80, height = 60){
        this.width = width;
        this.height = height;
    }
}*/

export class ProgramWindow {
    constructor() {
        this.screenSize = new Size(800, 600);
        this.size = new Size();
        this.position = new Position();
    }

    resize(newsize) {
        if (newsize.width < 1){
            this.size.width = 1;
        } else if (newsize.width + this.position.x < this.screenSize.width){
            this.size.width = newsize.width;
        } else if (newsize.width + this.position.x > this.screenSize.width){
            this.size.width = this.screenSize.width - this.position.x;
        }    
        if (newsize.height < 1){
            this.size.height = 1;
        } else if (newsize.height + this.position.y < this.screenSize.height){
            this.size.height = newsize.height;
        } else if (newsize.height + this.position.y > this.screenSize.height){
            this.size.height = this.screenSize.height - this.position.y;
        } 
    }


    move(Position) {
        if (Position.x + this.size.width > this.screenSize.width){
            this.position.x = this.screenSize.width - this.size.width;
        } else if (Position.x >= 0){
            this.position.x = Position.x;
        }
        if (Position.y + this.size.height > this.screenSize.height){
            this.position.y = this.screenSize.height - this.size.height;
        } else if (Position.y >= 0){
            this.position.y = Position.y;
        }
    }
    
    
}
export function changeWindow(ProgramWindow) {
    ProgramWindow.resize(new Size(400, 300));
    ProgramWindow.move(new Position(100, 150));
    return (ProgramWindow)
}