interface Square {
    kind: 'square'
    size: number
}

interface Rectangle {
    kind: 'rectangle'
    height: number
    width: number
}
interface Circle {
    kind: 'circle'
    radius: number
}

type Shape = Square | Rectangle | Circle

function getArea(s: Shape): number {
    switch(s.kind) {
        case 'square':
            return s.size * s.size
        case 'circle':
            return Math.PI * s.radius ** 2
        case 'rectangle':
            return s.height * s.width

        default:
            throw new Error("kk")

    }
}


console.log(getArea({
    kind: 'rectangle',
    height: 3,
    width: 4
}))






type PositionType<T> = {x: T, y: T}

type NodeT<T> = {
    data: T
    children?: NodeT<T>[]

    // show(): void

}

let node: NodeT<number> = {
    data: 3,
    children: [
        {
            data: 4,
            children: []
        }
    ]
}

console.log(node)

let p: PositionType<number> = {
    x: 3,
    y: 4
}

console.log(p)


function getSplicedStr(num: number | null): string {

    num = num || 0.1
    function getRes(prefix: string) {
        return `${prefix} ${num!.toFixed()}`
    }

    return getRes('lison')
}
console.log(getSplicedStr(444.0))


const getLengthFunction = (value: string | null): number => {
    // return string.parse(value!)
    return (value || '').length
}

console.log(getLengthFunction('2'))

// 类型断言  obj as string      obj as number
// 类型保护

let fun1 = () => {
    if (true) {
        return 1
    } else {
        return '4'
    }
}

console.log(fun1())

function isString(value: number | string): value is string {
    return typeof value === "string"
}

let a6 = isString(3)
console.log(a6)


const valueList = [123, 'abc']
const getRandomValue = () => {
    const number = Math.random() * 10
    return (number < 5) ? valueList[0] : valueList[valueList.length - 1]
}

let a4 = getRandomValue()
console.log(a4)

const getLengthFunc = (content: string | number): number => {
    if (typeof content === "string") {
        return content.length
    } else {
        return content.toString().length
    }
}

let a2 = getLengthFunc('kk')
let a3 = getLengthFunc(3)
console.log(a2, a3)



const mergeFunc = <T, U>(arg1: T, arg2: U): T & U => {
    return Object.assign(arg1, arg2)
}

let a1 = mergeFunc({}, {i: 4})

console.log(a1)

