// //1
// const topNumber = (num1: number, num2: number): number => {
//   if (num1 > num2) {
//     return num1;
//   }
//   return num2;
// };
// //2
// function printBigger(num1: number, num2: number): void {
//   num1 > num2 ? console.log(num1) : console.log(num2);
// }
// //3
// const typeNumber = (num: number): string => {
//   let numType = "Odd";
//   if (num % 2 == 0) {
//     numType = "dual";
//     return numType;
//   }
//   return numType;
// };
// //4
// const lengthString = (str: string): number => {
//   return str.length;
// };
// //5
// const createArray = (num: number): number[] => {
//   let array: number[] = [];
//   for (let i: number = 0; i < num; i++) {
//     array[i] = i;
//   }
//   return array;
// };
// //6
// const highestInArray = (arr: number[]): number => {
//   let max = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// };
// //7
// interface Person {
//   name: string;
//   age: number;
//   isStudent: boolean;
// }
// //8
// const printPerson = (p: Person) => {
//   console.log(p.name + " " + p.age + " " + p.isStudent);
// };
// //9
// const isMinor = (p: Person): boolean => {
//   if (p.age < 18) {
//     return false;
//   }
//   return true;
// };
// //10
// interface Book {
//   Title: string;
//   Author: string;
//   Year: number;
// }
// //11
// type Reader = Person & {
//   favoriteBook: Book;
// };
// ///12
// const printOldestReader = (read: Reader[]) => {
//   let up = read[0].age;
//   let index = 0;
//   for (let i: number = 0; i < read.length; i++) {
//     if (read[i].age > up) {
//       up = read[i].age;
//       index = i;
//     }
//   }
//   return read[index];
// };
// //13
// const printOldestBook = (read: Reader[]) => {
//   let up = read[0].favoriteBook.Year;
//   let index = 0;
//   for (let i: number = 0; i < read.length; i++) {
//     if (read[i].favoriteBook.Year > up) {
//       up = read[i].favoriteBook.Year;
//       index = i;
//     }
//   }
//   return read[index].favoriteBook;
// };
// //2.1
// const sumEvenInArray = (arr: number[]): number => {
//   let sum = 0;
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       sum += arr[i];
//     }
//   }
//   return sum;
// };
// //2.2
// const rectangleCreator = (hight: number, width: number): number => {
//   return hight * width;
// };
// //2.3
// const isPalindrome = (str: string): boolean => {
//   const newStr = str.split(" ").join("");
//   for (let i = 0; i < newStr.length; i++) {
//     if (newStr[i] != newStr[newStr.length - i - 1]) {
//       return false;
//     }
//   }
//   return true;
// };
// //2.4
// const firstCharUpper = (str: string[]): string[] => {
//   let newStrArray = new Array<string>(str.length);
//   for (let i = 0; i < str.length; i++) {
//     newStrArray[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
//   }
//   return newStrArray;
// };
// //2.5
// const newIonicArray = (num: number[]): number[] => {
//   const newArray = [...new Set(num)];
//   return newArray;
// };
// //2.6
// const editMen = (menObj: men): menInitial => {
//   const newMen: menInitial = {
//     firstInitial: menObj.firstName.charAt(0).toUpperCase(),
//     lastInitial: menObj.lastName.charAt(0).toUpperCase(),
//   };
//   return newMen;
// };
// interface men {
//   firstName: string;
//   lastName: string;
// }
// interface menInitial {
//   firstInitial: string;
//   lastInitial: string;
// }
// //2.7
// interface menAge {
//   name: string;
//   age: number;
// }
// const newMen1: menAge = {
//   name: "fff",
//   age: 89,
// };
// const newMen2: menAge = {
//   name: "ooo",
//   age: 75,
// };
// const newMen3: menAge = {
//   name: "ppp",
//   age: 80,
// };
// const ageAverage = (menAgeObj: menAge[]): number => {
//   let sum = 0;
//   for (let i = 0; i < menAgeObj.length; i++) {
//     sum += menAgeObj[i].age;
//   }
//   return sum / menAgeObj.length;
// };
// //2.8
// const maxAndMinValue = (num: number[]): minMax => {
//   const newMinMax: minMax = {
//     min: num[0],
//     max: num[0],
//   };
//   for (let i = 0; i < num.length; i++) {
//     if (num[i] > newMinMax.max) {
//       newMinMax.max = num[i];
//     }
//     if (num[i] < newMinMax.min) {
//       newMinMax.min = num[i];
//     }
//   }
//   return newMinMax;
// };
// interface minMax {

//   min: number;
//   max: number;
// }
// //2.9
// const reverseArray = (num: unknown[]) => {
//   for (let i = 0; i < num.length; i++) {
//     if (typeof num[num.length - i - 1] == "string") {
//       console.log(num[num.length - i - 1]);
//     } else if (typeof num[num.length - i - 1] == "boolean") {
//       console.log(num[num.length - i - 1]);
//     } else if (typeof num[num.length - i - 1] == "bigint") {
//       console.log(num[num.length - i - 1]);
//     } else if (typeof num[num.length - i - 1] == "number") {
//       console.log(num[num.length - i - 1]);
//     } else if (typeof num[num.length - i - 1] == "object") {
//       console.log(num[num.length - i - 1]);
//     } else if (typeof num[num.length - i - 1] == "symbol") {
//       console.log(num[num.length - i - 1]);
//     }
//   }
// };

//console.log(topNumber(2,4))
//printBigger(2,4)
//console.log(typeNumber(5))
//console.log(lengthString("ggg"))
//console.log(createArray(5))
//console.log(highestInArray([2, 3, 4, 8, 6, 9, 2]));
// const myUser: Person = {
//   name: "dd",
//   age: 23,
//   isStudent: true,
// };
// const myBook: Book = {
//   Title: "aaa",
//   Author: "bbb",
//   Year: 1998,
// };
// printPerson(myUser)
//console.log(isMinor(myUser))
//console.log(sumEvenInArray([2,4,6,5,7]))
// console.log(rectangleCreator(5,3))
// console.log(isPalindrome("abccba"))
//console.log(firstCharUpper(["sdfg","dfgg","aaaa"]))
// console.log(newIonicArray([5,3,9,6,5,8,3]))
// const men1: men = {
//   firstName: "david",
//   lastName: "levi",
// };
// console.log(editMen(men1));
// console.log(ageAverage([newMen1,newMen2,newMen3]))
// console.log(maxAndMinValue([2,3,5,6,4,9,8,7,41]))
// reverseArray([25, "kkk", 85, false]);

// Step 1: נתון לכם אינאם - אתם רשאים להפוך אותו למשהו אחר
export enum ItemType {
  Book = "book",
  DVD = "dvd",
}

// Step 2:  ספר צריך להכיל שדות
interface Book {
  type: ItemType.Book;
  title: string;
  author: string;
}
interface DVD {
  type: ItemType.DVD;
  title: string;
  duration: number;
}

// Test data
const libraryItems: (Book | DVD)[] = [
  {
    type: ItemType.Book,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
  },
  { type: ItemType.DVD, title: "Inception", duration: 148 },
  { type: ItemType.Book, title: "To Kill a Mockingbird", author: "Harper Lee" },
  { type: ItemType.DVD, title: "Avatar", duration: 162 },
  { type: ItemType.Book, title: "Go Set a Watchman", author: "Harper Lee" },
];

// Step 3: פונקציה מקבלת מערך של פריטים, ופונקצית פילטור. ומחזירה מערך מפולטר של פריטים
function filterItems<T>(items: T[], filterFn: (item: T) => boolean): T[] {
  const newArray: T[] = items.filter((item) => filterFn(item));
  return newArray;
}
// Step 4: הפונקציה מקבלת מערך של פריטים ומדפיסה את כל המידע הרלוונטי לגבי כל פריט
function printItemsData<T extends Book | DVD>(items: T[]) {
  for (const item of items) {
    if (item.type === ItemType.Book) {
      console.log(`Book - Title: ${item.title}, Author: ${item.author}`);
    } else if (item.type === ItemType.DVD) {
      console.log(`DVD - Title: ${item.title}, Duration: ${item.duration}`);
    }
  }
}
// Step 5:
function printAllData<T extends Book | DVD>(items: T[]) {
  for (const item of items) {
    if (item.type === ItemType.Book) {
      console.log(
        `type : ${item.type},Book - Title: ${item.title}, Author: ${item.author}`
      );
    } else if (item.type === ItemType.DVD) {
      console.log(
        `type : ${item.type},DVD - Title: ${item.title}, Duration: ${item.duration}`
      );
    }
  }
}
//printAllData(libraryItems)
// Step 6: ממשו את פונקצית הפילטור כך שתחזיר סרטים ארוכים משעתיים והדפיסו את המערך
const filteredDVDs = filterItems(
  libraryItems,
  (item) => item.type === ItemType.DVD && item.duration > 120
);
//console.log(filteredDVDs);
// Step 7:  Harper Lee ממשו את פונקצית הפילטור כך שתחזיר רק ספרים של
const filterByAuthor = filterItems(
  libraryItems,
  (item) => item.type === ItemType.Book && item.author === "Harper Lee"
);
// console.log(filterByAuthor)

// 2.1
//1
// צור פונקציה גנרית ותנו לה שם מתאים שלוקחת שני ארגומנטים מסוגים שונים ומחזירה מערך המכיל את שני הארגומנטים.
// תפקיד הפונקציה, ליצור צמד
// ['asd',3]
function towType<T, N>(v1: T, v2: N) {
  return [v1, v2];
}
// console.log(towType("zevi",31))
//2.2
function dataByKey<T, K extends keyof T>(obj: T, kay: K) {
  return obj[kay];
}
// const pers = {
//     name: 'John',
//     age: 30,
//     city: 'New York',
//   };
// console.log(dataByKey(pers,'city'))
//2.3

//מתקדם
//צור פונקציה גנרית שמקבלת מערך של אובייקטים ואובייקט כארגומנטים. הפונקציה תוסיף את האובייקט שהתקבל לכל איבר במערך
// עליכם לקרוא על ולהשתמש ב: Record
// function addToObject<T extends Record<string,any>>(arr:T[], obj:T) {
//     for (const item of arr) {
//         Object.assign(item, obj);
//       }
// }

// כתבו פונקציה שמקבלת אובייקט ושם שדה(מפתח).  הפונקציה תחזיר אובייקט חדש בלי המפתח
// קראו על Omit

// כתוב פונקציה שמקבלת אובייקט,מפתח וערך. הפונקציה תחזיר אובייקט חדש עם המפתח והערך שהוזנו לה כשדה חדש באובייקט שהוזן לה
// השתמשו ב &

//game

// בנו תכנית שמדמה את המשחק אבן נייר ומספריים
// התכנית תגדיר מי המנצח לפי חוקיות המשחק
// אבן מנצח מספריים שמנצחות נייר שמנצח אבן

// דגשים
// שחקן  יכול לבחור בין אבן נייר ומספרים בלבד! אך שחקן יכול שלא תהיה לו בחירה
// התכנית יכולה להחזיר את המחרוזות
// 'tie', 'player1', 'player2'
// התשובה חייבת להכיל
// ENUM
// type/interface
// union
// במידה ולשחקן אין בחירה הצג זרקו שגיאה
// ממשו את הפונקציה הוסיפו טיפוסים לפרמטרים ולערך החזרה של הפונקציה

enum options {
  rock = "rock",
  paper = "paper",
  scissors = "scissors",
}
interface player {
  choice: options;
}
type result = "tie" | "player1" | "player2";

function playGame(player1: player, player2: player): result {
  if (player1.choice == player2.choice) {
    return "tie";
  } else if (
    (player1.choice === options.rock && player2.choice === options.scissors) ||
    (player1.choice === options.paper && player2.choice === options.rock) ||
    (player1.choice === options.scissors && player2.choice === options.paper)
  ) {
    return "player1";
  }
  return "player2";
}
const player1:player={choice:options.paper}
const player2:player={choice:options.paper}
const play = playGame(player1, player2);
console.log(play);
// Output: player1 or player2 or tie
