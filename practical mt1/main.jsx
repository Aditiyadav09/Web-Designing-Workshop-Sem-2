function check() {
    let n = Number(document.getElementById("num").value);

    if (n === "") {
        document.getElementById("ans").innerHTML = "Enter a number";
        return;
    }

    if (n <= 1) {
        document.getElementById("ans").innerHTML = "Not Prime";
        return;
    }

    let flag = 1;

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            flag = 0;
            break;
        }
    }

    if (flag === 1) {
        document.getElementById("ans").innerHTML = "Prime Number";
    } else {
        document.getElementById("ans").innerHTML = "Not Prime";
    }
}