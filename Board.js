class Board {
    constructor(container) {
        //отрисока игрового поля
        this.element = document.createElement('canvas');
        this.context = this.element.getContext('2d');

        this.element.height = rows * blockSize;
        this.element.width = cols * blockSize;

        container.appendChild(this.element);
    }
}
export default Board;