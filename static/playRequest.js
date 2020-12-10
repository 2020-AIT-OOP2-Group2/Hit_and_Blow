var num;

fetch("/address").then(response => {
    console.log(response);
    response.json().then((data) => {
        console.log(data);  // 取得されたレスポンスデータをデバッグ表示
        data.forEach(elm => {
            // 1行づつ処理を行う
            let tr = document.createElement('tr');
            // first name
            let td = document.createElement('td');
            td.innerText = elm.first_name;
            tr.appendChild(td);
            // last name
            td = document.createElement('td');
            td.innerText = elm.last_name;
            tr.appendChild(td);
            // email
            td = document.createElement('td');
            td.innerText = elm.email;
            tr.appendChild(td);

            // 1行分をtableタグ内のtbodyへ追加する
            tableBody.appendChild(tr);
        });
    });
});