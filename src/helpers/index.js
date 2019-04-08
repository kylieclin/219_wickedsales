
export function formatMoney(pennies){
    pennies = parseFloat(pennies);
    if(isNaN(pennies)){
        return 'TBA'
    }
    const dollars = (pennies/100).toFixed(2);
    return `$${dollars}`;
}


export function toWords(str){
    let result = str.replace(/[A-Z]/g, letter=>{
        return ' '+ letter;
    });

    result = result[0].toUpperCase() + result.slice(1);

    return result;
}