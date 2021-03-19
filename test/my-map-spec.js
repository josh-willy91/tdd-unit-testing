
const chai = require('chai')
const { interface } = require('chai-spies')
const spies = require('chai-spies')
const expect = chai.expect
chai.use(spies)

let { myMap } = require('../problems/my-map.js')


describe('myMap problems', () => {
let myMapRun;
let array;
let cb;

beforeEach('set up test array and callback', () => {
    array = [1, 2, 3]
    cb = el => el + 100
    myMapRun = myMap(array, cb)
})

    describe('myMap function', () => {
        it('should return a new array where the callback has been called upon each element in the original array ', () => {
            //Arrange
            //Act
            let expected = [101, 102, 103]
            //Assert
            expect(myMapRun).to.eql(expected)

        })
        it('it should not mutate the original array', () => {
            //Arange
            let arrayCopy = [1, 2, 3]

            //Act

            //Assert
            expect(arrayCopy).to.eql(array)

        })

        // it('it should not use array.map method', () => {
        //     //Arrange
        //     let spy = chai.spy.on(Array.prototype, 'map')

        //     //Act


        //     //Assert
        //     expect(spy).to.have.been.called.exactly(0)

        // })
    })
})
