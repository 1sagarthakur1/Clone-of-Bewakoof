var arr = ["1232","6267986053","sagar","thakur"]
function forloging(){
    event.preventDefault()
    let num = document.querySelector("#inputbala").value;
    let username = document.querySelector("#username").value;
    let useremail = document.querySelector("#useremail").value;
    if(num==""){
        alert("Please Enter Mobile Number")
    }
    else{
        if(num.length!==10){
            alert("invaild Number ")
        }
        else{
            // console.log(num)
            window.location.href="otp.html"
            function generateOTP() {
                var digits = '0123456789';
                let OTP = '';
                for (let i = 0; i < 4; i++ ) {
                    OTP += digits[Math.floor(Math.random() * 10)];
                }
                return OTP;
            }
            var otp = generateOTP()
            alert("one-time password : "+ otp)
            arr.shift()
            arr.shift()
            arr.shift()
            arr.shift()
            arr.push(otp)
            arr.push(num)
            arr.push(username)
            arr.push(useremail)
            console.log(arr)
            localStorage.setItem("OTP",JSON.stringify(arr))
        }
    }
}
