
function Force(){
    var a = parseInt(document.getElementById("mass").value);
    var b = parseInt(document.getElementById("acce").value);
    var F = a*b;
    var re = document.getElementById("result");
    var temp = "Force = " + a+" x "+b;
    temp += "Force = "+F;
    re.innerHTML = temp;

}