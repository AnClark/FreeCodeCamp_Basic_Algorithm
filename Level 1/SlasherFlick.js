/**
 * Created by AnCla on 2017/7/9.
 */

function slasher(arr, howMany) {
    // 请把你的代码写在这里

    var result = [];

    for(var i = howMany; i < arr.length; i++)
        result.push(arr[i]);

    return result;
}

console.log(slasher([1, 2, 3], 2));