var icon = document.querySelector(".icon")
var ul = document.querySelector("ul")

icon.addEventListener("click", ()=>{
    ul.classList.toggle("showData");

    if(ul.className == "showData"){
        document.getElementById("bar").className= "fa fa-close";
    }else{
        document.getElementById("bar").className= "fa fa-bars";
    }
})

//navbar
 
var shops = document.getElementById("shops")
var reviews = document.getElementById("reviews")
var blogs = document.getElementById("blogs")
var contacts = document.getElementById("contacts")

shops.addEventListener("click", ()=>{
    shops.style.color="#008080"
    reviews.style.color="red"
    blogs.style.color="#fff";
    contacts.style.color="red"
})

reviews.addEventListener("click", ()=>{
    reviews.style.color="#008080"
    shops.style.color="red"
    blogs.style.color="red"
    contacts.style.color="red"

})
   
blogs.addEventListener("click", ()=>{
    blogs.style.color="#008080";
    reviews.style.color="#fff";
    shops.style.color="#fff";
    contacts.style.color="#fff";

})


contacts.addEventListener("click", ()=>{
    contacts.style.color="#008080";
    shops.style.color="#fff";
    reviews.style.color="#fff";
    blogs.style.color="#fff";

})
//card
let crd = document.querySelectorAll(".crd");
let itemPage = document.querySelector(".itemPage");
let container = document.querySelector(".container");
let itemImg = document.getElementById("itemImg");
let buyBtn = document.getElementById("buyBtn");


console.log(crd);

crd.forEach(function(curValue){
    curValue.addEventListener("click", function(){
        itemPage.style.display="flex";
        container.style.display="none";
       
        
       let imgSrc = curValue.firstElementChild.src;
        itemImg.src=imgSrc;
         
        let buyText = document.querySelector(".buyText");
        buyBtn.addEventListener("click", function(){
            document.querySelector(".buyPage").style.display="block"
            buyText.innerHTML=`
        
        <h3>Enter Details :</h3>
        <input type="text" placeholder="Enter Your Name" id="name"> <br>
        <input type="text" placeholder="Enter Your Address" id="address"> <br>
        <input type="text" placeholder="Enter Your Mobile Number" id="num"> <br>
        <h3>Payment Option :</h3>
        <select>
            <option value="Google-Pay">Google-Pay</option>
            <option value="Phone-pay">Phone-pay</option>
            <option value="PayPal">PayPal</option>
            <option value="Visa"><a href="01738570320">bkash</option>
            <option value="Cash-on-Delivery">Cash-on-Delivery</option>
           </select><br>
           
        
            `
        let button = document.createElement("button");
        button.innerText="Submit";
        buyText.appendChild(button);
        

        button.addEventListener("click", function(){
            let name = document.getElementById("name");

         if(name.value == "" && address.value == "" && num.value == ""){
            alert("please Enter Detail");   
         }else{
            alert("Your Respones Recorded");
            document.querySelector(".buyPage").style.display="none";
         }
         
        })

            
          let cross = document.querySelector(".cross");
            cross.addEventListener("click", function(){
           document.querySelector(".buyPage").style.display="none"  
            }
            )
        })
    })
})



//connect

    function connect(){
        var names = document.getElementById("names");
        var num = document.getElementById("number");
        if(name.value == "" && num.value == ""){
            alert("Fill Details")
        }else{
            alert("Thanks For Connecting");
        }

    }

