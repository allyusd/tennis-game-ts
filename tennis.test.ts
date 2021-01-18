import {Tennis} from "./tennis";

describe('tennis game', function () {
    let tennis: Tennis = new Tennis()
    beforeEach(() => {
        tennis = new Tennis()
    });

    function scoreShouldBe(expected: string) {
        expect(tennis.score()).toBe(expected)
    }

    it('love all', function () {
        scoreShouldBe('love all');
    })
    it('fifteen love', function () {
        tennis.firstPlayerScore()
        scoreShouldBe('fifteen love');
    })
    it('thirty love', function () {
        tennis.firstPlayerScore()
        tennis.firstPlayerScore()
        scoreShouldBe('thirty love');
    })


})
