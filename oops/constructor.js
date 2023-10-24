
class work{
    constructor(name,place,age){
        this.name = name;
        this.place = place;
        this.age = age;
    }
    color(color){
        this.color = color;
    }
}
let c = new work("luffy","Trivandrum",20);
console.log(c);
let a = c.color("red");
console.log(a);