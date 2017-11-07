interface Person {
    name: string;
    age: number;
    year?: number;
    readonly id: number;
    [name: string]: any;
}

let person: Person = {
    age: 123123,
    bbbb: 1231231,
    id: 123123,
    name: "12312",
};
