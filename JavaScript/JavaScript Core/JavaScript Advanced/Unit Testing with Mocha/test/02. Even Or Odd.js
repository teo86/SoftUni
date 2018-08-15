let expect = require('chai').expect
function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}
describe('isOddOrEven', function () {
    it('with a number, should return undefined', function () {
        expect(isOddOrEven(100)).to.be.equal(undefined,'Function did not return the correct result!')
    })
    it('with a object, should return undefined', function () {
        expect(isOddOrEven({})).to.be.equal(undefined,'Function did not return the correct result!')
    })
    it('with a odd string, should return odd', function () {
        expect(isOddOrEven('abc')).to.be.equal('odd','Function did not return the correct result!')
    })
    it('with a even string, should return even', function () {
        expect(isOddOrEven('abcd')).to.be.equal('even','Function did not return the correct result!')
    })
    it('with multiple checks, should return correct values',function () {
        expect(isOddOrEven('pop')).to.be.equal('odd','Function did not return the correct result!')
        expect(isOddOrEven('1234')).to.be.equal('even','Function did not return the correct result!')
        expect(isOddOrEven('hello i am string')).to.be.equal('odd','Function did not return the correct result!')
    })
})