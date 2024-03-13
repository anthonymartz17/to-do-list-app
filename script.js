const list = document.querySelector(".todos-list");

const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
	markAsComplete, e.preventDefault();

	const li = document.createElement("li");
	li.classList.add("todos-item");

	const p = document.createElement("p");
	p.classList.add("todos__text");
	p.innerText = e.target.toDo.value;

	const button = document.createElement("button");
	button.id = "delete";
	button.innerText = "Delete";
	button.classList.add("delete-btn");

	li.append(p);
	li.append(button);

	li.addEventListener("click", removeItem);
	li.addEventListener("click", markAsComplete);

	list.append(li);
	form.reset();
}

function removeItem(e) {
	e.preventDefault();

	if (e.target.id == "delete") {
		e.currentTarget.remove();
	}
}
function markAsComplete(e) {
	e.preventDefault();
	if (e.target.id == "mark-done") {
		e.target.checked;
		console.log(e.target, "mark as complete");
	}
}
