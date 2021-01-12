fetch("../ranking").then((data) => {
	data.json().then((j) => {
		rankingData = document.querySelector("#ranking-data");
		j.forEach((elm) => {
			let tr = document.createElement("tr");
			let th = document.createElement("th");
			let td = document.createElement("td");
			th.scope = "col";
			th.innerText = elm.rank;
			tr.appendChild(th);

			td.innerHTML = elm.name;
			tr.appendChild(td);

			td = document.createElement("td");
			td.innerHTML = elm.moves;
			tr.appendChild(td);

			rankingData.appendChild(tr);
		});
	});
});
