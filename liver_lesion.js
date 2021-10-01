console.log('working?');

const recommendations = [
    '[This is favored to represent a benign lesion. No further follow-up is required.]',
    '[Follow-up MRI in 3-6 months is recommended.]',
    '[Liver MRI is recommended for further evaluation.]',
    '[Recommend liver MRI or tissue sampling.]'
];

function sizeOptionExpand(sizeOption) {
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
    if (riskLevel == 'low_risk' || riskLevel == 'high_risk') {
        document.getElementById("submission").style.display = 'inline';
    } else {
        document.getElementById("submission").style.display = 'none';
    }
}

function recommend() {
    document.getElementById('impression').value = recommendations[2];
}