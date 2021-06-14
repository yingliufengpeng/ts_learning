
// 类装饰器

function ClassDecorator<T extends {new (...args: any[]): {}}> (target: T) {
    return class extends target {
        newProperty = 'hello'
    } 
}

@ClassDecorator
class Greeter {
    property = 'world'
}
interface Greeter {
    newProperty: string
}

let gr = new Greeter()
console.log(gr.property)
console.log(gr.newProperty)

// let sign = null
// function setName(name: string) {
//     return (target: new () => any) => {
//         console.log(target.name)
//         sign = target
//     }
// }
// //
// @setName('我的测试')
// class A {}
//
// console.log(A === sign)
// console.log(A.prototype.constructor === sign)
//
//
// function addName(cons: new () => any) {
//     cons.prototype.name = '王'
//     cons.prototype.age = 4
// }
//
// @addName
// class D {}
// interface D {
//     name: string
//     age: number
// }
// console.log(D.prototype.name)
// let d = new D
// console.log(d.age)
// console.log(d.name)

// 构造器装饰器

// 属性装饰器


// 装饰器的定义的学习
//
// function SetName() {
//     console.log('get setName')
//     return target => {
//         console.log('setName')
//         console.log(target)
//         console.log('end...2')
//     }
//
// }
//
// function SetAge() {
//     console.log('get setAge')
//     return target => {
//         console.log('setAge')
//         console.log(target)
//         console.log('end ...')
//     }
//
// }
//
// @SetName()
// @SetAge()
// class D {
//
// }

// let d = new D

//
// function Log(a: number) {
//     console.log(a)
//     return a
// }
//
// console.log(Log(4))