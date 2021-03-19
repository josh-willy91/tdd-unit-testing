
const chai = require('chai')
const spies = require('chai-spies')
const expect = chai.expect
chai.use(spies)

const { reverseString } = require('../problems/reverse-string')


describe('reverseString', () => {
    describe('reverseString function', () => {
        it('it should return a reverse string', () => {
            //Arange
            let testString = 'dog'

            //Act
            let actual = reverseString(testString)

            //Assert
            expect(actual).to.eql('god')

        })
        it('it should throw an error if the parameter is not a string', () => {
            //Arrange
            let test = 123

            //Act
            let testFunc = (() => {
                reverseString(test)
            })
            //Assert
            expect(testFunc).to.throw(TypeError)
        })
    })
})
