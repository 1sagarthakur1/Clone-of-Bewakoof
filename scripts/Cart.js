var getdata = JSON.parse(localStorage.getItem("cart"));
// console.log(getdata)
var add = 0
var add2 = 0
var  inda = 0
var inda2 = 0
var count = 0
fordisplay(getdata)
function fordisplay(getdata){
    getdata.forEach(function(ele,index){
        // console.log(ele)
// ______________________________________________________________________________
    add=add+(+ele.strikeOffPrice)
    add2 = add2+(+ele.price)
    count++
// __________________________________________________________________________________
        var divent = document.createElement("div");
            divent.setAttribute("id","divent")
            var divFpriceheadimg = document.createElement("div")
                divFpriceheadimg.setAttribute("id","divFpriceheadimg")
                var divFpricehead = document.createElement("div")
                    divFpricehead.setAttribute("id","divFpricehead")
                    var perahead = document.createElement("p")
                        perahead.innerText = ele.name
                        perahead.setAttribute("id","perahead")
                    var divFprice = document.createElement("div")
                        divFprice.setAttribute("id","divFprice")                    
                        var h2Ffirstpr= document.createElement("h2")
                            h2Ffirstpr.innerText = "₹"+ele.price
                            inda = ele.price
                        var h4Fsecendpr= document.createElement("h4")
                            h4Fsecendpr.innerText = "₹"+ele.strikeOffPrice
                            inda2 = ele.strikeOffPrice
                            h4Fsecendpr.setAttribute("id","h4Fsecendpr")
                    divFprice.append(h2Ffirstpr,h4Fsecendpr)
                     var persave= document.createElement("p")
                         persave.innerText = "You saved ₹"+(ele.strikeOffPrice-ele.price)
                         persave.setAttribute("id","persave")
                     var sortquntdiv = document.createElement("div");
                         sortquntdiv.setAttribute("id","sortquntdiv")
                            var sortdiv = document.createElement("div");
                                sortdiv.setAttribute("id","sortdiv")
                                sortdiv.innerHTML = "Sort : "+`<select id="cars">
                                                        <option value="volvo">XL</option>
                                                        <option value="saab">XLL</option>
                                                        <option value="opel">L</option>
                                                        <option value="audi">M</option>
                                                    </select>`
                            var quntityinner = document.createElement("div")
                                quntityinner.setAttribute("id","quntityinner")
                                quntityinner.innerHTML ="Quantity : "+`<select oninput="foraddquntity()" id="quntity">
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                        </select>`
                        sortquntdiv.append(sortdiv,quntityinner)
                divFpricehead.append(perahead,divFprice,persave,sortquntdiv)
                var divFimg = document.createElement("div")
                    var Fimage = document.createElement("img");
                        Fimage.setAttribute("src",ele.mainImg);
                        Fimage.setAttribute("id","Fimage")
                divFimg.append(Fimage)
            divFpriceheadimg.append(divFpricehead,divFimg)
            var divFbreMove = document.createElement("div")
                 var removebut = document.createElement("button")
                     removebut.innerText = "Remove"
                     removebut.setAttribute("id","removebut")
                     removebut.addEventListener("click",function(){
                        furremoveele(ele,index)
                     })
                 var movebut = document.createElement("button")
                     movebut.innerText = "Move to Wishlist"
                     movebut.setAttribute("id","movebut")
            divFbreMove.append(removebut,movebut)
        divent.append(divFpriceheadimg,divFbreMove)
        document.querySelector("#Fcartsec").append(divent)
    })
}
function foraddquntity(){
    document.querySelector("#TMprice").innerHTML=null
    document.querySelector("#bgprice").innerHTML=null
    document.querySelector("#subprice").innerHTML=null
    document.querySelector("#saving").innerHTML=null
    document.querySelector("#totalprice").innerHTML=null
    // pragarph.innerHTML = null
    var erea = document.querySelector("#quntity").value
        console.log(inda2)
    
    document.querySelector("#TMprice").append("₹"+add*erea)
    document.querySelector("#bgprice").append("₹"+(add-add2)*erea)
    document.querySelector("#subprice").append("₹"+add2*erea)
    var pragarph = document.createElement("p");
            pragarph.innerText ="You are saving ₹"+(add-add2)*erea+" on this order"
        document.querySelector("#saving").append(pragarph)
    document.querySelector("#totalprice").append("₹"+add2*erea)
}
function furremoveele(ele,index){
    getdata.splice(index,1)
    localStorage.setItem("cart",JSON.stringify(getdata))
    window.location.reload()
}
// console.log(add2)
    document.querySelector("#TMprice").append("₹"+add)
    document.querySelector("#bgprice").append("₹"+(add-add2))
    document.querySelector("#subprice").append("₹"+add2)
var pragarph = document.createElement("p");
    pragarph.innerText ="You are saving ₹"+(add-add2)+" on this order"
document.querySelector("#saving").append(pragarph)
document.querySelector("#totalprice").append("₹"+add2)
var ammPP = []
function forgiveamountpament(){
  ammPP.shift()
  ammPP.push(add2)
  localStorage.setItem("Pamount",JSON.stringify(ammPP))
}
var counter = document.createElement("h4")
   counter.innerText= "My Bag "+count+" item(s)"
document.querySelector("#Mybag").append(counter)