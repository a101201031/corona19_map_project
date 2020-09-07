import dbConnect from '../dbConnect';
import confirmedCasesModel from '../model/confirmedCases';

dbConnect();

const confirmedCases = new confirmedCasesModel();

confirmedCases.confirmedNo = 1;
confirmedCases.patienId = 1;
// confirmedCases.confirmedDate = '';
confirmedCases.residence = '지역';
confirmedCases.tripHistory = '집';
confirmedCases.visitType = '모름';
confirmedCases.takeAction = '자가격리중';

confirmedCases.save((err) => {
  if (err) {
    console.error(err);
  }
  console.log('success');
});
