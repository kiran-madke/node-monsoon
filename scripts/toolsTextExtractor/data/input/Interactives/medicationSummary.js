$(document).ready(function () {

    $("#btnDataExport").click(function () {
        getPDFDataIOS();
    });
});

/**
 * object for maintaining the medication summary table
 */
var medicationSummary;

/**
 * Name of the therapies in the AF treatment manager
 */
var therapies = ["strokePreventionTherapy", "rateControl", "rhythmTherapy", "otherMedications"];

function composeMedicationSummary() {

    // initialize the Medication summary section
    medicationSummary = initMedicationSummary();

    // finding the number of sections
    var noOfSections = therapies.length;
    // composing the stroke prevention therapy
    for (sctn = 0; sctn < noOfSections; sctn++) {
        var medTable1 = document.getElementById("summ_med_table_".concat(sctn + 1));
        var mNodes = medTable1.childNodes;

        for (var node = 0; node < mNodes.length; node++) {
            if (mNodes[node].nodeName.toLowerCase() === "tbody") {
                var mDrugsList = mNodes[node].children;

                for (var ctr = 0; ctr < mDrugsList.length; ctr++) {
                    if (ctr === 0)
                        medicationSummary[therapies[sctn]].medications_column_names = getMedicationsColumnNames(mDrugsList[0].children);
                    else {
                        if (sctn === 3) {
                            if (ctr < mDrugsList.length - 1) {
                                medicationSummary[therapies[sctn]].medications.push(getOtherMedications(mDrugsList[ctr].children));
                            }
                        } else {
                            if (mDrugsList[ctr].id !== "dummy_section_".concat(sctn + 1))
                                medicationSummary[therapies[sctn]].medications.push(getMedications(mDrugsList[ctr].children));
                        }

                    }
                }
            }
        }
    }

    medicationSummary.comments = document.getElementById("commentText").value;

    return JSON.stringify(medicationSummary);
}



/**
 * function preparing the medication names
 */
function getMedications(row) {
    var medDetails = ["name", "dose", "when", "since"];

    var medNames = new Object();
    for (var ctr = 0; ctr < row.length; ctr++) {
        // converting string to object
        //var obj = JSON.parse(medDetails[ctr]);

        medNames[medDetails[ctr]] = row[ctr].textContent;
    }
    return medNames;
}

/**
 * function preparing the medication names
 */
function getOtherMedications(row) {
    var medDetails = ["name", "dose", "when", "since"];

    var medNames = new Object();
    for (var ctr = 0; ctr < row.length; ctr++) {
        // converting string to object
        //var obj = JSON.parse(medDetails[ctr]);

        medNames[medDetails[ctr]] = row[ctr].children[0].value;
    }
    return medNames;
}

/**
 * function preparing the medication column names
 */
function getMedicationsColumnNames(firstRow) {
    var medColNames = [];
    for (var ctr = 0; ctr < firstRow.length; ctr++) {
        medColNames.push(firstRow[ctr].textContent);
    }
    return medColNames;
}


/**
 * function initialising the medication summary object
 */
function initMedicationSummary() {
    var tMedicationSummary = new Object();

    // initialising the report headers
    tMedicationSummary.reportHeader = "AF Treatment Manager Summary";
    tMedicationSummary.reportSubHeader = "AF Treatment Manager Summary";

    // initialising the Stroke Prevention Therapy section
    tMedicationSummary.strokePreventionTherapy = new Object();
    tMedicationSummary.strokePreventionTherapy.title = "Stroke Prevention Therapy";
    tMedicationSummary.strokePreventionTherapy.medications_column_names = [];
    tMedicationSummary.strokePreventionTherapy.medications = [];

    // initialising the Rate Control Therapy section
    tMedicationSummary.rateControl = new Object();
    tMedicationSummary.rateControl.title = "Rate control therapy";
    tMedicationSummary.rateControl.medications_column_names = [];
    tMedicationSummary.rateControl.medications = [];

    // initialising the Rhythm Control Therapy section
    tMedicationSummary.rhythmTherapy = new Object();
    tMedicationSummary.rhythmTherapy.title = "Rhythm control therapy";
    tMedicationSummary.rhythmTherapy.medications_column_names = [];
    tMedicationSummary.rhythmTherapy.medications = [];

    // initialising the other medications section
    tMedicationSummary.otherMedications = new Object();
    tMedicationSummary.otherMedications.title = "Other medications";
    tMedicationSummary.otherMedications.medications_column_names = [];
    tMedicationSummary.otherMedications.medications = [];

    // initialising the Comments section
    tMedicationSummary.commentHeader = "Next Steps/Comments";
    tMedicationSummary.comments = "";

    return tMedicationSummary;
}

/**
 * function callback returning the medication summary to the iOS devices
 */
function getPDFDataIOS() {
    console.log(composeMedicationSummary());
    return composeMedicationSummary();
}

/**
 * function callback returning the medication summary to the android devices
 */
function getPDFDataAndroid() {
    Android.getPDFExportData(composeMedicationSummary());
}