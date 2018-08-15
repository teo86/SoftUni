let StringBuilder = require('../02. String Builder')
let expect = require('chai').expect


describe('Tests', function () {
        it('clss', function () {
            let str = new StringBuilder()
            expect(Object.getPrototypeOf(str).hasOwnProperty('append')).to.equal(true)
            expect(Object.getPrototypeOf(str).hasOwnProperty('prepend')).to.equal(true)
            expect(Object.getPrototypeOf(str).hasOwnProperty('insertAt')).to.equal(true)
            expect(Object.getPrototypeOf(str).hasOwnProperty('remove')).to.equal(true)
            expect(Object.getPrototypeOf(str).hasOwnProperty('toString')).to.equal(true)
            expect(str instanceof StringBuilder).to.equal(true)
        })
    it('for init with empty', function () {
        let str = new StringBuilder()
        expect(str.toString()).to.equal('')
    })
    it('for init with str', function () {
        let str = new StringBuilder('ggg')
        expect(str.toString()).to.equal('ggg')
    })
    it('for init with wrong input', function () {
        expect(function () {let str = new StringBuilder(555)}).to.throw()
    })
    it('for append', function () {
        let str = new StringBuilder('hello')
        str.append(' ttt')
        expect(str.toString()).to.equal('hello ttt')

    })
    it('for append err', function () {
        let str = new StringBuilder('hello')
        let err = () => str.append(555)
        expect(err).to.throw()
    })
    it('for prepend', function () {
        let str = new StringBuilder('hello')
        str.prepend('ttt ')
        expect(str.toString()).to.equal('ttt hello')
    })
    it('for prepend err', function () {
        let str = new StringBuilder('hello')
        let err = () => str.prepend(555)
        expect(err).to.throw()
    })
    it('for insert', function () {
        let str = new StringBuilder('hello')
        str.insertAt('ttt',0)
        expect(str.toString()).to.equal('ttthello')
    })
    it('for insert err', function () {
        let str = new StringBuilder('hello')
        let err = () => str.insertAt(555,0)
        expect(err).to.throw()
    })
    it('for remove', function () {
        let str = new StringBuilder('hello')
        str.remove(0,1)
        expect(str.toString()).to.equal('ello')
    })
    it('for tostring', function () {
        let str = new StringBuilder('hello');
        str.append(', there');
        str.prepend('User, ');
        str.insertAt('woop',5 );
        str.remove(6, 3);

        expect(str.toString()).to.equal('User,w hello, there')
    })
})