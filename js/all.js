//document.getElementById("message").disabled = "false";
//setTimeout(function(){ 
//     }, 1000);


var x = document.getElementById("submitBtn");
x.addEventListener("click", myfunction);


function myfunction (){

    var ss = document.getElementById("message");
    var cc= document.getElementById("message").value;


    if (cc==false){
        document.getElementById("id2").style.display="block";
    }else{
        document.getElementById("id1").innerHTML = cc;
        document.getElementById("message").disabled = true;

    

          document.getElementById("id2").style.display="none"; 
    ss.value="";
    } 
    setTimeout(function(){
                        document.getElementById("message").disabled = false;

    }, 1000);


    
}