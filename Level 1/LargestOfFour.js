/**
 * Created by AnCla on 2017/7/9.
 */
function largestOfFour(arr) {
    // 请把你的代码写在这里

    var result = [];

    for(var i = 0; i < arr.length; i++) {
        // 第一步：使用迭代函数sort对数组进行排序
        arr[i].sort(function sort_by_ZA(a, b) {
            return b - a;
        });

        // 第二步：排序后，第一项即为数组最大项。将每个子数组的最大项提取出来，加入到目标数组中
        result.push(arr[i][0]);
    }

    // 第三步：返回目标数组即可
    return result;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
