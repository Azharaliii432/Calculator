var input = document.getElementById("input");

document.addEventListener("keydown", function (val) {
    console.log(val);
    val.preventDefault();
    if (val.key == "Enter") {
        equal();
    }
    else if (Number(val.key) >= 0 && Number(val.key <= 9)) {
        setNum(val.key);
    }
    else if (val.key == "+" || val.key == "-" || val.key == "*" || val.key == "/") {
        setNum(val.key)
    }
    else if (val.key == "Backspace") {
        backSpace();
    }
});

function setNum(num) {
    var lastValue = input.value.toString().slice(input.value.length - 1)
    if (lastValue == "+" || lastValue == "-" || lastValue == "*" || lastValue == "/") {
        if (num == "+" || num == "-" || num == "*" || num == "/") {
            Toastify({
                text: "Invalid argument",
                duration: 2000,
                newWindow: true,
                gravity: "top",
                position: "center", 
                style: {
                    background: "linear-gradient(to right, #eb0808ff, #e30b0bff)",
                },
                // onClick: function () { } // Callback after click
            }).showToast();
        }
        else {
            input.value += num;
        }
    }
    else {
        input.value += num
    }
}
function equal() {
    input.value = eval(input.value)
}
function clearFunc() {
    input.value = null
}
function minusBefore() {
    input.value = `(-${input.value})`
}
function backSpace() {
    input.value = input.value.toString().slice(0, input.value.length - 1)
}
function square() {
    input.value = input.value * input.value
}
function pi() {
    input.value = Math.PI
}
function sqrtFunc() {
    input.value = Math.sqrt(input.value)
}
function cubeFunc() {
    input.value = input.value * input.value * input.value
}
function percent() {
    input.value = input.value + "%";
    var expression = input.value;
    var result = "";

    if (expression.endsWith("%")) {
        let num = parseFloat(expression);
        result = num / 100;
    }
    if (expression.includes("+") && expression.includes("%")) {
        let [a, b] = expression.split("+");
        b = parseFloat(b) / 100;
        result = parseFloat(a) + parseFloat(a) * b;
    }
    else if (expression.includes("-") && expression.includes("%")) {
        let [a, b] = expression.split("-");
        b = parseFloat(b) / 100;
        result = parseFloat(a) - b;
    }
    else if (expression.includes("*") && expression.includes("%")) {
        let [a, b] = expression.split("*");
        b = parseFloat(b) / 100;
        result = parseFloat(a) * b;
    }
    else if (expression.includes("/") && expression.includes("%")) {
        let [a, b] = expression.split("/");
        b = parseFloat(b) / 100;
        result = parseFloat(a) / b;
    }
    input.value = result;
}