var add;
document.querySelector(".start_button").addEventListener("click", (e) => {
	e.preventDefault();
	add = document.querySelector("#your_name").value;
	localStorage.setItem("storageName", add);
	console.log(add);
});
