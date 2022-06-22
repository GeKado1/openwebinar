class Queue {
    constructor(in_items) {
        this.items = in_items || [];
    }

    length() {
        return this.items.length;
    }

    enqueue(el) {
        //Añade un elemento a items
        this.items.push(el);
    }

    dequeue() {
        //Devuelve e primer elemento o undefined
        return this.length() > 0 ? this.items.shift() : undefined;
    }
}