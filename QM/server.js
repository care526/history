var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var cors = require('express-cors');

var app = express();
//处理json格式解析
app.use(bodyParser.json());
//服务端跨域设置
app.use(cors());
//静态文件的访问
app.use(express.static('./build'));
/*********************************************/
app.post('/care', (req, res) => {
  console.log(req.body)
})
app.post('/result', (req, res) => {
//QM算法的JS实现
// console.log('care');
/*
步骤
1、输入变量个数，1的个数 如：4   2，4，6，7  中间用逗号分隔
2、列出所有的最小项 转化为二进制并分组
*/
//测试程序的总运行时间
// var start = Date.now();

//步骤一
console.log(req.body)
var variableNumber = req.body.num;
var variableArray = req.body.minString;
// var variableNumber = 4;
// var variableArray = [0,1,3,5,7,8,9];
var haksdhjaksjdhasdjk = [];   //保存了极简的质蕴涵二进制数组
//步骤二
//二进制转换数组
function transformTwo (num) {
  //储存二进制每一位的数组
  var remainderArray = [];
  do {
    remainderArray.unshift(num % 2);
    num = Math.floor(num / 2);
  } while (num != 0 && num != 1);
  remainderArray.unshift(num);
  return remainderArray;
}
// console.log(transformTwo(13));

//产生最小项数组函数
function productMinArray (variArray) {  //接收一个数组，返回一个数组
  variArray = variArray.map((x) => {
    x = transformTwo(x);
    for (let i = x.length; i < variableNumber; i++) x.unshift(0);
    return x;
  });
  return variArray;
}
// console.log(productMinArray(variableArray));

//生成最小项列表
function productMinList (minArray) {  //将最小项数组归类
  var tempArray = [];
  //设置每一项的数组
  for (let i = 0; i <= variableNumber; i++) tempArray[i] = [];
  var num = 0;
  for (var m = 0; m < minArray.length; m++) {
    for (var n = 0; n < minArray[m].length; n++) {
      if (minArray[m][n] == 1) num++;
    }
    //可能有的项一个1都没有，下面会对数组的空项进行去除
    tempArray[num].push(minArray[m]);
    num = 0;
  }
  //有可能有的项，整个数组都没有一个，会产生空的数组要消去
  var minList = [];
  for (let i = 0; i < tempArray.length; i++) {
    //判断一个数组是否为空，要用数组的长度来判断，不能和[]来比较
    if (tempArray[i].length != 0) minList.push(tempArray[i]);
  }
  return minList;
}
// console.log(productMinList(productMinArray(variableArray)));

//对比两个数组的差值，差一位的返回一个带true的数组，否则返回false
function compareArray (array1, array2) {
  var number = 0;
  var firstValue = false;
  for (var i = 0; i < array1.length; i++) {
    if (array1[i] != array2[i]) {
      number++;
      if (firstValue == false) firstValue = i;
    }
  }
  if (number == 1) {
    // array1[firstValue] = '*';  
    //引用传值，修改的实际上是原数据，对后续数据的使用会产生影响
    let newArray = [...array1];
    newArray[firstValue] = '*';
    return [true, newArray];
  }
  return false;
}
//对比两个数组的差值，差一位的返回true，否则返回false
function compareArray2 (array1, array2) {
  var number = 0;
  var firstValue = false;
  for (var i = 0; i < array1.length; i++) {
    if (array1[i] != array2[i]) {
      number++;
      if (firstValue == false) firstValue = i;
    }
  }
  if (number == 1) {
    return true;
  }
  return false;
}
// console.log(compareArray([1,'*',0,'*'], [1,1,0,'*']))
//对二维数组进行一维的去重（因为数组是引用类型，不能直接比较）
function arrayRepeat (arrayTwo) {
  var newArrayTwo = [];
  var arrayString = arrayTwo.map(x => x.join(''));
  arrayString = Array.from(new Set(arrayString));
  var result = arrayString.map((x) => {
    x = x.split("");
    for (let i = 0; i < x.length; i++) {
      if (x[i] != '*') {
        x[i] = Number(x[i]);
      }
    }
    return x;
  });
  return result;
}
// console.log(arrayRepeat([[1,2],[1,2],[1,3]]))
//产生下一组新的最小项数组的函数 根据旧数组生成新的数组
function newMinList (oldMinList) {
  var newMinArray = [];
  for (var n = 0; n < oldMinList.length - 1; n++) {
    for (var m = 0; m < oldMinList[n].length; m++) {
      for (var l = 0; l < oldMinList[n + 1].length; l++) {
        let result = compareArray(oldMinList[n][m], oldMinList[n + 1][l]);
        if (result != false) newMinArray.push(result[1]);
      }
    }
  }
  //数组要去重(引用类型的数据时不能直接比较的)
  return productMinList(arrayRepeat(newMinArray));
}
// console.log(newMinArray(productMinList(productMinArray(variableArray))));

//生成包含质蕴涵项前的数组
function contain (initializingList) {
  //通过生成的每组最小项数组生成质蕴涵项
  var Z_contain = [];
  var result;
  Z_contain.push(initializingList);
  do {
    result = newMinList(initializingList);
    if (result.length != 0) Z_contain.push(result);
    initializingList = result;
  } while (result.length != 0)
  //处理该数组，简化重复的项
  for (let i = 1; i < Z_contain.length; i++) {
    for (let n = 0; n < Z_contain[i].length; n++) {
      for (let m = 0; m < Z_contain[i][n].length; m++) {
        //比较项
        for (let x = 0; x < Z_contain[i - 1].length; x++) {
          for (let y = 0; y < Z_contain[i - 1][x].length; y++) {
            if (compareArray2(Z_contain[i][n][m], Z_contain[i - 1][x][y]) == true) {
              // Z_contain[i - 1][x].splice(y, 1);
              //这个地方有个问题：把重复项删除之后，其他的变量的位置会向前进，导致位置发生了变化
              //循环到的数据就是错误的
              Z_contain[i - 1][x][y] = "deteled";
            }
          }
        }
      }
    }
  }
  var Z_containFinall = [];
  //生成质蕴涵项
  for (let i = 0; i < Z_contain.length; i++) {
    for (let n = 0; n < Z_contain[i].length; n++) {
      for (let m = 0; m < Z_contain[i][n].length; m++) {
        if (Z_contain[i][n][m] != 'deteled') Z_containFinall.push(Z_contain[i][n][m])
      }
    }
  }
  haksdhjaksjdhasdjk = [...Z_containFinall];
  for (let i = 0; i < Z_containFinall.length; i++) {
    Z_containFinall[i] = transformNumber(Z_containFinall[i]);
  }
  return Z_containFinall;
}
// console.log(contain(productMinList(productMinArray(variableArray))));

// console.log(compareArray([1,'*',0,'*'], contain(productMinList(productMinArray(variableArray)))[1][1][0]))

//将二进制数组转化为质蕴涵项数组
function transformNumber (twoArray) {  //如：[1,*,1,*]
  var length = twoArray.length;
  //固定的运算结果，非*的
  var result1 = 0;
  //记录*在数组中的位置
  var position = [];
  //得到动态*的值的总和的数组
  var result2 = [];
  for (let i = 0; i < length; i++) {
    if (twoArray[i] == '*') {
      position.push(length - 1 -i)
    } else {
      result1 = result1 + Math.pow(2, length - 1 -i) * twoArray[i];
    }
  }
  for (let i = 0; i < position.length; i++) {
    result2[i] = [];
    result2[i][0] = Math.pow(2, position[i]) * 0;
    result2[i][1] = Math.pow(2, position[i]) * 1;
  }
  if (position.length == 1) {
    return [result1 + result2[0][0], result1 + result2[0][1]]
  }
  result2 = doExchange(result2);
  //总的结果
  var result = [];
  for (let i = 0; i < result2.length; i++) {
    result[i] = result1;
    for (let m = 0; m < result2[i].length; m++) {
      result[i] += Number(result2[i][m]);
    }
  } 
  return result;
}
// console.log(transformNumber([1,'*',1,0]));

//执行组合排列的函数
function doExchange(arr){
  var len = arr.length;
  // 当数组大于等于2个的时候
  if(len >= 2){
      // 第一个数组的长度
      var len1 = arr[0].length;
      // 第二个数组的长度
      var len2 = arr[1].length;
      // 2个数组产生的组合数
      var lenBoth = len1 * len2;
      //  申明一个新数组,做数据暂存
      var items = new Array(lenBoth);
      // 申明新数组的索引
      var index = 0;
      // 2层嵌套循环,将组合放到新数组中
      for(var i=0; i<len1; i++){
          for(var j=0; j<len2; j++){
              items[index] = arr[0][i] +"|"+ arr[1][j];
              index++;
          }
      }
      // 将新组合的数组并到原数组中
      var newArr = new Array(len -1);
      for(var i=2;i<arr.length;i++){
          newArr[i-1] = arr[i];
      }
      newArr[0] = items;
      // 执行回调
      return doExchange(newArr);
  }else{
      return arr[0].map((x) => {
        return x.split('|');
      });
  }
}
//以下两个函数是生成所有的组合的函数
function combo (arr, num) {
  var result = [];
  var range = function(r, _arr) {
    if (r.length == num) {
      result.push(r)
    } else {
      let l = r.length;
      for (var i = 0, len = _arr.length - num + l; i <= len; i++) {
        range(r.concat(_arr[i]), _arr.slice(i + 1))
      }
    }
  }
  range([], arr);
  return result
}
function comboFin (length) {
  var arr = [];
  for (let i = 0; i < length; i++) {
    arr[i] = i;
  }
  var result = [];
  for (let i = 1; i <= arr.length; i++) {
    result = result.concat(combo(arr, i));
  }
  return result;
}
// console.log(comboFin(7).length)
//提取实质蕴含项XXXX   直接用排序的方式检测符合原数组的最小　的项数，就是最终的结果
function draw (arr) {
  var len = arr.length;
  var data = [];
  var group, temp = [];
  for (let i = 0; i < len; i++) {
    data[i] = i.toString();
  }
  var group = comboFin(len);
  for (let i = 0; i < group.length; i++) {
    for (var m = 0; m < group[i].length; m++) {
      temp = temp.concat(arr[group[i][m]]);
    }
    temp = Array.from(new Set(temp));
    if (temp.length == variableArray.length) return group[i];
    temp = [];
  }
}
// console.log(draw(contain(productMinList(productMinArray(variableArray)))))

var finallyResult = draw(contain(productMinList(productMinArray(variableArray))));

var contain1 = contain(productMinList(productMinArray(variableArray)));

// console.log(1)

function care (arr) {
  var dictionary = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N'];
  var tempString = '';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
      tempString += dictionary[i];
    } else if (arr[i] == 0) {
      tempString += dictionary[i];
      tempString += "'";
    }
  }
  return tempString;
}
// console.log(care([1,0,1,'*']))

function care1 (arr) {
  var tempString = '';
  for (let i = 0; i < arr.length; i++) {
    tempString += care(arr[i]);
    tempString += ' + ';
  }
  tempString = tempString.slice(0, -3);
  return tempString;
}
// console.log(care1([1,1,1,'*'], [1,'*',1,'*']))

var fffffffffffff = [];
for (let i = 0; i < finallyResult.length; i++) {
  fffffffffffff.push(haksdhjaksjdhasdjk[finallyResult[i]]);
}
console.log(care1(fffffffffffff))
res.send(care1(fffffffffffff));
});

//监听3000端口
app.listen(3001);