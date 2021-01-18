export class Tennis {
    private firstPlayerTime: number = 0;

    score() {
        if (this.firstPlayerTime === 2) {
            return 'thirty love'
        }
        if (this.firstPlayerTime === 1) {
            return 'fifteen love'
        }
        return 'love all'
    }

    firstPlayerScore() {
        this.firstPlayerTime++
    }
}
