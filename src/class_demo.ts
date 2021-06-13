
// ts 中的类的学习


const create = <T>(c: new() => T): T => {
    return new c()
}




interface FoodInterface {
    type: string
    f(): void

    z: () => number

}

class B implements FoodInterface {
    constructor(public type: string) {
    }

    f(): void {
    }

    z(): number {
        return 0;
    }
}


class Stu {
    static MaxAge = 200

    private _age?: number


    constructor(age?: number) {
        this._age = age
    }

    static show(): number {
        return this.MaxAge
    }


}

let stu = new Stu(3)

