export class Tennis {
    private firstPlayerTimes: number = 0;

    score() {
        if (this.firstPlayerTimes === 2) {
            return 'thirty love'
        }
        if (this.firstPlayerTimes === 1) {
            return 'fifteen love'
        }
        return 'love all'
    }

    firstPlayerScore() {
        this.firstPlayerTimes++;
    }
}