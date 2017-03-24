/**
 * Created by ermo4enkov on 3/6/17.
 */
//JSON parse

var arr = ["1", "2", 3, 5];

console.log(JSON.parse(arr[2])) // 3


var str = '{"title":"Конференция","date":"2014-11-30T12:00:00.000Z"}';

var event = JSON.parse(str, function (key, value) {
    if (key == 'date') return new Date(value);
    return value;
});

console.log(event.date.getDate());