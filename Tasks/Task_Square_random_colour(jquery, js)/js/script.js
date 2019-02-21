function GetRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var x = '1234567890ABCDFE';

$(".square").click (function () {
	$(this).css("background", "#" + x[GetRandom(0,15)] + x[GetRandom(0,15)] + x[GetRandom(0,15)] + x[GetRandom(0,15)] + x[GetRandom(0,15)] + x[GetRandom(0,15)]);
});

//$(".square").click (function () {
//	$(this).css("background", "#" + GetRandom(0,9) + GetRandom(0,9) + GetRandom(0,9) + GetRandom(0,9) + GetRandom(0,9) + GetRandom(0,9));
//});