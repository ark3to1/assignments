//! Task 1
// var itemArray = [
//     {
//         name: "juice",
//         price: "50",
//         quantity: "3",
//     },
//     {
//         name: "cookie",
//         price: "30",
//         quantity: "9",
//     },
//     {
//         name: "shirt",
//         price: "880",
//         quantity: "1",
//     },
//     {
//         name: "pen",
//         price: "100",
//         quantity: "2",
//     }
// ]

// var cal1 = (itemArray[0].price * itemArray[0].quantity);
// var cal2 = (itemArray[1].price * itemArray[1].quantity);
// var cal3 = (itemArray[2].price * itemArray[2].quantity);
// var cal4 = (itemArray[3].price * itemArray[3].quantity);

// console.log(cal1);
// console.log(cal2);
// console.log(cal3);
// console.log(cal4);


//! Task 2
// var obj = {
//     name: "ameen",
//     email: "muhammadameenh1@gmail.com",
//     password: "12345",
//     age: 18,
//     gender: "Male",
//     city: "Karachi",
//     country: "pakistan",
// }

// if("age" in obj && "country" in obj == true){
//     console.log("Yes age and country exist in obj");
// } else{
//     console.log("Not found");
// }


//! Task 3

// function Ameen(first, last, age, country){
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.country = country;
// }

// const intro = new Ameen("Muhammad", "Ameen", 18, "Pakistan")
// console.log(intro.age);

//! Task 4



function Area(name, gender, address, education, profession){
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
    
}

function myfun(){
    var personName = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var education = document.getElementById("education").value;
    var profession = document.getElementById("profession").value;


    const myArea = new Area(personName, 23, address, education, profession);
    console.log(myArea);
}
