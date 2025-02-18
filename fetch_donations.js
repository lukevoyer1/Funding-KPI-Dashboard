function fetchDonationData() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
  var url = "https://api.example.com/donations"; // Replace with actual API endpoint
  var response = UrlFetchApp.fetch(url);
  var json = JSON.parse(response.getContentText());

  for (var i = 0; i < json.length; i++) {
    var row = [
      json[i].donor_id,
      json[i].donor_name,
      json[i].donation_date,
      json[i].donation_amount,
      json[i].donor_type,
      json[i].retention_status
    ];
    sheet.appendRow(row);
  }
}