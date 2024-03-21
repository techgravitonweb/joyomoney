import React, { useEffect, useState } from "react";
import moment from "moment"; // Don't forget to import moment

// import "./About.css";
import { tns } from "tiny-slider/src/tiny-slider";
import "@fortawesome/fontawesome-free/css/all.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import axios from 'axios';

const HomeLoan = () => {

  useEffect(() => {
    // Initialize the Tiny Slider
    const slider = tns({
      container: ".sliderFirst",
      items: 1,
      controlsContainer: "#sliderFirstControls",
      prevButton: ".prev",
      nextButton: ".next",
    });
    document.querySelector(".tns-nav").style.display = "none";
    // Clean up on component unmount
    return () => {
      slider.destroy();
    };
  }, []);
  const toastConfig = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };


  const [textDisabld, setTextDisabld] = useState(false);

  const [dividendArr, setDividendArr] = useState([
    {
      bank_name: "",
      account_type: "",
      account_number: "",
      guar_remark: " ",
    
    },
  ]);

  const [dividendArr1, setDividendArr1] = useState([
    {
      bank_nbfc:'',
      loan_type:'',
      emi:'',
      start_form:'',
      pandding:'',
      aaplication_pan_no:'',
      adhar_no:'',
      dob:'',
      voter_id:'',
      spouse_name:'',
      spouse_dob:'',
    
    },
  ]);
  const [dividendArr2, setDividendArr2] = useState([
    {
      co_name:'',
      co_email:'',
      co_phone:'',
      co_monthly_salary:'',
      co_yearly_income:'',
      co_address:'',
      co_business_address:'',

    },
  ]);

  const [dividendArr3, setDividendArr3] = useState([
    {
      co_bank_nbfc:'',
      co_loan_type:'',
      co_emi:'',
      co_start_form:'',
      co_pandding:'',
      co_aaplication_pan_no:'',
      co_adhar_no:'',
      co_dob:'',
      co_voter_id:'',
      co_spouse_name:'',
      co_spouse_dob:'',

    
    },
  ]);

  const [dividendArr4, setDividendArr4] = useState([
    {
      guar_name:'',
      guar_email:'',
      guar_phone:'',
      guar_monthly_salary:'',
      guar_yearly_income:'',
      guar_address:'',
      guar_business_address:'',
    
    },
  ]);
  const [dividendArr5, setDividendArr5] = useState([
    {
      guar_bank_name:'',
      guar_account_type:'',
      guar_account_number:'',
      guar_remark:'',
    
    },
  ]);
  const [dividendArr6, setDividendArr6] = useState([
    {
      guar_bank_nbfc:'',
      guar_loan_type:'',
      guar_emi:'',
      guar_start_form:'',
      guar_pandding:'',
      guar_aaplication_pan_no:'',
      guar_adhar_no:'',
      guar_dob:'',
      guar_voter_id:'',
      guar_spouse_name:'',
      guar_spouse_dob:'',
    
    },
  ]);


  const handleAdd = () => {
    setDividendArr([
      ...dividendArr,
      {
        bank_name: "",
        account_type: "",
        account_number: "",
        guar_remark: " ",
      },
    ]);
  };
  const handleAdd1 = () => {
    setDividendArr1([
      ...dividendArr1,
      {
        bank_nbfc:'',
        loan_type:'',
        emi:'',
        start_form:'',
        pandding:'',
        aaplication_pan_no:'',
        adhar_no:'',
        dob:'',
        voter_id:'',
        spouse_name:'',
        spouse_dob:'',
      },
    ]);
  };
  const handleAdd2 = () => {
    setDividendArr2([
      ...dividendArr2,
      {
       co_name:'',
       co_email:'',
       co_phone:'',
       co_monthly_salary:'',
       co_yearly_income:'',
       co_address:'',
     co_business_address:'',
      },
    ]);
  };
  const handleAdd3 = () => {
    setDividendArr3([
      ...dividendArr3,
      {
      co_bank_nbfc:'',
      co_loan_type:'',
      co_emi:'',
      co_start_form:'',
      co_pandding:'',
      co_aaplication_pan_no:'',
      co_adhar_no:'',
      co_dob:'',
      co_voter_id:'',
      co_spouse_name:'',
      co_spouse_dob:'',
      },
    ]);
  };
  const handleAdd4 = () => {
    setDividendArr4([
      ...dividendArr4,
      {
        guar_name:'',
        guar_email:'',
        guar_phone:'',
        guar_monthly_salary:'',
        guar_yearly_income:'',
        guar_address:'',
        guar_business_address:'',
      
      },
    ]);
  };
  const handleAdd5 = () => {
    setDividendArr5([
      ...dividendArr5,
      {
        guar_bank_name:'',
        guar_account_type:'',
        guar_account_number:'',
        guar_remark:'',
      
      },
    ]);
  };

  const handleAdd6 = () => {
    setDividendArr6([
      ...dividendArr6,
      {
      guar_bank_nbfc:'',
      guar_loan_type:'',
      guar_emi:'',
      guar_start_form:'',
      guar_pandding:'',
      guar_aaplication_pan_no:'',
      guar_adhar_no:'',
      guar_dob:'',
      guar_voter_id:'',
      guar_spouse_name:'',
      guar_spouse_dob:'',
    
      },
    ]);
  };


  const handleInputChange1 = (e, index) => {
    const { name, value } = e.target;
    console.log("value", e.target.value);
    const list = [...dividendArr];
    list[index][name] = value;
    setDividendArr(list);
  };
  
  const handleInputChange2 = (e, index) => {
    const { name, value } = e.target;
    console.log("value", e.target.value);
    const list = [...dividendArr1];
    list[index][name] = value;
    setDividendArr1(list);
  };
  const handleInputChange3 = (e, index) => {
    const { name, value } = e.target;
    console.log("value", e.target.value);
    const list = [...dividendArr2];
    list[index][name] = value;
    setDividendArr2(list);
  };
  const handleInputChange4 = (e, index) => {
    const { name, value } = e.target;
    console.log("value", e.target.value);
    const list = [...dividendArr3];
    list[index][name] = value;
    setDividendArr3(list);
  };

  const handleInputChange5 = (e, index) => {
    const { name, value } = e.target;
    console.log("value", e.target.value);
    const list = [...dividendArr4];
    list[index][name] = value;
    setDividendArr4(list);
  };
  const handleInputChange6 = (e, index) => {
    const { name, value } = e.target;
    console.log("value", e.target.value);
    const list = [...dividendArr5];
    list[index][name] = value;
    setDividendArr5(list);
  };

  const handleInputChange7 = (e, index) => {
    const { name, value } = e.target;
    console.log("value", e.target.value);
    const list = [...dividendArr6];
    list[index][name] = value;
    setDividendArr6(list);
  };

  const handleRemove = (index) => {
    if (dividendArr.length > 0) {
      const listArr = [...dividendArr];
      listArr.splice(index, 1);
      setDividendArr(listArr);
    }
  };
  const handleRemove1 = (index) => {
    if (dividendArr1.length > 0) {
      const listArr = [...dividendArr1];
      listArr.splice(index, 1);
      setDividendArr1(listArr);
    }
  };

  const handleRemove2 = (index) => {
    if (dividendArr2.length > 0) {
      const listArr = [...dividendArr2];
      listArr.splice(index, 1);
      setDividendArr2(listArr);
    }
  };

  const handleRemove3 = (index) => {
    if (dividendArr3.length > 0) {
      const listArr = [...dividendArr3];
      listArr.splice(index, 1);
      setDividendArr3(listArr);
    }
  };

  const handleRemove4 = (index) => {
    if (dividendArr4.length > 0) {
      const listArr = [...dividendArr4];
      listArr.splice(index, 1);
      setDividendArr4(listArr);
    }
  };
  const handleRemove5 = (index) => {
    if (dividendArr5.length > 0) {
      const listArr = [...dividendArr5];
      listArr.splice(index, 1);
      setDividendArr5(listArr);
    }
  };

  const handleRemove6 = (index) => {
    if (dividendArr6.length > 0) {
      const listArr = [...dividendArr6];
      listArr.splice(index, 1);
      setDividendArr6(listArr);
    }
  };


  const [selectedLanguage, setSelectedLanguage] = useState("");

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  let newformData = new FormData();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    monthly_salary: "",
    yearly_income: "",
    start_form: "",
    salary: "",
    loan_type: "",
    user_loan_type: "",
    employment_type: "null",
    address: "",
    business_address: "",
    bank_name: "",
    account_type: "",
    account_number: "",
    branch_name: "",
    aaplication_pan_no: "",
    adhar_no: "",
    dob: "",
    voter_id: "",
    // three_month_salary: null,
    // itr: null,
    // income_proof: null,
    // registration_proof: null,
    // last_two_year_six: null,
    // last_two_year_as: null,
    spouse_name: "",
    bank_nbfc: "",
    emi: "",
    pandding: "",
    co_name: "",
    co_monthly_salary: "",
    co_yearly_income: "",
    co_bank_name: "",
    co_account_type: "",
    co_account_number: "",
    fast_remark:'',
    co_remark: "",
    co_bank_nbfc: "",
    co_loan_type: "",
    co_emi: "",
    co_start_form: "",
    co_pandding: "",
    co_aaplication_pan_no: "",
    co_dob: "",
    co_voter_id: "",
    co_spouse_name: "",
    co_spouse_dob: "",
    // co_three_month_salary: null,
    // // co_last_two_year: null,
    // co_income_proof: null,
    // co_itr: null,
    // co_registration_proof: null,
    // co_last_two_year_six: null,
    // co_last_two_year_as: null,
    co_address: "",
    co_business_address: "",
    yearly_income: "",
    guar_name: "",
    guar_email: "",
    guar_phone: "",
    guar_monthly_salary: "",
    guar_yearly_income: "",
    guar_address: "",
    guar_business_address: "",
    guar_bank_name: "",
    guar_account_type: "",
    guar_account_number: "",
    guar_remark: "",
    guar_bank_nbfc: "",
    guar_loan_type: "",
    guar_emi: "",
    guar_start_form: "",
    guar_pandding: "",
    guar_aaplication_pan_no: "",
    guar_adhar_no: "",
    guar_dob: "",
    guar_voter_id: "",
    guar_spouse_name: "",
    guar_spouse_dob: "",
    // guar_three_month_salary: null,
    // guar_last_two_year_six: null,
    // guar_last_two_year_as: null,
    // guar_income_proof: null,
    // guar_itr: null,
    // guar_registration_proof: null,
  });

  const [formData2, setFormData2] = useState({
    three_month_salary: null,
    itr: null,
    income_proof: null,
    registration_proof: null,
    last_two_year_six: null,
    last_two_year_as: null,
    co_three_month_salary: null,
    co_income_proof: null,
    co_itr: null,
    co_registration_proof: null,
    co_last_two_year_six: null,
    co_last_two_year_as: null,
    guar_three_month_salary: null,
    guar_last_two_year_six: null,
    guar_last_two_year_as: null,
    guar_income_proof: null,
    guar_itr: null,
    guar_registration_proof: null,
  })

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: null }); // Clear errors for the changed field
  };

  const handleFileChange = (e, fieldName) => {
    const file = e.target.files[0];

    // Ensure the selected file is a PDF file
    if (file && file.type === "application/pdf") {
      // Update the specific field in formData
      setFormData2({
        ...formData2,
        [fieldName]: file,
      });
    } else {
      // Handle the case where the selected file is not a PDF
      alert("Please select a PDF file.");
      e.target.value = null; // Clear the input field
    }
  };

  // console.log(formData2);

  const validateForm = () => {
    const newErrors = {};

    // Add your validation logic here
    if (!formData.name) {
      newErrors.name = "Name is Requried";
    }
    if (!formData.email) {
      newErrors.email = "Email is Requried";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone is Requried";
    }
    if (!formData.aaplication_pan_no) {
      newErrors.aaplication_pan_no = "Application Pan is Requried";
    }

    if (!formData.password) {
      newErrors.password = "Password is Requried";
    }

    if (!formData.loan_type) {
      newErrors.loan_type = "Select Loan Types is Requried";
    }

    if (!formData.employment_type) {
      newErrors.employment_type = "Employment is Requried";
    }
    if (!formData.address) {
      newErrors.address = "Address is Requried";
    }

    if (!formData.fast_remark) {
      newErrors.fast_remark = "Remarks is Requried";
    }
    

    if (!formData.business_address) {
      newErrors.business_address = "Business_Address is Requried";
    }
    if (!formData.bank_name) {
      newErrors.bank_name = " Bank name is Requried";
    }
    if (!formData.account_type) {
      newErrors.account_type = "account type  is Requried";
    }
    if (!formData.user_loan_type) {
      newErrors.user_loan_type = "Loan Type  is Requried";
    }
    if (!formData.account_number) {
      newErrors.account_number = "Account Number is Requried";
    }
 
    if (!formData.branch_name) {
      newErrors.branch_name = "Branch_name is Requried";
    }
    if (!formData.start_form) {
      newErrors.start_form = "Start Form is Requried";
    }
    if (!formData.bank_nbfc) {
      newErrors.bank_nbfc = "Bank_nbfc is Requried";
    }
    if (!formData.emi) {
      newErrors.emi = "EMI is Requried";
    }
    if (!formData.pandding) {
      newErrors.pandding = "Pending is Requried";
    }
    if (!formData.spouse_name) {
      newErrors.spouse_name = "Spouse Name is Requried";
    }
    if (!formData.spouse_dob) {
      newErrors.spouse_dob = "Spouse DOB is Requried";
    }
    if (!formData.adhar_no) {
      newErrors.adhar_no = "Adhar_no is Requried";
    }
    if (!formData.dob) {
      newErrors.dob = "DOB is Requried";
    }
    if (!formData.guar_phone) {
      newErrors.guar_phone = "Phone is Requried";
    }
    if (!formData.voter_id) {
      newErrors.voter_id = "VoterId is Requried";
    }
    if (!formData2.three_month_salary) {
      newErrors.three_month_salary = "Files is Requried";
    }
    if (!formData2.itr) {
      newErrors.itr = "ITR Files is Requried";
    }
    if (!formData2.income_proof) {
      newErrors.income_proof = "Income Files is Requried";
    }
    if (!formData2.registration_proof) {
      newErrors.registration_proof = "Regproof is Requried";
    }
    if (!formData2.last_two_year_as) {
      newErrors.last_two_year_as = "Last Two Year AS is Requried";
    }

    if (!formData2.last_two_year_six) {
      newErrors.last_two_year_six = "Last two year  is Requried";
    }

    if (!formData.co_name) {
      newErrors.co_name = "Name is Requried";
    }
    if (!formData.co_email) {
      newErrors.co_email = "Email is Requried";
    }

    if (!formData.co_phone) {
      newErrors.co_phone = "Phone is Requried";
    }

    if (!formData.monthly_salary) {
      newErrors.monthly_salary = "Monthly Salary is Requried";
    }
    if (!formData.co_monthly_salary) {
      newErrors.co_monthly_salary = "Monthly Salary is Requried";
    }
    if (!formData.yearly_income) {
      newErrors.yearly_income = "Yearly Income is Requried";
    }
    if (!formData.co_yearly_income) {
      newErrors.co_yearly_income = "Yearly Income is Requried";
    }

    if (!formData.co_bank_name) {
      newErrors.co_bank_name = "Bank Name is Requried";
    }
    if (!formData.co_account_type) {
      newErrors.co_account_type = "Account Type is Requried";
    }
    if (!formData.co_account_number) {
      newErrors.co_account_number = "Account Number is Requried";
    }
    if (!formData.co_remark) {
      newErrors.co_remark = "Remark is Requried";
    }
    if (!formData.co_bank_nbfc) {
      newErrors.co_bank_nbfc = "Bank Name is Requried";
    }
    if (!formData.co_loan_type) {
      newErrors.co_loan_type = "Loan Type is Requried";
    }
    if (!formData.co_emi) {
      newErrors.co_emi = "EMI is Requried";
    }

    if (!formData.co_start_form) {
      newErrors.co_start_form = "Start Form is Requried";
    }
    if (!formData.co_pandding) {
      newErrors.co_pandding = "Padding is Requried";
    }
    if (!formData.co_aaplication_pan_no) {
      newErrors.co_aaplication_pan_no = "Pan number is Requried";
    }
    if (!formData.co_adhar_no) {
      newErrors.co_adhar_no = "Adhar  is Requried";
    }
    if (!formData.co_dob) {
      newErrors.co_dob = "DOB is Requried";
    }
    if (!formData.co_voter_id) {
      newErrors.co_voter_id = "Voter Id is Requried";
    }

    if (!formData.co_spouse_name) {
      newErrors.co_spouse_name = "Spouse Name  is Requried";
    }

    if (!formData.co_spouse_dob) {
      newErrors.co_spouse_dob = "Spouse DOB  is Requried";
    }

    if (!formData2.co_three_month_salary) {
      newErrors.co_three_month_salary = "three Month Salary is Requried";
    }

    if (!formData2.co_last_two_year_six) {
      newErrors.co_last_two_year_six = "Last Two Year is Requried";
    }
    if (!formData2.co_last_two_year_as) {
      newErrors.co_last_two_year_as = "Last Two Year is Requried";
    }
    if (!formData2.co_income_proof) {
      newErrors.co_income_proof = "Income proof Id is Requried";
    }

    if (!formData2.co_itr) {
      newErrors.co_itr = "ITR is Requried";
    }
    if (!formData2.co_registration_proof) {
      newErrors.co_registration_proof = "Registration proof is Requried";
    }
    if (!formData.co_address) {
      newErrors.co_address = "Address is Requried";
    }
    if (!formData.co_business_address) {
      newErrors.co_business_address = "Business Address is Requried";
    }
    if (!formData.guar_name) {
      newErrors.guar_name = "Name is Requried";
    }
    if (!formData.guar_email) {
      newErrors.guar_email = "Email is Requried";
    }
    if (!formData.guar_monthly_salary) {
      newErrors.guar_monthly_salary = "Monthly salary is Requried";
    }
    if (!formData.guar_yearly_income) {
      newErrors.guar_yearly_income = "Yearly Income is Requried";
    }
    if (!formData.guar_address) {
      newErrors.guar_address = "Address is Requried";
    }
    if (!formData.guar_business_address) {
      newErrors.guar_business_address = "Business Address is Requried";
    }
    if (!formData.guar_bank_name) {
      newErrors.guar_bank_name = "Bank Name is Requried";
    }
    if (!formData.guar_account_type) {
      newErrors.guar_account_type = "Account Type is Requried";
    }
    if (!formData.guar_account_number) {
      newErrors.guar_account_number = "Account Number is Requried";
    }
    if (!formData.guar_remark) {
      newErrors.guar_remark = "Remark is Requried";
    }
    if (!formData.guar_bank_nbfc) {
      newErrors.guar_bank_nbfc = "Bank Name is Requried";
    }
    if (!formData.guar_loan_type) {
      newErrors.guar_loan_type = "Loan Type  is Requried";
    }
    if (!formData.guar_emi) {
      newErrors.guar_emi = "EMI is Requried";
    }
    if (!formData.guar_start_form) {
      newErrors.guar_start_form = "Start Form is Requried";
    }
    if (!formData.guar_pandding) {
      newErrors.guar_pandding = "Pandding is Requried";
    }
    if (!formData.guar_aaplication_pan_no) {
      newErrors.guar_aaplication_pan_no = "Pan No is Requried";
    }
    if (!formData.guar_adhar_no) {
      newErrors.guar_adhar_no = "Adhar No is Requried";
    }
    if (!formData.guar_dob) {
      newErrors.guar_dob = "DOB is Requried";
    }
    if (!formData.guar_voter_id) {
      newErrors.guar_voter_id = "Voter ID is Requried";
    }
    if (!formData.guar_spouse_name) {
      newErrors.guar_spouse_name = "Spouse Name is Requried";
    }
    if (!formData.guar_spouse_dob) {
      newErrors.guar_spouse_dob = " Spouse DOB is Requried";
    }

    if (!formData2.guar_three_month_salary) {
      newErrors.guar_three_month_salary = "Three month slary is Requried";
    }
    if (!formData2.guar_last_two_year_six) {
      newErrors.guar_last_two_year_six = "Last Two year  is Requried";
    }

    if (!formData2.guar_income_proof) {
      newErrors.guar_income_proof = "Income Proof is Requried";
    }
    if (!formData2.guar_itr) {
      newErrors.guar_itr = "ITR is Requried";
    }
    if (!formData2.guar_last_two_year_as) {
      newErrors.guar_last_two_year_as = "Last Two Year is Requried";
    }
    if (!formData2.guar_registration_proof) {
      newErrors.guar_registration_proof = "Registration Proof is Requried";
    }

    setErrors(newErrors);

    // Return true if there are no errors
    return Object.keys(newErrors).length === 0;
  };


  const handleClick = async (e) => {
    e.preventDefault();
    console.log('formData------>', formData);
    // console.log(selectedLanguage);
    // console.log(dividendArr6)
    // console.log(dividendArr5)
    // console.log(dividendArr4)
    // console.log(dividendArr3)
    // console.log(dividendArr2)
    // console.log(dividendArr1)
    // console.log(dividendArr)

    const object = { dividendArr, dividendArr1, dividendArr2, dividendArr3, dividendArr4, dividendArr5, dividendArr6, formData, loanType: "HomeLoan" }
    console.log(object);


        // Append all files to the formData
        Object.keys(formData2).forEach((fileType) => {
          const file = formData2[fileType];
          console.log(fileType);
          if (file) {
            newformData.append(fileType, file);
          }
        });
    
        try {
    
          let headersList = {
            "Accept": "*/*",
            "Content-Type": "application/json"
          }
    
          let bodyContent = JSON.stringify(object);
    
          let reqOptions = {
            url: "http://localhost:8000/api/v1/homeLoanForm",
            method: "POST",
            headers: headersList,
            data: bodyContent,
          }
    
          let response = await axios.request(reqOptions);
          console.log(response.data);
    
          if (response) {
            // Handle success
            console.log(response.data.id);
            const response2 = await axios.post(`http://localhost:8000/api/v1/homeloanformUploadfiles/${response.data.id}`, newformData, {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            });
    
            if (response2) {
              alert(response2.data.message);
            } else {
              console.error('Error sending data to the backend');
            }
    
          } else {
            // Handle error
            console.error('Error sending data to the backend');
          }
        } catch (error) {
          console.error('Error:', error);
        }

    // setDividendArr([
    //   {
    //     bank_name: "",
    //     account_type: "",
    //     account_number: "",
    //     guar_remark: " ",
      
    //   },
    // ])
    // setDividendArr1([
    //   {
    //     bank_nbfc:'',
    //     loan_type:'',
    //     emi:'',
    //     start_form:'',
    //     pandding:'',
    //     aaplication_pan_no:'',
    //     adhar_no:'',
    //     dob:'',
    //     voter_id:'',
    //     spouse_name:'',
    //     spouse_dob:'',
      
    //   },
    // ])

    // setDividendArr2([
    //   {
    //     co_name:'',
    //     co_email:'',
    //    co_phone:'',
    //    monthly_salary:'',
    //    yearly_income:'',
    //    co_address:'',
    //  co_business_address:'',
  
    //   },
    // ])

    // setDividendArr3([
    //   {
    //     co_bank_nbfc:'',
    //     co_loan_type:'',
    //     co_emi:'',
    //     co_start_form:'',
    //     co_pandding:'',
    //     co_aaplication_pan_no:'',
    //     co_adhar_no:'',
    //     co_dob:'',
    //     co_voter_id:'',
    //     co_spouse_name:'',
    //     co_spouse_dob:'',
  
      
    //   },
    // ])

    // setDividendArr4([
    //   {
    //     guar_name:'',
    //     guar_email:'',
    //     gura_phone:'',
    //     guar_monthly_salary:'',
    //     guar_yearly_income:'',
    //     guar_address:'',
    //     guar_business_address:'',
      
    //   },
    // ])

    // setDividendArr5([
    //   {
    //     guar_bank_name:'',
    //     guar_account_type:'',
    //     guar_account_number:'',
    //     guar_remark:'',
      
    //   },
    // ])

    // setDividendArr6([
    //   {
    //     guar_bank_nbfc:'',
    //     guar_loan_type:'',
    //     guar_emi:'',
    //     guar_start_form:'',
    //     guar_pandding:'',
    //     guar_aaplication_pan_no:'',
    //     guar_adhar_no:'',
    //     guar_dob:'',
    //     guar_voter_id:'',
    //     guar_spouse_name:'',
    //     guar_spouse_dob:'',
      
    //   },
    // ]);

    // setSelectedLanguage('')

    // setFormData({
    //   name: "",
    //   email: "",
    //   phone: "",
    //   password: "",
    //   start_form: "",
    //   salary: "",
    //   loan_type: "",
    //   user_loan_type: "",
    //   employment_type: "null",
    //   address: "",
    //   business_address: "",
    //   bank_name: "",
    //   account_type: "",
    //   account_number: "",
    //   fast_remark:'',
    //   branch_name: "",
    //   aaplication_pan_no: "",
    //   adhar_no: "",
    //   dob: "",
    //   voter_id: "",
    //   three_month_salary: null,
    //   itr: null,
    //   income_proof: null,
    //   registration_proof: null,
    //   last_two_year_six: null,
    //   last_two_year_as: null,
    //   spouse_name: "",
    //   bank_nbfc: "",
    //   emi: "",
    //   pandding: "",
    //   co_name: "",
    //   yearly_income: "",
    //   monthly_salary: "",
    //   co_monthly_salary: "",
    //   co_yearly_income: "",
    //   co_bank_name: "",
    //   co_account_type: "",
    //   co_account_number: "",
    //   co_remark: "",
    //   co_bank_nbfc: "",
    //   co_loan_type: "",
    //   co_emi: "",
    //   co_start_form: "",
    //   co_pandding: "",
    //   co_aaplication_pan_no: "",
    //   co_dob: "",
    //   co_voter_id: "",
    //   co_spouse_name: "",
    //   co_spouse_dob: "",
    //   co_three_month_salary: null,
    //   co_last_two_year_six: null,
    //   co_income_proof: null,
    //   co_itr: null,
    //   co_registration_proof: null,
    //   co_last_two_year_as: null,
    //   co_address: "",
    //   co_business_address: "",
    //   guar_name: "",
    //   guar_email: "",
    //   gura_phone: "",
    //   guar_monthly_salary: "",
    //   guar_yearly_income: "",
    //   guar_address: "",
    //   guar_business_address: "",
    //   guar_bank_name: "",
    //   guar_account_type: "",
    //   guar_account_number: "",
    //   guar_remark: "",
    //   guar_bank_nbfc: "",
    //   guar_loan_type: "",
    //   guar_emi: "",
    //   guar_start_form: "",
    //   guar_pandding: "",
    //   guar_aaplication_pan_no: "",
    //   guar_adhar_no: "",
    //   guar_dob: "",
    //   guar_voter_id: "",
    //   guar_spouse_name: "",
    //   guar_spouse_dob: "",
    //   guar_three_month_salary: null,
    //   guar_last_two_year_six: null,
    //   guar_income_proof: null,
    //   guar_itr: null,
    //   guar_registration_proof: null,
    //   guar_last_two_year_as: null,
    // });

    if (validateForm()) {
      console.log(formData);
      // If form validation fails, do not submit
      return;
    }
  };

  return (
    <>
      <main>
        <section>
          <div className="position-relative">
            <ul className="controls" id="sliderFirstControls">
              <li className="prev">
                <FontAwesomeIcon icon={faArrowLeft} />
              </li>

              <li className="next">
                <FontAwesomeIcon icon={faArrowRight} />
              </li>
            </ul>
            <div className="sliderFirst">
              <div className="item">
                <div className="py-22 businessloan-banner-one">
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-8 col-lg-9 col-md-12 col-sm-12 col-12">
                        <div>
                          {/* slider-captions */}
                          <h1 className="display-2 text-white fw-bold">
                            Hassle free Small Home loan up to &#x20B9; ₹20,00,000.00
                          </h1>
                          <p className="d-none d-xl-block d-lg-block d-sm-block text-white mb-4">
                          Home Loan From JoyoMoney Platform At An Attractive Rate Of Interest. Apply Now!
                          </p>

                          {/* <span className="badge bg-success ms-md-3">
                            Rate of interest: Up to 16% - 32%
                          </span> */}
                        </div>
                        {/* /.slider-captions */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="py-22 businessloan-banner-two ">
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-9 col-md-12 col-sm-12 col-12">
                        <div>
                          <h1 className="display-2 text-white fw-bold">
                          The key to business growth with JoyoMoney Theme
                          </h1>
                          <p className=" d-none d-xl-block d-lg-block d-sm-block text-white mb-4">
                          The flexibility in loan you need for the need you want!
                            <strong>02269620449</strong>
                          </p>

                          {/* <span className="badge bg-success ms-md-3">
                            Rate of interest: Up to 16% - 32%
                          </span> */}
                        </div>
                        {/* /.slider-captions */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="py-22 businessloan-banner-three">
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-8 col-lg-9 col-md-12 col-sm-12 col-12">
                        <div>
                          {/* slider-captions */}
                          <h1 className="display-2 text-white fw-bold">
                            Looking to set up or expand your business?
                          </h1>
                          <p className=" d-none d-xl-block d-lg-block d-sm-block text-white mb-4">
                           
                            Online, Ontime, Onsite Loan for your business growth.
                          </p>

                          {/* <span className="badge bg-success ms-md-3">
                            Rate of interest: Up to 16% - 32%
                          </span> */}
                        </div>
                        {/* /.slider-captions */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-3 pb-6 ">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="bg-white p-5 rounded-top-md">
                  <div className="row align-items-center">
                    <div className="col-md-6 col-xl-8 col-sm-12 col-12">
                      <h1 className="mb-0">Home Loan</h1>
                    </div>
                    <div className="col-xl-4 col-md-6 col-12">
                      <div className="text-md-end mt-3 mt-md-0">
                        <a href="#!" className="btn btn-primary">
                          Get A Call Back
                        </a>
                        <a href="/contact" className="btn btn-secondary">
                          How To Apply
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <ul className="nav nav-fill nav-pills-gray-fill">
                    <li className="nav-item">
                      <a href="#section-about" className="page-scroll nav-link">
                        About Loan
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#section-typeloan"
                        className="page-scroll nav-link"
                      >
                        Types of loan
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#section-feature"
                        className="page-scroll nav-link"
                      >
                        Features &amp; Benefits
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#section-eleigiblity"
                        className="page-scroll nav-link"
                      >
                        Eligibility
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="#section-apply" className="page-scroll nav-link">
                        Apply now
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* content start */}
        <section>
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="mt-n6 bg-white mb-10 rounded-3 shadow-sm position-relative">
                  <div
                    className="section-scroll p-lg-10 p-5"
                    id="section-about"
                  >
                    <h2>About Home Loan</h2>
                    <p className="lead">
                    A home loan in India is a financial product provided by banks and financial
                     institutions to individuals looking to purchase or construct a residential
                     property. These loans are a popular means for individuals to fulfill their dream of owning a home, as they allow 
                     borrowers to acquire funds to buy a house and repay the amount over an extended period.
                    </p>
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <p>
                          Vestibulum accumsan, diam vitae consectetur sodales
                          sapien felis vestibulum purus,ac porttitor elit dolor
                          venenatis Cras condimacilicelerisque orci nisi sit
                          amet neque.{" "}
                        </p>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <p>
                          Pellentesque mollis, diam a viverra luctus, nisl dui
                          vehicula erat, id congue ante justo nec ante. Nullam
                          vehicula tellus sit amet dolor tristique, faucibus
                          rhoncus velit elementum.
                        </p>
                      </div>
                    </div>
                    <hr />
                    <p>
                      Phasellus tellus nunc, sollicitudin quist amet it simple
                      nequeuisque lacus mi tesimly diummy cintenbt mpus nec
                      purus vitae tempor placerat leo.{" "}
                    </p>

                    
                    <h2> Here are some key points about home loans in India:</h2>
                    <h3>1.	Eligibility Criteria:</h3>
                    <ul className="text-decoration: none;">
                      <li>	Age: Typically, individuals between 18 and 70 years old are eligible for home loans.</li>
                      <li>	Income: Lenders assess the borrower's income, employment stability, and repayment capacity.</li>
                      <li>	Credit Score: A good credit score enhances the chances of loan approval.</li>
                    </ul>
                    <h3>2.	Loan Amount:</h3>
                    <ul className="text-decoration: none;">
                      <li>		The loan amount depends on factors like the applicant's income, the property's cost, and the loan-to-value (LTV) ratio.</li>
                      <li>	LTV ratio is the percentage of the property's value that the lender is willing to finance. The borrower needs to fund the remaining amount through their savings</li>

                    </ul>                   
                    <h3>3.	Interest Rates:</h3>
                    <ul className="text-decoration: none;">
                      <li>	Home loan interest rates can be fixed or floating.</li>
                      <li>	Fixed rates remain constant throughout the loan tenure, while floating rates change based on market conditions.</li>                
                    </ul>
                    <h3>4.	Loan Tenure:</h3>
                    <ul className="text-decoration: none;">
                      <li>	Home loans have a maximum tenure of up to 30 years, allowing borrowers to repay the amount in equated monthly installments (EMIs).</li>
                    </ul>

                    <h3>5.	Types of Home Loans:</h3>
                    <ul className="text-decoration: none;">
                      <li>	Purchase Loan: For buying a new or resale property.</li>
                      <li>	Construction Loan: For constructing a new house.</li>
                      <li>	Home Improvement Loan: For renovating or improving an existing property.</li>
                      <li>	Balance Transfer: Transferring an existing home loan to another lender for better terms.</li>                
                    </ul>

                    <h3>6.	Tax Benefits:</h3>
                    <ul className="text-decoration: none;">
                      <li>	Borrowers can avail tax benefits on the principal and interest repaid on home loans under sections 80C and 24(b) of the Income Tax Act, respectively</li>
                    </ul>

                    <h3>7.	Documents Required:</h3>
                    <ul className="text-decoration: none;">
                      <li>KYC documents</li>
                      <li>Income proof</li>
                      <li>Property documents</li>
                      <li>	Bank statements</li>
                      <li>Employment details</li>

                    </ul>
                    <h3>8.EMI Calculation:</h3>
                    <ul className="text-decoration: none;">
                      <li>	Equated Monthly Installments (EMIs) consist of both principal and interest components.</li>
                      <li>	The EMI amount remains constant, but the interest and principal proportions change over time.</li>                
                    </ul>

                    <h3>9.	Prepayment and Foreclosure:</h3>
                    <ul className="text-decoration: none;">
                      <li>	Borrowers can prepay a part or the entire outstanding loan amount before the tenure ends.</li>
                      <li>Some lenders may charge prepayment penalties, while others allow it without any charges</li>                
                    </ul>
                    <h3>10.	Insurance:</h3>
                    <ul className="text-decoration: none;">
                      <li>		Lenders may require borrowers to take home loan insurance to cover the outstanding amount in case of the borrower's demise.</li>
                    </ul>
                   

                  </div>
                  <div className="section-scroll" id="section-typeloan">
                    <div className="bg-light p-lg-10 p-5">
                      <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                          <div className="mb-5">
                            <h2>Get financing for whatever you need now</h2>
                            <p>
                              Achieve all your goals and aspirations; with the
                              right kind of help, exactly when you need it.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                          <div className=" mb-5">
                            <h4>New Home Loan</h4>
                            <p className="mb-0">
                              New Home Loan at basic interest rates from
                              JoyoMoney Company. You can apply online and
                              check your eligibility and easy EMI. Fast Approval
                              for your new home loan.
                            </p>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                          <div className=" mb-5">
                            <h4>Home Conversion</h4>
                            <p className="mb-0">
                              A home conversion loan is a scheme for those who
                              have already taken a housing loan. This loan
                              follow some rules and regulations.It is a part of
                              loan.
                            </p>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                          <div className=" mb-5 mb-lg-0">
                            <h4>Land Purchase</h4>
                            <p className="mb-0">
                              JoyoMoneyoffers home loan for land purchase to
                              make your dream home. You can compare home loan
                              rates with our compare loan table. Apply online
                              for Home Loan.
                            </p>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                          <div className=" mb-5 mb-lg-0">
                            <h4>Home Renovation</h4>
                            <p className="mb-0">
                              Get instant approval for renovation your home.
                              Borrow introduce home improvement loan. It is with
                              basic rate and flexible EMI repayment.For more
                              detail you can check our loan products.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-primary py-8 text-center">
                    <div className="row">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <h1 className="text-white mb-4">
                          Get financing for whatever you need now
                        </h1>
                        <a href="/contact" className="btn btn-white">
                          Enquire Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="section-scroll" id="section-feature">
                    <div className="p-lg-10 p-5">
                      <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                          <div className="mb-6">
                            <h2>Features of Home Loan</h2>
                            <p>
                              {" "}
                              All loans are not created equal, personal loan has
                              become a great option for people to use.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                          <div className="feature-icon mb-4">
                            <div className="mb-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={32}
                                height={32}
                                fill="currentColor"
                                className="bi bi-laptop text-primary"
                                viewBox="0 0 16 16"
                              >
                                <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
                              </svg>
                            </div>
                            <h4>Salaried &amp; Self Employed</h4>
                            <p>
                            Home loans are available for both salaried individuals and self-employed individuals in India. Salaried individuals typically need to provide proof of stable income, employment details, and salary slips
                            It's essential for applicants to understand the documentation and eligibility criteria specific to their employment status when applying for a home loan.
                            </p>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                          <div className="feature-icon mb-4">
                            <div className="mb-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={32}
                                height={32}
                                fill="currentColor"
                                className="bi bi-lightbulb text-primary"
                                viewBox="0 0 16 16"
                              >
                                <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z" />
                              </svg>
                            </div>
                            <h4>Loan For Agriculturists</h4>
                            <p>
                            Home loans tailored for agriculturists in India are designed to accommodate the unique financial circumstances of individuals involved in agriculture. These specialized loans take into consideration the variability of agricultural income and typically require proof of land ownership, crop details, and income generated from farming activities. Collateral, often in the form of agricultural land, may be necessary to secure the loan
                            </p>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                          <div className="feature-icon mb-4">
                            <div className="mb-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={32}
                                height={32}
                                fill="currentColor"
                                className="bi bi-bullseye text-primary"
                                viewBox="0 0 16 16"
                              >
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10zm0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                                <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
                                <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                              </svg>
                            </div>
                            <h4>Home Loans For NRIs</h4>
                            <p>
                            Home loans for Non-Resident Indians (NRIs) in India are financial products specifically designed to facilitate property purchase for individuals living abroad. NRIs can apply for home loans to buy residential properties in India for self-occupation or as an investment. Lenders typically consider factors such as the applicant's income, employment stability, and creditworthiness
                            </p>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                          <div className="feature-icon mb-4">
                            <div className="mb-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={32}
                                height={32}
                                fill="currentColor"
                                className="bi bi-currency-dollar text-primary"
                                viewBox="0 0 16 16"
                              >
                                <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
                              </svg>
                            </div>
                            <h4>No Morgage</h4>
                            <p>
                            A Balance Transfer (BT) Top-Up in the context of a home loan refers to an additional loan amount that a borrower can opt for when transferring their existing home loan from one lender to another. This facility allows borrowers to consolidate their outstanding home loan balance with an additional amount required for various purposes such as home renovations, debt consolidation, or any other financial requirements. 
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="section-scroll" id="section-eleigiblity">
                    <div className=" bg-light p-lg-10 p-5">
                      <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                          <div className="mb-6">
                            <h2>Home Loan - Eligibility</h2>
                            <p>
                              {" "}
                              Any salaried, self-employed or professional Public
                              and Privat companies, Government sector employees
                              including Public Sector is eligible for a personal
                              loan.{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                          <div className=" mb-4">
                            <h4>Age</h4>
                            <p>
                              Maximum age of applicant at loan maturity: 60
                              years
                            </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                          <div className=" mb-4">
                            <h4>Income</h4>
                            <p>Minimum Net Monthly Income: Rs 15,000</p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                          <div className=" mb-4">
                            <h4>Credit Rating</h4>
                            <p>
                              Applicant should have the bank specified credit
                              score.{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="offset-xl-3 col-xl-6 offset-lg-3 col-lg-6 offset-md-3 col-md-6 col-sm-12 col-12"></div>
                      </div>
                    </div>
                  </div>

                  <section className="" id="section-apply">
                    <div className="container">
                      <div className="my-2">
                        <div className="offset-xl-2 col-xl-8 offset-lg-2 col-lg-8 col-md-12 col-sm-12 col-12">
                          <div className="mb-4 text-center">
                            {/* section title start*/}
                            <h1 className="mb-0">Loan Application Form </h1>
                            <p>
                              Now apply for a Home Loan online, All you need to
                              do is provide your details below application form.
                            </p>
                          </div>
                        </div>
                        <form>
                          {/* Text input*/}
                          <div className="row">
                            <h3> User Details </h3>
                            <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
                              <div className="mb-3">
                                <label
                                  className="sr-only form-label mb-0"
                                  htmlFor="name"
                                >
                                  name
                                </label>
                                <input
                                  id="name"
                                  name="name"
                                  type="text"
                                  value={formData.name}
                                  onChange={handleInputChange}
                                  placeholder="Name"
                                  className="form-control"
                                />
                                {errors.name && (
                                  <div className="text-danger">
                                    {errors.name}
                                  </div>
                                )}
                              </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
                              <div className="mb-3">
                                <label
                                  className="sr-only form-label mb-0"
                                  htmlFor="email"
                                >
                                  Email
                                </label>
                                <input
                                  id="email"
                                  name="email"
                                  type="email"
                                  value={formData.email}
                                  onChange={handleInputChange}
                                  placeholder="Email"
                                  className="form-control"
                                />
                                {errors.email && (
                                  <div className="text-danger">
                                    {errors.email}
                                  </div>
                                )}
                              </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
                              <div className="mb-3">
                                <label
                                  className="sr-only form-label mb-0"
                                  htmlFor="phone"
                                >
                                  Phone
                                </label>
                                <input
                                  id="phone"
                                  name="phone"
                                  type="text"
                                  value={formData.phone}
                                  onChange={handleInputChange}
                                  placeholder="Phone"
                                  className="form-control"
                                />
                                {errors.phone && (
                                  <div className="text-danger">
                                    {errors.phone}
                                  </div>
                                )}
                              </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
                              <div className="mb-3">
                                <select
                                  id="user_loan_type"
                                  name="user_loan_type"
                                  className="form-select"
                                  value={formData.user_loan_type}
                                  onChange={handleInputChange}
                                >
                                  <option value="" disabled selected>
                                    Select a Type of Loan
                                  </option>
                                  <option value="home">Home Loan</option>
                                  <option value="student">Student Loan</option>
                                  <option value="personal">
                                    Personal Loan
                                  </option>
                                  <option value="Car">Car Loan</option>
                                  <option value="Education">
                                    Education Loan
                                  </option>
                                  <option value="Gold">Gold Loan</option>
                                  <option value="Business">
                                    Business Loan
                                  </option>
                                  <option value="Refinance">
                                    Refinance Loan
                                  </option>
                                </select>
                                {errors.user_loan_type && (
                                  <div className="text-danger">
                                    {errors.user_loan_type}
                                  </div>
                                )}
                              </div>
                            </div>
                            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                              <div className="mb-3">
                                <label
                                  className="sr-only form-label mb-0"
                                  htmlFor="message"
                                ></label>
                                <textarea
                                  className="form-control"
                                  id="address"
                                  rows={3}
                                  name="address"
                                  value={formData.address}
                                  onChange={handleInputChange}
                                  placeholder="Residence Address"
                                  defaultValue={""}
                                />
                                {errors.address && (
                                  <div className="text-danger">
                                    {errors.address}
                                  </div>
                                )}
                              </div>
                            </div>
                            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                              <div className="mb-3">
                                <label
                                  className="sr-only form-label mb-0"
                                  htmlFor="message"
                                ></label>
                                <textarea
                                  className="form-control"
                                  id="business_address"
                                  rows={3}
                                  name="business_address"
                                  value={formData.business_address}
                                  onChange={handleInputChange}
                                  placeholder="Business Address"
                                  defaultValue={""}
                                />
                                {errors.business_address && (
                                  <div className="text-danger">
                                    {errors.business_address}
                                  </div>
                                )}
                              </div>
                            </div>
                            {/* 
                                                          // raido button */}
                            <div className="py-2 d-flex">
                              <span className="mx-4 d-flex">
                                Are you Salaried or Self Employed?
                                <span className="mx-2 d-flex">
                                  <label htmlFor="html">Yes</label>
                                  <input
                                    type="radio"
                                    id="employment_type1"
                                    name="employment_type"
                                    className="m-2"
                                    value="Yes"
                                    checked={formData.employment_type === "Yes"}
                                    onChange={handleInputChange}
                                  />
                                </span>
                                <span className="mx-2 d-flex">
                                  <label htmlFor="css">No</label>
                                  <input
                                    type="radio"
                                    id="employment_type2"
                                    name="employment_type"
                                    className="m-2"
                                    value="No"
                                    checked={formData.employment_type === "No"}
                                    onChange={handleInputChange}
                                  />
                                </span>
                                <br />
                              </span>
                            </div>
                            <div className="col-xl-6 col-lg-4 col-md-12 col-sm-12 col-12">
                              <div className="mb-3">
                                <label
                                  className="sr-only form-label mb-0"
                                  htmlFor="name"
                                >
                                  Monthly Salary
                                </label>
                                <input
                                  id="monthly_salary"
                                  name="monthly_salary"
                                  type="text"
                                  value={formData.monthly_salary}
                                  onChange={handleInputChange}
                                  placeholder="Monthly Salary"
                                  className="form-control"
                                />
                                {errors.monthly_salary && (
                                  <div className="text-danger">
                                    {errors.monthly_salary}
                                  </div>
                                )}
                              </div>
                            </div>
                            <div className="col-xl-6 col-lg-4 col-md-12 col-sm-12 col-12">
                              <div className="mb-3">
                                <label
                                  className="sr-only form-label mb-0"
                                  htmlFor="name"
                                >
                                  Yearly income
                                </label>
                                <input
                                  id="yearly_income"
                                  name="yearly_income"
                                  type="text"
                                  value={formData.yearly_income}
                                  onChange={handleInputChange}
                                  placeholder="Yearly Business Income "
                                  className="form-control"
                                />
                                {errors.yearly_income && (
                                  <div className="text-danger">
                                    {errors.yearly_income}
                                  </div>
                                )}
                              </div>
                            </div>

                        
                          
                                    {/* Bank Deatils start  */}
                              {dividendArr.map((item, index) => (
                              <div className="" key={index}>
                                <h3>
                                  {" "}
                                { index === 0 && "Banking Details" }   <span>  <button
                                          type="button"
                                          className={`add-button  ${
                                            (index === 0 && "d-none") || ""
                                          }`}
                                          onClick={() => handleRemove(index)}
                                          style={{ backgroundColor: 'blue' }}
                                          
                                        >
                                          -
                                        </button>
                                        {index === 0 && (
                                          <button
                                            type="button"
                                            className=""
                                            onClick={handleAdd}
                                            style={{ backgroundColor: 'blue' }}
                                          >
                                            +
                                          </button>
                                        )}</span>
                                        
                                </h3>                              
                                 <div className="row" >                                   
                                    <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
                                      <div className="mb-3">
                                        <label
                                          className="sr-only form-label mb-0"
                                          htmlFor="name"
                                        >
                                          Name of Bank
                                        </label>
                                        <input
                                          // id={`dividend_stock_amount${index}`}
                                          id={`bank_name ${index}`}
                                          name="bank_name"
                                          type="text"
                                          disabled={textDisabld}
                                          value={item.bank_name}
                                          onChange={(e) =>
                                            handleInputChange1(e, index)
                                          }
                                          // onChange={handleInputChange}
                                          placeholder="Name of Bank"
                                          className="form-control"
                                          required
                                        />
                                        {/* {errors.bank_name && (
                                          <div className="text-danger">
                                            {errors.bank_name}
                                          </div>
                                        )} */}
                                      
                                      </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
                                      <div className="mb-3">
                                        <select
                                           id={`account_type ${index}`}
                                          // id="account_type"
                                          name="account_type"
                                          className="form-select"
                                          disabled={textDisabld}
                                          value={item.account_type}
                                          onChange={(e) =>
                                            handleInputChange1(e, index)
                                          }
                                          // onChange={handleInputChange}
                                        >
                                          <option value="" disabled selected>
                                            Types of Account
                                          </option>
                                          <option value="home">
                                            Current Account
                                          </option>
                                          <option value="student">
                                            Saving Account
                                          </option>
                                          <option value="personal">
                                            Salary Account
                                          </option>
                                          <option value="Car">
                                            Fixed Deposit Account
                                          </option>
                                          <option value="Education">
                                            NRI Account
                                          </option>
                                          <option value="Gold">
                                            DEMAT Account
                                          </option>
                                        </select>
                                        {/* {errors.account_type && (
                                          <div className="text-danger">
                                            {errors.account_type}
                                          </div>
                                        )} */}
                                      </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
                                      <div className="mb-3">
                                        <label
                                          className="sr-only form-label mb-0"
                                          htmlFor="phone"
                                        >
                                          Account Number
                                        </label>
                                        <input
                                          id={`account_number ${index}`}
                                          // id="account_number"
                                          name="account_number"
                                          disabled={textDisabld}
                                          type="text"
                                          value={item.account_number}
                                          onChange={(e) =>
                                            handleInputChange1(e, index)
                                          }
                                          // onChange={handleInputChange}
                                          placeholder="Account Number"
                                          className="form-control"
                                        />
                                        {/* {errors.account_number && (
                                          <div className="text-danger">
                                            {errors.account_number}
                                          </div>
                                        )} */}
                                      </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
                                      <div className="mb-3">
                                        <label
                                          className="sr-only form-label mb-0"
                                          htmlFor="text"
                                        >
                                          Remarks
                                        </label>
                                        <input
                                         id={`guar_remark ${index}`}                                      
                                          name="guar_remark"
                                          disabled={textDisabld}
                                          type="text"
                                          value={item.guar_remark}
                                          onChange={(e) =>
                                            handleInputChange1(e, index)
                                          }               
                                          placeholder="Remark "
                                          className="form-control"
                                        />
                                        {/* {errors.fast_remark && (
                                          <div className="text-danger">
                                            {errors.fast_remark}
                                          </div>
                                        )} */}
                                      </div>
                                   
                                    </div>     
                                                                 
                                  </div>                             
                              </div>
                                ))}
                               {/* Bank Deatils start End  */} 



                                        {dividendArr1.map((item, index) => (
                                          <div className="" key={index}>
                              <h3>
                              
                                { index === 0 && "  Loan Repyment Details" }   <span>  <button
                                          type="button"
                                          className={`add-button  ${
                                            (index === 0 && "d-none") || ""
                                          }`}
                                          onClick={() => handleRemove1(index)}
                                          style={{ backgroundColor: 'blue' }}
                                          
                                        >
                                          -
                                        </button>
                                        {index === 0 && (
                                          <button
                                            type="button"
                                            className=""
                                            onClick={handleAdd1}
                                            style={{ backgroundColor: 'blue' }}
                                          >
                                            +
                                          </button>
                                        )}</span>
                                        
                                </h3>                                      
                                <div className="row">
                              <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="text"
                                  >
                                    Name Of Bank NBFC
                                  </label>
                                  <input
                                    name="bank_nbfc"
                                    type="text"
                                    value={item.bank_nbfc}
                                    id={`bank_nbfc ${index}`} 
                                    onChange={(e) =>
                                      handleInputChange2(e, index)
                                    } 
                                    disabled={textDisabld}
                                    placeholder="Name OfBank NBFC"
                                    className="form-control"
                                  />
                                  {/* {errors.bank_nbfc && (
                                    <div className="text-danger">
                                      {errors.bank_nbfc}
                                    </div>
                                  )} */}
                                </div>
                              </div>
                              <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <select
                                
                                    name="loan_type"
                                    className="form-select"
                                    value={item.loan_type}
                                    id={`loan_type ${index}`} 
                                    onChange={(e) =>
                                      handleInputChange2(e, index)
                                    } 
                                    disabled={textDisabld}
                                  >
                                    <option value="" disabled selected>
                                      Type of Loan
                                    </option>
                                    <option value="home">Home Loan</option>
                                    <option value="student">
                                      Student Loan
                                    </option>
                                    <option value="personal">
                                      Personal Loan
                                    </option>
                                    <option value="Car">Car Loan</option>
                                    <option value="Education">
                                      Education Loan
                                    </option>
                                    <option value="Gold">Gold Loan</option>
                                    <option value="Business">
                                      Business Loan
                                    </option>
                                    <option value="Refinance">
                                      Refinance Loan
                                    </option>
                                  </select>
                                  {/* {errors.loan_type && (
                                    <div className="text-danger">
                                      {errors.loan_type}
                                    </div>
                                  )} */}
                                </div>
                              </div>
                              <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="text"
                                  >
                                    EMI
                                  </label>
                                  <input
                                  
                                    name="emi"
                                    type="text"
                                    value={item.emi}
                                    id={`emi ${index}`} 
                                    onChange={(e) =>
                                      handleInputChange2(e, index)
                                    } 
                                    disabled={textDisabld}
                                    placeholder="EMI"
                                    className="form-control"
                                  />
                                  {/* {errors.emi && (
                                    <div className="text-danger">
                                      {errors.emi}
                                    </div>
                                  )} */}
                                </div>
                              </div>
                              <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="text"
                                  >
                                    Start Form
                                  </label>
                                  <input                                 
                                    name="start_form"
                                    type="text"
                                    value={item.start_form}
                                    id={`start_form ${index}`} 
                                    onChange={(e) =>
                                      handleInputChange2(e, index)
                                    } 
                                    disabled={textDisabld}
                                    placeholder="Start Form"
                                    className="form-control"
                                  />
                                  {/* {errors.start_form && (
                                    <div className="text-danger">
                                      {errors.start_form}
                                    </div>
                                  )} */}
                                </div>
                              </div>
                              <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="text"
                                  >
                                    Pending
                                  </label>
                                  <input                                 
                                    name="pandding"
                                    type="text"
                                    value={item.pandding}
                                    id={`padding ${index}`} 
                                    onChange={(e) =>
                                      handleInputChange2(e, index)
                                    } 
                                    disabled={textDisabld}
                                    placeholder="Pending"
                                    className="form-control"
                                  />
                                  {/* {errors.pandding && (
                                    <div className="text-danger">
                                      {errors.pandding}
                                    </div>
                                  )} */}
                                </div>
                              </div>
                              <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="text"
                                  >
                                    Pending
                                  </label>
                                  <input
                                
                                    name="aaplication_pan_no"
                                    type="text"
                                    value={item.aaplication_pan_no}
                                    id={`aaplication_pan_no ${index}`} 
                                    onChange={(e) =>
                                      handleInputChange2(e, index)
                                    } 
                                    disabled={textDisabld}
                                    placeholder="Application Pan No"
                                    className="form-control"
                                  />
                                  {/* {errors.aaplication_pan_no && (
                                    <div className="text-danger">
                                      {errors.aaplication_pan_no}
                                    </div>
                                  )} */}
                                </div>
                              </div>
                              <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="text"
                                  >
                                    Adhar No
                                  </label>
                                  <input
                                
                                    name="adhar_no"
                                    type="text"
                                    value={item.adhar_no}
                                    id={`adhar_no ${index}`} 
                                    onChange={(e) =>
                                      handleInputChange2(e, index)
                                    } 
                                    disabled={textDisabld}
                                    placeholder="Adhar No"
                                    className="form-control"
                                  />
                                  {/* {errors.adhar_no && (
                                    <div className="text-danger">
                                      {errors.adhar_no}
                                    </div>
                                  )} */}
                                </div>
                              </div>
                              <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="text"
                                  >
                                    DOB
                                  </label>
                                  <input
                                
                                    name="dob"
                                    type="text"
                                    value={item.dob}
                                    id={`dob ${index}`} 
                                    onChange={(e) =>
                                      handleInputChange2(e, index)
                                    } 
                                    disabled={textDisabld}
                                    placeholder="DOB"
                                    className="form-control"
                                  />
                                  {/* {errors.dob && (
                                    <div className="text-danger">
                                      {errors.dob}
                                    </div>
                                  )} */}
                                </div>
                              </div>
                              <div className="col-xl-4 col-lg-2 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="text"
                                  >
                                    Voter ID
                                  </label>
                                  <input
                                
                                    name="voter_id"
                                    type="text"
                                    value={item.voter_id}
                                    id={`voter_id ${index}`} 
                                    onChange={(e) =>
                                      handleInputChange2(e, index)
                                    } 
                                    disabled={textDisabld}
                                    placeholder="Voter ID"
                                    className="form-control"
                                  />
                                  {/* {errors.voter_id && (
                                    <div className="text-danger">
                                      {errors.voter_id}
                                    </div>
                                  )} */}
                                </div>
                              </div>
                              <div className="col-xl-4 col-lg-2 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="text"
                                  >
                                    Spouse Name
                                  </label>
                                  <input
                              
                                    name="spouse_name"
                                    type="text"
                                    value={item.spouse_name}
                                    id={`spouse_name ${index}`} 
                                    onChange={(e) =>
                                      handleInputChange2(e, index)
                                    } 
                                    disabled={textDisabld}
                                    placeholder="Spouse Name"
                                    className="form-control"
                                  />
                                  {/* {errors.spouse_name && (
                                    <div className="text-danger">
                                      {errors.spouse_name}
                                    </div>
                                  )} */}
                                </div>
                              </div>
                              <div className="col-xl-4 col-lg-2 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="text"
                                  >
                                    Spouse DOB
                                  </label>
                                  <input
                               
                                    name="spouse_dob"
                                    type="text"
                                    value={item.spouse_dob}
                                    id={`spouse_dob ${index}`} 
                                    onChange={(e) =>
                                      handleInputChange2(e, index)
                                    } 
                                    disabled={textDisabld}
                                    placeholder="Spouse DOB"
                                    className="form-control"
                                  />
                                  {/* {errors.spouse_dob && (
                                    <div className="text-danger">
                                      {errors.spouse_dob}
                                    </div>
                                  )} */}
                                </div>
                              </div>
                                  </div>
                                  </div>

                              ))}

                              <h3>Details of Profession </h3>
                              <h3 className="mt-2">For Salaried</h3>
                              <div className="col-xl-4 col-lg-2 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <h6 className="text-center">
                                    Last Three Month Salary Slip
                                  </h6>
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="text"
                                  ></label>

                                  <input
                                    id="three_month_salary"
                                    name="three_month_salary"
                                    type="file"
                                    onChange={(e) =>
                                      handleFileChange(e, "three_month_salary")
                                    }
                                    className="form-control"
                                  />
                                  {errors.three_month_salary && (
                                    <div className="text-danger">
                                      {errors.three_month_salary}
                                    </div>
                                  )}
                                  {formData2.three_month_salary && (
                                    <p>
                                      Selected File:{" "}
                                      {formData2.three_month_salary.name}
                                    </p>
                                  )}
                                </div>
                              </div>
                              <div className="col-xl-4 col-lg-2 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <h6 className="text-center">
                                    Last Two year Form 16
                                  </h6>
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="text"
                                  >
                                    last_two_year_six
                                  </label>
                                  <input
                                    id="last_two_year_six "
                                    name="last_two_year_six "
                                    type="file"
                                    onChange={(e) =>
                                      handleFileChange(
                                        e,
                                        "last_two_year_six"
                                      )
                                    }
                                    placeholder="Last Two year Form ."
                                    className="form-control"
                                  />
                                  {errors.last_two_year_six && (
                                    <div className="text-danger">
                                      {errors.last_two_year_six}
                                    </div>
                                  )}
                                  {formData2.last_two_year_six && (
                                    <p>
                                      Selected File:{" "}
                                      {formData2.last_two_year_six.name}
                                    </p>
                                  )}
                                </div>
                              </div>
                              <div className="col-xl-4 col-lg-2 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <h6 className="text-center">
                                    Other Income Proof
                                  </h6>
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="text"
                                  ></label>
                                  <input
                                    id="income_proof"
                                    name="income_proof"
                                    type="file"
                                    onChange={(e) =>
                                      handleFileChange(e, "income_proof")
                                    }
                                    placeholder="Last Three Month Salary Slip."
                                    className="form-control"
                                  />
                                  {errors.income_proof && (
                                    <div className="text-danger">
                                      {errors.income_proof}
                                    </div>
                                  )}
                                  {formData2.income_proof && (
                                    <p>
                                      Selected File:{" "}
                                      {formData2.income_proof.name}
                                    </p>
                                  )}
                                </div>
                              </div>
                              <h3>For Self Employed</h3>
                              <div className="col-xl-4 col-lg-2 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <h6 className="text-center">
                                    Last Two Year ITR
                                  </h6>
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="text"
                                  ></label>
                                  <input
                                    id="itr"
                                    name="itr"
                                    type="file"
                                    onChange={(e) => handleFileChange(e, "itr")}
                                    placeholder="Last Three Month Salary Slip."
                                    className="form-control"
                                  />
                                  {errors.itr && (
                                    <div className="text-danger">
                                      {errors.itr}
                                    </div>
                                  )}
                                  {formData2.itr && (
                                    <p>Selected File: {formData2.itr.name}</p>
                                  )}
                                </div>
                              </div>
                              <div className="col-xl-4 col-lg-2 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <h6 className="text-center">
                                    Last Two year Form 24 AS
                                  </h6>
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="text"
                                  ></label>
                                  <input
                                    id="last_two_year_as "
                                    name="last_two_year_as "
                                    type="file"
                                    onChange={(e) =>
                                      handleFileChange(
                                        e,
                                        "last_two_year_as"
                                      )
                                    }
                                    placeholder="Last Two year Form ."
                                    className="form-control"
                                  />
                                  {errors.last_two_year_as && (
                                    <div className="text-danger">
                                      {errors.last_two_year_as}
                                    </div>
                                  )}
                                  {formData2.last_two_year_as && (
                                    <p>
                                      Selected File:{" "}
                                      {formData2.last_two_year_as.name}
                                    </p>
                                  )}
                                </div>
                              </div>
                              <div className="col-xl-4 col-lg-2 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <h6 className="text-center">
                                    Business Registration Proof
                                  </h6>
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="text"
                                  ></label>
                                  <input
                                    id="registration_proof"
                                    name="registration_proof"
                                    type="file"
                                    onChange={(e) =>
                                      handleFileChange(e, "registration_proof")
                                    }
                                    placeholder="Last Three Month Salary Slip."
                                    className="form-control"
                                  />
                                  {errors.registration_proof && (
                                    <div className="text-danger">
                                      {errors.registration_proof}
                                    </div>
                                  )}
                                  {formData2.registration_proof && (
                                    <p>
                                      Selected File:{" "}
                                      {formData2.registration_proof.name}
                                    </p>
                                  )}
                                </div>
                              </div>

                                 {dividendArr2.map((item, index) => (
                              <div className="" key={index}>
                                <h3>
                              
                              { index === 0 && " Co-Applicant Details  " }   <span>  <button
                                        type="button"
                                        className={`add-button  ${
                                          (index === 0 && "d-none") || ""
                                        }`}
                                        onClick={() => handleRemove2(index)}
                                        style={{ backgroundColor: 'blue' }}
                                        
                                      >
                                        -
                                      </button>
                                      {index === 0 && (
                                        <button
                                          type="button"
                                          className=""
                                          onClick={handleAdd2}
                                          style={{ backgroundColor: 'blue' }}
                                        >
                                          +
                                        </button>
                                      )}</span>
                                      
                              </h3> 
                                      <div className="row">
                              <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="name"
                                  >
                                    name
                                  </label>
                                  <input
                               
                                    name="co_name"
                                    type="text"
                                    value={item.co_name}
                                    id={`co_name ${index}`} 
                                    onChange={(e) =>
                                      handleInputChange3(e, index)
                                    } 
                                    disabled={textDisabld}
                                    placeholder="Name"
                                    className="form-control"
                                  />
                                  {/* {errors.co_name && (
                                    <div className="text-danger">
                                      {errors.co_name}
                                    </div>
                                  )} */}
                                </div>
                              </div>
                              <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="email"
                                  >
                                    Email
                                  </label>
                                  <input
                                 
                                    name="co_email"
                                    type="email"
                                    value={item.co_email}
                                    id={`co_email ${index}`} 
                                    onChange={(e) =>
                                      handleInputChange3(e, index)
                                    } 
                                    disabled={textDisabld}
                                    placeholder="Email"
                                    className="form-control"
                                  />
                                  {/* {errors.co_email && (
                                    <div className="text-danger">
                                      {errors.co_email}
                                    </div>
                                  )} */}
                                </div>
                              </div>
                              <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="phone"
                                  >
                                    Phone
                                  </label>
                                  <input
                                
                                    name="co_phone"
                                    type="text"
                                    value={item.co_phone}
                                    id={`co_phone ${index}`} 
                                    onChange={(e) =>
                                      handleInputChange3(e, index)
                                    } 
                                    disabled={textDisabld}
                                    placeholder="Phone"
                                    className="form-control"
                                  />
                                  {/* {errors.co_phone && (
                                    <div className="text-danger">
                                      {errors.co_phone}
                                    </div>
                                  )} */}
                                </div>
                              </div>
                              <div className="col-xl-6 col-lg-4 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="phone"
                                  >
                                    Monthly Salary
                                  </label>
                                  <input
                              
                                    name="co_monthly_salary"
                                    type="text"
                                    value={item.co_monthly_salary}
                                    id={`co_monthly_salary ${index}`} 
                                    onChange={(e) =>
                                      handleInputChange3(e, index)
                                    } 
                                    disabled={textDisabld}
                                    placeholder="Monthly Salary "
                                    className="form-control"
                                  />
                                  {/* {errors.monthly_salary && (
                                    <div className="text-danger">
                                      {errors.monthly_salary}
                                    </div>
                                  )} */}
                                </div>
                              </div>
                              <div className="col-xl-6 col-lg-4 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="phone"
                                  >
                                    Phone
                                  </label>
                                  <input
                             
                                    name="co_yearly_income"
                                    type="text"
                                    value={item.co_yearly_income}
                                    id={`co_yearly_income ${index}`} 
                                    onChange={(e) =>
                                      handleInputChange3(e, index)
                                    } 
                                    disabled={textDisabld}
                                    placeholder="Yearly Income "
                                    className="form-control"
                                  />
                                  {/* {errors.yearly_income && (
                                    <div className="text-danger">
                                      {errors.yearly_income}
                                    </div>
                                  )} */}
                                </div>
                              </div>
                              <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="message"
                                  ></label>
                                  <textarea
                                    className="form-control"
                                    rows={3}
                                    name="co_address"
                                    value={item.co_address}
                                    id={`co_address ${index}`} 
                                    onChange={(e) =>
                                      handleInputChange3(e, index)
                                    } 
                                    disabled={textDisabld}
                                    placeholder="Residence Address"
                                    defaultValue={""}
                                  />
                                  {/* {errors.co_address && (
                                    <div className="text-danger">
                                      {errors.co_address}
                                    </div>
                                  )} */}
                                </div>
                              </div>
                              <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="message"
                                  ></label>
                                  <textarea
                                    className="form-control"                               
                                    rows={3}
                                    name="co_business_address"
                                    value={item.co_business_address}
                                    id={`co_business_address ${index}`} 
                                    onChange={(e) =>
                                      handleInputChange3(e, index)
                                    } 
                                    disabled={textDisabld}
                                    placeholder="Business Address"
                                    defaultValue={""}
                                  />
                                  {/* {errors.co_business_address && (
                                    <div className="text-danger">
                                      {errors.co_business_address}
                                    </div>
                                  )} */}
                                </div>
                              </div>
                                     </div>                           
                                     </div>
                                ))}
                            
                                  {dividendArr3.map((item , index) =>(
                                    <div className="" key={index}>
                                  <h3>                              
                              { index === 0 && "     Loan Repyment Details    " }   <span>  <button
                                        type="button"
                                        className={`add-button  ${
                                          (index === 0 && "d-none") || ""
                                        }`}
                                        onClick={() => handleRemove3(index)}
                                        style={{ backgroundColor: 'blue' }}                                       
                                      >
                                        -
                                      </button>
                                      {index === 0 && (
                                        <button
                                          type="button"
                                          className=""
                                          onClick={handleAdd3}
                                          style={{ backgroundColor: 'blue' }}
                                        >
                                          +
                                        </button>
                                      )}</span>
                                      
                              </h3>
                                    <div className="row">
                              <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="text"
                                  >
                                    Name Of Bank NBFC
                                  </label>
                                  <input
                                 
                                    name="co_bank_nbfc"
                                    type="text"
                                    value={item.co_bank_nbfc}
                                    id={`co_bank_nbfc ${index}`} 
                                    onChange={(e) =>
                                      handleInputChange4(e, index)
                                    } 
                                    disabled={textDisabld}
                                    placeholder="Name OfBank NBFC"
                                    className="form-control"
                                  />
                                  {/* {errors.co_bank_nbfc && (
                                    <div className="text-danger">
                                      {errors.co_bank_nbfc}
                                    </div>
                                  )} */}
                                </div>
                              </div>
                              <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <select
                           
                                    name="co_loan_type"
                                    className="form-select"
                                    value={item.co_loan_type}
                                    id={`co_loan_type ${index}`} 
                                    onChange={(e) =>
                                      handleInputChange4(e, index)
                                    } 
                                    disabled={textDisabld}
                                  >
                                    <option value="" disabled selected>
                                      Type of Loan
                                    </option>
                                    <option value="home">Home Loan</option>
                                    <option value="student">
                                      Student Loan
                                    </option>
                                    <option value="personal">
                                      Personal Loan
                                    </option>
                                    <option value="Car">Car Loan</option>
                                    <option value="Education">
                                      Education Loan
                                    </option>
                                    <option value="Gold">Gold Loan</option>
                                    <option value="Business">
                                      Business Loan
                                    </option>
                                    <option value="Refinance">
                                      Refinance Loan
                                    </option>
                                  </select>
                                  {/* {errors.co_loan_type && (
                                    <div className="text-danger">
                                      {errors.co_loan_type}
                                    </div>
                                  )} */}
                                </div>
                              </div>
                              <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="text"
                                  >
                                    EMI
                                  </label>
                                  <input
                                 
                                    name="co_emi"
                                    type="text"
                                    value={item.co_emi}
                                    id={`co_emi ${index}`} 
                                    onChange={(e) =>
                                      handleInputChange4(e, index)
                                    } 
                                    disabled={textDisabld}
                                    placeholder="EMI"
                                    className="form-control"
                                  />
                                  {/* {errors.co_emi && (
                                    <div className="text-danger">
                                      {errors.co_emi}
                                    </div>
                                  )} */}
                                </div>
                              </div>
                              <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="text"
                                  >
                                    Start Form
                                  </label>
                                  <input
                               
                                    name="co_start_form"
                                    type="text"
                                    value={item.co_start_form}
                                    id={`co_start_form ${index}`} 
                                    onChange={(e) =>
                                      handleInputChange4(e, index)
                                    } 
                                    disabled={textDisabld}
                                    placeholder="Start Form"
                                    className="form-control"
                                  />
                                  {/* {errors.co_start_form && (
                                    <div className="text-danger">
                                      {errors.co_start_form}
                                    </div>
                                  )} */}
                                </div>
                              </div>
                              <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="text"
                                  >
                                    Pending
                                  </label>
                                  <input
                                
                                    name="co_pandding"
                                    type="text"
                                    value={item.co_pandding}
                                    id={`co_pandding ${index}`} 
                                    onChange={(e) =>
                                      handleInputChange4(e, index)
                                    } 
                                    disabled={textDisabld}
                                    placeholder="Pending"
                                    className="form-control"
                                  />
                                  {/* {errors.co_pandding && (
                                    <div className="text-danger">
                                      {errors.co_pandding}
                                    </div>
                                  )} */}
                                </div>
                              </div>
                              <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="text"
                                  >
                                    Pending
                                  </label>
                                  <input
                             
                                    name="co_aaplication_pan_no"
                                    type="text"
                                    value={item.co_aaplication_pan_no}
                                    id={`co_aaplication_pan_no ${index}`} 
                                    onChange={(e) =>
                                      handleInputChange4(e, index)
                                    } 
                                    disabled={textDisabld}
                                    placeholder="Application Pan No"
                                    className="form-control"
                                  />
                                  {/* {errors.co_aaplication_pan_no && (
                                    <div className="text-danger">
                                      {errors.co_aaplication_pan_no}
                                    </div>
                                  )} */}
                                </div>
                              </div>
                              <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="text"
                                  >
                                    Adhar No
                                  </label>
                                  <input
                                 
                                    name="co_adhar_no"
                                    type="text"
                                    value={item.co_adhar_no}
                                    id={`co_adhar_no ${index}`} 
                                    onChange={(e) =>
                                      handleInputChange4(e, index)
                                    } 
                                    disabled={textDisabld}
                                    placeholder="Adhar No"
                                    className="form-control"
                                  />
                                  {/* {errors.co_adhar_no && (
                                    <div className="text-danger">
                                      {errors.co_adhar_no}
                                    </div>
                                  )} */}
                                </div>
                              </div>
                              <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="text"
                                  >
                                    DOB
                                  </label>
                                  <input
                                 
                                    name="co_dob"
                                    type="text"
                                    value={item.co_dob}
                                    id={`co_dob ${index}`} 
                                    onChange={(e) =>
                                      handleInputChange4(e, index)
                                    } 
                                    disabled={textDisabld}
                                    placeholder="DOB"
                                    className="form-control"
                                  />
                                  {/* {errors.co_dob && (
                                    <div className="text-danger">
                                      {errors.co_dob}
                                    </div>
                                  )} */}
                                </div>
                              </div>
                              <div className="col-xl-4 col-lg-2 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="text"
                                  >
                                    Voter ID
                                  </label>
                                  <input
                                 
                                    name="co_voter_id"
                                    type="text"
                                    value={item.co_voter_id}
                                    id={`co_voter_id ${index}`} 
                                    onChange={(e) =>
                                      handleInputChange4(e, index)
                                    } 
                                    disabled={textDisabld}
                                    placeholder="Voter ID"
                                    className="form-control"
                                  />
                                  {/* {errors.co_voter_id && (
                                    <div className="text-danger">
                                      {errors.co_voter_id}
                                    </div>
                                  )} */}
                                </div>
                              </div>
                              <div className="col-xl-4 col-lg-2 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="text"
                                  >
                                    Spouse Name
                                  </label>
                                  <input
                               
                                    name="co_spouse_name"
                                    type="text"
                                    value={item.co_spouse_name}
                                    id={`co_spouse_name ${index}`} 
                                    onChange={(e) =>
                                      handleInputChange4(e, index)
                                    } 
                                    disabled={textDisabld}
                                    placeholder="Spouse Name"
                                    className="form-control"
                                  />
                                  {/* {errors.co_spouse_name && (
                                    <div className="text-danger">
                                      {errors.co_spouse_name}
                                    </div>
                                  )} */}
                                </div>
                              </div>
                              <div className="col-xl-4 col-lg-2 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="text"
                                  >
                                    Spouse DOB
                                  </label>
                                  <input
                               
                                    name="co_spouse_dob"
                                    type="text"
                                    value={item.co_spouse_dob}
                                    id={`co_spouse_dob ${index}`} 
                                    onChange={(e) =>
                                      handleInputChange4(e, index)
                                    } 
                                    disabled={textDisabld}
                                    placeholder="Spouse DOB"
                                    className="form-control"
                                  />
                                  {/* {errors.co_spouse_dob && (
                                    <div className="text-danger">
                                      {errors.co_spouse_dob}
                                    </div>
                                  )} */}
                                </div>
                              </div>
                                   </div>
                                   </div>
                                   ))}
                              <h3>Details of Profession </h3>

                              <h3 className="mt-2">For Salaried</h3>

                              <div className="col-xl-4 col-lg-2 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <h6 className="text-center">
                                    Last Three Month Salary Slip
                                  </h6>
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="text"
                                  ></label>

                                  <input
                                    id="co_three_month_salary"
                                    name="co_three_month_salary"
                                    type="file"
                                    onChange={(e) =>
                                      handleFileChange(
                                        e,
                                        "co_three_month_salary"
                                      )
                                    }
                                    className="form-control"
                                  />
                                  {errors.co_three_month_salary && (
                                    <div className="text-danger">
                                      {errors.co_three_month_salary}
                                    </div>
                                  )}
                                  {formData2.co_three_month_salary && (
                                    <p>
                                      Selected File:{" "}
                                      {formData2.co_three_month_salary.name}
                                    </p>
                                  )}
                                </div>
                              </div>
                              <div className="col-xl-4 col-lg-2 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <h6 className="text-center">
                                    Last Two year Form 16
                                  </h6>
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="text"
                                  ></label>
                                  <input
                                    id="co_last_two_year_six "
                                    name="co_last_two_year_six "
                                    type="file"
                                    onChange={(e) =>
                                      handleFileChange(e, "co_last_two_year_six")
                                    }
                                    placeholder="Last Two Year ."
                                    className="form-control"
                                  />
                                  {errors.co_last_two_year_six && (
                                    <div className="text-danger">
                                      {errors.co_last_two_year_six}
                                    </div>
                                  )}
                                  {formData2.co_last_two_year_six && (
                                    <p>
                                      Selected File:{" "}
                                      {formData2.co_last_two_year_six.name}
                                    </p>
                                  )}
                                </div>
                              </div>
                              <div className="col-xl-4 col-lg-2 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <h6 className="text-center">
                                    Other Income Proof
                                  </h6>
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="text"
                                  ></label>
                                  <input
                                    id="co_income_proof"
                                    name="co_income_proof"
                                    type="file"
                                    onChange={(e) =>
                                      handleFileChange(e, "co_income_proof")
                                    }
                                    placeholder="Last Three Month Salary Slip."
                                    className="form-control"
                                  />
                                  {errors.co_income_proof && (
                                    <div className="text-danger">
                                      {errors.income_proof}
                                    </div>
                                  )}
                                  {formData2.co_income_proof && (
                                    <p>
                                      Selected File:{" "}
                                      {formData2.co_income_proof.name}
                                    </p>
                                  )}
                                </div>
                              </div>
                              <h3>For Self Employed</h3>

                              <div className="col-xl-4 col-lg-2 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <h6 className="text-center">
                                    Last Two Year ITR
                                  </h6>
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="text"
                                  ></label>
                                  <input
                                    id="co_itr"
                                    name="co_itr"
                                    type="file"
                                    onChange={(e) =>
                                      handleFileChange(e, "co_itr")
                                    }
                                    placeholder="Last Three Month Salary Slip."
                                    className="form-control"
                                  />
                                  {errors.co_itr && (
                                    <div className="text-danger">
                                      {errors.co_itr}
                                    </div>
                                  )}
                                  {formData2.co_itr && (
                                    <p>Selected File: {formData2.co_itr.name}</p>
                                  )}
                                </div>
                              </div>
                              <div className="col-xl-4 col-lg-2 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <h6 className="text-center">
                                    Last Two year Form
                                  </h6>
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="text"
                                  ></label>
                                  <input
                                    id="co_last_two_year_as "
                                    name="co_last_two_year_as "
                                    type="file"
                                    onChange={(e) =>
                                      handleFileChange(
                                        e,
                                        "co_last_two_year_as"
                                      )
                                    }
                                    placeholder="Last Two year Form ."
                                    className="form-control"
                                  />
                                  {errors.co_last_two_year_as && (
                                    <div className="text-danger">
                                      {errors.co_last_two_year_as}
                                    </div>
                                  )}
                                  {formData2.co_last_two_year_as && (
                                    <p>
                                      Selected File:{" "}
                                      {formData2.co_last_two_year_as.name}
                                    </p>
                                  )}
                                </div>
                              </div>
                              <div className="col-xl-4 col-lg-2 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <h6 className="text-center">
                                    Business Registration Proof
                                  </h6>
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="text"
                                  ></label>
                                  <input
                                    id="co_registration_proof"
                                    name="co_registration_proof"
                                    type="file"
                                    onChange={(e) =>
                                      handleFileChange(
                                        e,
                                        "co_registration_proof"
                                      )
                                    }
                                    placeholder="Last Three Month Salary Slip."
                                    className="form-control"
                                  />
                                  {errors.co_registration_proof && (
                                    <div className="text-danger">
                                      {errors.co_registration_proof}
                                    </div>
                                  )}
                                  {formData2.co_registration_proof && (
                                    <p>
                                      Selected File:{" "}
                                      {formData2.co_registration_proof.name}
                                    </p>
                                  )}
                                </div>
                              </div>
                              {/* Guarantor Details  start  */}
                             {dividendArr4.map((item, index)=>(
                                <div className="" key={index}>
                               <h3>                              
                              { index === 0 && " Guarantor Details   " }   <span>  <button
                                        type="button"
                                        className={`add-button  ${
                                          (index === 0 && "d-none") || ""
                                        }`}
                                        onClick={() => handleRemove4(index)}
                                        style={{ backgroundColor: 'blue' }}                                       
                                      >
                                        -
                                      </button>
                                      {index === 0 && (
                                        <button
                                          type="button"
                                          className=""
                                          onClick={handleAdd4}
                                          style={{ backgroundColor: 'blue' }}
                                        >
                                          +
                                        </button>
                                      )}</span>   </h3>                                                                           
                              <div className="row">
                              <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="name"
                                  >
                                    name
                                  </label>
                                  <input
                              
                                    name="guar_name"
                                    type="text"
                                    value={item.guar_name}
                                    id={`guar_name ${index}`} 
                                    onChange={(e) =>
                                      handleInputChange5(e, index)
                                    } 
                                    disabled={textDisabld}
                                    placeholder="Name"
                                    className="form-control"
                                  />
                                  {/* {errors.guar_name && (
                                    <div className="text-danger">
                                      {errors.guar_name}
                                    </div>
                                  )} */}
                                </div>
                              </div>
                              <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="email"
                                  >
                                    Email
                                  </label>
                                  <input
                                
                                    name="guar_email"
                                    type="email"
                                    value={item.guar_email}
                                    id={`guar_email ${index}`} 
                                    onChange={(e) =>
                                      handleInputChange5(e, index)
                                    } 
                                    disabled={textDisabld}
                                    placeholder="Email"
                                    className="form-control"
                                  />
                                  {/* {errors.guar_email && (
                                    <div className="text-danger">
                                      {errors.guar_email}
                                    </div>
                                  )} */}
                                </div>
                              </div>
                              <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="phone"
                                  >
                                    Phone
                                  </label>
                                  <input
                             
                                    name="guar_phone"
                                    type="text"
                                    value={item.guar_phone}
                                    id={`guar_phone ${index}`} 
                                    onChange={(e) =>
                                      handleInputChange5(e, index)
                                    } 
                                    disabled={textDisabld}
                                    placeholder="Phone"
                                    className="form-control"
                                  />
                                  {/* {errors.gura_phone && (
                                    <div className="text-danger">
                                      {errors.gura_phone}
                                    </div>
                                  )} */}
                                </div>
                              </div>
                              <div className="col-xl-6 col-lg-4 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="phone"
                                  >
                                    Monthly Salary
                                  </label>
                                  <input
                                 
                                    name="guar_monthly_salary"
                                    type="text"
                                    value={item.guar_monthly_salary}
                                    id={`guar_monthly_salary ${index}`} 
                                    onChange={(e) =>
                                      handleInputChange5(e, index)
                                    } 
                                    disabled={textDisabld}
                                    placeholder="Monthly Salary "
                                    className="form-control"
                                  />
                                  {/* {errors.guar_monthly_salary && (
                                    <div className="text-danger">
                                      {errors.guar_monthly_salary}
                                    </div>
                                  )} */}
                                </div>
                              </div>
                              <div className="col-xl-6 col-lg-4 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="phone"
                                  >
                                    Income
                                  </label>
                                  <input
                                
                                    name="guar_yearly_income"
                                    type="text"
                                    value={item.guar_yearly_income}
                                    id={`guar_yearly_income ${index}`} 
                                    onChange={(e) =>
                                      handleInputChange5(e, index)
                                    } 
                                    disabled={textDisabld}
                                    placeholder="Yearly Income "
                                    className="form-control"
                                  />
                                  {/* {errors.guar_yearly_income && (
                                    <div className="text-danger">
                                      {errors.guar_yearly_income}
                                    </div>
                                  )} */}
                                </div>
                              </div>
                              <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="message"
                                  ></label>
                                  <textarea
                                    className="form-control"
                                
                                    rows={3}
                                    name="guar_address"
                                    value={item.guar_address}
                                    id={`guar_address ${index}`} 
                                    onChange={(e) =>
                                      handleInputChange5(e, index)
                                    } 
                                    disabled={textDisabld}
                                    placeholder="Residence Address"
                                    defaultValue={""}
                                  />
                                  {/* {errors.guar_address && (
                                    <div className="text-danger">
                                      {errors.guar_address}
                                    </div>
                                  )} */}
                                </div>
                              </div>
                              <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="message"
                                  ></label>
                                  <textarea
                                    className="form-control"
                                  
                                    rows={3}
                                    name="guar_business_address"
                                    value={item.guar_business_address}
                                    id={`guar_business_address ${index}`} 
                                    onChange={(e) =>
                                      handleInputChange5(e, index)
                                    } 
                                    disabled={textDisabld}
                                    placeholder="Business Address"
                                    defaultValue={""}
                                  />
                                  {/* {errors.guar_business_address && (
                                    <div className="text-danger">
                                      {errors.guar_business_address}
                                    </div>
                                  )} */}
                                </div>
                              </div>
                              </div>
                              </div>
                              ))}
                                     {/* Guarantor Details  End  */}

                              <h3>                              
                               </h3>                            
                            
                            {dividendArr5.map((item, index) => (
                             <div className="" key={index}>
                                <h3>                              
                              { index === 0 && "Banking Details " }   <span>  <button
                                        type="button"
                                        className={`add-button  ${
                                          (index === 0 && "d-none") || ""
                                        }`}
                                        onClick={() => handleRemove5(index)}
                                        style={{ backgroundColor: 'blue' }}                                       
                                      >
                                        -
                                      </button>
                                      {index === 0 && (
                                        <button
                                          type="button"
                                          className=""
                                          onClick={handleAdd5}
                                          style={{ backgroundColor: 'blue' }}
                                        >
                                          +
                                        </button>
                                      )}</span>  </h3>
                            <div className="row">
                              <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="name"
                                  >
                                    Name of Bank
                                  </label>
                                  <input
                                 
                                    name="guar_bank_name"
                                    type="text"
                                    value={item.guar_bank_name}
                                    id={`guar_bank_name ${index}`} 
                                    onChange={(e) =>
                                      handleInputChange6(e, index)
                                    } 
                                    disabled={textDisabld}
                                    placeholder="Name of Bank"
                                    className="form-control"
                                  />
                                  {/* {errors.guar_bank_name && (
                                    <div className="text-danger">
                                      {errors.guar_bank_name}
                                    </div>
                                  )} */}
                                </div>
                              </div>
                              <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <select
                                 
                                    name="guar_account_type"
                                    className="form-select"
                                    value={item.guar_account_type}
                                    id={`guar_account_type ${index}`} 
                                    onChange={(e) =>
                                      handleInputChange6(e, index)
                                    } 
                                    disabled={textDisabld}
                                  >
                                    <option value="" disabled selected>
                                      Types of Account
                                    </option>
                                    <option value="home">
                                      Current Account
                                    </option>
                                    <option value="student">
                                      Saving Account
                                    </option>
                                    <option value="personal">
                                      Salary Account
                                    </option>
                                    <option value="Car">
                                      Fixed Deposit Account
                                    </option>
                                    <option value="Education">
                                      NRI Account
                                    </option>
                                    <option value="Gold">DEMAT Account</option>
                                  </select>
                                  {/* {errors.guar_account_type && (
                                    <div className="text-danger">
                                      {errors.guar_account_type}
                                    </div>
                                  )} */}
                                </div>
                              </div>
                              <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="phone"
                                  >
                                    Account Number
                                  </label>
                                  <input
                                 
                                    name="guar_account_number"
                                    type="text"
                                    value={item.guar_account_number}
                                    id={`guar_account_number ${index}`} 
                                    onChange={(e) =>
                                      handleInputChange6(e, index)
                                    } 
                                    disabled={textDisabld}
                                    placeholder="Account Number"
                                    className="form-control"
                                  />
                                  {/* {errors.guar_account_number && (
                                    <div className="text-danger">
                                      {errors.guar_account_number}
                                    </div>
                                  )} */}
                                </div>
                              </div>
                              <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="name"
                                  >
                                    Remark
                                  </label>
                                  <input
                                   
                                    name="guar_remark"
                                    type="text"
                                    value={item.guar_remark}
                                    id={`guar_remark ${index}`} 
                                    onChange={(e) =>
                                      handleInputChange6(e, index)
                                    } 
                                    disabled={textDisabld}
                                    placeholder="Remark"
                                    className="form-control"
                                  />
                                  {/* {errors.guar_remark && (
                                    <div className="text-danger">
                                      {errors.guar_remark}
                                    </div>
                                  )} */}
                                </div>
                              </div>
                              </div>
                              </div>
                            ))}
                             
                                  {dividendArr6.map((item, index) =>(
                                    <div className="" key={index}>
                                    <h3>                              
                              { index === 0 && "  Loan Repyment Details  " }   <span>  <button
                                        type="button"
                                        className={`add-button  ${
                                          (index === 0 && "d-none") || ""
                                        }`}
                                        onClick={() => handleRemove6(index)}
                                        style={{ backgroundColor: 'blue' }}                                       
                                      >
                                        -
                                      </button>
                                      {index === 0 && (
                                        <button
                                          type="button"
                                          className=""
                                          onClick={handleAdd6}
                                          style={{ backgroundColor: 'blue' }}
                                        >
                                          +
                                        </button>
                                      )}</span>  </h3>

                                  <div className="row">
                              <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="text"
                                  >
                                    Name Of Bank NBFC
                                  </label>
                                  <input
                                 
                                    name="guar_bank_nbfc"
                                    type="text"
                                    value={item.guar_bank_nbfc}
                                    id={`guar_bank_nbfc ${index}`} 
                                    onChange={(e) =>
                                      handleInputChange7(e, index)
                                    } 
                                    disabled={textDisabld}
                                    placeholder="Name OfBank NBFC"
                                    className="form-control"
                                  />
                                  {/* {errors.guar_bank_nbfc && (
                                    <div className="text-danger">
                                      {errors.guar_bank_nbfc}
                                    </div>
                                  )} */}
                                </div>
                              </div>
                              <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <select  
                                    name="guar_loan_type"
                                    className="form-select"
                                    value={item.guar_loan_type}
                                    id={`guar_loan_type ${index}`} 
                                    onChange={(e) =>
                                      handleInputChange7(e, index)
                                    } 
                                    disabled={textDisabld}
                                  >
                                    <option value="" disabled selected>
                                      Type of Loan
                                    </option>
                                    <option value="home">Home Loan</option>
                                    <option value="student">
                                      Student Loan
                                    </option>
                                    <option value="personal">
                                      Personal Loan
                                    </option>
                                    <option value="Car">Car Loan</option>
                                    <option value="Education">
                                      Education Loan
                                    </option>
                                    <option value="Gold">Gold Loan</option>
                                    <option value="Business">
                                      Business Loan
                                    </option>
                                    <option value="Refinance">
                                      Refinance Loan
                                    </option>
                                  </select>
                                  {/* {errors.guar_loan_type && (
                                    <div className="text-danger">
                                      {errors.guar_loan_type}
                                    </div>
                                  )} */}
                                </div>
                              </div>
                              <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="text"
                                  >
                                    EMI
                                  </label>
                                  <input
                                  
                                    name="guar_emi"
                                    type="text"
                                    value={item.guar_emi}
                                    id={`guar_emi ${index}`} 
                                    onChange={(e) =>
                                      handleInputChange7(e, index)
                                    } 
                                    disabled={textDisabld}
                                    placeholder="EMI"
                                    className="form-control"
                                  />
                                  {/* {errors.guar_emi && (
                                    <div className="text-danger">
                                      {errors.guar_emi}
                                    </div>
                                  )} */}
                                </div>
                              </div>
                              <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="text"
                                  >
                                    Start Form
                                  </label>
                                  <input
                                
                                    name="guar_start_form"
                                    type="text"
                                    value={item.guar_start_form}
                                    id={`guar_start_form ${index}`} 
                                    onChange={(e) =>
                                      handleInputChange7(e, index)
                                    } 
                                    disabled={textDisabld}
                                    placeholder="Start Form"
                                    className="form-control"
                                  />
                                  {/* {errors.guar_start_form && (
                                    <div className="text-danger">
                                      {errors.guar_start_form}
                                    </div>
                                  )} */}
                                </div>
                              </div>
                              <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="text"
                                  >
                                    Pending
                                  </label>
                                  <input
                                  
                                    name="guar_pandding"
                                    type="text"
                                    value={item.guar_pandding}
                                    id={`guar_pandding ${index}`} 
                                    onChange={(e) =>
                                      handleInputChange7(e, index)
                                    } 
                                    disabled={textDisabld}
                                    placeholder="Pending"
                                    className="form-control"
                                  />
                                  {/* {errors.guar_pandding && (
                                    <div className="text-danger">
                                      {errors.guar_pandding}
                                    </div>
                                  )} */}
                                </div>
                              </div>
                              <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="text"
                                  >
                                    Pan NO
                                  </label>
                                  <input
                               
                                    name="guar_aaplication_pan_no"
                                    type="text"
                                    value={item.guar_aaplication_pan_no}
                                    id={`guar_aaplication_pan_no ${index}`} 
                                    onChange={(e) =>
                                      handleInputChange7(e, index)
                                    } 
                                    disabled={textDisabld}
                                    placeholder="Application Pan No"
                                    className="form-control"
                                  />
                                  {/* {errors.guar_aaplication_pan_no && (
                                    <div className="text-danger">
                                      {errors.guar_aaplication_pan_no}
                                    </div>
                                  )} */}
                                </div>
                              </div>
                              <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="text"
                                  >
                                    Adhar No
                                  </label>
                                  <input
                                
                                    name="guar_adhar_no"
                                    type="text"
                                    value={item.guar_adhar_no}
                                    id={`guar_adhar_no ${index}`} 
                                    onChange={(e) =>
                                      handleInputChange7(e, index)
                                    } 
                                    disabled={textDisabld}
                                    placeholder="Adhar No"
                                    className="form-control"
                                  />
                                  {/* {errors.guar_adhar_no && (
                                    <div className="text-danger">
                                      {errors.guar_adhar_no}
                                    </div>
                                  )} */}
                                </div>
                              </div>
                              <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="text"
                                  >
                                    DOB
                                  </label>
                                  <input
                                
                                    name="guar_dob"
                                    type="text"
                                    value={item.guar_dob}
                                    id={`guar_dob ${index}`} 
                                    onChange={(e) =>
                                      handleInputChange7(e, index)
                                    } 
                                    disabled={textDisabld}
                                    placeholder="DOB"
                                    className="form-control"
                                  />
                                  {/* {errors.guar_dob && (
                                    <div className="text-danger">
                                      {errors.guar_dob}
                                    </div>
                                  )} */}
                                </div>
                              </div>
                              <div className="col-xl-4 col-lg-2 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="text"
                                  >
                                    Voter ID
                                  </label>
                                  <input
                                  
                                    name="guar_voter_id"
                                    type="text"
                                    value={item.guar_voter_id}
                                    id={`guar_voter_id ${index}`} 
                                    onChange={(e) =>
                                      handleInputChange7(e, index)
                                    } 
                                    disabled={textDisabld}
                                    placeholder="Voter ID"
                                    className="form-control"
                                  />
                                  {/* {errors.guar_voter_id && (
                                    <div className="text-danger">
                                      {errors.guar_voter_id}
                                    </div>
                                  )} */}
                                </div>
                              </div>
                              <div className="col-xl-4 col-lg-2 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="text"
                                  >
                                    Spouse Name
                                  </label>
                                  <input
                                   
                                    name="guar_spouse_name"
                                    type="text"
                                    value={item.guar_spouse_name}
                                    id={`guar_spouse_name ${index}`} 
                                    onChange={(e) =>
                                      handleInputChange7(e, index)
                                    } 
                                    disabled={textDisabld}
                                    placeholder="Spouse Name"
                                    className="form-control"
                                  />
                                  {/* {errors.guar_spouse_name && (
                                    <div className="text-danger">
                                      {errors.guar_spouse_name}
                                    </div>
                                  )} */}
                                </div>
                              </div>
                              <div className="col-xl-4 col-lg-2 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="text"
                                  >
                                    Spouse DOB
                                  </label>
                                  <input
                                
                                    name="guar_spouse_dob"
                                    type="text"
                                    value={item.guar_spouse_dob}
                                    id={`guar_spouse_dob ${index}`} 
                                    onChange={(e) =>
                                      handleInputChange7(e, index)
                                    } 
                                    disabled={textDisabld}
                                    placeholder="Spouse DOB"
                                    className="form-control"
                                  />
                                  {/* {errors.guar_spouse_dob && (
                                    <div className="text-danger">
                                      {errors.guar_spouse_dob}
                                    </div>
                                  )} */}
                                </div>
                              </div>
                              </div>
                              </div>
                                  ))}

                              <h3>Details of Profession </h3>

                              <h3 className="mt-2">For Salaried</h3>

                              <div className="col-xl-4 col-lg-2 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <h6 className="text-center">
                                    Last Three Month Salary Slip
                                  </h6>
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="text"
                                  ></label>

                                  <input
                                    id="guar_three_month_salary"
                                    name="guar_three_month_salary"
                                    type="file"
                                    onChange={(e) =>
                                      handleFileChange(
                                        e,
                                        "guar_three_month_salary"
                                      )
                                    }
                                    className="form-control"
                                  />
                                  {errors.guar_three_month_salary && (
                                    <div className="text-danger">
                                      {errors.guar_three_month_salary}
                                    </div>
                                  )}
                                  {formData2.guar_three_month_salary && (
                                    <p>
                                      Selected File:{" "}
                                      {formData2.guar_three_month_salary.name}
                                    </p>
                                  )}
                                </div>
                              </div>
                              <div className="col-xl-4 col-lg-2 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <h6 className="text-center">
                                    Last Two year Form 16
                                  </h6>
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="text"
                                  ></label>
                                  <input
                                    id="guar_last_two_year_six "
                                    name="guar_last_two_year_six "
                                    type="file"
                                    onChange={(e) =>
                                      handleFileChange(e, "guar_last_two_year_six")
                                    }
                                    placeholder="Last Two Year ."
                                    className="form-control"
                                  />
                                  {errors.guar_last_two_year_six && (
                                    <div className="text-danger">
                                      {errors.guar_last_two_year_six}
                                    </div>
                                  )}
                                  {formData2.guar_last_two_year_six && (
                                    <p>
                                      Selected File:{" "}
                                      {formData2.guar_last_two_year_six.name}
                                    </p>
                                  )}
                                </div>
                              </div>
                              <div className="col-xl-4 col-lg-2 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <h6 className="text-center">
                                    Other Income Proof
                                  </h6>
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="text"
                                  ></label>
                                  <input
                                    id="guar_income_proof"
                                    name="guar_income_proof"
                                    type="file"
                                    onChange={(e) =>
                                      handleFileChange(e, "guar_income_proof")
                                    }
                                    placeholder="Last Three Month Salary Slip."
                                    className="form-control"
                                  />
                                  {errors.guar_income_proof && (
                                    <div className="text-danger">
                                      {errors.guar_income_proof}
                                    </div>
                                  )}
                                  {formData2.guar_income_proof && (
                                    <p>
                                      Selected File:{" "}
                                      {formData2.guar_income_proof.name}
                                    </p>
                                  )}
                                </div>
                              </div>

                              <h3>For Self Employed</h3>

                              <div className="col-xl-4 col-lg-2 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <h6 className="text-center">
                                    Last Two Year ITR
                                  </h6>
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="text"
                                  ></label>
                                  <input
                                    id="guar_itr"
                                    name="guar_itr"
                                    type="file"
                                    onChange={(e) =>
                                      handleFileChange(e, "guar_itr")
                                    }
                                    placeholder="Last Three Month Salary Slip."
                                    className="form-control"
                                  />
                                  {errors.guar_itr && (
                                    <div className="text-danger">
                                      {errors.guar_itr}
                                    </div>
                                  )}
                                  {formData2.guar_itr && (
                                    <p>
                                      Selected File: {formData2.guar_itr.name}
                                    </p>
                                  )}
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-2 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <h6 className="text-center">
                                    Last Two year Form 24AS
                                  </h6>
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="text"
                                  ></label>
                                  <input
                                    id="guar_last_two_year_as "
                                    name="guar_last_two_year_as "
                                    type="file"
                                    onChange={(e) =>
                                      handleFileChange(e, "guar_last_two_year_as")
                                    }
                                    placeholder="Last Two year Form ."
                                    className="form-control"
                                  />
                                  {errors.guar_last_two_year_as && (
                                    <div className="text-danger">
                                      {errors.guar_last_two_year_as}
                                    </div>
                                  )}
                                  {formData2.guar_last_two_year_as && (
                                    <p>
                                      Selected File:{" "}
                                      {formData2.guar_last_two_year_as.name}
                                    </p>
                                  )}
                                </div>
                              </div>
                              <div className="col-xl-4 col-lg-2 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <h6 className="text-center">
                                    Business Registration Proof
                                  </h6>
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="text"
                                  ></label>
                                  <input
                                    id="guar_registration_proof"
                                    name="guar_registration_proof"
                                    type="file"
                                    onChange={(e) =>
                                      handleFileChange(
                                        e,
                                        "guar_registration_proof"
                                      )
                                    }
                                    placeholder="Last Three Month Salary Slip."
                                    className="form-control"
                                  />
                                  {errors.guar_registration_proof && (
                                    <div className="text-danger">
                                      {errors.guar_registration_proof}
                                    </div>
                                  )}
                                  {formData2.guar_registration_proof && (
                                    <p>
                                      Selected File:{" "}
                                      {formData2.guar_registration_proof.name}
                                    </p>
                                  )}
                                </div>
                              </div>

                              {/* Button */}

                              <div className=" col-lg-12 col-md-12 col-sm-12 col-12">
                                <button
                                  onClick={handleClick}
                                  type="submit"
                                  className="btn btn-primary mb-4"
                                >
                                  Submit
                                </button>
                              </div>
                        
                          </div>


                        </form>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /.content end */}
      </main>
    </>
  );
};

export default HomeLoan;
