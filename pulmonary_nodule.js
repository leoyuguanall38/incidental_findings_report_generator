console.dir(document);

var findingsAndImpression = document.getElementById('impression');

var impression = '';

var maxNoduleSize = 0;

var noduleNumber = 'Solitary';

var noduleType = 'Solid';

var recommendation = '';

const recommendations = [
    '[No further follow-up is required, however, if the patient has high risk factors for primary lung malignancy, follow-up noncontrast CT scan chest in 12 months may be obtained. (Heber MacMahon et al., Guidelines for management of incidental pulmonary nodules detected on CT images: From the Fleischner Society 2017, Radiology. 2017 Jul;284 (1):228-243.)]',
    '[Consider follow up non contrast chest CT at 6-12 months, then consider CT chest at 18-24 months (Heber MacMahon et al., Guidelines for management of incidental pulmonary nodules detected on CT images: From the Fleischner Society 2017, Radiology. 2017 Jul;284 (1):228-243.)]',
    '[Consider follow up non contrast chest CT at 3-6 months, then consider CT chest at 18-24 months (Heber MacMahon et al., Guidelines for management of incidental pulmonary nodules detected on CT images: From the Fleischner Society 2017, Radiology. 2017 Jul;284 (1):228-243.)]',
    '[Consider short term follow up non contrast Chest CT at 3 months, PET/CT or tissue sampling. Please note that negative PET-CT does not exclude low grade malignancy, FDG uptake may be underestimated in nodules <1 cm in size, or those close to diaphragm.(Heber MacMahon et al., Guidelines for management of incidental pulmonary nodules detected on CT images: From the Fleischner Society 2017, Radiology. 2017 Jul;284 (1):228-243.)]',
    '[Consider follow up non contrast chest CT at 3-6 months,then consider CT chest at 18-24 months (Heber MacMahon et al., Guidelines for management of incidental pulmonary nodules detected on CT images: From the Fleischner Society 2017, Radiology. 2017 Jul;284 (1):228-243.)]',
    '[No further follow-up is required, however, if the nodule morphology is suspicious, consider follow up at 2 and 4 years; if grows or increasingly solid, consider resection.(Heber MacMahon et al., Guidelines for management of incidental pulmonary nodules detected on CT images: From the Fleischner Society 2017, Radiology. 2017 Jul;284 (1):228-243.)]',
    '[Consider follow up non contrast chest CT at 3-6 months. if unchanged, consider CT chest at 2 and 4 years.(Heber MacMahon et al., Guidelines for management of incidental pulmonary nodules detected on CT images: From the Fleischner Society 2017, Radiology. 2017 Jul;284 (1):228-243.)]',
    '[Consider follow up non contrast chest CT at 6-12 months to confirm persistence, then consider CT chest every 2 years until 5 years.(Heber MacMahon et al., Guidelines for management of incidental pulmonary nodules detected on CT images: From the Fleischner Society 2017, Radiology. 2017 Jul;284 (1):228-243.)]',
    '[Consider follow up non contrast chest CT at 3-6 months, then management based on most suspicious nodule(s).(Heber MacMahon et al., Guidelines for management of incidental pulmonary nodules detected on CT images: From the Fleischner Society 2017, Radiology. 2017 Jul;284 (1):228-243.)]',
    '[No further follow-up is required.(Heber MacMahon et al., Guidelines for management of incidental pulmonary nodules detected on CT images: From the Fleischner Society 2017, Radiology. 2017 Jul;284 (1):228-243.)]',
    '[Consider follow up non contrast chest CT at 3-6 months. If unchanged, consider CT chest at 2 and 4 years.(Heber MacMahon et al., Guidelines for management of incidental pulmonary nodules detected on CT images: From the Fleischner Society 2017, Radiology. 2017 Jul;284 (1):228-243.)]',
    '[Consider follow up non contrast chest CT at 3-6 months to confirm persistence. If unchanged and solid component below 6 mm, CT annually for 5 years. Note that persistent part-solid nodules with solid component >6 mm are highly suspicious for malignancy.(Heber MacMahon et al., Guidelines for management of incidental pulmonary nodules detected on CT images: From the Fleischner Society 2017, Radiology. 2017 Jul;284 (1):228-243.)]',
    '[Consider follow up non contrast chest CT at 3-6 months.Then management based on most suspicious nodule(s).(Heber MacMahon et al., Guidelines for management of incidental pulmonary nodules detected on CT images: From the Fleischner Society 2017, Radiology. 2017 Jul;284 (1):228-243.)]'
];

var noduleFinding = `${noduleNumber} pulmonary nodule(s) measuring up to ${maxNoduleSize}.`

function recommend() {
    console.log('temporary recommendations')
    findingsAndImpression.value = recommendations[3];
}