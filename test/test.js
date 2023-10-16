let chai = require("chai")
let assert = chai.assert;

class Multiply{
    constructor(){
    }
    multiply(a,b){
        let result = a*b
        return result
    }
} 

let multiplier = new Multiply;

describe("test multiplication", function(){
    it("should multiply two numbers", function(){

        let result = multiplier.multiply(2,5)
        assert.equal(result ,4);
    })
})

// example in use
