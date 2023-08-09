function fib(){
    return {
        current: 0,
        prev: 0,
        middle: 0,
        [Symbol.iterator]: function(){
            let current = this.current
            let prev = this.prev
            let middle = this.middle
            return {
                next(){
                    if (current === 0){
                        current += 1
                        prev += current
                        middle += current
                        return {
                            done: false,
                            value: current,
                        }
                    }
                    if (current < 100000){
                        current = middle + prev
                        prev = middle
                        middle = current
                        return {
                            done: false,
                            value: current,
                        }
                    } else {
                        return { done:true }
                    }

                }
            }
        }
    }
}

for (let i of fib()){
    console.log(i)
}

//var 2
// const fib = {
//     [Symbol.iterator]: () => {
//         let prev = 1;
//         let prevPrev = 1;
//         let currentIdx = 0;
//         const done = false;
//
//         return {
//             next() {
//                 if (currentIdx++ <= 2) {
//                     return { done, value: 1 }
//                 }
//
//                 const value = prev + prevPrev;
//                 prevPrev = prev;
//                 prev = value;
//                 return { done, value };
//             },
//         };
//     }
// };
//
// let counter = 0;
// for (let i of fib ) {
//     console.log(i);
//     if (counter++ === 15) {
//         break;
//     }
// }