function palindrome(str) {
  // �����Ĵ���д������
  
  // �ַ���Ԥ��������ȥ��������Ϳո񣬲����ַ���ת��ΪСд
  function preProcess(str) {
	// ȥ��������Ϳո�
      /** ע�⣡
       *  ֻ��ʹ�ô���g��������������ʽ����ʵ����ȫ�滻������ֻ���滻һ�Σ�
       */
	str = str.replace(/[,."'!?\s]/g, "");
	
	// ���ַ���ת��ΪСд
	str = str.toLowerCase();
	
	// ���ش�������ַ���
	return str;
  }
  
  // ��ʼԤ����
  str = preProcess(str);

  // ���Ĵ���֤
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


// ���ڲ��Ե�����

palindrome("eye");								//Ӧ�÷��� true.
palindrome("race car");							//Ӧ�÷��� true.
palindrome("not a palindrome");					//Ӧ�÷��� false.
palindrome("A man, a plan, a canal. Panama");	// Ӧ�÷��� true.
palindrome("never odd or even");				//Ӧ�÷��� true.
palindrome("nope");								//Ӧ�÷��� false.
palindrome("almostomla");						//Ӧ�÷��� false.
palindrome("My age is 0, 0 si ega ym.");		//Ӧ�÷��� true.
palindrome("1 eye for of 1 eye.");				//Ӧ�÷��� false.
palindrome("0_0 (: /-\ :) 0-0");				//Ӧ�÷��� true.


palindrome("neveroddoreven");
palindrome("R,a.c ecar");

