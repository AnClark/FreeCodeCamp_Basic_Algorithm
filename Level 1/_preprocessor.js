/**
 * Created by AnCla on 2017/7/9.
 */
function preProcess(str) {
    // 去除多余标点和空格
    str = str.replace(/[,."'!?\s]/g, "");


    // 将字符串转化为小写
    str = str.toLowerCase();

    // 调试需要
    console.log(str);

    // 返回处理过的字符串
    return str;
}

preProcess("Race c,ar\ a,,bc");