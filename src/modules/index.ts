import {age, Max, Min, Name} from "./a";
import {B_Time} from "./b";


const Max1 = Max
const Min1 = Min

console.log(`Max1 is ${Max1} Min1 is ${Min1}`)

let time = new Date()
setInterval(() => {
    console.log(time)
}, B_Time)
