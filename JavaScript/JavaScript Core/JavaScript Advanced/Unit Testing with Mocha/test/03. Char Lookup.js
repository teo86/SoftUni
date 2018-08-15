let expect = require('chai').expect
function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}
describe('charLookup',function () {
    describe('undefined tests', function () {
        it('with 2 numbers',function(){
            expect(lookupChar(5,5)).to.be.equal(undefined)
        })
        it('with 2 strings',function () {
            expect(lookupChar('abcd','5')).to.be.equal(undefined)
        })
        it('with string and decimal',function () {
            expect(lookupChar('abcd',2.16)).to.be.equal(undefined)
        })
    })
    describe('Incorect index',function () {
        it('with -1', function () {
            expect(lookupChar('abcd', -1)).to.be.equal('Incorrect index')
        })
        it('with index equal to str lenght', function () {
            expect(lookupChar('abcd', 4)).to.be.equal('Incorrect index')
        })
        it('with index bigger than str lenght', function () {
            expect(lookupChar('abcd', 100)).to.be.equal('Incorrect index')
        })
        it('with empty str', function () {
            expect(lookupChar('', 0)).to.be.equal('Incorrect index')
        })
    })
    describe('correct tests',function () {
        it('with gosho and 2, should return s', function () {
            expect(lookupChar('gosho', 2)).to.be.equal('s')
        })
        it('with abcd and 0, should return a', function () {
            expect(lookupChar('abcd', 0)).to.be.equal('a')
        })

    })
})
