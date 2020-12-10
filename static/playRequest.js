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


document.addEventListener("DOMContentLoaded", (e)=>{
    document.getElementById('vote').addEventListener("click", (e)=>{
        //ボタンが本来持っている処理をなかったことにする
        e.preventDefault();
        var input_num=document.forms.inputs.nums.value;

        //数字かどうか
        if(!Number(input_num)){
            alert("文字が入力されています");
            return;
        }

        //桁数が４か
        if(String(input_num).length!=4){
            alert("４桁の数字を入力してください");
            return;
        }
    
        //ここで桁数ごとにわける
        var n1 = Math.floor(input_num / 1000) % 10; //1桁目
        var n2 = Math.floor(input_num / 100) % 10; //2桁目
        var n3 = Math.floor(input_num / 10) % 10; //3桁目
        var n4 = Math.floor(input_num / 1) % 10; //4桁目
    
        //ユニークかどうか
        if(n1==n2 || n1==n3 || n1==n4 || n2==n3 || n2==n4 || n3==n4){
            alert("ユニークな数字を入力してください");
            return;
        }
        
        console.log(n1,n2,n3,n4);

        if(num==input_num){
            //正解だったら
        }else{
            //間違いだったら
        }
        
    })
}, false);
