// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export function Size(width = 80, height = 60){
    this.width = width;
    this.height = height;
    this.resize = function (newWidth, newHeight){
        this.width = newWidth;
        this.height = newHeight;
    }
}

export function Position(x = 0, y = 0){
    this.x = x;
    this.y = y;
    this.move = function (newX, newY){
        this.x = newX;
        this.y = newY;
    }
}

export function ProgramWindow(){
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
    this.resize = function (param){       
        if (param.width < 1){
            param.width = 1;
        }
        if (param.height < 1){
            param.height = 1;
        }
        this.size.width = this.screenSize.width > this.position.x + param.width ? param.width : this.screenSize.width - this.position.x;
        this.size.height = this.screenSize.height > this.position.y + param.height ? param.height : this.screenSize.height - this.position.y;    
    }
    this.move = function(param){
        if (param.x < 0){
            param.x = 0;
        }
        if (param.y < 0){
            param.y = 0;
        }
        this.position.x = this.screenSize.width > param.x + this.size.width ? param.x : this.screenSize.width - this.size.width;
        this.position.y = this.screenSize.height > param.y + this.size.height ? param.y : this.screenSize.height - this.size.height;    

    }
}

export function changeWindow(programWindow){
    programWindow.size.resize(400,300);
    programWindow.position.move(100,150);
    return (programWindow);
}
