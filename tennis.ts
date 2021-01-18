export class Tennis {
    private firstPlayerTimes: number = 0;

    score() {
        let scoreLookup = {
            1: 'fifteen',
            2: 'thirty'
        }
        if (this.firstPlayerTimes === 2) {
            return `${scoreLookup[this.firstPlayerTimes]} love`
        }
        if (this.firstPlayerTimes === 1) {
            return `${scoreLookup[this.firstPlayerTimes]} love`
        }
        return 'love all'
    }

    firstPlayerScore() {
        this.firstPlayerTimes++;
    }
}
