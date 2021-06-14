// InstanceOf

type Type14<T extends string> = T
type T14_1 = Type14<string>




function ts2_fun1() {

}

class Ts2_A {

}

type Instance1 = InstanceType<typeof Ts2_A>
type nevert = InstanceType<never>

// NonNullable
type Type13 = NonNullable<string | number | null | undefined>


// exclude
type Type10 = Exclude<'a' | 'b' | 'c', 'a' | 'b'>
let t10_1: Type10 = 'c'

type Type112 = 'a' | 'b' | 'c' extends 'a' ? true : false
let t112_2: Type112 = false

type Type113 = 'a' extends 'a'  | 'b' | 'c' ? true : false
let t112_3: Type113

type Type114 = 'a' extends 'a' | 'b' ? never : 'a'
let t114_1: Type114

type Extra2 = Extract<'a' | 'b' | 'c',   'c' | 'b' >

type Extra<T, U> = T extends U ? T : never
type Extra1 = Extra<'a' | 'b' | 'c' , 'a' | 'b'>

// extract
type Type111 = Extract<'a' | 'b' | 'c', 'a'>
let t111_1: Type111 = 'a'


// infer


type Type9<T> = T extends Array<infer U> ? U : T
type T91 = Type9<string[]>
type T92 = Type9<number[]>



// 很显然,如果是数据类型的话,可以知道number是该类型的一个属性, T[number]代表的是该容器类型中的类型

type Type8<T> = T extends any[] ? T[number] : T
type Type88<T> = T extends any[] ? true : false

type T81 = Type88<string[]>
type T82 = Type88<number>

type Test81 = Type8<string[]>
type Test82 = Type8<number[]>
type Test83 = Type8<object[]>
let test81: Test81 = 'k'

type Type7<T> = {
    [K in keyof T]: T[K] extends (() => number) ? K : never
}[keyof T]

type TM7<T> = {
    fun: () => void
    fun2: () => T
    fun3: () => T
}

type M = Type7<TM7<number>>

let m1: M = 'fun2'

type TT7<T> = Type7<TM7<T>>
type TT77 = TT7<number>

let tt77: TT77 = "fun2"
let tm7: TM7<number> = {
    fun: () => {},
    fun2: () => 4999999,
    fun3: () => 5.0
}

console.log(tm7[tt77]())


type TN<T> = T extends any ? T : never
let tn1: TN<number> = 3
let tn2: TN<string> = '3'
let tn4: TN<number | string> = '4'
let tn6: TN<never>


type Types2<T> = T extends string ? string : number
let t12: Types2<Objs2> = 4
let t13: Types2<string> = ''
let t16: Types2<'a'> = '4'
let t17: Types2<4> = 4

// 使用映射类型时如果遍历是unknown类型,则不会映射任何属性
type Type11<T> = {
    [P in keyof T]: number
}

type t12 = Type11<any>
type t13 = Type11<unknown>
type t14 = Type11<never>

// let t14_v: t14 = {
//     // k: 3
// }


let value10: unknown
value10 = 3
value10 = {i: 4, j: 4}
// value10.i

// keyof unknown === never
type type11 = keyof unknown

// never类型是unknown类型的子类型
type type8 = never & unknown
type type9 = never | unknown

type type10 = never extends unknown ? true : false

// 一切皆类型系统
// type Obj_T
// Proxify<T>
// Proxy<T>
type type1 = string & unknown
type type2 = unknown & unknown
type type4 = unknown & string[]


type type6 = unknown | string
type type7 = unknown | any


let i: number = 0

i += 1

console.log(i)

type MaptoPromise<T> = {
    [K in keyof T]: Promise<T[K]>
}

type Tuple = [number, string, boolean]

let t: MaptoPromise<Tuple> = [
    Promise.resolve(4),
    Promise.reject('4'),
    new Promise(((resolve, reject) => resolve(false)))
]

console.log(t)

type ReadInfo<T> = {
    +readonly [P in keyof T]: T[P]
}

const stringIndex = 'a'
const numberIndex = 1
const symbolIndex = Symbol()
type Objs2 = {
    [stringIndex]: string
    [numberIndex]: number
    [symbolIndex]: Symbol
}
let obj4: ReadInfo<Objs2> = {
    [stringIndex]: '3',
    [numberIndex]: 4,
    [symbolIndex]: symbolIndex
}
// obj4[stringIndex] = '4'

// 也就是说 typescript 中的对象是 dict模式

type Proxy<T> = {
    get(): T
    set(value: T): void;
}
type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
}

function unproxify<T>(proxify: Proxify<T>): T {
    let res = {} as T
    for (const key in proxify) {
        res[key] = proxify[key].get()
    }

    return res

}

function proxify<T>(obj: T): Proxify<T> {
    let res = {} as Proxify<T>
    for (const key in obj) {
        res[key] = {
            get: () => obj[key],
            set: (value) => {
                obj[key] = value
            }
        }

    }

    return res
}

let obj2 = {
    i: 4,
    j: '4'
}

let obj2_proxy = proxify(obj2)

let un_proxy = unproxify(obj2_proxy)
console.log('kkk')
console.log(un_proxy)
console.log('kkk')


console.log(obj2_proxy)
console.log('1')
console.log(obj2_proxy.i.get())
console.log('2')
console.log('2')
console.log('2')
//  'peng'
// 'peng'
//  'peng'
//  c/lllll/lllll  c
//'peng'ciicmdd} {text object or motion}
// ('peng', 'vv', 'kk')
// ('ciiclllllmd, 'vv', 'kk')
// ('kkciciciiiicii', 'vv', 'kk')
// cmdk', 'ciivv', 'kk')
//cmdkk', 'vv', 'kk')


// let m: Proxy<number> = {
//     get(): number {
//         return 0
//     },
//     set(value: number): void {
//     }
// }
//
// let m2: Proxy<number> = {
//     get: () => 0,
//     set: (value: number) => {
//     }
// }
//
//
// console.log(m)
