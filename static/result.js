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

let data = new FormData()
data.append("mane", player_name)
data.append("moves", play_count)


fetch('/ranking', { method: 'POST', body: data, }).then(function (response) {

})

document.getElementById("name").innerHTML=player_name+"さんは"+play_count+"手でクリア出来ました！！";

var play_count;
document.addEventListener("DOMContentLoaded", (e)=>{
    document.getElementById('finish_set').addEventListener("click", (e)=>{
        e.preventDefault();
        
        location.href="/";
    })
}, false);