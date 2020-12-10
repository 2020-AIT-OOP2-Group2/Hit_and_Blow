var num;
var play_count;
var hit,blow;

fetch("/start").then(response => {
    console.log(response);
    response.json().then((data) => {
        console.log(data.number);  // 取得されたレスポンスデータをデバッグ表示
        num=data.number;　//数字を取得
    });
});

document.querySelector("#vote").addEventListener("click", (e)=>{
    //ボタンが本来持っている処理をなかったことにする
    e.preventDefault();
    var input_num=document.forms.nums.value;

    //ここで桁数ごとにわける
    var n1 = Math.floor(input_num / 1) % 10; //1桁目
    var n2 = Math.floor(input_num / 10) % 10; //2桁目
    var n3 = Math.floor(input_num / 100) % 10; //3桁目
    var n4 = Math.floor(input_num / 1000) % 10; //4桁目

    //ユニークかどうか
    if(n1==n2 || n1==n3 || n1==n4 || n2==n3 || n2==n4 || n3==n4){
        return;
    }

    if(num==input_num){
        //正解だったら
    }else{
        //間違いだったら
    }
    
})