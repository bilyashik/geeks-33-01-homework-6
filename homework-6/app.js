function generateNumbers() {
    var numbers = [];
    var min = 1;
    var max = 99;

    while (numbers.length < 6) {
        var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        var formattedNumber = randomNumber < 10 ? '0' + randomNumber : '' + randomNumber;

        if (!numbers.includes(formattedNumber)) {
            numbers.push(formattedNumber);
        }
    }

    var resultContainer = document.getElementById("result");
    resultContainer.innerHTML = "";

    for (var i = 0; i < numbers.length; i++) {
        var circle = document.createElement("div");
        circle.className = "circle";
        circle.textContent = numbers[i];
        resultContainer.appendChild(circle);
    }
}
