/**
 * Created by AnCla on 2017/7/9.
 */
/**
 * 截断字符串

    如果字符串的长度比指定的参数num长，则把多余的部分用...来表示。

    切记，插入到字符串尾部的三个点号也会计入字符串的长度。

    但是，如果指定的参数num小于或等于3，则添加的三个点号不会计入字符串的长度。

 * @param str 要截断的字符串。
 * @param num 截取的长度。
 * @returns {*} 截取出来的字符串。
 */

function truncate(str, num) {
    // 请把你的代码写在这里

    var actual_slice_length;        // 记录实际截断字符串的长度（不包含三个点号）
    var buff = "";                  // 字符串缓冲区
    var i;                          // 循环变量

    // 这里要分类讨论指定参数 num 的取值情况！
    if(str.length > num)
    {
        if(num <= 3)
            // 如果指定的参数num小于或等于3，则添加的三个点号不会计入字符串的长度
            actual_slice_length = num;
        else
            // 由于插入到字符串尾部的三个点号也会计入字符串的长度，因此实际截取的字符串长度要减去三
            actual_slice_length = num - 3;

        // 截取字符串
        for(i = 0; i < actual_slice_length; i++){
            buff += str[i];
        }

        // 最后在截得的字符串末尾加上点号
        buff += "...";
    }
    else if(str.length < num)
    {
        actual_slice_length = str.length;

        // 截取字符串
        for(i = 0; i < actual_slice_length; i++){
            buff += str[i];
        }
    }
    else
    {
        actual_slice_length = num;

        // 截取字符串
        for(i = 0; i < actual_slice_length; i++){
            buff += str[i];
        }
    }


    return buff;
}


function print(str){
    console.log(str);
}


print(truncate("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));