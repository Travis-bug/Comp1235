"use strict";

const chai = window.chai;
const expect = chai.expect;

describe('Circle', () => {
    it('should return correct area when given valid radius', () => {
        const testCircle = new Circle(3);
        expect(testCircle.area()).to.equal(28.27);
    });

    it('should return correct perimeter when given valid radius', () => {
        const testCircle = new Circle(3);
        expect(testCircle.perimeter()).to.equal(18.85);
    });
});

describe('calculateSalary', () => {
    it('should calculate regular hours without overtime or weekends', () => {
        const weeklyHours = [8, 8, 8, 8, 8, 0, 0];
        expect(calculateSalary(weeklyHours)).to.equal(400);
    });

    it('should include overtime pay for weekday hours over 8', () => {
        const overtimeHours = [10, 10, 10, 10, 10, 0, 0];
        expect(calculateSalary(overtimeHours)).to.equal(550);
    });

    it('should apply double pay for weekend working hours', () => {
        const weekendWork = [8, 8, 8, 8, 8, 8, 8];
        expect(calculateSalary(weekendWork)).to.equal(720);
    });
});

describe('indexMultiplier', () => {
    it('should return 0 when given empty array', () => {
        expect(indexMultiplier([])).to.equal(0);
    });

    it('should calculate sum of elements multiplied by their indices', () => {
        const sampleArray = [1, 2, 3];
        expect(indexMultiplier(sampleArray)).to.equal(8);
    });
});

describe('filteredJSON', () => {
    it('should filter items with ID >10 and username starting m-z', () => {
        const testData = [
            { id: 12, u: "Michael" },
            { id: 5, u: "Zack" },
            { id: 15, u: "Zara" },
            { id: 20, u: "Adam" }
        ];
        expect(filteredJSON(testData)).to.deep.equal([
            { id: 12, u: "Michael" },
            { id: 15, u: "Zara" }
        ]);
    });
});

describe('breakAway', () => {
    it('should split array into chunks of specified size', () => {
        const inputArray = [1, 2, 3, 4, 5, 6];
        expect(breakAway(inputArray, 2)).to.deep.equal([[1,2], [3,4], [5,6]]);
    });

    it('should handle remaining elements in final chunk', () => {
        const inputArray = [1, 2, 3, 4, 5];
        expect(breakAway(inputArray, 2)).to.deep.equal([[1,2], [3,4], [5]]);
    });
});