

var cartData = JSON.parse(localStorage.getItem("bookItem")) || [];

let userData = JSON.parse(localStorage.getItem("OTP")) || [];


let email = userData[3];
document.getElementById("email_value").innerText = email;
document.getElementById("email_div").innerText = email;


var Name = cartData[0].name;

document.getElementById("item_name").innerText =Name;
console.log(Name); 

var img = cartData[0].mainImg;

document.getElementById("item_image").src = img;

var strike = cartData[0].strikeOffPrice;

document.getElementById("Total").innerText = `Rs ${strike}`;

var Price = cartData[0].price;
document.getElementById("end_price").innerText = `Rs ${Price}`;

var discount = strike-Price;

document.getElementById("discount").innerText =`Rs ${discount}`; ;



// ***************************************************
document.getElementById("btn").innerText = `Pay Rs ${Price}`


document.getElementById("btn").addEventListener("click",function(el){
    Check();
})
let Check = () => {
    var CVV = document.getElementById("cvv").value;
    var nam = document.getElementById("card_input2").value;
    var creditCard = document.getElementById("card_input").value;
    var valid = document.getElementById("input_card3").value;
    if(creditCard ==="" || nam ==="" || valid===""  || CVV===""){
       alert("Fill Full Credentials");
    }
    else if(creditCard.length<15 || valid.length<4 || CVV<4){
        alert("Wrong Credentials");
    }

   
      else {
             alert("Order Placed !");
           alert("Payment Sucessfull !");
    }
   


}















