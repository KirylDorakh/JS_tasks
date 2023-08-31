function createCounter(n){
    const counter = new Object();
    counter.n = n
    counter.count = function count() {
        this.n = this.n + 1
        return this
    };
    counter.print = function print() {
        console.log(this.n)
        return this
    };
    counter.set = function set(newN){
        this.n = newN
        return this
    };
    return counter
}

const counter = createCounter(5)
console.log(counter)
counter.print()
    .count()
    .print()
    .set(10)
    .count()
    .print()
    .count()
    .print()
console.log(counter)

// ================= var 2 ===============

const createCounter1 = n => {
    return {
        n,
        set(n) {
            this.n = n;
            return this;
        },
        count() {
            this.set(this.n + 1);
            return this;
        },
        print() {
            console.log(this.n);
            return this;
        }
    }
}

const counter1 = createCounter(5);
counter1
    .print() // 5
    .set(0)
    .count()
    .print() // 1
    .count()
    .print() // 2