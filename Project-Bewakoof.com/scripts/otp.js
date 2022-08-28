document.querySelector("#Mobnumber").innerHTML=null
var getotp = JSON.parse(localStorage.getItem("OTP"))
var Mobnumber = document.createElement("h3")
    Mobnumber.style.color = "rgb(116, 113, 113)"
    Mobnumber.innerText = getotp[1];
document.querySelector("#Mobnumber").append(Mobnumber)
document.querySelector("#otp_box").addEventListener("submit",fologinotp)
function fologinotp(){
    event.preventDefault()
    var otp1 =  document.querySelector("#otp1").value
    var otp2 =  document.querySelector("#otp2").value
    var otp3 =  document.querySelector("#otp3").value
    var otp4 =  document.querySelector("#otp4").value
    var typeotp = (otp1+otp2+otp3+otp4)
    
    if(typeotp==""){
        alert("Please Enter OTP")
    }
    else{
        if(typeotp == getotp[0]){
            alert("login successfully")
            window.location.href = "index.html"
            console.log(getotp[0])
        }
        else{
            alert("invalid OTP")
            console.log(getotp[0])
        }
    }
}
