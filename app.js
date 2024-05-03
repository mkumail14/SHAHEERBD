// let datenow = new Date(2006,0,16);
// document.write("Year: " + datenow.getFullYear());
// document.write("Date: " + datenow.getDate());
// document.write("Month: " + datenow.getMonth());
// document.write("Day: " + datenow.getDay());

// let shaheerbd= new Date(2024,6,13);
// let today= new Date();
// let dateDiff=shaheerbd.Date()-today.Date();
// document.write(dateDiff);
// setInterval(updateTime,1000);
// function updateTime(){}

function printer(message){
    alert(message);
}

function checkAddress(fieldId) {
     if (document.getElementById(fieldId).value === "") {
     alert("Email address required.");
     }
     }
    

     function inputCity(){
        var zipcode=document.getElementById("zipnum").value;
        var cityname;
        switch(zipcode){
            case "92":
                cityname="Karachi";
                break;
            case "91":
                cityname="Lahore";
                break;
            default:
                cityname="";
        }
        document.getElementById("cityname").value=cityname;   
    }
    
function expanedText(){
    var newText="<h1>Hi</h1>";

    document.getElementById("prevText").innerHTML=newText;
}
        

function invisible(){
    document.getElementById("test").className+="hidden";
}
        

function lenghtrunner(input){
    var tagName=document.getElementsByTagName(input);
    
    alert(tagName.length);

}
window.onload = function() {
    countdown();
};
function countdown(){
var datecount=new Date();
var bd=new Date("july 13, 2024, 12:00:01");
var lefttime=bd.getTime()-datecount.getTime();
var day;
setInterval(function(){
    datecount=new Date();
    lefttime=bd.getTime()-datecount.getTime();
    day=Math.floor(lefttime/(1000*60*60*24));
    hour=Math.floor(lefttime%(1000*60*60*24)/(1000*60*60));
    min=Math.floor(lefttime%(1000*60*60)/(1000*60));
    sec=Math.floor(lefttime%(1000*60)/(1000));

    document.getElementById('day').innerHTML=day;
    document.getElementById('hour').innerHTML=hour;
    document.getElementById('min').innerHTML=min;
    document.getElementById('sec').innerHTML=sec;




   
},1000)
setInterval(function(){
document.getElementById('img2').style.display='none';
document.getElementById('img1').style.display='block';
},3000)
setInterval(function(){
    document.getElementById('img1').style.display='none';
    document.getElementById('img2').style.display='block';
    },6000)


}



