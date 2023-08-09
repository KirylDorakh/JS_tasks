function range(min, max){
    return {
            [Symbol.iterator]: function() {
                return {
                    next: function(){
                        return min < max
                            ? {value: min++, done: false}
                            : {done: true}
                        }
                }
            }
        }
}


for( let i of range(1,5)) {
    console.log(i)
}

//var 2
const range2 = (min, max) => {
    return {
        [Symbol.iterator]: () => {
            let current = min;
            let last = max;

            return {
                next() {
                    if (current > max) {
                        return { done: true };
                    } else {
                        return { done: false, value: current++ };
                    }
                },
            };

        }
    }
};

for (let i of range2(0, 5) ) {
    console.log(i);
}