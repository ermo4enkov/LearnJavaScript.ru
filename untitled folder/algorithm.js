/**
 * Created by ermo4enkov on 6/30/17.
 */


var arr = [1,10,4,8,22,3];

function compareArr(arr) {
    var sum = [];

    var length = arr.length;
    var arr1 = arr.splice(arr1, length/2);
    var arr2 = arr.splice(arr2);

    console.log(arr1);
    console.log(arr2);

    var len1 = arr1.length;
    var len2 = arr2.length;

    go:
    while (len1 && len2){
        if (arr1[len1] > arr2[len2]){
            sum.push(arr1[len1]);
            len1--;
            continue go;
        } else {
            sum.push(arr2[len2])
            len2--;
            continue go;
        }

    }

    return sum;
}

console.log(compareArr(arr))


