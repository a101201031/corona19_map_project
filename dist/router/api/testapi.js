"use strict";

var xhr = new XMLHttpRequest();
var url = 'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson';
/*URL*/

var queryParams = '?' + encodeURIComponent('ServiceKey') + '=' + '75OZ0D2Qn+YnQwUW8bNIgbIvRJHAM8vR/DzUjRUuVis4ayr0QHSIwO5AD95IHm2eSbfbsnKwNQuFCUZCaTU/hA==';
/*Service Key*/

queryParams += '&' + encodeURIComponent('ServiceKey') + '=' + encodeURIComponent('-');
/**/

queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1');
/**/

queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10');
/**/

queryParams += '&' + encodeURIComponent('startCreateDt') + '=' + encodeURIComponent('20200410');
/**/

queryParams += '&' + encodeURIComponent('endCreateDt') + '=' + encodeURIComponent('20200410');
/**/

xhr.open('GET', url + queryParams);

xhr.onreadystatechange = function () {
  if (this.readyState == 4) {
    console.log('Status: ' + this.status + 'nHeaders: ' + JSON.stringify(this.getAllResponseHeaders()) + 'nBody: ' + this.responseText);
  }
};

xhr.send('');