/**
 * sumOfAMultiple() sums of the multiples of 3 and 5 for any number passed in
 * @param  {Number} n Number that is to be used for calculating multiples up to that Number
 * @return {Number}
 */
exports.sumOfAMultiple = function(n){
  
  var sum = 0;

    for (var i = 0; i < n; i++) {
  // console.log("for:", i);

    if (i % 3 === 0 || i % 5 === 0){
//console.log("if", i);
      sum = sum + i;  
    }
   
  }
  console.log(sum);
  // do your work here
  
  return sum;
};

