import { API_BASE_URL } from "./config.js";
import { formatCurrency, generateRendomId, getTodayDate } from "./utils.js";
console.log(API_BASE_URL);

console.log(formatCurrency(500));
console.log(generateRendomId());
console.log(getTodayDate());