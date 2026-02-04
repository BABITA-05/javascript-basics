export function formatCurrency(amount){
    return "RS. " + amount;
}

export function generateRendomId(){
    return Math.floor(Math.random() * 10000); 
}

export function getTodayDate(){
    return new Date().toDateString();
}