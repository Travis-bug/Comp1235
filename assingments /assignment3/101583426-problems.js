"use strict";

// Circle constructor with area and perimeter methods
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    area() {
        return parseFloat((Math.PI * this.radius * this.radius).toFixed(2));
    }

    perimeter() {
        return parseFloat((2 * Math.PI * this.radius).toFixed(2));
    }
}

// calculateSalary function
const calculateSalary = (hours) => {
    return hours.reduce((total, h, i) => {
        // Weekends: Saturday (5), Sunday (6)
        const isWeekend = i > 4;
        let dailyPay = 0;

        if (h <= 8) {
            dailyPay = h * 10;
        } else {
            dailyPay = (8 * 10) + (h - 8) * 15;
        }

        // Double pay on weekends
        if (isWeekend) {
            dailyPay *= 2;
        }

        return total + dailyPay;
    }, 0);
};


// indexMultiplier function
function indexMultiplier(array) {
    return array.reduce((acc, val, i) => acc + val * i, 0);

}

// filteredJSON function
const filteredJSON = (array) => {
    return array.filter(item =>
        item.id > 10 &&
        item.u[0].toLowerCase() >= 'm' && item.u[0].toLowerCase() <= 'z'
    );
};


// breakAway function
function breakAway(array, size) {
    let result = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
}
