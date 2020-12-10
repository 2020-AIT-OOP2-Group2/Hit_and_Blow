var num;
var play_count;
var hit,blow;

fetch("/start").then(response => {
    console.log(response);
    response.json().then((data) => {
        console.log(data);  // 取得されたレスポンスデータをデバッグ表示
        num=data.number;　//数字を取得
    });
});

document.querySelector("#vote").addEventListener("click", (e)=>{
    //ボタンが本来持っている処理をなかったことにする
    e.preventDefault();
    var input_num=document.forms.nums.value;
    if(num==input_num){
        //正解だったら
    }else{
        //間違いだったら
    }
    
})