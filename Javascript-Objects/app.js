// Chapter1 ALERT



// alert("Error! Plz Enter a Valid Password.")


// alert("Welcome to JS Land...\nHappy Coding!")

// alert("Welcome to JS Land...\nPrevent this page from creating additional dialogs")

// alert(`Hello... I can run JS through my web browser ${console.log("Hello... I can run JS through my web browser")}`)
//console.log(alert("Hello... I can run JS through my web browser`s"))



// Chapter2 VARIABLES FOR STRINGS 


// var name = ("Jhone Doe")
// var age = ("15 Years Old")
// var edu = ("Certified Mobile Application Development")
// alert(name)
// alert(age)
// alert(edu)


// var exp = (" PIZZA \n PIZZ \n PIZ \n PI \n P")
// alert(exp)

//var email = "My email address is example"+"@example.com"
//alert(email)

// var bookname = "I am trying to learn from the book A smarter\nway to learn JavaScript "
// alert(bookname)

// var exp = "<h3>Yah! I can write HTML content through Javascript<h3/>"
// document.write(exp)

// var des = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬” "
// alert(des)


// Chapter3 VARIABLES FOR NUMBERS 

// var age = "I am 15 years Old"
// alert(age)

// var prom = +prompt("how many time you visit this site")
// alert(`You have visited this site ${prom} times`)

// var pro = +prompt("Enter Your Birth Year")
// document.write(`My Birth Year is ${pro} <br/> Data type of my declared variable is number`)

// var brand = "GhazianiStore@gmail.com"
// var username = prompt("Enter Your Name")
// var product = prompt("Enter The Product Name")
// var quan = prompt("Enter the Quantity")
// document.write(username + " Ordered " + quan+product + " on " + brand)



// Chapter3 VARIABLE NAMES: LEGAL & ILLEGAL


// 5 Legal Variables

// var $username = "My name is Hassan"
// var _userAge = "I am 15 Years old"
// var myVar = "This is my Variable"
// var myAlert = "This is my Alert"
// var myConsole = "This is my Console"


// 5 Illegal Variables

// var !myExclamationMark = "This is my Exclamation Mark"
// var ?questionMark = "This is my Question Mark"
// var 123myNumber = "This is my Numbers"
// var var = "This is my Var"
// var my space = "Variable cannot contain space"


// var head = "<h1>Rules for naming JS variables<h1/>"
// var text1 = "Variable names can only contain number , $ and ______ For example $my_1stVariable "
// var text2 = "Variables must begin with a letter, $ or _____. For example $name, _name or name "
// var text3 = " Variable names are case sensitive "
// var text4 = " Variable names should not be JS keywords"
// var result = head + "<br>" + text1 + "<br>" + text2 + "<br>" + text3 + "<br>" + text4
// document.write(result)




// Chapter4 MATH EXPRESSIONS


// Plus


// var num1 = +prompt("Enter Number One")
// var num2 = +prompt("Enter Number Two")

// var sum = num1 + num2

// document.write("Sum of " + num1 + " and " + num2 + " is " + sum)


// Sub

// var num1 = +prompt("Enter Number One")
// var num2 = +prompt("Enter Number Two")

// var sum = num1 - num2

// document.write("Sum of " + num1 + " subtract from " + num2 + " is " + sum)

// div

// var num1 = +prompt("Enter Number One")
// var num2 = +prompt("Enter Number Two")

// var sum = num1 / num2

// document.write("Sum of " + num1 + " divided by " + num2 + " is " + sum)


//mul 

// var num1 = +prompt("Enter Number One")
// var num2 = +prompt("Enter Number Two")

// var sum = num1 * num2

// document.write("Sum of " + num1 + " multiple by " + num2 + " is " + sum)



// var text = "Total Cost to Buy "
// var text2 = "tickets to a movie is Rs."
// var tickets = +prompt("Enter tickets quantity")

// var result = text + tickets + text2 + 600 * tickets
// document.write(result)



//tables


// var table = +prompt("Enter Number for Table")

// var part1 = table + " x " + 1 + "=" + table*1
// var part2 = table + " x " + 2 + "=" + table*2
// var part3 = table + " x " + 3 + "=" + table*3
// var part4 = table + " x " + 4 + "=" + table*4
// var part5 = table + " x " + 5 + "=" + table*5
// var part6 = table + " x " + 6 + "=" + table*6
// var part7 = table + " x " + 7 + "=" + table*7
// var part8 = table + " x " + 8 + "=" + table*8
// var part9 = table + " x " + 9 + "=" + table*9
// var part10 = table + " x " + 10 + "=" + table*10

// var result = ( part1 + "<br>" + part2 + "<br>" + part3 + "<br>" + part4 + "<br>" + part5 + "<br>" + part6 + "<br>" + part7 + "<br>" + part8 + "<br>" + part9 + "<br>" + part10)
// document.write(result)


// Bill 

// var price = +prompt("Enter Prices of Rice")
// var quan = +prompt("Enter quantity of Rice")
// var price1 = +prompt("Enter Prices of Wheat")
// var quan1 = +prompt("Enter quantity of Wheat")
// var result = "Price of Rice is " + price + "<br>" + "Quantity of Rice is " + quan + "<br>" + "Price of Wheat is " + price1 + "<br>" + "Quantity of Wheat is " + quan1 + "<br>" + "Shipping Charges " + 100 + "<br>" + "<br>"
// var calculation = price*quan + price1*quan1 + 100
// var bill = "Total Cost of your Order is " + calculation 

// document.write(result + bill )



//Marksheet

// var tmarks = +prompt("Enter total Marks")
// var Omarks = +prompt("Enter Obtained Marks")
// var per = Omarks*100/tmarks
// var result = "Total Marks : " + tmarks + "<br>" + "Obtained Marks : " + Omarks + "<br>" + "<br>" + "Percentage : " + per

// document.write(result)




// var dollar = 10*104.80;
// var riyal = 25*28;
// var total = dollar + riyal
// var result = "Total Currency in PKR: " + total
// document.write(result)



// Age Calculator


// var useryear = prompt("Enter Your Birth Year")
// var currentyear = 2024;
// var total = currentyear - useryear
// var result ="Current Year: " + 2024 + "<br>" + "Birth Year: " + useryear + "<br>" + "Your Age is: "+ total

// document.write(result)





// Chapter6 MATH EXPRESSIONS


// var a = 2, b = 1; 
// var result = --a - --b + ++b + b--; 
// document.write(result)




// Chapter7 USER INPUT & CONDITIONAL STATEMENT


// var a = 4; 
// if (++a === 5){ 
// console.log("given condition for variable a is true"); 
// } 


// var b = 82; 
// if (b++ === 83){ 
// alert("given condition for variable b is true"); 
// } 



// var c = 12; 
// if (c++ === 13){ 
// alert("condition 1 is true"); 
// } 



// if (c === 13){ 
// alert("condition 2 is true"); 
// } 



// if (++c < 14){ 
// alert("condition 3 is true"); 
// } 



// if(c === 14){ 
// alert("condition 4 is true"); 
// } 



// var materialCost = 20000; 
// var laborCost = 2000; 
// var totalCost = materialCost + laborCost; 
// if (totalCost === laborCost + materialCost){ 
// alert("The cost equals"); 
// }


// if (true){ 
// alert("True"); 
// } 



// if (false){ 
// alert("False"); 
// }

// Chapter8-12 IF…ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS

// var totalmarks = prompt("Enter Total Marks")
// var Obtainedmarks = prompt("Enter Obtained Marks")
// var Percentage = Obtainedmarks/totalmarks*100

// if( Percentage >= 80 && Percentage <= 100){
//     document.write("Aone")
// }else if(Percentage >= 60 && Percentage <= 79){
//     document.write("A-Grade")
// }else if(Percentage >= 50 && Percentage <= 59){
//     document.write("B-Grade")
// }else{
//     document.write("Fail")
// }





// var hour = 13; 
// if (hour < 18) { 
//     document.write("Good day");
// }else{
//     document.write("Good evening"); 
// } 





// var time = +prompt("Enter Time")

// if( time >= 0 && time < 6){
//     document.write("Good Night")
// }else if( time > 5  && time < 12){
//     document.write("Good Morning")
// }else if( time > 11  && time < 18){
//     document.write("Good AfterNOON")
// }else if( time > 17  && time < 24){
//     document.write("Good Evening")
// }





// var num1 = prompt("Enter the Number to know even or odd Number")
// if(num1%2 ===0){
//  console.log(num1 + " is even Number")
// }else{
//  console.log(num1 + " is odd Number");
// }


// if(age > 18){
//  alert("Old enough")
// }else{
//  alert("Too young")
// }
    


// var username = prompt("Enter Your Name").toLowerCase

// if(username =="Mohib"){
//   alert("▬▬▬╳ Welcome Mohib Ghaziani ╳▬▬▬")
// }else{

// }


// Chapter 13-15 ARRAYS 


// var mix = ["Hassan" , 15 , true]
// console.log(mix);



// var marks = [90 , 79 , 95 , 67 , 88]
// console.log(marks);



// var boolean = [true , false]
// console.log(boolean);



// var qualification = [ "SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"]
// document.write(qualification)




// var cities = ["Karachi ","Lahore ","Multan"]
// document.write(cities + "<br>")
// document.write(cities[0],cities[2])



// var arr = ["This","is","my","cat"];
// document.write(arr + "<br>")
// document.write(arr[0 ],arr[ 1 ],arr[ 2 ],arr[3])








// var head = document.querySelector("#head")
// var car = document.querySelector("#car")
// var firstIndex = document.querySelector("#first-index")
// var carsArray = ["Audi" , "Volvo" , "Ford" , "Lamborgini"]

// car.innerHTML = carsArray
// head.innerHTML += `First index of the array: ${carsArray.indexOf("Audi")}<br>`
// head.innerHTML += `Car at first index of the array: ${carsArray[0]}<br>`
// head.innerHTML += `First index of the array: ${carsArray.indexOf("Lamborgini")}<br>`
// head.innerHTML += `Car at first index of the array: ${carsArray[3]}<br>`


 // Question 11


//  var names = ["Michael" , "John" , "Tony"]
//  var marks = [320 , 230 , 480]
// var h1 = document.querySelector("h1")

// h1.innerHTML += `Score of ${names[0]} is ${marks[0]}. Percentage: ${marks[0] / 500 * 100}% <br>`
// h1.innerHTML += `Score of ${names[1]} is ${marks[1]}. Percentage: ${marks[1] / 500 * 100}% <br>`
// h1.innerHTML += `Score of ${names[2]} is ${marks[2]}. Percentage: ${marks[2] / 500 * 100}%`


 // Question 12

//  var beginnigColour = prompt("Enter the Colour to add in Beginnig") 
//  var endColour = prompt("Enter the Colour to add in End")
//  var onecolourbeginning = prompt("Enter One Colour to add in Beginning")
//  var secondcolourbeginning = prompt("Enter Second Colour to add in Beginning")

// var colours = []
// colours.unshift(beginnigColour)
// colours.push(endColour)
// colours.unshift(onecolourbeginning)
// colours.unshift(secondcolourbeginning)
// colours.shift()
// colours.pop()
// console.log(colours);

// var addColourindex = prompt("Enter the Index Number to add Colour")
//  var addColourEverywhere = prompt("Enter the Colour to put in this Index Number")
//  colours.splice(addColourindex , 1 , addColourEverywhere); 
//  console.log(colours);

//  var removeColourIndex = prompt("Enter the Index Number to remove Colour")
//  var removeColourEverywhere = prompt("Enter the number how many you remove in this Index Number")
//  colours.splice(removeColourIndex , removeColourEverywhere)
//  console.log(colours);
 
 
 
 // Question 13



// var h1 = document.querySelector("h1")
// var scores = [320 , 230 , 480 , 120]
// h1.innerHTML += `Scores of Students${scores}<br>`
// scores.sort()
// h1.innerHTML += `Ordered Scores of Students${scores}`


 // Question 14


//  var orderfruits = document.querySelector("#orderfruits")
// var fruitshtml = document.querySelector("#fruitshtml")
//  var fruits = ["strawbery" , "apple" , "orange" , "banana"]
//  fruitshtml.innerHTML += fruits


//  fruits.sort()
//  orderfruits.innerHTML = fruits
