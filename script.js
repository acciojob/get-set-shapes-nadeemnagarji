class Rectangle {
	constructor(width , height){
		this._width = width
		this._height = height
	}
	getWidth(){
		return this._width
	}
	getHeight(){
		return this._height
	}
	getArea(){
		return this._width * this._height
	}
}

class Square extends Rectangle {
  constructor(side1,side2){
    super(side1,side2)
  }
  getPerimeter(){
    return 4 * this._width
  }
}


// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
