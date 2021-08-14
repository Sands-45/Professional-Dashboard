let data = [];
fetch("../incomplete_calls.json").then((response) => (data = response.json()));


function iterate(item){
	console.log(item);
}

