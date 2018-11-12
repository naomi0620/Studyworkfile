function Person(name){
	this.name=name;
}
Person.prototype.sayHello=function(){
	console.log("Helle"+this.name+"!");
	
}
function Student(name,grade){
	Person.call(this,name);
	this.grade=grade;
}
(function(){
	var Super=function(){};
	Student.prototype=new Super();
	Student.prototype.constructor=Student;
})();
Student.prototype.sayGrade=function(){
	alert("mygrade:"+this.grade+".")
}
var a=new Student("lily","80");
