/**
 * Created by AnCla on 2017/7/9.
 */

/**
 * 比较字符串

     （蛤蟆可以吃队友，也可以吃对手）

     如果数组第一个字符串元素包含了第二个字符串元素的所有字符，函数返回true。

     举例，["hello", "Hello"]应该返回true，因为在忽略大小写的情况下，第二个字符串的所有字符都可以在第一个字符串找到。

     ["hello", "hey"]应该返回false，因为字符串"hello"并不包含字符"y"。

     ["Alien", "line"]应该返回true，因为"line"中所有字符都可以在"Alien"找到。

 *
 * @param arr
 * @returns {boolean}
 */

function mutation(arr) {
    // 请把你的代码写在这里

    // 子函数：检查某个字符是否在指定的字符串中
    function isInStr(src, charToCheck){
        return src.indexOf(charToCheck) !== -1;
    }


    // 第一步：为操作方便，将待操作的两个字符串分别放到两个不同的变量中
    // 同时忽略大小写，即将两个字符串全部转为小写
    var source = arr[0].toLowerCase();
    var strToCheck = arr[1].toLowerCase();

    // 第二步：开始比较。检查strToCheck的每个字符是否都在source当中
    var matches = 0;            // 计数器
    for(var i = 0; i < strToCheck.length; i++){
        if(isInStr(source, strToCheck[i]))
            matches ++;
    }


    // FOR DEBUG
    console.log(matches);
    console.log(strToCheck.length);


    // 第三步：检查结果
    return matches === strToCheck.length;
}


mutation(["hello", "hey"]);