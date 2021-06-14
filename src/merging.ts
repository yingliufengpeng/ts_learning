

function Add(a: number, b: number): number {
    Add.count ++
    return a + b
}
Add.id = 10
console.log(Add)

namespace Add {
    export let count = 0
}


class B {
    public checkType() {}
}

namespace B {
    const Pi = 30
}

namespace A {
    export const Pi = 3
}

namespace A {
    export const P2 = 3.4
}


namespace A {

    function Add(): number {
        return Pi + P2
    }

    let add = Add()
    console.log(add)
}

interface InfoInter {
    name: string
    // getRes: (input: string) => number
    getRes(input: number): string

}


interface InfoInter {
    age: number
    getRes(input: number): string
}

let info1: InfoInter = {
    name: '3',
    age: 4,
    getRes(input: number): string {
        return input.toFixed()
    },

}



