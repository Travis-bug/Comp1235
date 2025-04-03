"use strict";

const chai = window.chai;
const expect = chai.expect;

describe('_checkS', () =>  {
    it('Check the index of * in the password',  () => {
        expect(_checkS("ibntij53*")).to.deep.equal(6)
    })
})

/***************************************************************************************
describe('yourFunctionName', () =>  {
    it('please enter your function description here',  () => {
        expect(yourFunctionName(parameters)).to.deep.equal(expected_result)
    })
})
 ***************************************************************************************/