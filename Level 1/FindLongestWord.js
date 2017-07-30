/**
 * Created by AnCla on 2017/7/9.
 */
function findLongestWord(str) {
    // 请把你的代码写在这里

    // 第一步：分割字符串为单词数组
    var words = str.split(" ");

    // 第二步：遍历单词数组，找出最长的那一项
    var longest_length = 0;
    for(var i = 0; i < words.length; i++){
        if(words[i].length > longest_length){
            longest_length = words[i].length;
        }
    }

    // 第三步：返回最后结果
    return longest_length;

}

findLongestWord("The quick brown fox jumped over the lazy dog");