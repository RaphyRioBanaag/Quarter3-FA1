var nickname = "Karen";
var heightInches = 62;
var weightKg = 50;

var feet = Math.floor(heightInches / 12);
var inches = heightInches % 12;
var height = feet + "'" + inches + "\"";

var weightLbs = weightKg * 2.20462;

var output = "Name: " + nickname + "\n";
output += "Height: " + height + "\n";
output += "Weight: " + weightLbs.toFixed(3) + " lbs";

alert(output);