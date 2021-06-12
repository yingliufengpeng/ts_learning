
export const PI = 400


const obj = {
    [Symbol.hasInstance] (otherObj: any) {
        console.log(otherObj)
    },
    [Symbol.toStringTag]() {
        return '444'
    }
}


console.log(obj)

const obj2 = {
    a: 4,
    b: 4
}

console.log('基础科学的发展,铁路创业的很大的发展....')

console.log('基础科学的定义,中文开始做的情况 科学发展 科学 和 技术 科学的支撑')









