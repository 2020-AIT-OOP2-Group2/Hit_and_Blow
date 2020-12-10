var num;
var play_count;
var hit,blow;

fetch("/start").then(response => {
    console.log(response);
    response.json().then((data) => {
        console.log(data);  // 取得されたレスポンスデータをデバッグ表示
        num=data.number;
    });
});

document.querySelector("#vote").addEventListener("click", (e)=>{
    //ボタンが本来持っている処理をなかったことにする
    e.preventDefault();
    var input_num=document.forms.nums.value;
    if(num==input_num){

    }else{

    }
    
})

document.querySelector("#get_log").addEventListener("click", (e)=>{
    //ボタンが本来持っている処理をなかったことにする
    e.preventDefault();
    fetch("/ranking").then(response => {
        console.log(response);
        response.json().then((data) => {
            console.log(data);  // 取得されたレスポンスデータをデバッグ表示
        });
    });
})