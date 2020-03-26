// iphone event handler 

var plus1Btn = document.querySelector("#plus1");
var minus1Btn = document.querySelector("#minus1");
var getPrice1 = parseInt(document.querySelector("#getPrice1").innerText);
var input1 = document.querySelector("#valueChanger1");

input1.addEventListener("keyup",function(event){
    enterValue("#valueChanger1","#getPrice1",1219);
    subtotalAndTotal("#subtotal");
    subtotalAndTotal("#total");
});

function enterValue(quantity,unitPrice,dPrice){
    if(event.keyCode === 13){
        let valuePassed = parseFloat(document.querySelector(quantity).value);
        let updatePrice1 = valuePassed * dPrice;
        document.querySelector(unitPrice).innerText = updatePrice1;

    }
}


plus1Btn.addEventListener("click",function(){
    let quantity = increment1("#valueChanger1");
    let updatePrice1 = getPrice1 * quantity ;
    document.querySelector("#getPrice1").innerText = updatePrice1;
    subtotalAndTotal("#subtotal");
    subtotalAndTotal("#total");
});

function increment1(quantity){
    let valueChanger1 = document.querySelector(quantity).value;
    let valueChangerNumber1 = parseFloat(valueChanger1);
    
    let newValue = valueChangerNumber1 + 1;

    document.querySelector(quantity).value = newValue;
    //console.log(newValue);

    return newValue;
}

minus1Btn.addEventListener("click",function(){
    let quantity = decrement1("#valueChanger1");
    var updatePrice1 =  getPrice1  * quantity;
    document.querySelector("#getPrice1").innerText = updatePrice1;
    subtotalAndTotal("#subtotal");
    subtotalAndTotal("#total");
});

function decrement1(quantity){
    let valueChanger1 = document.querySelector(quantity).value;
    let valueChangerNumber1 = parseFloat(valueChanger1);

    let newValue = valueChangerNumber1 - 1;

   if(newValue >= 0){
        document.querySelector(quantity).value =  newValue;
        return newValue;
    }
}

// iphone case event handler

var plus2Btn = document.querySelector("#plus2");
var minus2Btn = document.querySelector("#minus2");
var getPrice2 = parseInt(document.querySelector("#getPrice2").innerText);
var input2 = document.querySelector("#valueChanger2");

input2.addEventListener("keyup",function(event){
    enterValue("#valueChanger2","#getPrice2",59);
    subtotalAndTotal("#subtotal");
    subtotalAndTotal("#total");
});


plus2Btn.addEventListener("click",function(){
    let quantity = increment2("#valueChanger2");
    let updatePrice2 = getPrice2 * quantity
    document.querySelector("#getPrice2").innerText = updatePrice2;
    subtotalAndTotal("#subtotal");
    subtotalAndTotal("#total");
});

function increment2(quantity){
    let valueChanger2 = document.querySelector("#valueChanger2").value;
    let valueChangerNumber2 = parseInt(valueChanger2);

    let newValue = valueChangerNumber2 + 1;

    document.querySelector(quantity).value = newValue;

    return newValue;
}

minus2Btn.addEventListener("click",function(){
    let quantity = decrement2("#valueChanger2");
    let updatePrice2 = getPrice2 * quantity;
    document.querySelector("#getPrice2").innerText = updatePrice2;
    subtotalAndTotal("#subtotal");
    subtotalAndTotal("#total");
});

function decrement2(quantity){
    let valueChanger2 = document.querySelector(quantity).value;
    let valueChangerNumber2 = parseInt(valueChanger2);

    let newValue = valueChangerNumber2 - 1;

    if(newValue >= 0){
        document.querySelector(quantity).value = newValue;
        return newValue;
    }
}

// subtotal and total function

function subtotalAndTotal(id){
    document.querySelector(id).innerText = sumUp("#getPrice1","#getPrice2");
}

function sumUp(product1, product2){
    let phn = document.querySelector(product1).innerText;
    let casing = document.querySelector(product2).innerText;

    let subtotal = parseFloat(phn) + parseFloat(casing);

    return subtotal ;
}

// remove item event handler

var item1 = document.querySelector("#item1");
var item2 = document.querySelector("#item2");

item1.addEventListener("click",function(){
    let cart1 = document.querySelector("#cart1");
    cart1.style.display = "none";
});

item2.addEventListener("click",function(){
    let cart2 = document.querySelector("#cart2");
    cart2.style.display = "none"
});

