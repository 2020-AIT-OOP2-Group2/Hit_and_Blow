var player_name=localStorage.getItem("storageName");
var play_count=localStorage.getItem("play_count");

/*const obj = {
    "name":(localStorage.getItem("storageName")),
    "moves":(localStorage.getItem("storageName"))
};
const method = "POST";
const body = JSON.stringify(obj);
const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};
fetch("./ranking.json", {method, headers, body}).then((res)=> res.json()).then(console.log).catch(console.error);*/
console.log("hoge")

const obj = {
    "name":localStorage.getItem("storageName"),
    "moves":localStorage.getItem("play_count")
};
const method = "POST";
const body = JSON.stringify(obj);
const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};
fetch("/ranking", {method, headers, body})


document.getElementById("name").innerHTML=player_name+"さんは"+play_count+"手でクリア出来ました！！";

var play_count;
document.addEventListener("DOMContentLoaded", (e)=>{
    document.getElementById('finish_set').addEventListener("click", (e)=>{
        e.preventDefault();
        
        location.href="/";
    })
}, false);

document.addEventListener("DOMContentLoaded", (e)=>{
    document.getElementById('ranking_set').addEventListener("click", (e)=>{
        e.preventDefault();
        
        location.href="/result/ranking";
    })
}, false);