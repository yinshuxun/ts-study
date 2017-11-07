let newArr: number[] = [1, 2, 3, 4, 5];

function sum(a: number, b: number): number {
    let args: IArguments = arguments;
    return a + b
}

let sum1: (a: number, b: number) => number = function (a: number, b: number): number {
    return a + b
}