function replaceName() {
    let name = prompt("Halo, siapakah nama Anda?", "");

    if (name == "" || name == null) {
        document.getElementById("user-name").innerText = "Guest";
    } else {
        document.getElementById("user-name").innerText = name;
    }
}

replaceName();

const messageForm = document.getElementById("message-form");

messageForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("input-name").value;
    const birthDate = document.getElementById("input-birthdate").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const message = document.getElementById("input-message").value;
    const currentTime = new Date();

    if (name == "" || birthDate == "" || gender == "" || message == "") {
        alert("Mohon lengkapi semua data!");
        return false;
    }

    document.getElementById("current-time").innerText = currentTime.toString();
    document.getElementById("res-name").innerText = name;
    document.getElementById("res-birthdate").innerText = birthDate;
    document.getElementById("res-gender").innerText = gender;
    document.getElementById("res-message").innerText = message;
});