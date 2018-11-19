/**
 * function returning the percentage box. The logic to calculate the percentage can be different for every score.
 * @param score
 */
function getPercentage(score) {
    var percentage = {
        "0": "0,78",
        "1": "2,01",
        "2": "3,71",
        "3": "5,92",
        "4": "9,27",
        "5": "15,26",
        "6": "19,74",
        "7": "21,50",
        "8": "22,38",
        "9": "23,64"
    };

    return percentage[score];
}