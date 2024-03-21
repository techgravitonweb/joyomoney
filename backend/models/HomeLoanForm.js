const mongoose = require('mongoose');

const homeloanformSchema = new mongoose.Schema({
    userdetails : 
        {
            name : String,
            email : String,
            phone : String,
            user_loan_type : String,
            address : String,
            business_address : String,
            user_salaried : String,
            monthly_salary : String,
            yearly_income : String
        }
    ,
    userbankingdetails : [
        {
            bank_name : String,
            account_type : String,
            account_number : String,
            guar_remark : String
        }
    ],
    userloanpaymentdetails : [
        {
            bank_nbfc : String,
            loan_type : String,
            emi : String,
            start_form : String,
            pandding : String,
            aaplication_pan_no : String,
            adhar_no : String,
            dob : String,
            voter_id : String,
            spouse_name : String,
            spouse_dob : String
        }
    ],
    coapplicantdetails: [
        {
            co_name: String,
            co_email: String,
            co_phone: String,
            co_monthly_salary : String,
            co_yearly_income : String,
            co_address: String,
            co_business_address: String
        }
    ],
    coapplicantloanpaymentdetails: [
        {
            co_bank_nbfc: String,
            co_loan_type: String,
            co_emi: String,
            co_start_form : String,
            co_pandding: String,
            co_aaplication_pan_no: String,
            co_adhar_no: String,
            co_dob: String,
            co_voter_id: String,
            co_spouse_name: String,
            co_spouse_dob: String
        }
    ],
    guarantordetails : [
        {
            guar_name : String,
            guar_email : String,
            guar_phone : String,
            guar_monthly_salary : String,
            guar_yearly_income : String,
            guar_address : String,
            guar_business_address : String
        }
    ],
    guarantorbankdetails : [
        {
            guar_bank_name : String,
            guar_account_type : String,
            guar_account_number : String,
            guar_remark : String
        }
    ],
    guarantorloandetails : [
        {
            guar_bank_nbfc : String,
            guar_loan_type : String,
            guar_emi : String,
            guar_start_form : String,
            guar_pandding: String,
            guar_aaplication_pan_no: String,
            guar_adhar_no: String,
            guar_dob: String,
            guar_voter_id: String,
            guar_spouse_name: String,
            guar_spouse_dob: String
        }
    ],
    files: [
        {
            fileName: String,
            path: String,
            originalFileName: String,
            fieldName: String
        }
    ],
});

module.exports = mongoose.model('HomeLoanForm', homeloanformSchema);