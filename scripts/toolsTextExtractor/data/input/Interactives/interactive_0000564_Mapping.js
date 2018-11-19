/**
 * Created by BBI-M1009 on 10/04/16.
 */

/**
 * array mapping the questions to their row index
 * @type {{heartFailure: number, hypertension: number, age: number, diabetesMellitus: number, stroke: number, vascularDisease: number, sex: number}}
 */
var mapping = {
	"question1": 0,
	"question2": 1,
	"question3": 2,
	"question4": 3
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
		default:
			if (value === "no")
				cellIndex = "1";
			break;
	}

	return cellIndex;
}