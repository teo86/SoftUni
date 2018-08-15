let expect = require('chai').expect
let Calculator = require('../02. Calculator Class')

describe('Tests', function () {
    let myCalc

    beforeEach(function () {
        myCalc = new Calculator()
    })

    describe('for prop' , function () {
        it('for expenses should return true', function () {
            expect(myCalc.hasOwnProperty('expenses')).to.equal(true)
        })
        it('for fun should return true', function () {
            expect(Object.getPrototypeOf(myCalc).hasOwnProperty('add')).to.equal(true)
            expect(Object.getPrototypeOf(myCalc).hasOwnProperty('divideNums')).to.equal(true)
            expect(Object.getPrototypeOf(myCalc).hasOwnProperty('toString')).to.equal(true)
            expect(Object.getPrototypeOf(myCalc).hasOwnProperty('orderBy')).to.equal(true)
        })
        it('for class should return true', function () {
            expect(myCalc instanceof Calculator).to.equal(true)
        })
    })
    describe('for add', function () {
        it('add one number', function () {
            myCalc.add(5)
            expect(myCalc.expenses.length).to.equal(1)
        })
        it('add more elements', function () {
            myCalc.add(4)
            myCalc.add('ttt')
            myCalc.add([])
            expect(myCalc.expenses.length).to.equal(3)
        })

    })
    describe('for devide' , function () {
        it('error with empty', function () {
            let div = () => myCalc.divideNums()
            expect(div).to.throw() //new Error ('There are no numbers in the array!')
        })
        it('error for non numbers', function () {
            myCalc.add('5')
            myCalc.add([])
            let err = () => myCalc.divideNums()
            expect(err).to.throw()
        })
        it('err for 0', function () {
            myCalc.add(5)
            myCalc.add(0)
            expect(myCalc.divideNums()).to.equal('Cannot divide by zero')

        })
        it('with norm num', function () {
            myCalc.add(10)
            myCalc.add(10)
            expect(myCalc.divideNums()).to.equal(1)
        })
        it('with float nums', function () {
            myCalc.add(5.5)
            myCalc.add(5.5)
            expect(myCalc.divideNums()).to.equal(1)
        })
        it('with negative nums', function () {
            myCalc.add(-5)
            myCalc.add(-5)
            expect(myCalc.divideNums()).to.equal(1)
        })
        it('with negative and positive nums', function () {
            myCalc.add(-5)
            myCalc.add(5)
            expect(myCalc.divideNums()).to.equal(-1)
        })
        it('with more elements and non numbers', function () {
            myCalc.add(50)
            myCalc.add(5)
            myCalc.add(2.5)
            myCalc.add('5.5')
            myCalc.add({})
            myCalc.add(-10)
            expect(myCalc.divideNums()).to.equal(-0.4)
        })
    })
    describe('for tostring', function () {
        it('for difrent elements',function () {
            myCalc.add(10)
            myCalc.add('pesho')
            myCalc.add('5')
            expect(myCalc.toString()).to.equal('10 -> pesho -> 5')
        })
        it('for empty', function () {
            expect(myCalc.toString()).to.equal('empty array')
        })
        it('for some elements and divide', function () {
            myCalc.add(10)
            myCalc.add('pesho')
            myCalc.add('5')
            myCalc.add(10)
            myCalc.divideNums()
            expect(myCalc.toString()).to.equal('1')
        })
    })
    describe('for sort', function () {
        it('for nums', function () {
            myCalc.add(10)
            myCalc.add(-5)
            myCalc.add(2.6)
            myCalc.add(5)
            myCalc.orderBy()
            expect(myCalc.orderBy()).to.equal('-5, 2.6, 5, 10')
        })
        it('for difrent elements', function () {
            myCalc.add(10)
            myCalc.add('pesho')
            myCalc.add('3')
            myCalc.add('ppp')
            expect(myCalc.orderBy()).to.equal('10, 3, pesho, ppp')
        })
    })
})