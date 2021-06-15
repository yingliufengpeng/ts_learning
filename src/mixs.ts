// 类的混入

function mergeOptions(ob1: Object, ob2: object) {
    return {
        ...ob1,
        ...ob2,
    }
}

console.log(mergeOptions({i: 4}, {j: 49}))

interface ObjIn {
    name?: string
    age?: number
}



let promise: Promise<number>

async function getResult() {
    const res = await Promise.resolve(3)
}

getResult().then(function () {
    console.log(44)
})







setTimeout(() => {
    console.log(3)
}, 1000)

// A.prototype {}

class Mix_A {
    isS: boolean = false
    funA() {}
}

class Mix_B {
    isB: boolean = false
    funb() {}
}

function mixins(base: any, from: any[]) {

    from.forEach(item => {
        Object.getOwnPropertyNames(item.prototype).forEach(key => {
            base[key] = item.prototype.key
            console.log(key)
        })
    })
}

class Mix_AABB {}

mixins(Mix_AABB, [Mix_A, Mix_B])

let m_aabb = new Mix_AABB()

console.log(Mix_AABB.prototype)
console.log(Mix_AABB)
//
// class Mix_AB implements Mix_A, Mix_B {
//     isS: boolean;
//     isB: boolean;
//
//     constructor() {
//     }
//
//     funA() {
//
//     }
//     funb(): void {
//     }
//
// }
//
//
//
//
//
//
//
//
// // 对象混入
// let mix_a = {
//     a: 4
// }
//
// let mix_b = {
//     b: 4
// }
//
// let mix_a_b = Object.assign(mix_a, mix_b)
//
// console.log(mix_a, mix_b)