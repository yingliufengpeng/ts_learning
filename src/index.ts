import {hi} from './m1'
import {PI} from './symbols'

console.log(PI)

const mm = {i: 9, b: 4}
console.log(mm)

mm.b = 30

console.log(Promise)


console.log(4)
console.log('中央人民政府')
console.log('中央人民政府')

console.log(hi)

function sum1(a: number, b: number): number {
    return a + b
}

let a = sum1(3, 4)

console.log(`a is ${a}`)

class Person {
    static Counter: number = 0

    private name: string;
    private age: number;
    constructor(name: string, age: number) {
        this.name = name
        this.age = age

    }

    static showCounter(): number {
        return this.Counter

    }

    static printCounter() {
        const t = this.showCounter()
        console.log(`t is ${t}`)
    }

    show() {
        Person.showCounter()
    }


}

let p = new Person('w', 4)


console.log(p)

console.log(Person.Counter)

abstract class Animal {

    abstract hello(name: string): void

}

type myType = {
    name: string,
    age: number
}

const obj: myType = {
    name: 'sss',
    age: 4
}

console.log(obj)

interface myInterface {
    name: string,
    age: number
}

interface myInterface {
    sex: 'male' | 'female'
}


let c: myInterface = {
    name: '3',
    age: 4,
    sex: 'male'
}



let va: {[k: string]: any}
va = {
    n: 4,
    4: 4,
    va: 3,
}

console.log(va)


let vb = {
    m: 4,
    get() {
        return 3
    },
    set(v: number) {
        this.m = v
    }
}


let vbb = vb



