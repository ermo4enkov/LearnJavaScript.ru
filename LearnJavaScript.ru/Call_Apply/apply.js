/**
 * Created by ermo4enkov on 2/28/17.
 */

// Apply method allowes us to pass arguments with array


var sums = []

sums.push(2)
sums.push(3)
sums.push(5)
sums.push(7)
sums.push(1)

console.log(sums)

var max = Math.max.apply(null, sums);

console.log(max);