/**
 * Created by BBI-M1009 on 10/04/16.
 */

/**
 * array mapping the questions to their row index
 * @type {{heartFailure: number, hypertension: number, age: number, diabetesMellitus: number, stroke: number,
 *     vascularDisease: number, sex: number}}
 */
var mapping = {
    "heartFailure": 0,
    "hypertension": 1,
    "age"         : 2,
    "diabetes"    : 3,
    "stroke"      : 4,
    "vascular"    : 5,
    "sex"         : 6
};

/**
 * function returning the cell index based on the value
 * @param key
 * @param value
 * @returns {string}
 */
function getSelectedCellIndex(key, value)
{
    var cellIndex = "0";
    switch (key)
    {
        case "age":
            var mAge = Number(value);
            if (mAge <= 64)
                cellIndex = "0";
            else if (mAge >= 65 && mAge <= 74)
                cellIndex = "1";
            else if (mAge >= 75)
                cellIndex = "2";
            break;
        case "sex":
            if (value === "F")
                cellIndex = "1";
            break;
        default:
            if (value === "1")
                cellIndex = "1";
            break;
    }
    return cellIndex;
}

/**
 * function returning the percentage box. The logic to calculate the percentage can be different for every score.
 * @param score
 */
function getPercentage(score)
{
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