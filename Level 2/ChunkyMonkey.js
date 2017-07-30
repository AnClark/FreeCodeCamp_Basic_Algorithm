/**
 * Created by AnCla on 2017/7/9.
 */

/**
 *
 * 猴子吃香蕉, 分割数组

 （猴子吃香蕉可是掰成好几段来吃哦）

    把一个数组arr按照指定的数组大小size分割成若干个数组块。

    例如:chunk([1,2,3,4],2)=[[1,2],[3,4]];

     chunk([1,2,3,4,5],2)=[[1,2],[3,4],[5]];

 这个程序可以有很多种写法
 */

function chunk_method1(arr, size) {
    // 请把你的代码写在这里
    var i = 0, j = 0;              // 循环变量
    var result = [];               // 存放结果

    for(i = 0; i < arr.length; i++){
        var subarray = [];

        while(j < size  &&  i < arr.length){
            subarray.push(arr[i]);

            j++;
            i++;
        }

        result.push(subarray);
        j = 0;
        i--;
    }

    return result;
}

console.log(chunk_method1([0, 1, 2, 3, 4, 5], 4));
