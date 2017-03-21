/**
 * Created by ermo4enkov on 3/21/17.
 */

// Map - collection where keeps key:point
// In different with Object we can keep any type

let map = new Map();

map.set("1", "Fix");
map.set(1, true);
map.set(true, 2);

console.log(map.get("1"));
console.log(map.get(1));
console.log(map.get(true));