/**
 * Created by AnCla on 2017/7/9.
 */

/**
 * 过滤数组假值

 （真假美猴王）

    删除数组中的所有假值。

    在JavaScript中，假值有false、null、0、""、undefined 和 NaN。
 * @param arr
 */
function bouncer_DEPRECATED(arr){
    return arr.filter(function (p1) {
        const FalsyValues = [false, null, 0, "", undefined, NaN];

        return FalsyValues.indexOf(p1) === -1;

    });
}

function bouncer_DEPRECATED2(arr){
    for(var i = 0; i < arr.length; i++){
        if(Boolean(arr[i]) === false)
            delete arr[i];
    }

    return arr;
}

function bouncer(arr){
    return arr.filter(function(p1){
        return Boolean(p1) !== false;
    });
}

console.log(bouncer([1, null, NaN, 2, undefined]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));