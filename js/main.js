var button=document.querySelectorAll("button");

/*start function's header*/
button[0].onmousemove=function(){
"use strict";
this.style.backgroundColor="transparent";
};

button[0].onmouseout=function(){
    "use strict";
    this.style.backgroundColor="#0ae61a";
}

/*end function's header*/

/*start function's testimonials*/

function show(){
    "use strict";
    document.getElementById("oop").firstElementChild.childNodes[3].style.display="block";
    button[1].innerHTML="double click to hide text";
}

function hide(){
    "use strict";
    document.getElementById("oop").firstElementChild.childNodes[3].style.display="none";
    button[1].innerHTML="click to show More";
}

/*end function's testimonials*/

/*start function to show numbers of hover*/

var imghover=document.getElementById('port').firstElementChild.childNodes[1].childNodes[2].childNodes[1],
    paraghover=document.getElementById('port').firstElementChild.childNodes[1].childNodes[4].childNodes[3],
    parhov=document.getElementById("imghover"),
    count=0;
//console.log(document.getElementById('port').firstElementChild.childNodes[1].childNodes);

function calhover(){
    "use strict";
    count++;
    console.log(count);
    parhov.innerHTML=count;
}   

/*end function to show numbers of hover*/

/*start function to color span*/

function color(){
    "use strict";
document.getElementById("col").style.color="red";
}

/*end function to color span*/

/*start function to go to index.html*/

function check(){
    "use strict";
    var name=prompt("your name~?");
    if(name === "abdo"){
        window.location="index.html";
    }
    else{
        alert("srry "+ name );
    }
}

/*end function to go to index.html*/