class Counter {
    constructor(n) {
        this.state = { n };
        this.root = document.getElementById('root');
        this.render();
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }

    increment() {
        this.setState({ n: this.state.n + 1 });
        console.log(this.state)
    }

    decrement() {
        this.setState({ n: this.state.n - 1 });
        console.log(this.state)
    }

    setState(newState) {
        this.state = {
            ...this.state,
            ...newState,
        };
        this.render();
    }

    render() {
        this.root.innerHTML = '';
        this.root.innerHTML = this.state.n;
    }
}

const buttonIncrement = document.querySelector('.increment');
const buttonDecrement = document.querySelector('.decrement');

const counter = new Counter(5);

buttonIncrement.addEventListener('click', counter.increment);
buttonDecrement.addEventListener('click', counter.decrement);