
function required(target: any, key: string, index: number) {
    console.log(`修饰的是${key}的第${index + 1}的参数`)
}

interface ClassI {
    [key: string]: string | number | Function
}

class ClassI {
    name: string = 'lison'
    age: number = 18
    getInfoo(prefixx: string, @required infoType: string): any {
        return `${prefixx} ${this[infoType]}`
    }
}

const classI = new ClassI()
classI.getInfoo('hihi', 'age')


// function printPropertyName(target: any, key: string) {
//     console.log(key)
// }
//
//
// class ClassH {
//     @printPropertyName
//     public name: string
//
// }


// function enumerable(bool: boolean) {
//     return (target: any, key: string, descriptor: PropertyDescriptor) => {
//         descriptor.enumerable = bool
//     }
// }
//
// class ClassG {
//     constructor(private _name: string) {
//     }
//
//     @enumerable(false)
//     get name() {
//         return this._name
//     }
//     // @enumerable(false)
//     set name(name: string) {
//         this._name = name
//     }
// }
//
// let clg = new ClassG('kk')
// console.log(clg.name)




//
// let r = function () {
//
// }
//
// let i = 0
//
// // 个人还是比较喜欢装饰器的写法!!!
// function enumerable(bool: boolean) {
//     return function (target: any, key: string, descriptor: PropertyDescriptor) {
//         // console.log(target)
//         descriptor.enumerable = bool
//
//         return {
//             value() {
//                 return 'not age'
//             },
//             enumerable: bool
//         }
//
//     }
// }
//
// class ClassF {
//     constructor(public age: number) {
//     }
//
//     @enumerable(false)
//     public getAge() {
//        return this.age
//     }
// }
//
// let c = new ClassF(4)
// for (const key in c) {
//     console.log(key)
// }
// console.log(c.getAge())




// Js 属性装饰符
// configurable
// writeable
// enumerable
// interface ObjWithAnyKeys {
//     [key: string]: any
// }
//
// let de_obj1: ObjWithAnyKeys = {}
// Object.defineProperty(de_obj1, 'name', {
//     value: 'json',
//     writable: false,
//     configurable: true,
//     enumerable: true
// })
//
// console.log(de_obj1)



// 类装饰器
//
// function ClassDecorator<T extends {new (...args): any}> (target: T) {
//     return class extends target {
//         newProperty = 'hello'
//     }
// }
//
// @ClassDecorator
// class Greeter {
//     property = 'world'
// }
// interface Greeter {
//     newProperty: string
// }
//
// let gr = new Greeter()
// console.log(gr.property)
// console.log(gr.newProperty)

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