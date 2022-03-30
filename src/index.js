/**
 * let,const
 */

// var var1 = "変数";
// console.log(var1);
// var1 = "変数2";
// console.log(var1);

// let var2 = "let";
// console.log(var2);
// var2 = "letの上書き";
// console.log(var2);
// let var2 = "letの再宣言";
// console.log(var2);

// const var3 = "const";
// console.log(var3);
// var3 = "const上書き";

//constは配列やオブジェクトのプロパティを上書きできる
// const var4 = {
//   name: "aiueo",
//   age: 25
// };
// var4.name = "kakikukeko";
// console.log(var4.name);

// const var5 = ["dog", "cat"];
// var5[1] = "bird";
// var5.push("monkey");
// console.log(var5);

/**
 * テンプレート文字列
 * バッククオート、${変数}を使う
 */
// const name = "tom";
// const message = `私の名前は${name}です。`;
// console.log(message);

/**
 * アロー関数
 */

//従来の関数
//  function func1(str){
//    return str;
//  }

//  従来の関数(関数を変数にする)
//  const func2 = function(str){
//    return str;
//  };

//  console.log(func2("もじれ"));

//  //アロー関数
//  const func3 = (str) => {
//    return str;
//  };
// 処理が一行で終わり値を返す場合かっことreturnを省略できる
// const func4 = (str) => str;

//  console.log(func4("aaa"));

/**
 * 分割代入
 */

// const myProfile = {
//   name: "tom",
//   age: 25
// };
//オブジェクトのプロパティを取り出せる。myProfile.nameのようにオブジェクトを毎回指定する手間が省ける
// const {name,age} = myProfile;
// const message1 = `名前は${name}です。年齢は${age}です。`;
// console.log(message1);

// const myProfile = ["tom",25];
// //配列の要素を変数に格納して取り出す。順番が大切。
// const [name,age] = myProfile;
// const message3 = `名前は${name}です。年齢は${age}です。`;
// console.log(message3);

/**
 * デフォルト値
 */
//関数の引数や分割代入の変数に = をつけると値がない場合のデフォルト値を設定できる。
// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん。`);
// sayHello();

/**
 * スプレット公文
 */

//配列の展開: 配列の要素を全て取り出す
// const arr1 = [1,2];
// console.log(...arr1);
// const sumFunc = (num1,num2) => console.log(num1+num2);
// sumFunc(...arr1);

//まとめる
//num1は1,num2は2,...arr3は分割代入で割り当てられた3,4,5の配列。
// const arr2 = [1,2,3,4,5];
// const [num1,num2,...arr3] = arr2;
// console.log();

//配列のコピー、結合
//変数に配列をそのまま代入すると参照が同じになるため不具合の元になる
// const arr4 = [10,20];
// const arr5 = [30,40];

// const arr6 = [...arr4];
// console.log(arr6);
// const arr7 = [...arr4,...arr5];
// console.log(arr7);

/**
 * map,filterを使った配列処理
 */

//配列.map(callback): 配列の要素を１つずつ取り出してcallbackを実行、新しい配列を戻り値で返す。
//callbackの第２引数で要素の添え字を取得できる
// const nameArr = ["佐藤", "田中", "鈴木"];
//  const nameArr2 = nameArr.map((name,index) => {
//    console.log(`${index + 1}番目は${name}です。`);
//  });

//配列.filter(callback): callbackの条件にあった要素だけ返して配列を作成する。
// const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

/**
 * 三項演算子
 */

//条件式 ? trueの場合 : falseの場合; : 条件式がtrueならtrueの場合を、falseならfalseの場合の値を返す
// const num = 2000;
// const formattedNum = typeof num === "number" ? num.toLocaleString() : "数字を入力してください";
// console.log(formattedNum);

/**
 * 論理演算子
 */

// || : 左側がfalseなら右側を返す
// const num = 100;
// const fee = num || "金額が未設定です";
// console.log(fee);

// && : 左側がtrueなら右側を返す
// const num2 = 200;
// const fee2 = num2 && "金額が設定されています";
// console.log(fee2);
