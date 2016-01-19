
// first argument 'leapYear' is the function we intend to write
// second argument is the it function. The it function takes a
// string as its first argument, too. The second argument is
// the function which contains the assertion.

describe ('Sanitize', function() {
	it("sanitize string to remove all non-alphanumeric characters", function() {
		expect(Sanitize("I like to eat cheese!")).to.equal("Iliketoeatcheese");
});
});

describe ('downCase', function() {
	it ("sets all characters to lowercase", function() {
		expect(downCase("I NEED to eat MORE cheese")).to.equal("i need to eat more cheese");
});
});

describe ('stringLength', function() {
	it ("counts the number of characters in a string", function() {
		expect(stringLength("hello bob")).to.equal(9);
});
});

describe ('row', function() {
	it ("gives the square root of the number of characters", function() {
		expect(row("weneedmore")).to.equal(3);
	});
});

describe ('col', function() {
	it ("gives the square root of the number of characters", function() {
		expect(col("abctofhr23")).to.equal(4);
	});
});
//
// 	it ("is true for years divisible by 4", function() {
// 		expect(leapYear(2004)).to.equal(true);
// 	});
//
// 	it ("is false for years divisible by 100", function() {
// 		expect (leapYear(1900)).to.equal(false);
// 	});
//
// 	it ("is true for years divisible by 400", function() {
// 		expect (leapYear(2000)).to.equal(true);
// 	});
//
// 	it ("is false for blank input", function() {
// 		expect (leapYear(NaN)).to.equal(false);
// 	});
//
// 	it ("is false for negavtive integers", function() {
// 		expect (leapYear(-400)).to.equal(false);
// 	});
