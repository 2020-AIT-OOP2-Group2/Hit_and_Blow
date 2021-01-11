var add
document.addEventListener("DOMContentLoaded", (e)=>{
    document.querySelector('.start_button').addEventListener("click", (e)=>{
            add = document.querySelector("#your_name").value
            localStorage.setItem("storageName",add);
            console.log(add)
        });
    }, false);