/**
 * function returning the percentage box. The logic to calculate the percentage can be different for every score.
 * @param score
 */
function getPercentage(score) {
    var percentage = {
        "0": "0",
        "1": "1.3",
        "2": "2.2",
        "3": "3.2",
        "4": "4.0",
        "5": "6.7",
        "6": "9.8",
        "7": "9.6",
        "8": "6.7",
        "9": "15.2"
    };

    return percentage[score];
}