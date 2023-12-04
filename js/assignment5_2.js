"use strict";
let libraryBooks = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1235 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4268 },
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 4268 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3257 }
    ];
    1. 
    // o addBook, which will take title, author, and libraryID as inputs. It will create a new book object and add it to the
    // library. addBook should return the newly created book.
    // o getTitles, which will return all the book titles in libraryBooks in an alphabetically ordered array.
    // o findBooks, which will take the keyword of title as input. It will find books which contain the given keyword in 
    // the title and return books alphabetically ordered by the author

  function addBook(title, author, libraryID){
    let newBook = {
        title: title, 
        author: author, 
        libraryID: libraryID
    };
    libraryBooks.push(newBook);
    return newBook;
  }
  console.log(addBook("Gone with the wind", "Alexander", 311511));
  function getTitles(libraryBooks){
    let titles = [];
    for(let i=0; i<libraryBooks.length; i++){
        titles.push(libraryBooks[i].title);
    }
    return titles.sort();
}
console.log(getTitles(libraryBooks));
function findBooks(libraryBooks, keyword){
    let books = [];
    for(let i=0; i<libraryBooks.length; i++){
        if(libraryBooks[i].title.includes(keyword)){
            books.push(libraryBooks[i]);
        }
    }
    return books.sort((a, b) => {
        if(a.author < b.author) return -1;
        if(a.author > b.author) return 1;
        return 0;
    })
}
console.log(findBooks(libraryBooks, "Gone"));

// 2. 
// Write your own version of Array.map. Write a function, myMap(arr, fun) that takes an array and a function as 
// arguments and returns a new array that is formed by applying the function to each element of the array and saving 
// the result in the new array. Do not use the Array.map method in your code.
function myMap(arr, fun){
    let newArr = [];
    for(let i=0; i<arr.length; i++){
        newArr.push(fun(arr[i]));
    }
    return newArr;
}
//this is just for checking the abpve funstion
function add(arr){
    return arr+1;
}
const arr = [1, 2, 3, 4, 5];
console.log(myMap(arr, add));