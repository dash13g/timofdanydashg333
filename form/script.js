function submitName () {
    var name = document.getElementById("nameInput").value;

    if (name){
        document.getElementById("result").innerHTML = "Привет, " + name +  "! Добро пожаловать!";
} else {
    document.getElementById("result").innerHTML = "Пожалуйста, введите ваше имя!";
    }
    }