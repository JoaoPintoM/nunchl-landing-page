var express = require('express');
var router = express.Router();

var config = require('../configuration')
var GoogleSpreadsheet = require("google-spreadsheet");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {

  // var mySheet = new GoogleSpreadsheet(config.NUNCHL_GOOGLE_SPREADSHEET_KEY);

  // mySheet.setAuth(
  //   config.NUNCHL_GOOGLE_EMAIL,
  //   config.NUNCHL_GOOGLE_EMAIL_PASSWORD,
  //   function(err) {
  //   if (err) console.error(err);
  //   mySheet.getInfo(function(err, sheetInfo) {
  //       console.log( sheetInfo.title + ' is loaded' );
  //       // use worksheet object if you want to forget about ids
  //       sheetInfo.worksheets[0].getRows( function( err, rows ){
  //           rows[0].colname = 'new val';
  //           rows[0].save();
  //           rows[0].del();
  //       })
  //   })

  //   // column names are set by google based on the first row of your sheet
  //   mySheet.addRow( 2, { colname: 'col value'} );

  //   mySheet.getRows( 2, {
  //       start: 100,         // start index
  //       num: 100            // number of rows to pull
  //   }, function(err, row_data){
  //       // do something...
  //   });
  // });

  res.redirect('/');
});

module.exports = router;
