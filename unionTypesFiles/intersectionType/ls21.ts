//Here we will define two type aliases
type Draggable = {
    drag: () => void
};

type Resizable = {
    resize: () => void
};

//Using an intersection type we can combine them into a new type
type UIWidget = Draggable & Resizable

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}