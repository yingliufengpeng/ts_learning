let v = 0

function handleData(x: string): string[]
function handleData(x: number): number[]
function handleData(x: any): any {
    if (typeof x === "string") {
        return x.split('')
    }
    else if (typeof x === "number") {
        return x.toString().split('').map(e => Number(e))
    }
}

let h1 = handleData('44')
let h2 = handleData(3333)

console.log(h1, h2)


let av1 = {
    i: 4,
    j: 5,
}

let av2 = {
    ...av1,
    j: 4,
}

console.log(av2)

const add5 = (a: number, ...bs: number[]): number => a + bs.reduce((acc, e) => acc + e)

const add1 = (a: number, b: number): number => a + b

let add2: (x: number, y: number) => number = (x, y) => x + y

type Add = (x: number, y: number) => number

type AddFunction = (x: number, y: number, z?: number) => number

let addfuction: AddFunction = (x, y, z) => x + y + z!

addfuction(4, 4, 5)
addfuction(4, 5)




interface X {
    f1(): void
    f2(a: number, b: number): number
}

let getX = (): X => {
    let f1 = () => {}
    let f2 = (a: number, b: number) => a + b
    return {f1, f2}
}

const xxX: X = getX()


interface Counter {
    (): void,
    count: number
}

const getCounter = (): Counter => {
    const c = () => { c.count++ } // 首先也是把c看成了对象,然后是再改对象上设定了可用的值!!!
    c.count = 0
    return c
}

const counter_func = getCounter()
counter_func()
counter_func()
counter_func()
counter_func()




// 越来越喜欢ts这样的语法
const countUp = () => {v += 1}

countUp()
countUp()


interface Color {
    color: string
}

interface Type {
    type: string
}

let c_t: Color & Type = {
    color: '4',
    type: '4'
}


interface StringRoleDict {
    [id: string]: string
}

let strDole: StringRoleDict = {
    '1': '3',
    2: '4'
}

// 索引类型
interface RoleDic {
    [id: number]: string
}

let role: RoleDic = {
    1: '1',
    2: '2'
}

interface AddSumFunc {
    add(num1: number, num2: number): number
    sum(num1: number, num2: number): number
}

let addsum: AddSumFunc = {
    add: (n, m) => n + m,
    sum:(n, m) => n - m
}

interface AddFunc {
    (num1: number, num2: number): number
}

let add: AddFunc = (n, m) => n + m


// 数组的接口
interface ArrInter {
    0: number,
    1: string
}

let arr: ArrInter = [1, '2', 3, 4]

console.log(arr)


interface Vegetable {
    color: string
    readonly type: string

    [key: string]: string
}
const c: Vegetable = {
    color: '4',
    type: '5',
    z: '4',
}

c.color = '45'
// c.type = 44

const getVegetables = ({color, type}: Vegetable) => {

    return `${color}--${type}`
}

let b = getVegetables({color: '3', type: '4', 'size': '4444'})
console.log(b)



interface FirstLastName {
    firstName: string
    lastName: string
}


const getFullName = (f_l_name: FirstLastName) => {
    const {firstName, lastName} = f_l_name
    return `${firstName} ${lastName}`
}

let a = getFullName({firstName: '3', lastName: '5'})

console.log(a)