function palindrome(str) {
  // 请把你的代码写在这里
  
  // 字符串预处理函数：去掉多余标点和空格，并将字符串转化为小写
  function preProcess(str) {
	// 去除多余标点和空格
      /** 注意！
       *  只有使用带“g“参数的正则表达式才能实现完全替换，否则只会替换一次！
       */
	str = str.replace(/[,."'!?\s]/g, "");
	
	// 将字符串转化为小写
	str = str.toLowerCase();
	
	// 返回处理过的字符串
	return str;
  }
  
  // 开始预处理
  str = preProcess(str);

  // 回文串验证
  var hits = 0;
  for(var i = 0; i <= (str.length - 1) / 2; i++){
	  if(str[i] == str[str.length - 1 - i])
		if(i == (str.length - 1)  / 2)
			hits += 1;
		else
			hits += 2;
  }
  
  // FOR DEBUG
  console.log(str + ":\t" + (hits == str.length));
  
  return hits == str.length;
	  
}


// 用于测试的数据

palindrome("eye");								//应该返回 true.
palindrome("race car");							//应该返回 true.
palindrome("not a palindrome");					//应该返回 false.
palindrome("A man, a plan, a canal. Panama");	// 应该返回 true.
palindrome("never odd or even");				//应该返回 true.
palindrome("nope");								//应该返回 false.
palindrome("almostomla");						//应该返回 false.
palindrome("My age is 0, 0 si ega ym.");		//应该返回 true.
palindrome("1 eye for of 1 eye.");				//应该返回 false.
palindrome("0_0 (: /-\ :) 0-0");				//应该返回 true.


palindrome("neveroddoreven");
palindrome("R,a.c ecar");

