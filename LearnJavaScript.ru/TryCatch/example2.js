/**
 * Created by ermo4enkov on 3/7/17.
 */

var errorString = "I\'am merror"

try {
    var fin = JSON.parse(errorString)
} catch (e) {
    console.log(e.name);
    console.log(e.message);
}
