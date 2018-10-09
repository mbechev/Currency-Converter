import {listCurrencies, currenciesArray} from "./database.js";
import {autocomplete} from "./autocomplete.js";

console.log(listCurrencies);


// autocomplete($("#myInput"), currenciesArray);
autocomplete(document.getElementById("from-input"), currenciesArray);
autocomplete(document.getElementById("to-input"), currenciesArray);