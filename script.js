function addTask() {

    let task = document.getElementById("task").value;

    if (task == "") {
        alert("Enter a task");
        return;
    }

    let div = document.createElement("div");

    div.className = "task";

    div.innerHTML = `
        ${task}
        <br><br>
        <button onclick="moveTask(this)">Done</button>
        <button onclick="this.parentElement.remove()">Delete</button>
    `;

    document.getElementById("todo").appendChild(div);

    document.getElementById("task").value = "";
}

function moveTask(btn) {

    let task = btn.parentElement;

    btn.remove();

    document.getElementById("done").appendChild(task);
}
