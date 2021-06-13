interface Info1 {
    age: number
    name: string
    sex: string
}

let p2: Readonly<Info1> = {
    name: '4',
    age: 4,
    sex: '4'
}

let p3: Pick<Info1, 'age'> = {
    age: 4,
    // name:'4'
}

let p7: Record<'age', string | number> = {
    age: 4,
}
console.log(p7)

let p4: Pick<Info1, 'age'> = p2
let p5: Pick<Info1, 'name'> = p2
let p6: Pick<Info1, 'sex'> = p2
console.log(p3, p4, p5, p6)






type ReadonlyType<T> = {
    readonly [P in keyof T]?: T[P]
}

type ReadonlyInfo1 = ReadonlyType<Info1>

let r1: ReadonlyInfo1 = {
    name: '4',
    age: 4,
    // sex: '4'
}

console.log(r1)

// r1.name = '4'

interface Type {
    a: never
    b: never
    c: string
    d: never
    f: null
    g: object
}
type Test = Type[keyof Type]

let test01: Test = 'kkk'

interface Objs<T> {
    [key: number]: T
    [k2: string]: T
}
let keys: keyof Objs<string> = 4

let obj_key = {keys}

console.log(obj_key)


// 索引访问操作符

type K = IAdvanced["name"]

let k1: K = '44'
console.log(k1)


// 索引类型操作符
interface IAdvanced {
    name: string
    age: number
}

let infoProp: keyof IAdvanced = 'name'

console.log(infoProp)

function getValue<T, K extends keyof T>(obj: T, names: K[]): T[K][] {
    return names.map(n => obj[n])
}

let tsobj = {
    name: '4',
    age: 4,
    sex: 'female'
}

console.log(getValue(tsobj, ['name', "age", "sex"]))