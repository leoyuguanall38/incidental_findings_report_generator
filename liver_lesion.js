console.log('working?');

var sizeCategory = "";
var riskCategory = "";
var imagingFeaturesCategory = "";

var lesionAppearance = "";
var lesionSize = "";
var lesionLocation = "";

var lesionDescription = "";

var recommendation = "";

const source = "The recommendations provided is based on Gore RM, Pickhardt PJ, Mortele KJ, et al. Management of Incidental Liver Lesions on CT: A White Paper of the ACR Incidental Findings Committee. J Am Coll Radiol. 2017;14(11):1429-1437.";

const recommendations = [
    '[Based on imaging characteristics, this is favored to represent a benign lesion. No further follow-up is required.]',
    '[Follow-up liver MRI in 3-6 months (or earlier as per clinical scenario) is recommended for further evaluation.]',
    '[Prompt liver MRI is recommended for further evaluation.]',
    '[Prompt liver MRI or tissue sampling is recommended for further evaluation.]'
];

function sizeOptionExpand(sizeOption) {
    document.getElementById("submission").style.display = 'none';

    sizeCategory = sizeOption; //Save size option to global variable sizeCategory

    if (sizeOption == '<1cm') {
        document.getElementById("<1cm").style.display = 'inline';
    } else {
        document.getElementById("<1cm").style.display = 'none';
    }

    if (sizeOption == '1-1.5cm') {
        document.getElementById("1-1.5cm").style.display = 'inline';
    } else {
        document.getElementById("1-1.5cm").style.display = 'none';
    }

    if (sizeOption == '>1.5cm') {
        document.getElementById(">1.5cm").style.display = 'inline';
    } else {
        document.getElementById(">1.5cm").style.display = 'none';
    }
}

function riskOptionExpand(riskLevel) {
    riskCategory = riskLevel;

    if (riskLevel == 'low_risk' || riskLevel == 'high_risk') {
        document.getElementById("submission").style.display = 'inline';
    } else {
        document.getElementById("submission").style.display = 'none';
    }
}

function imagingFeaturesOptionExpand(imagingFeatures) {
    imagingFeaturesCategory = imagingFeatures;

    if (imagingFeatures == 'benign') {
        document.getElementById("submission").style.display = 'inline';
        document.getElementById("flash-filling_1.0-1.5cm").style.display = 'none';
    } else if (imagingFeatures == 'suspicious') {
        document.getElementById("submission").style.display = 'inline';
        document.getElementById("flash-filling_1.0-1.5cm").style.display = 'none';
    } else if (imagingFeatures == 'flash-filling') {
        document.getElementById("flash-filling_1.0-1.5cm").style.display = 'inline';
        document.getElementById("submission").style.display = 'none';
    } else {
        document.getElementById("flash-filling_1.0-1.5cm").style.display = 'none';
        document.getElementById("submission").style.display = 'none';
    }
}

function imagingFeaturesOptionExpand2(imagingFeatures) {
    imagingFeaturesCategory = imagingFeatures;

    if (imagingFeatures == 'benign') {
        document.getElementById("submission").style.display = 'inline';
        document.getElementById("suspicious_or_flash-filling_>1.5cm").style.display = 'none';
    } else if (imagingFeatures == 'suspicious' || 'flash-filling') {
        document.getElementById("suspicious_or_flash-filling_>1.5cm").style.display = 'inline';
        document.getElementById("submission").style.display = 'none';
    } else {
        document.getElementById("suspicious_or_flash-filling_>1.5cm").style.display = 'none';
        document.getElementById("submission").style.display = 'none';
    }
}

function recommend() {
    lesionAppearance = document.getElementById('lesion_appearance').value;
    lesionSize = document.getElementById('lesion_size').value;
    lesionLocation = document.getElementById('lesion_location').value;

    if (lesionAppearance == "Lesion Appearance" || lesionSize == "" || lesionLocation == "") {
        alert("Please select/enter the required values!");
        return;
    }

    lesionDescription = `${lesionSize} cm ${lesionAppearance} lesion within ${lesionLocation} of the liver.`;

    switch (sizeCategory) {
        case "<1cm":
            switch (riskCategory) {
                case "low_risk":
                    recommendation = recommendations[0];
                    break;
                case "high_risk":
                    recommendation = recommendations[1];
                    break;
                default:
                    break;
            }
            break;
        case "1-1.5cm":
            switch (imagingFeaturesCategory) {
                case "benign":
                    recommendation = recommendations[0];
                    break;
                case "suspicious":
                    recommendation = recommendations[2];
                    break;
                case "flash-filling":
                    switch (riskCategory) {
                        case "low_risk":
                            recommendation = recommendations[0];
                            break;
                        case "high_risk":
                            recommendation = recommendations[2];
                            break;
                        default:
                            break;
                    }
                    break;
                default:
                    break;
            }
            break;
        case ">1.5cm":
            switch (imagingFeaturesCategory) {
                case "benign":
                    recommendation = recommendations[0];
                    break;
                case "suspicious":
                    switch (riskCategory) {
                        case "low_risk":
                            recommendation = recommendations[2];
                            break;
                        case "high_risk":
                            recommendation = recommendations[3];
                            break;
                        default:
                            break;
                    }
                    break;
                case "flash-filling":
                    switch (riskCategory) {
                        case "low_risk":
                            recommendation = recommendations[2];
                            break;
                        case "high_risk":
                            recommendation = recommendations[3];
                            break;
                        default:
                            break;
                    }
                    break;
                default:
                    break;
            }
            break;
        default:
            break;
    }


    document.getElementById('impression').value = lesionDescription + " " + recommendation + " " + source;
}