let expect = require('chai').expect
let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};
describe('mathEnforcer',function () {
    describe('addFive',function () {
        it('with 5, should return 10',function () {
            expect(mathEnforcer.addFive(5)).to.be.equal(10)
        })
        it('with -5, should return 0',function () {
            expect(mathEnforcer.addFive(-5)).to.be.equal(0)
        })
        it('with 5.5, should return 10.5',function () {
            expect(mathEnforcer.addFive(5.5)).to.be.equal(10.5)
        })
        it('with string, should return undefined',function () {
            expect(mathEnforcer.addFive('pesho')).to.be.equal(undefined)
        })
    })
    describe('subtractTen',function () {
        it('with 20, should return 10',function () {
            expect(mathEnforcer.subtractTen(20)).to.be.equal(10)
        })
        it('with -5, should return -15',function () {
            expect(mathEnforcer.subtractTen(-5)).to.be.equal(-15)
        })
        it('with 10.5, should return 0.5',function () {
            expect(mathEnforcer.subtractTen(10.5)).to.be.equal(0.5)
        })
        it('with string, should return undefined',function () {
            expect(mathEnforcer.subtractTen('pesho')).to.be.equal(undefined)
        })
    })
    describe('sum', function () {
        it('with 2 positive num, should return correct answer', function () {
            expect(mathEnforcer.sum(5,6)).to.be.equal(11)
        })
        it('with 2 negative num, should return correct answer', function () {
            expect(mathEnforcer.sum(-3,-7)).to.be.equal(-10)
        })
        it('with positive  and negative nums, should return correct answer', function () {
            expect(mathEnforcer.sum(5,-6)).to.be.equal(-1)
        })
        it('with negative and  positive nums, should return correct answer', function () {
            expect(mathEnforcer.sum(-5,6)).to.be.equal(1)
        })
        it('with double nums, should return correct answer', function () {
            expect(mathEnforcer.sum(3.5,4.8)).to.be.equal(8.3)
        })
        it('with string and num, should return undefined', function () {
            expect(mathEnforcer.sum('gosho',6)).to.be.equal(undefined)
        })
        it('with num and string, should return undefined', function () {
            expect(mathEnforcer.sum(6,'gosho')).to.be.equal(undefined)
        })
        it('with 2 strings, should return undefined', function () {
            expect(mathEnforcer.sum('gosho','pesho')).to.be.equal(undefined)
        })
    })
    describe('multiply operations', function () {
        it('add 5,add 10,subtract -20 ,sum 1 and 2',function () {
            expect(mathEnforcer.addFive(5)).to.be.equal(10)
            expect(mathEnforcer.addFive(10)).to.be.equal(15)
            expect(mathEnforcer.subtractTen(-20)).to.be.equal(-30)
            expect(mathEnforcer.sum(1,2)).to.be.equal(3)
        })
    })
})