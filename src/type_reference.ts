let name3 = '3'
// name3 = 4


interface Data<T> {
    data: T
}

let data1: Data<number>

let data2: Data<string>

// data1 = data2

// 逆变协变的学习...
let funx = (): number | string => 0
let funy = (): number => 0

funx = funy
// funy = funx


let funcA = (arg: number | string): void => {}  // number <: number | string
let funcB = (arg: number): void => {}

// funcA = funcB
funcB = funcA

funcB(3)

// funcA = funcB

let tx1 = (a: number) => 0
let ty1 = (b: number, c: string) => 0
let tz1 = (g: number, c: string, d: string) => 0

// tx1 = ty1
// ty1 = tx1  // ty1的参数的声明,可以知道,可以多传参 参数,
tz1 = ty1

let arr3 = [3, '4', true, '4', 4, 4]

interface Name {
    name: string
}

let ts_m: Name

let ts_m2 = {
    name: '4',
    age: 4
}
ts_m = {
    name: '4',

}

ts_m = ts_m2




