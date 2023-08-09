class Component {
    constructor(selector) {
        // DOM node ($)
        this.$el = document.querySelector(selector)
    }

    hide(){
        this.$el.style.display = 'none'
    }

    show(){
        this.$el.style.display = 'block'
    }
}

class Box extends Component{
    constructor(props) {
        super(props.selector)

        this.$el.style.width = this.$el.style.height = props.size + "px"
        this.$el.style.background = props.color
    }

}

const box1 = new Box(
    {
        selector: "#box1",
        size: 100,
        color: "red"
    }
)

box1.hide()
box1.show()

const box2 = new Box(
    {
        selector: "#box2",
        size: 120,
        color: "blue"
    }
)

class Circle extends Box {
    constructor(props) {
        super(props);

        this.$el.style.borderRadius = '50%'
    }

}

const c = new Circle({
    selector: '#circle',
    size: 95,
    color: 'green'
})