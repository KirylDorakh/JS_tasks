function createCounter(n){
    const counter = {n: n};
    console.log(counter)
    counter.count = function count() {
        this.n = this.n + 1
    };
    counter.print = function print() {
        console.log(this.n)
    };
    counter.set = function set(newN) {
        this.n = newN
    };
    return counter
}

const counter2 = createCounter(5)
console.log(counter2)
counter2.print()
counter2.count()
counter2.print()
counter2.count()
counter2.print()
counter2.count()
counter2.print()
counter2.set(10)
counter2.count()
counter2.print()
console.log(counter2)


// =========== var 2 =============
const createCounter1 = n => {
    return {
        n,
        set(n) {
            this.n = n;
        },
        count() {
            this.set(this.n + 1);
        },
        print() {
            console.log(this.n);
        }
    }
}

const counter1 = createCounter1(5);
console.log(counter1)
counter1.print();
counter1.count();
counter1.print();
counter1.set(2);
counter1.print();
counter1.count();
counter1.print();
console.log(counter1)