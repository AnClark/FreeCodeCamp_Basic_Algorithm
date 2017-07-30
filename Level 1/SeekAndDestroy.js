/**
 * Created by AnCla on 2017/7/10.
 */

/**
 * 摧毁数组

    金克斯的迫击炮！

    实现一个摧毁(destroyer)函数，第一个参数是待摧毁的数组，其余的参数是待摧毁的值。

 * @param arr 可变参数，参数的数量大于一且不定。传入的第一个参数为待摧毁的数组，其余的参数是待摧毁的值。
 *
 * 【需要用到的技术】
 *  arguments 对象————用于操作可变参数，类似于C语言的 stdarg。
 */

function destroyer(arr){
    // 第一步：借助 arguments 对象来解析本功能所需要的参数
    var arrayToBeDestroyed = arguments[0];    // 解析出待摧毁的数组
    var valuesToDestroy = Array.from(arguments).slice(1);   // 解析出待摧毁的值

    // 第二步：根据所得参数展开摧毁
    // 子函数：过滤掉指定项
    function filterer(arr, value){
        return arr.filter(function (p1){
            return p1 !== value;
        })
    }

    // 展开摧毁
    for(var i = 0; i < valuesToDestroy.length; i++)
        arrayToBeDestroyed = filterer(arrayToBeDestroyed, valuesToDestroy[i]);

    // 第三步：返回摧毁后的数组
    return arrayToBeDestroyed;
}

console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));