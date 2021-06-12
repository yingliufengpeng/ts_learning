


const getProps = <T, K extends  keyof T>(obj: T, key: K) => {
    return obj[key]
}


interface GetArray<T> {
    (x: T, times: number): T[]
    array: T[]
}

const getArrayFunc = <T> (): GetArray<T> => {
    const f = (x: T, times: number) => []
    f.array = [] as T[]
    return f
}

let cfunc = getArrayFunc<number>()

let arr2 = cfunc(4, 10)



const getArray = <T, U>(v: T, w: U, times: number): [T, U][] => {
    return new Array(times).fill([v, w])
}

const arr1 = getArray(3, 4, 10)

arr1.forEach(console.log)
