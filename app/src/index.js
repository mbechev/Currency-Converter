import { listCurrencies, currenciesArray } from "./database.js";
import { autocomplete } from "./autocomplete.js";
import * as $ from "jquery";

autocomplete(document.getElementById("from-input"), currenciesArray);
autocomplete(document.getElementById("to-input"), currenciesArray);


$("#convert-btn").click(function () {
    let from = ($("#from-input").val()); //USD
     let to = ($("#to-input").val()); //BGN
    let url = `https://free.currencyconverterapi.com/api/v6/convert?q=${from}_${to}`;

    let getExchangeRate = () => {
        return new Promise((resolve) => {
            $.get(url, (data) => {
                let printVal = (obj) => {
                    if (obj.val) {
                        resolve(obj.val)
                    } else {
                        for (const key in obj) {
                            printVal(obj[key]);
                        }
                    }
                }
                printVal(data);
            });
        })
    }

    let convertionResult = (rate) => {
        return new Promise((resolve) => {
            let amount = $("#amount").val();
            let calculation = (amount * rate).toFixed(4);
            resolve(calculation);
        })
    }

    let aSync = async function () {
        let exchangeRate = await getExchangeRate();
        let result = await convertionResult(exchangeRate);

        // let tag = $("<p></p>").text(result).css("color", "white");
        // $("#result").append(tag);
    }
    aSync();
});

$("#swap-btn").click(function () {
    let from = ($("#from-input").val());
    let to = ($("#to-input").val()); 
    let newFrom = to;
    let newTo = from;
    $("#from-input").val(newFrom);
    $("#to-input").val(newTo);
});