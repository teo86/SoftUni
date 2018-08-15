let expect = require('chai').expect
class Sumator {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
    sumNums() {
        let sum = 0;
        for (let item of this.data)
            if (typeof (item) === 'number')
                sum += item;
        return sum;
    }
    removeByFilter(filterFunc) {
        this.data = this.data.filter(x => !filterFunc(x));
    }
    toString() {
        if (this.data.length > 0)
            return this.data.join(", ");
        else
            return '(empty)';
    }
}

describe('tests',function () {
    let list
    beforeEach(function () {
        list = new Sumator()
    })
    describe('test for empty array', function () {
        it('should be empty', function () {
            expect(list.data).to.be.an('array').that.is.empty
        })
        it('should return (empty)', function () {
            expect(list.toString()).to.be.equal('(empty)')
        })
    })
    describe('test add', function () {
        it('should work with any type', function () {
            list.add(5)
            list.add('a')
            list.add({})
            expect(list.toString()).to.be.equal('5, a, [object Object]')
        })
    })
    describe('test sum', function () {
        it('should return 0', function () {
            expect(list.sumNums()).to.be.equal(0)
        })
        it('should return 0 for no numbers', function () {
            list.add('fafaf')
            list.add('7')
            expect(list.sumNums()).to.be.equal(0)
        })
        it('should return num for num and string', function () {
            list.add('hello')
            list.add(6)
            expect(list.sumNums()).to.be.equal(6)
        })
        it('with more nums', function () {
            list.add(1)
            list.add(2)
            list.add(3)
            expect(list.sumNums()).to.be.equal(6)
        })
        it('with negativ nums', function () {
            list.add(-1)
            list.add('-5')
            list.add(-9)
            expect(list.sumNums()).to.be.equal(-10)
        })
        it('with float nums', function () {
            list.add(2.5)
            list.add(3.5)
            expect(list.sumNums()).to.be.equal(6)
        })
        it('with all kind', function () {
            list.add(1)
            list.add(-5)
            list.add(3.5)
            list.add('1')
            expect(list.sumNums()).to.be.equal(-0.5)
        })
    })
    describe('test filter', function () {
        it('should filter nums', function () {
            list.add(5)
            list.add('5')
            list.add('hello')
            list.add(7)
            let filter = x => typeof x === 'number'
            list.removeByFilter(filter)
            expect(list.toString()).to.be.equal('5, hello')
        })
    })
    describe('for prop', function () {
        it('should return true', function () {
            expect(list.hasOwnProperty('data')).to.equal(true)
            expect(Object.getPrototypeOf(list).hasOwnProperty('add')).to.be.equal(true)
            expect(Object.getPrototypeOf(list).hasOwnProperty('sumNums')).to.be.equal(true)
            expect(Object.getPrototypeOf(list).hasOwnProperty('removeByFilter')).to.be.equal(true)
            expect(Object.getPrototypeOf(list).hasOwnProperty('toString')).to.be.equal(true)
        })
    })

})
