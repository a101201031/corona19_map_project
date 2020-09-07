import dbConnect from '../dbConnect';
import confirmedCasesModel from '../model/confirmedCases';

dbConnect();

// const confirmedCases = new confirmedCasesModel();
confirmedCasesModel.find((err, confirmedCases) => {
  if (err) {
    console.error(err);
  }
  console.log(confirmedCases);
});
