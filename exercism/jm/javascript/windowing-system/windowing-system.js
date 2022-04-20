// @ts-check

import { construct } from "core-js/fn/reflect";

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

 export class Size {
    constructor(width, height){
      if (width < 1)
        this.width = 1;
      else if (width)
        this.width = width;
      else
        this.width = 80;
      if (height < 1)
        this.height = 1;
      else if (height)
        this.height = height;
      else
        this.height = 60;
    }

    resize(newWidth, newHeight) {
        this.width = newWidth;
        this.height = newHeight;
    }
}

export class Position {
    constructor(x, y) {
        x != undefined ? x < 0 ? this.x = 0 : this.x = x : this.x = 0;
        y != undefined ? y < 0 ? this.y = 0 : this.y = y : this.y = 0;
    }

    move(newX, newY) {
        this.x = newX;
        this.y = newY;
    }
}

export class ProgramWindow {
  constructor(screenSize, size, position) {
    this.screenSize = {
      width : 800,
      height : 600
    }
    this.size = new Size;
    this.position = new Position;
  }

  resize(Size) {
    this.size = Size;
    Size.width + this.position.x > this.screenSize.width ? this.size.width = this.screenSize.width - this.position.x : this.size.width = Size.width;
    Size.height + this.position.y > this.screenSize.height ? this.size.height = this.screenSize.height - this.position.y : this.size.height = Size.height;
  }

  move(Position) {
    this.position = Position;
    Position.x + this.size.width > this.screenSize.width ? this.position.x = this.screenSize.width - this.size.width : this.position.x = Position.x;
    Position.y + this.size.height > this.screenSize.height ? this.position.y = this.screenSize.height - this.size.height : this.position.y = Position.y;
    
  }
}

export const changeWindow = function (programWindow) {
  console.log(programWindow);
  
  programWindow.size = new Size(400, 300);
  programWindow.position = new Position(100, 150);
  
  return (programWindow)
}