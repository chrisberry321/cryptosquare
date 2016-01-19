//Business Logic

string = "abctofhr23";

Sanitize = function(string) {
	return string.replace(/[^a-zA-Z0-9]/g, "");
};

downCase = function(string) {
	return string.toLowerCase();
};

stringLength = function(string) {
	return string.length;
};

row = function(string) {
	return Math.floor(Math.sqrt(string.length));
}

col = function(string) {
	return Math.ceil((string.length) / (Math.floor(Math.sqrt(string.length))));
}

// if ( year > 0 && ((year % 4 === 0) && (year % 100 !== 0)|| (year % 400 === 0))) {
	// 	return true;
	// } else if (year === NaN) {
	// 	return false;
	// } else {
	// 	return false;
	// }

	// if (year % 100 === 0) {
	// 	return false;
	// } else if
	// 	(year % 4 === 0) {
	// 	return true;
	// } else {
	// return false;
	// }
// };
//
// // UI Logic
//
// $(document).ready(function() {
//   $("form#leap-year").submit(function(event) {
//      var year = parseInt($("input#year").val());
//      var result = leapYear(year);
//
//     $(".year").text(year);
//
// 		if (isNaN(year) || year < 0 ) {
// 			alert("OMG INVALID INPUT");
// 			$(".not").text("not");
// 		}
//     else if (!result) {       // same as writing if (result === false)
//       $(".not").text("not");
// 			$("#result").show();
//     } else {
//       $(".not").text("");
// 			$("#result").show();
//     }
//
//
//     event.preventDefault();
//   });
// });
