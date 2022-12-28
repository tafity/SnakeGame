class Score {
    constructor() {
        //инициализачия начального количества очков
        this._score = score;
    }
    draw() {
        //логика отрисовки блока с очкамиуыеличение количества очков + перерисовка табла
    }
    increase() {
        //
        this._score += 1;
        this.draw();
    }
    reset() {
        //сброс очков при смерти
        this._score = 0;
        this.draw(); 
    }
}