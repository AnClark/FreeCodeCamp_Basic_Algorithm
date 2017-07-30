/**
 * Created by AnCla on 2017/7/9.
 */
function confirmEnding(str, target) {
    // 请把你的代码写在这里

    // 第一步：获取检测用字符串的长度
    var len_target = target.length;

    // 第二步：利用substr(start, length)方法提取子串，根据所提取子串来进行判断。
    // substr方法支持从字符串末尾开始检索子串，只需给start参数传入负数。
    var str_ending = str.substr(- len_target);

    // 第三步：判断并返回结果
    return target === str_ending;
}
