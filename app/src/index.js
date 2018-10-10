import { listCurrencies, currenciesArray } from "./database.js";
import { autocomplete } from "./autocomplete.js";
import * as $ from "jquery";

console.log(listCurrencies);


// autocomplete($("#myInput"), currenciesArray);
autocomplete(document.getElementById("from-input"), currenciesArray);
autocomplete(document.getElementById("to-input"), currenciesArray);

let from = "";
let to = "";

$("#convert-btn").click(function () {
    from = ($("#from-input").val()); //USD
    to = ($("#to-input").val()); //BGN
    let url = `https://free.currencyconverterapi.com/api/v6/convert?q=${from}_${to}`;

    $.get(url, function (data) {
        console.log(data);
    })
})

function changeValue(id, newText) {
    var el = document.getElementById(id);
    el.value = newText;
    return false;
}

$("#swap-btn").click(function () {
    let newFrom = to;
    let newTo = from;
    console.log(newFrom, newTo);

    let url = `https://free.currencyconverterapi.com/api/v6/convert?q=${newFrom}_${newTo}`;

       changeValue("from-input", newFrom);
       changeValue("to-input", newTo);

    $.get(url, function (data) {
        console.log(data)
    })
})