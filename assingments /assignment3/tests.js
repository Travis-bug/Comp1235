
"use strict";

const chai = window.chai;
const expect = chai.expect;

describe('Circle', () => {
    it('should correctly calculate the area of a circle', () => {
        const circle = new Circle(3);
        expect(circle.area()).to.equal(28.27);
    });

    it('should correctly calculate the perimeter of a circle', () => {
        const circle = new Circle(3);
        expect(circle.perimeter()).to.equal(18.85);
    });
});

describe('calculateSalary', () => {
    it('should calculate salary with no overtime and no weekends', () => {
        expect(calculateSalary([8, 8, 8, 8, 8, 0, 0])).to.equal(400);
    });

    it('should calculate salary with overtime on weekdays', () => {
        expect(calculateSalary([10, 10, 10, 10, 10, 0, 0])).to.equal(550);
    });

    it('should calculate salary with weekend double pay', () => {
        expect(calculateSalary([8, 8, 8, 8, 8, 8, 8])).to.equal(720);
    });
});

describe('indexMultiplier', () => {
    it('should return 0 for an empty array', () => {
        expect(indexMultiplier([])).to.equal(0);
    });

    it('should multiply each element by its index and sum', () => {
        expect(indexMultiplier([1, 2, 3])).to.equal(8); // 0*1 + 1*2 + 2*3 = 8
    });
});

describe('filteredJSON', () => {
    it('should filter objects with id > 10 and u starting with m-z', () => {
        const input = [
            { id: 12, u: "Michael" },
            { id: 5, u: "Zack" },
            { id: 15, u: "Zara" },
            { id: 20, u: "Adam" }
        ];
        expect(filteredJSON(input)).to.deep.equal([
            { id: 12, u: "Michael" },
            { id: 15, u: "Zara" }
        ]);
    });
});

describe('breakAway', () => {
    it('should split an array into subarrays of given size', () => {
        expect(breakAway([1, 2, 3, 4, 5, 6], 2)).to.deep.equal([[1, 2], [3, 4], [5, 6]]);
    });

    it('should handle cases where the last subarray has fewer elements', () => {
        expect(breakAway([1, 2, 3, 4, 5], 2)).to.deep.equal([[1, 2], [3, 4], [5]]);
    });
});



/***************************************************************************************
 Testing TEMPLATES

 //To test a regular function
 describe('yourFunctionName', () =>  {
    it('please enter your function description here',  () => {
        expect(yourFunctionName(parameters)).to.deep.equal(expected_result);
    })
})

 //To test async/await functions
 describe('yourFunctionName()', () =>  {
    it('The async/await function description',  async () => {
          expect(await yourFunctionName()).to.deep.equal(expected_result);
    })
})
 ***************************************************************************************/