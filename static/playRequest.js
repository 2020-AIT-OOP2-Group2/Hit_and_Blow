var num;
var player_name;
var play_count = 0;
var hit = 0,
	blow = 0;
var n = new Array(4);
var n_s = new Array(4);
var hint_index, hint_num;

fetch("/start").then((response) => {
	console.log(response);
	response.json().then((data) => {
		console.log(data.number); // 取得されたレスポンスデータをデバッグ表示
		num = parseInt(data.number); //数字を取得
		for (let i = 0; i < 4; i++) {
			n_s[i] = Math.floor(num / Math.pow(10, i)) % 10;
		}
	});
});

player_name = localStorage.getItem("storageName");
console.log(player_name);
if (player_name != null) {
	document.getElementById("name_place").innerHTML =
		player_name + "さん、こんにちは";
}

document.addEventListener(
	"DOMContentLoaded",
	(e) => {
		document.getElementById("vote").addEventListener("click", (e) => {
			//ボタンが本来持っている処理をなかったことにする
			e.preventDefault();
			var input_num = document.forms.inputs.nums.value;

			if (String(input_num).length == 0) {
				//alert("数字が入力されていません");
				document.getElementById("error_message").innerHTML =
					"数字が入力されていません";
				return;
			}

			//数字かどうか
			if (!Number(input_num)) {
				//alert("文字が入力されています");
				document.getElementById("error_message").innerHTML =
					"文字が入力されています";
				return;
			}

			//桁数が４か
			if (String(input_num).length != 4) {
				//alert("４桁の数字を入力してください");
				document.getElementById("error_message").innerHTML =
					"４桁の数字を入力してください";
				return;
			}

			for (let i = 0; i < 4; i++) {
				n[i] = Math.floor(input_num / Math.pow(10, i)) % 10;
			}

			//ユニークかどうか
			if (
				n[0] == n[1] ||
				n[0] == n[2] ||
				n[0] == n[3] ||
				n[1] == n[2] ||
				n[1] == n[3] ||
				n[2] == n[3]
			) {
				//alert("ユニークな数字を入力してください");
				document.getElementById("error_message").innerHTML =
					"ユニークな数字を入力してください";
				return;
			}

			console.log(n);
			console.log(n_s);

			play_count++;

			if (num == input_num) {
				//正解だったら
				document.getElementById("judge_result").innerHTML = "正解です";
				document.getElementById("error_message").innerHTML = "";
				localStorage.setItem("play_count", play_count);
				location.href = "/play/ranking";
			} else {
				document.getElementById("error_message").innerHTML = "";
				//間違いだったら
				for (let j = 0; j < 4; j++) {
					for (let i = 0; i < 4; i++) {
						if (j != i) {
							if (n[j] == n_s[i]) {
								blow++;
							}
						}
					}
				}

				for (let i = 0; i < 4; i++) {
					if (n[i] == n_s[i]) {
						hit++;
					}
				}

				document.getElementById("judge_result").innerHTML =
					String(hit) + "Hit " + String(blow) + "blow";
				document.getElementById("judge_log").innerHTML +=
					"<br>" +
					"回数: " +
					String(play_count) +
					" " +
					String(input_num) +
					" -> " +
					String(hit) +
					" Hit " +
					String(blow) +
					"blow";

				hit = 0;
				blow = 0;
			}
		});
	},
	false
);

document.addEventListener(
	"DOMContentLoaded",
	(e) => {
		document.getElementById("back_home").addEventListener("click", (e) => {
			e.preventDefault();

			location.href = "./";
		});
	},
	false
);

document.addEventListener(
	"DOMContentLoaded",
	(e) => {
		document.getElementById("get_hint").addEventListener("click", (e) => {
			e.preventDefault();
			play_count = play_count + 3;
			hint_index = play_count % 3;

			document.getElementById("judge_log").innerHTML +=
				"<br>" +
				"回数:" +
				String(play_count) +
				" ヒント: " +
				String(4 - hint_index) +
				"桁目は " +
				String(n_s[hint_index]);

			document.getElementById("get_hint").style.display = "none";
		});
	},
	false
);

document.addEventListener(
	"DOMContentLoaded",
	(e) => {
		document.getElementById("view_ranking").addEventListener("click", (e) => {
			e.preventDefault();

			location.href = "./result/ranking";
		});
	},
	false
);
