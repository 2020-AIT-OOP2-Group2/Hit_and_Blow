{
    "name";localStorage.getItem("storageName"),
    "moves";localStorage.getItem("play_count")
}

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
fetch("./ranking.js", {method, headers, body}).then((res)=> res.json()).then