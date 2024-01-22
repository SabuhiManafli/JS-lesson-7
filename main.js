// ! Change date format
const inputDate = prompt("Tarix əlavə edin");

function displayDayMonthYear(inputDate) {
    const date = new Date(inputDate);

    if (isNaN(date.getTime())) {
        console.log("Yanlış tarix");
    } else {
        const day = date.getDate();
        const month = date.getMonth() + 1; 
        const year = date.getFullYear();

        console.log(`${day}/${month}/${year}`);
    }
}

displayDayMonthYear(inputDate);

let a = [1, 2, 3, 4, 5];
let b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

let same = a.filter(num => b.includes(num));

console.log("Eynilər", same);


