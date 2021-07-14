//import React from 'react';
//import ReactDOM from 'react-dom';


function Gravitational_Force(){
    var m1 = parseInt(document.getElementById("mass_1").value);
    var m2 = parseInt(document.getElementById("mass_2").value);
    var r = parseInt(document.getElementById("dist").value);
    var G = 6.67408;
    var force = G*m1*m2/(r*r);
    result.document.getElementById("Result_G-F").innerHTML = force+" * 10^-11";
}

function Gravitational_Acceleration(){
    var m = parseInt(document.getElementById("mass").value);
    var r = parseInt(document.getElementById("dist").value);
    var G = 6.67408;
    var force = G*m/(r*r);
    result.document.getElementById("Result_G-A").innerHTML = force+" * 10^-11";
}

function Gravitational_Acceleration_Satellite(){
    var m = parseInt(document.getElementById("mass").value);
    var r = parseInt(document.getElementById("dist").value);
    var h = parseInt(document.getElementById("height").value);
    var G = 6.67408;
    var force = G*m/((r+h)*(r+h));
    result.document.getElementById("Result_G-A").innerHTML = force+" * 10^-11";
}

function Orbital_Velocity(){
    var m = parseInt(document.getElementById("mass").value);
    var r = parseInt(document.getElementById("dist").value);
    var G = 6.67408;
    var temp = G*m/r;
    var force = Math.sqrt(temp);
    result.document.getElementById("Result_G-A").innerHTML = force+" * 10^-11";
}

function Escape_Velocity(){
    var m = parseInt(document.getElementById("mass").value);
    var r = parseInt(document.getElementById("dist").value);
    var G = 6.67408;
    var temp = 2*G*m/r;
    var force = Math.sqrt(temp);
    result.document.getElementById("Result_G-A").innerHTML = force+" * 10^-11";
}