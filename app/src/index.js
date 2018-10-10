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

$("#swap-btn").click(function () {
    let from = ($("#from-input").val());
    let to = ($("#to-input").val()); 
    let newFrom = to;
    let newTo = from;
    $("#from-input").val(newFrom);
    $("#to-input").val(newTo);
});