/**
 * Created by AnCla on 2017/7/9.
 */
function titleCase(str) {
    // 请把你的代码写在这里

    // 第一步：统一将原句子小写
    str = str.toLowerCase();

    // 第二步：将句子拆成字母数组
    var letters = str.split("");

    // 第三步：遍历字母数组，将单词首字母（数组第一项，以及每个空格项后的第一项）大写
    // 1. 句首字母大写
    letters[0] = letters[0].toUpperCase();

    // 2. 单词首字母大写
    for(var i = 1; i < letters.length; i++){
        if(letters[i] == " "  &&  i + 1 < letters.length){
            letters[i + 1] = letters[i + 1].toUpperCase();
        }
    }

    // 第四步：将处理后的字母数组连缀成字符串，并返回
    return letters.join("");
}

titleCase("I'm a little tea pot");