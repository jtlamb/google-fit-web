/**
 * @param kg kilograms
 * @returns conversion from kg to lbs
 */
export function kToLbs(kg) {
    return kg * 2.20462;
}

/**
 * @param m meters
 * @returns conversion from meters to feet
 */
export function mToFt(m) {
    let ft = m * 3.28084;
    let inches = (ft % ft.toFixed(0)) * 12;
    ft = ft.toFixed(0);
    inches = Math.round(inches).toFixed(0)
    return {
        ft,
        inches
    }
}
/**
 * @param m meters 
 * @returns conversion from meters to miles
 */
export function mToMi(m) {
    return m*0.000621371192;
}

/**
 * @param m number of month 
 * @returns string representation of the month
 */
export function getMonth(m) {
    switch(m) {
        case 1: return "January";
        case 2: return "February";
        case 3: return "March";
        case 4: return "April";
        case 5: return "May";
        case 6: return "June";
        case 7: return "July";
        case 8: return "August";
        case 9: return "September";
        case 10: return "October";
        case 11: return "November";
        case 12: return "December";
        default: return "Invalid Month"
    }
}
