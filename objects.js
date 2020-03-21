// release 1 creating object functions 
 function circle(x,y,r){
	 this.x = x;
	 this.y = y;
	 this.r = r;
	 this.fun = function(){
	
	 return "x-axis is : " + this.x +  " y-axis is : " + this.y +  " radius is : " + this.r;
        }
}
var circle_1 = new circle(10,20,50);

console.log(circle_1.fun());

// realease-2 creating object literal notation

var obj = {
	firstname : "ram",
	lastname : "sai",
	fullname : function(){
		return this.firstname + this.lastname ;
	}
}
console.log(obj.fullname());

//release-3 object.prototype.constructor

function car(c,cs){
	this.c = c;
	this.cs = cs;
}
var newcar = new car("black","2lak");
console.log(newcar.c + " is a new car color " + " and the cost is " + newcar.cs);

