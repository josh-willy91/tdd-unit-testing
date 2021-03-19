const chai = require('chai')
const spies = require('chai-spies')
const expect = chai.expect
chai.use(spies)

let { returnThree, reciprocal } = require("../problems/number-fun");

//arrange

//act

//assert



describe("Number Fun Problems", () => {

    describe("return three function", () => {
        it("this function should return the number 3", () => {
            //arrange

            //act
            let testFunc = returnThree()
            //assert
            expect(testFunc).to.eql(3)
        });
    });

    describe("reciprocal function problem", () => {
        context("passing in valid arguments", () => {
            it("should return the reciprocal of the parameter", ()=> {
                //arrange
                let num = 5;
                //act
                let testFunc = reciprocal(num);
                //assert
                expect(testFunc).to.eql((1/5));
            });
        })

        context("passing in invalid arguments", () => {
            it("should throw a TypeError if < 1 or > 1,000,000", () => {
                //arrange
                let num = 0.5;
                let num2 = 1000001
                //act
                let testFunc = () => {reciprocal(num)};
                let testFunc2 = () => {reciprocal(num2)};
                //assert
                expect(testFunc).to.throw(TypeError);
                expect(testFunc2).to.throw(TypeError);
            });
        })
    });
});
