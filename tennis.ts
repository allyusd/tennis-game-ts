export class Tennis {
    private firstPlayerTimes: number = 0;

    scoreLookup = {
        1: 'fifteen',
        2: 'thirty',
    }

    score() {
        if (this.firstPlayerTimes === 2 || this.firstPlayerTimes === 1) {
            return `${this.scoreLookup[this.firstPlayerTimes]} love`
        }
        return 'love all'
    }

    firstPlayerScore() {
        this.firstPlayerTimes++
    }
}