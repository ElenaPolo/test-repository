const { regs } = require('../regs');
let string = "";

describe('Task 1', function () {
    it('find ahb, acb, aeb', function () {
        string = "ahb acb aeb aeeb adcb axeb";
        assert.deepEqual(regs.task1(string), [ 'ahb', 'acb', 'aeb' ])
    })
});

describe('Task 2', function () {
    it('find abba adca abea', function () {
        string = "aba aca aea abba adca abea";
        assert.deepEqual(regs.task2(string), [ 'abba', 'adca', 'abea' ])
    })
});

describe('Task 3', function () {
    it('find abba abea', function () {
        string = "aba aca aea abba adca abea";
        assert.deepEqual(regs.task3(string), [ 'abba', 'abea' ])
    })
});

describe('Task 4', function () {
    it('find abba adca abea', function () {
        string = "aa aba abba abbba abca abea";
        assert.deepEqual(regs.task4(string), [ 'aba', 'abba', 'abbba' ])
    })
});

describe('Task 5', function () {
    it('find abba adca abea', function () {
        string = "aa aba abba abbba abca abea";
        assert.deepEqual(regs.task5(string), [ 'aa', 'aba', 'abba', 'abbba' ])
    })
});

describe('Task 6', function () {
    it('find abba adca abea', function () {
        string = "aa aba abba abbba abca abea";
        assert.deepEqual(regs.task6(string), [ 'aa', 'aba' ])
    })
});

describe('Task 7', function () {
    it('find abba adca abea', function () {
        string = "aa aba abba abbba abca abea";
        assert.deepEqual(regs.task7(string), [ 'aa', 'aba', 'abba', 'abbba' ])
    })
});

describe('Task 8', function () {
    it('find (ab)+', function () {
        string = 'ab abab abab abababab abea';
        assert.deepEqual(regs.task8(string), [ 'ab', 'abab', 'abab', 'abababab', 'ab' ])
    })
});

describe('Task 9', function () {
    it('find a.a', function () {
        string = 'a.a aba aea';
        assert.deepEqual(regs.task9(string), [ 'a.a' ])
    })
});

describe('Task 10', function () {
    it('find 2+3', function () {
        string = '2+3 223 2223';
        assert.deepEqual(regs.task10(string), [ '2+3' ])
    })
});

describe('Task 11', function () {
    it('find 2+3, 2++3, 2+++3', function () {
        string = '23 2+3 2++3 2+++3 345 567';
        assert.deepEqual(regs.task11(string), [ '2+3', '2++3', '2+++3' ])
    })
});

describe('Task 12', function () {
    it('find 23, 2+3, 2++3, 2+++3', function () {
        string = '23 2+3 2++3 2+++3 445 677';
        assert.deepEqual(regs.task12(string), [ '23', '2+3', '2++3', '2+++3' ])
    })
});

describe('Task 13', function () {
    it('find *q+, *qq+, *qqq+', function () {
        string = '*+ *q+ *qq+ *qqq+ *qqq qqq+';
        assert.deepEqual(regs.task13(string), [ '*q+', '*qq+', '*qqq+' ])
    })
});

describe('Task 14', function () {
    it('replace to "!"', function () {
        string = 'aba accca azzza wwwwa';
        assert.equal(regs.task14(string), '! ! ! wwwwa')
    })
});

describe('Task 15', function () {
    it('find abba, abbba, abbbba', function () {
        string = 'aa aba abba abbba abbbba abbbbba';
        assert.deepEqual(regs.task15(string), [ 'abba', 'abbba', 'abbbba' ])
    })
});

describe('Task 16', function () {
    it('find строки вида aba, в которых b встречается менее 3-х раз (включительно)', function () {
        string = 'aa aba abba abbba abbbba abbbbba';
        assert.deepEqual(regs.task16(string), [ 'aa', 'aba', 'abba', 'abbba' ])
    })
});

describe('Task 17', function () {
    it('find строки вида aba, в которых b встречается более 4-х раз (включительно)', function () {
        string = 'aa aba abba abbba abbbba abbbbba';
        assert.deepEqual(regs.task17(string), [ 'abbbba', 'abbbbba' ])
    })
});

describe('Task 18', function () {
    it('find строки, в которых по краям стоят буквы a, а между ними одна цифра', function () {
        string = 'a1a a2a a3a a4a a5a aba aca';
        assert.deepEqual(regs.task18(string), [ 'a1a', 'a2a', 'a3a', 'a4a', 'a5a' ])
    })
});

describe('Task 19', function () {
    it('find строки, в которых по краям стоят буквы a, а между ними любое количество цифр', function () {
        string = 'a1a a22a a333a a4444a a55555a aba aca';
        assert.deepEqual(regs.task19(string), [ 'a1a', 'a22a', 'a333a', 'a4444a', 'a55555a' ])
    })
});

describe('Task 20', function () {
    it('find строки, в которых по краям стоят буквы a, а между ними любое количество цифр (в том числе и ноль цифр, то есть строка aa)', function () {
        string = 'aa a1a a22a a333a a4444a a55555a aba aca';
        assert.deepEqual(regs.task20(string), [ 'aa', 'a1a', 'a22a', 'a333a', 'a4444a', 'a55555a' ])
    })
});

describe('Task 21', function () {
    it('find строки следующего вида: по краям стоят буквы a и b, а между ними - не число)', function () {
        string = 'avb a1b a2b a3b a4b a5b abb acb';
        assert.deepEqual(regs.task21(string), [ 'avb', 'abb', 'acb' ])
    })
});

describe('Task 22', function () {
    it('find строки следующего вида: по краям стоят буквы a и b, а между ними - не буква и не цифра)', function () {
        string = 'ave a#b a2b a$b a4b a5b a-b acb';
        assert.deepEqual(regs.task22(string), [ 'a#b', 'a$b', 'a-b' ])
    })
});

describe('Task 23', function () {
    it('Напишите регулярку, которая заменит все пробелы на !', function () {
        string = 'ave a#a a2a a$a a4a a5a a-a aca';
        assert.equal(regs.task23(string), 'ave!a#a!a2a!a$a!a4a!a5a!a-a!aca')
    })
});

describe('Task 24', function () {
    it('find aba, aea, axa', function () {
        string = 'aba aea aca aza axa';
        assert.deepEqual(regs.task24(string), [ 'aba', 'aea', 'axa' ])
    })
});

describe('Task 25', function () {
    it('find aba, a.a, a+a, a*a', function () {
        string = 'aba aea aca aza axa a.a a+a a*a';
        assert.deepEqual(regs.task25(string), [ 'aba', 'a.a', 'a+a', 'a*a' ])
    })
}); 

describe('Task 26', function () {
    it('find строки следующего вида: по краям стоят буквы a, а между ними - цифра от 3-х до 7-ми', function () {
        string = 'aba a3a aca a1a a6a a.a a+a a*a';
        assert.deepEqual(regs.task26(string), [ 'a3a', 'a6a' ])
    })
});

describe('Task 27', function () {
    it('find строки следующего вида: по краям стоят буквы a, а между ними - буква от a до g', function () {
        string = 'aba a3a aca a1a a6a a.a a+a a*a';
        assert.deepEqual(regs.task27(string), [ 'aba', 'aca' ])
    })
});

describe('Task 28', function () {
    it('find строки следующего вида: по краям стоят буквы a, а между ними - буква от a до f и от j до z', function () {
        string = 'aba a3a aca a1a a6a a.a a+a aqa';
        assert.deepEqual(regs.task28(string), [ 'aba', 'aca', 'aqa' ])
    })
});

describe('Task 29', function () {
    it('find строки следующего вида: по краям стоят буквы a, а между ними - буква от a до f и от A до Z', function () {
        string = 'aba a3a aca a1a a6a a.a a+a aQa';
        assert.deepEqual(regs.task29(string), [ 'aba', 'aca', 'aQa' ])
    })
});
 
describe('Task 30', function () {
    it('find строки следующего вида: по краям стоят буквы a, а между ними - не e и не x', function () {
        string = 'aba aea aca aza axa a-a a#a';
        assert.deepEqual(regs.task30(string), [ 'aba', 'aca', 'aza', 'a-a', 'a#a' ])
    })
}); 

describe('Task 31', function () {
    it('find строки следующего вида: по краям стоят буквы w, а между ними - буква кириллицы', function () {
        string = 'wйw wяw wёw wqw';
        assert.deepEqual(regs.task31(string), [ 'wйw', 'wяw', 'wёw' ])
    })
}); 

describe('Task 32', function () {
    it('find строки следующего вида: по краям стоят буквы a, а между ними - маленькие латинские буквы, не затронув остальных', function () {
        string = 'aAXa aeffa aGha aza ax23a a3sSa';
        assert.deepEqual(regs.task32(string), [ 'aeffa', 'aza'])
    })
}); 

describe('Task 33', function () {
    it('find строки следующего вида: по краям стоят буквы a, а между ними - маленькие и большие латинские буквы, не затронув остальных', function () {
        string = 'aAXa aeffa aGha aza ax23a a3sSa';
        assert.deepEqual(regs.task33(string), [ 'aAXa', 'aeffa', 'aGha', 'aza' ])
    })
}); 

describe('Task 34', function () {
    it('find строки следующего вида: по краям стоят буквы a, а между ними - маленькие латинские буквы, не затронув остальных', function () {
        string = 'aAXa aeffa aGha aza ax23a a3sSa';
        assert.deepEqual(regs.task34(string), [ 'aeffa', 'aza', 'ax23a' ])
    })
}); 
 
describe('Task 35', function () {
    it('find все слова по шаблону: любая кириллическая буква любое количество раз', function () {
        string = 'ааа ббб ёёё ззз ййй ААА БББ ЁЁЁ ЗЗЗ ЙЙЙ';
        assert.deepEqual(regs.task35(string), [ 'ааа', 'ббб', 'ёёё', 'ззз', 'ййй', 'ААА', 'БББ', 'ЁЁЁ', 'ЗЗЗ', 'ЙЙЙ' ])
    })
});

describe('Task 36', function () {
    it('Напишите регулярку, которая заменит первое aaa на !', function () {
        string = 'aaa aaa aaa';
        assert.equal(regs.task36(string), '! aaa aaa')
    })
});

describe('Task 37', function () {
    it('Напишите регулярку, которая заменит последнее aaa на !', function () {
        string = 'aaa aaa aaa';
        assert.equal(regs.task37(string), 'aaa aaa !')
    })
});

describe('Task 38', function () {
    it('find строки следующего вида: по краям стоят буквы a, а между ними - или буква e любое количество раз или по краям стоят буквы a, а между ними - буква x любое количество раз', function () {
        string = 'aeeea aeea aea axa axxa axxxa';
        assert.deepEqual(regs.task38(string), [ 'aeeea', 'aeea', 'aea', 'axa', 'axxa', 'axxxa' ])
    })
}); 

describe('Task 39', function () {
    it('find строки следующего вида: по краям стоят буквы a, а между ними - или буква e два раза или буква x любое количество раз', function () {
        string = 'aeeea aeea aea axa axxa axxxa';
        assert.deepEqual(regs.task39(string), [ 'aeea', 'axa', 'axxa', 'axxxa' ])
    })
}); 

describe('Task 40', function () {
    it('Напишите регулярку, которая заменит строку a\a на !', function () {
        string = 'a\\a abc';
        assert.equal(regs.task40(string), '! abc')
    })
});

describe('Task 41', function () {
    it('Напишите регулярку, которая заменит строку a\\\a на !', function () {
        string = 'a\\a a\\\\a a\\\\\\a';
        assert.equal(regs.task41(string), 'a\\a a\\\\a !')
    })
}); 

describe('Task 42', function () {
    it('Напишите регулярку, которая найдет содержимое всех конструкций /...\ и заменит их на !', function () {
        string = 'bbb \/aaa\\ bbb \/ccc\\';
        assert.equal(regs.task42(string), 'bbb ! bbb !')
    })
}); 

describe('Task 43', function () {
    it('строки по шаблону: любое количество букв и цифр, символ @, любое количество букв и цифр и поменяет местами то, что стоит до @ на то, что стоит после нее', function () {
        string = 'aaa@bbb eee7@kkk';
        assert.equal(regs.task43(string), 'bbb@aaa kkk@eee7')
    })
});

describe('Task 44', function () {
    it('Напишите регулярку, которая найдет все цифры и удвоит их количество', function () {
        string = 'a1b2c3';
        assert.equal(regs.task44(string), 'a11b22c33')
    })
});

describe('Task 45', function () {
    it('определите, что переданная строка является емэйлом', function () {
        string = 'mymail@mail.ru';
        assert.equal(regs.task45(string), true)
    })
    it('определите, что переданная строка является емэйлом', function () {
        string = 'my.mail@mail.ru';
        assert.equal(regs.task45(string), true)
    })
    it('определите, что переданная строка является емэйлом', function () {
        string = 'my-mail@mail.ru';
        assert.equal(regs.task45(string), true)
    })
    it('определите, что переданная строка является емэйлом', function () {
        string = 'my_mail@mail.ru';
        assert.equal(regs.task45(string), true)
    })
    it('определите, что переданная строка является емэйлом', function () {
        string = 'mail@mail.com';
        assert.equal(regs.task45(string), true)
    })
    it('определите, что переданная строка является емэйлом', function () {
        string = 'mail@mail.by';
        assert.equal(regs.task45(string), true)
    })
    it('определите, что переданная строка является емэйлом', function () {
        string = 'mail@yandex.ru';
        assert.equal(regs.task45(string), true)
    })
});

describe('Task 46', function () {
    it('Дана строка с текстом, в котором могут быть емейлы. С помощью match найдите все емэйлы в виде массива', function () {
        string = 'a1b2c3 mail@mail.com a11b22c33 mail@mail.by';
        assert.deepEqual(regs.task46(string), [ 'mail@mail.com', 'mail@mail.by'])
    })
});

describe('Task 47', function () {
    it('определите, что переданная строка является доменом', function () {
        string = 'site.ru';
        assert.equal(regs.task47(string), true)
    })
    it('определите, что переданная строка является доменом', function () {
        string = 'site.com';
        assert.equal(regs.task47(string), true)
    })
    it('определите, что переданная строка является доменом', function () {
        string = 'my-site.com';
        assert.equal(regs.task47(string), true)
    })        
});
 
describe('Task 48', function () {
    it('определите, что переданная строка является доменом', function () {
        string = 'http://site.ru';
        assert.equal(regs.task48(string), true)
    })
    it('определите, что переданная строка является доменом', function () {
        string = 'http://site.com';
        assert.equal(regs.task48(string), true)
    })      
}); 

describe('Task 49', function () {
    it('определите, что переданная строка является доменом', function () {
        string = 'http://site.ru';
        assert.equal(regs.task49(string), true)
    })
    it('определите, что переданная строка является доменом', function () {
        string = 'https://site.com';
        assert.equal(regs.task49(string), true)
    })      
}); 

describe('Task 50', function () {
    it('определите, что переданная строка начинается с http или с https', function () {
        string = 'http://site.ru';
        assert.equal(regs.task50(string), true)
    })
    it('определите, что переданная строка начинается с http или с https', function () {
        string = 'https://site.com';
        assert.equal(regs.task50(string), true)
    })      
});

describe('Task 51', function () {
    it('определите, что переданная строка заканчивается расширением txt, html или php', function () {
        string = 'file.txt';
        assert.equal(regs.task51(string), true)
    })
    it('определите, что переданная строка заканчивается расширением txt, html или php', function () {
        string = 'file.html';
        assert.equal(regs.task51(string), true)
    })
    it('определите, что переданная строка заканчивается расширением txt, html или php', function () {
        string = 'file.php';
        assert.equal(regs.task51(string), true)
    })
    it('определите, что переданная строка заканчивается расширением txt, html или php', function () {
        string = 'file.img';
        assert.equal(regs.task51(string), false)
    })      
});

describe('Task 52', function () {
    it('определите, что переданная строка заканчивается расширением jpg или jpeg', function () {
        string = 'file.jpg';
        assert.equal(regs.task52(string), true)
    })
    it('определите, что переданная строка заканчивается расширением jpg или jpeg', function () {
        string = 'file.jpeg';
        assert.equal(regs.task52(string), true)
    })  
    it('определите, что переданная строка заканчивается расширением jpg или jpeg', function () {
        string = 'file.doc';
        assert.equal(regs.task52(string), false)
    })    
}); 

describe('Task 53', function () {
    it('узнайте является ли строка числом, длиной до 12 цифр', function () {
        string = '12345';
        assert.equal(regs.task53(string), true)
    })
    it('узнайте является ли строка числом, длиной до 12 цифр', function () {
        string = '12345678910111213';
        assert.equal(regs.task53(string), false)
    })
    it('узнайте является ли строка числом, длиной до 12 цифр', function () {
        string = 'ybvdf';
        assert.equal(regs.task53(string), false)
    })   
}); 
 
describe('Task 54', function () {
    it('Найдите сумму всех чисел из данной строки', function () {
        string = '12fu kk 3 lki o45';
        assert.equal(regs.task54(string), 60)
    })  
}); 

describe('Task 55', function () {
    it('замените в строке домены', function () {
        string = 'http://site.ru';
        assert.equal(regs.task55(string), '<a href="http://site.ru">site.ru</a>')
    })
    it('замените в строке домены', function () {
        string = 'http://site.com';
        assert.equal(regs.task55(string), '<a href="http://site.com">site.com</a>')
    })
});

describe('Task 56', function () {
    it('замените все повторяющиеся пробелы на один', function () {
        string = '1 2   3 4   5  6';
        assert.equal(regs.task56(string), '1 2 3 4 5 6')
    })
});

describe('Task 57', function () {
    it('Найдите и удалите все комментарии CSS', function () {
        string = '123/*comment*/456';
        assert.equal(regs.task57(string), '123456')
    })
});
 
describe('Task 58', function () {
    it('Найдите и удалите все комментарии CSS', function () {
        string = '123<!--comment-->456';
        assert.equal(regs.task58(string), '123456')
    })
}); 

describe('Task 59', function () {
    it('С помощью позитивного и негативного просмотра найдите все строки по шаблону 3 буквы a, затем буква b и поменяйте 3 буквы a на знак !. То есть из aaab нужно сделать !b', function () {
        string = 'aaab';
        assert.equal(regs.task59(string), '!b')
    })
}); 

describe('Task 60', function () {
    it('С помощью позитивного и негативного просмотра найдите все строки по шаблону 3 буквы a, затем любая буква, но не b и поменяйте 3 буквы a на знак !', function () {
        string = 'aaaw';
        assert.equal(regs.task60(string), '!w')
    })
    it('С помощью позитивного и негативного просмотра найдите все строки по шаблону 3 буквы a, затем любая буква, но не b и поменяйте 3 буквы a на знак !', function () {
        string = 'aaab';
        assert.equal(regs.task60(string), 'aaab')
    })
}); 

describe('Task 61', function () {
    it('преобразуйте строку так, чтобы вместо этих чисел стояли их квадраты', function () {
        string = '1 2 3 4 5 6 7';
        assert.equal(regs.task61(string), '1 4 9 16 25 36 49')
    })
}); 

describe('Task 62', function () {
    it('Найдите числа, стоящие в кавычках и увеличьте их в два раза', function () {
        string = "2aaa'3'bbb'4'";
        assert.equal(regs.task62(string), "2aaa'6'bbb'8'")
    })
}); 
 
describe('Task 63', function () {
    it('Дана строка в которой есть вставки {{текст}}. Найдите все такие вставки и поменяйте в них порядок букв на обратный', function () {
        string = "{{текст}}";
        assert.equal(regs.task63(string), "{{тскет}}")
    })
    it('Дана строка в которой есть вставки {{текст}}. Найдите все такие вставки и поменяйте в них порядок букв на обратный', function () {
        string = "abc {{текст}} def";
        assert.equal(regs.task63(string), "abc {{тскет}} def")
    })
}); 

describe('Task 64', function () {
    it('Дана строка 23 + 35 =. Числа могут быть любыми. Выведите на экран результат операции в виде 23 + 35 = 58', function () {
        string = "23 + 35 =";
        assert.equal(regs.task64(string), "23 + 35 = 58")
    })
    it("111 + 99 =", function () {
        string = "111 + 99 =";
        assert.equal(regs.task64(string), "111 + 99 = 210")
    })
}); 

describe('Task 65', function () {
    it('Определите, что год находится в интервале от 1900 до 2100 с помощью одного только регулярного выражения, 1900', function () {
        string = '1900';
        assert.equal(regs.task65(string), true)
    })
    it('2020', function () {
        string = '2020';
        assert.equal(regs.task65(string), true)
    })
    it('2100', function () {
        string = '2100';
        assert.equal(regs.task65(string), true)
    }) 
    it('1820', function () {
        string = '1820';
        assert.equal(regs.task65(string), false)
    })    
    it('2220', function () {
        string = '2220';
        assert.equal(regs.task65(string), false)
    })    
}); 

describe('Task 66', function () {
    it('определите, что переданная строка является корректным временем вида 12:59', function () {
        string = '12:59';
        assert.equal(regs.task66(string), true)
    })
    it('23:41', function () {
        string = '23:41';
        assert.equal(regs.task66(string), true)
    })
    it('00:12', function () {
        string = '00:12';
        assert.equal(regs.task66(string), true)
    }) 
    it('00:00', function () {
        string = '00:00';
        assert.equal(regs.task66(string), true)
    })
    it('09:15', function () {
        string = '09:15';
        assert.equal(regs.task66(string), true)
    })
    it('24.00', function () {
        string = '24.00';
        assert.equal(regs.task66(string), false)
    })    
    it('25.00', function () {
        string = '25.00';
        assert.equal(regs.task66(string), false)
    })
    it('12.60', function () {
        string = '12.60';
        assert.equal(regs.task66(string), false)
    })    
    it('12.93', function () {
        string = '12.93';
        assert.equal(regs.task66(string), false)
    })
    it('41.93', function () {
        string = '41.93';
        assert.equal(regs.task66(string), false)
    })  
});

describe('Task 67', function () {
    it('С помощью test определите, что переданная строка является корректным временем вида 9.59 am, ', function () {
        string = '9.59 am';
        assert.equal(regs.task67(string), true)
    })
    it('12.30 pm', function () {
        string = '12.30 pm';
        assert.equal(regs.task67(string), true)
    })   
    it('23:41', function () {
        string = '23:41';
        assert.equal(regs.task67(string), false)
    })    
}); 

describe('Task 68', function () {
    it('Удалите одной регуляркой все слова из предложения, содержащие две одинаковые следующие друг за другом буквы', function () {
        string = 'qwert qwwer erty werrty tty';
        assert.equal(regs.task68(string), 'qwert erty')
    })
});

describe('Task 69', function () {
    it('Удалите одной регуляркой все повторяющиеся слова из строки', function () {
        string = 'dsf xxx xxx sd';
        assert.equal(regs.task69(string), 'dsf xxx sd')
    })
});

describe('Task 70', function () {
    it('Удалите одной регуляркой все повторяющиеся слова из строки', function () {
        string = 'dsf xxx xxx xxx xxx xxx sd';
        assert.equal(regs.task70(string), 'dsf xxx sd')
    })
});