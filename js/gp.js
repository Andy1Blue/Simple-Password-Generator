function generatePassword() {
    let checkboxSmall = document.getElementById("small");
    let checkboxBig = document.getElementById("big");
    let checkboxSpecialSymbol = document.getElementById("special");
    let checkboxSymbol = document.getElementById("symbol");
    let checkboxNumber = document.getElementById("number");
    let passwordLength = document.getElementById("length").value;

    let newPass = "";
    let possibleSmall = "abcdefghijklmnopqrstuvwxyz";
    let possibleBig = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let possibleNumber = "0123456789";
    let possibleSymbol = "!@#$%&";
    let possibleSpecialSymbol = "*()_+{}:<>?[]";

    for (let i = 0; i < passwordLength; i++) {
        if (checkboxSmall.checked === true) {
            newPass += possibleSmall.charAt(Math.floor(Math.random() * possibleSmall.length));
        }

        if (checkboxBig.checked === true) {
            newPass += possibleBig.charAt(Math.floor(Math.random() * possibleBig.length));
        }


        if (checkboxSpecialSymbol.checked === true) {
            newPass += possibleSpecialSymbol.charAt(Math.floor(Math.random() * possibleSpecialSymbol.length));
        }

        if (checkboxSymbol.checked === true) {
            newPass += possibleSymbol.charAt(Math.floor(Math.random() * possibleSymbol.length));
        }

        if (checkboxNumber.checked === true) {
            newPass += possibleNumber.charAt(Math.floor(Math.random() * possibleNumber.length));
        }
    }

    newPass = newPass.substring(0, passwordLength);

    let pa = document.getElementById("pass");
    pa.value = newPass;
}

function copyPassword() {
    let copyPassword = document.getElementById("pass");

    copyPassword.select();

    document.execCommand("copy");

    alert("Copied the password: " + copyPassword.value);
}

$(function () {
    $(".options").toggle();
    $("#options-span").click(function () {
        $(".options").slideToggle(500);
    });
});