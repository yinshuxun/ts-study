class Animal {
    public name;
    public constructor(name) {
        this.name = name;
    }
}

let a = new Animal('Jack');
console.log(a.name); // Jack
a.name = 'Tom';

class Animal1 {
    protected name;
    public constructor(name) {
        this.name = name;
    }
}

class Cat extends Animal1 {
    constructor(name) {
        super(name);
        console.log(this.name);
    }
}