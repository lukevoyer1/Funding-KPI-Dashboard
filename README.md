# Nonprofit KPI Dashboard 📊

This project integrates **Google Sheets** with **Looker Studio** to create a **visual dashboard** for nonprofit fundraising insights.

## Features
- 📅 **Tracks donor retention & funding trends**
- 🔄 **Automated data fetching** using Google Apps Script
- 📊 **Interactive visualizations** in Looker Studio

## How to Use
### Step 1️⃣: Set Up Google Sheets
1. Open Google Sheets and create a new spreadsheet.
2. Copy and paste the data from `data/sample_fundraising_data.csv`.

### Step 2️⃣: Enable Google Apps Script for Automation
1. Open **Google Sheets** > **Extensions** > **Apps Script**.
2. Copy the script from `scripts/fetch_donations.js` into the editor.
3. Save and run the script to fetch data.

### Step 3️⃣: Connect to Looker Studio
1. Go to [Looker Studio](https://lookerstudio.google.com/).
2. Select **Google Sheets** as the data source.
3. Create **visualizations** for donor retention and funding trends.

## Contributing
Feel free to fork this repository and contribute! 

## License
This project is licensed under the MIT License.
