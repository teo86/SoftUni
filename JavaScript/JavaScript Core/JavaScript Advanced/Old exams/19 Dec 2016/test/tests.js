let makeList = require('../02. Add Left  Right Clear in List')
let expect = require('chai').expect

describe("Tests", function() {
    let myList = {};

    beforeEach(function () {
        myList = makeList();
    });
    it('for props', function () {
        expect(myList.hasOwnProperty('addLeft')).to.be.equal(true)
        expect(myList.hasOwnProperty('addRight')).to.be.equal(true)
        expect(myList.hasOwnProperty('clear')).to.be.equal(true)
        expect(myList.hasOwnProperty('toString')).to.be.equal(true)
    })

    it("TODO …", function () {

        expect(myList.toString()).to.equal('')
    })
    it('add', function () {
        myList.addLeft(3)
        expect(myList.toString()).to.equal('3')
    })
    it('addLeft', function () {
        myList.addLeft(3)
        myList.addLeft('pesho')
        myList.addLeft('0')
        expect(myList.toString()).to.equal('0, pesho, 3')
    })
    it('addRight', function () {
        myList.addRight(3)
        myList.addRight('pesho')
        myList.addRight('0')
        expect(myList.toString()).to.equal('3, pesho, 0')
    })
    it('clear', function () {
        myList.addRight(3)
        myList.addLeft('pesho')
        myList.addRight('0')
        myList.clear()
        expect(myList.toString()).to.equal('')
    })
    it('left right tostring', function () {
        myList.addRight(3)
        myList.addLeft('pesho')
        myList.addRight('0')
        myList.addLeft('r')
        expect(myList.toString()).to.equal('r, pesho, 3, 0')
    })
})