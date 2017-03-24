/**
 * Created by ermo4enkov on 3/7/17.
 */


var user = {age: 30};

try {
    var fin = JSON.stringify(user);

    if (!user.name){
        throw new SyntaxError("We did not find necessary field");
    }

    console.log(fin)
} catch (e) {
    console.log(e.name);
    console.log(e.message);
}