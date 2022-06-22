class Stack {
    constructor(in_items) {
        this.items = in_items || [];
    }

    length() {
        return this.items.length;
    }

    stack(el) {
        //Añade un elemento a in_items
        this.items.push(el);
    }

    unstack() {
        //Devuelve el último elemento o undefined
        return this.length() > 0 ? this.items.pop() : undefined;
    }
}