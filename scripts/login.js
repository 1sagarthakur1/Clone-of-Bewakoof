function forloging(){
    event.preventDefault()
    let num = document.querySelector("#inputbala").value;
    if(num==""){
        alert("Please Enter Mobile Number")
    }
    else{
        if(num.length!==10){
            alert("invaild Number ")
        }
        else{
            console.log(num)
        }
    }
}