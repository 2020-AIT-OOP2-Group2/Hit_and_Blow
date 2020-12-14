var num=1234;
var play_count=0;
var hit=0,blow=0;
var n=new Array(4);
var n_s=new Array(4);

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

        for(let i=0;i<4;i++){
            n[i]=Math.floor(input_num / Math.pow(10,i)) % 10;
        }
        for(let i=0;i<4;i++){
            n_s[i]=Math.floor(num / Math.pow(10,i)) % 10;
        }
    
        //ユニークかどうか
        if(n[0]==n[1] || n[0]==n[2] || n[0]==n[3] || n[1]==n[2] || n[1]==n[3] || n[2]==n[3]){
            alert("ユニークな数字を入力してください");
            return;
        }
        
        console.log(n);
        console.log(n_s);

        if(num==input_num){
            //正解だったら
            document.getElementById("judge_result").innerHTML="正解です";
        }else{
            //間違いだったら
            for(let j=0;j<4;j++){
                for(let i=0;i<4;i++){
                    if(j!=i){
                        if(n[j]==n_s[i]){
                            blow++;
                        }
                    }
                }
            }
            for(let i=0;i<4;i++){
                if(n[i]==n_s[i]){
                    hit++;
                }
            }

            play_count++;

            document.getElementById("judge_result").innerHTML=String(hit)+"Hit "+String(blow)+"blow "+"試行回数:"+String(play_count);

            hit=0;
            blow=0;

        }
        
    })
}, false);
