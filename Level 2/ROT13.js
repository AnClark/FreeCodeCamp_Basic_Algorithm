/**
 * Created by AnCla on 2017/7/10.
 *
 * 凯撒密码

     （让上帝的归上帝，凯撒的归凯撒）

     下面我们来介绍风靡全球的凯撒密码Caesar cipher，又叫移位密码。

     移位密码也就是密码中的字母会按照指定的数量来做移位。

     一个常见的案例就是ROT13密码，字母会移位13个位置。由'A' ↔ 'N', 'B' ↔ 'O'，以此类推。

     写一个ROT13函数，实现输入加密字符串，输出解密字符串。

     所有的字母都是大写，不要转化任何非字母形式的字符(例如：空格，标点符号)，遇到这些特殊字符，跳过它们。

 */

function rot13(str) { // LBH QVQ VG!
    // 请把你的代码写在这里

    // 第一步：将 str 拆成字符数组
    var charArray = str.split("");

    // 第二步：遍历数组，用正则表达式检测每一个元素是否为大写字母。
    //        如果是，则就地进行移位
    // 子函数：字母检验
    function isUpperCaseLetter(char){
        return char.match(/[A-Z]/) !== null;
    }

    // 开始遍历
    for(var i = 0; i < charArray.length; i++){
        if(isUpperCaseLetter(charArray[i])){
            var originalCharCode = charArray[i].charCodeAt(charArray[i]) - 13;

            // 这里要注意，有些字母的ASCII值减去13后，会越出大写字母的ASCII范围。因此必须修正
            if(originalCharCode < "A".charCodeAt("A"))
                originalCharCode += 26;

            charArray[i] = String.fromCharCode(originalCharCode);
        }
    }

    // 第三步：将处理过的字符数组重新组成字符串，并返回
    return charArray.join("");

}

console.log(rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK."));  // 你可以修改这一行来测试你的代码