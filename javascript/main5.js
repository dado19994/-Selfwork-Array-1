// SELFWORK FUNZIONI 4

// function isPalindrome(str) {
    
//     let cleanedStr = str.replace(/\W/g, "").toLowerCase();
    
    
//     let reversedStr = cleanedStr.split("").reverse().join("");
    
//     return cleanedStr == reversedStr;
// }


// let input = "i topi non avevano nipoti";
// console.log(isPalindrome(input)); 

// spiegazione esercizio SELFWORK FUNZIONI 4
// function controlString(stringa){
//     stringa = stringa.replace(/\W/g, "");
    
//     let reversed = stringa.split("").reverse().join("");

//     if(stringa == reversed){
//         return true
//     }else{
//         return false
//     }
    
// }

// console.log(controlString('i topi non avevano nipoti'));


// SELFWORK ARRAY 1

// ordine decrescente

let numbers = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4, 12, 25];

numbers.sort((a, b)=> b - a);

console.log(numbers);

// ordine crescente

let num = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4, 12, 25];

num.sort((a, b)=> a - b);

console.log(num);




