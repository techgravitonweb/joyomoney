import React, { useState } from "react";
import "./About.css";
import axios from "axios";

const PersonalLoan = () => {
  let newformData = new FormData();
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const [dividendArr, setDividendArr] = useState([
    {
      bank_name: "",
      account_type: "",
      account_number: "",
      fast_remark: " ",
    },
  ]);

  const [dividendArr1, setDividendArr1] = useState([
    {
      pan_no: "",
      adhar_no: "",
      spouse_name: "",
      loan_type: "",
      spouse_dob: "",
      dob: "",
      voter_id: "",
      bank_nbfc: "",
      emi: "",
      pandding: "",
    },
  ]);

  const [dividendArr2, setDividendArr2] = useState([
    {
      co_bank_name: "",
      co_account_type: "",
      co_account_number: "",
      co_remark: "",
    },
  ]);

  const [dividendArr3, setDividendArr3] = useState([
    {
      co_pan_no: "",
      co_adhar_no: "",
      co_spouse_name: "",
      co_loan_type: "",
      co_spouse_dob: "",
      co_dob: "",
      co_voter_id: "",
      co_bank_nbfc: "",
      co_emi: "",
      co_pandding: "",
    },
  ]);

  const [textDisabld, setTextDisabld] = useState(false); // Assuming textDisabld is a state variable

  const handleAdd = () => {
    setDividendArr([
      ...dividendArr,
      {
        bank_name: "",
        account_type: "",
        account_number: "",
        remak: " ",
      },
    ]);
  };
  const handleAdd1 = () => {
    setDividendArr1([
      ...dividendArr1,
      {
        pan_no: "",
        adhar_no: "",
        spouse_name: "",
        loan_type: "",
        spouse_dob: "",
        dob: "",
        voter_id: "",
        bank_nbfc: "",
        emi: "",
        pandding: "",
      },
    ]);
  };
  const handleAdd2 = () => {
    setDividendArr2([
      ...dividendArr2,
      {
        co_bank_name: "",
        co_account_type: "",
        co_account_number: "",
        co_remark: "",
      },
    ]);
  };
  const handleAdd3 = () => {
    setDividendArr3([
      ...dividendArr3,
      {
        co_pan_no: "",
        co_adhar_no: "",
        co_spouse_name: "",
        co_loan_type: "",
        co_spouse_dob: "",
        co_dob: "",
        co_voter_id: "",
        co_bank_nbfc: "",
        co_emi: "",
        co_pandding: "",
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
    if (dividendArr2.length > 0) {
      const listArr = [...dividendArr3];
      listArr.splice(index, 1);
      setDividendArr3(listArr);
    }
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    application_no: "",
    salary: "",
    loan_type: "",
    user_loan_type: "",
    spouse_name: "",
    spouse_dob: "",
    address: "",
    business_address: "",
    bank_name: "",
    account_type: "",
    account_number: "",
    remark: "",
    pan_no: "",
    adhar_no: "",
    dob: "",
    voter_id: "",
    // three_month_salary: null,
    // itr: null,
    // income_proof: null,
    // registration_proof: null,
    bank_nbfc: "",
    emi: "",
    pandding: "",
    //Co_Application
    co_name: "",
    co_email: "",
    co_phone: "",
    co_application_no: "",
    co_salary: "",
    co_loan_type: "",
    co_user_loan_type: "",
    co_spouse_name: "",
    co_address: "",
    co_business_address: "",
    co_bank_name: "",
    co_account_type: "",
    co_account_number: "",
    co_remark: "",
    co_pan_no: "",
    co_adhar_no: "",
    co_dob: "",
    co_voter_id: "",
    co_bank_nbfc: "",
    co_emi: "",
    co_pandding: "",
    co_spouse_dob: "",
  });

  const [formData2, setFormData2] = useState({
    three_month_salary: null,
    itr: null,
    income_proof: null,
    registration_proof: null,
  });

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

  console.log(formData2);

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
    if (!formData.application_no) {
      newErrors.application_no = "Application is Requried";
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
    if (!formData.spouse_dob) {
      newErrors.spouse_dob = "Spouse DOB is Requried";
    }
    if (!formData.spouse_name) {
      newErrors.spouse_name = "Spouse Name is Requried";
    }
    if (!formData.remark) {
      newErrors.remark = "Remark is Requried";
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
    if (!formData.pan_no) {
      newErrors.pan_no = "Pancard is Requried";
    }
    if (!formData.adhar_no) {
      newErrors.adhar_no = "Adhar_no is Requried";
    }
    if (!formData.dob) {
      newErrors.dob = "dob is Requried";
    }
    if (!formData.voter_id) {
      newErrors.voter_id = "VoterId is Requried";
    }

    // Co- Application
    if (!formData.co_name) {
      newErrors.co_name = "Name is Requried";
    }
    if (!formData.co_email) {
      newErrors.co_email = "Email is Requried";
    }

    if (!formData.co_phone) {
      newErrors.co_phone = "Phone is Requried";
    }
    if (!formData.co_application_no) {
      newErrors.co_application_no = "Application is Requried";
    }

    if (!formData.co_password) {
      newErrors.co_password = "Password is Requried";
    }

    if (!formData.co_loan_type) {
      newErrors.co_loan_type = "Select Loan Types is Requried";
    }

    if (!formData.co_address) {
      newErrors.co_address = "Address is Requried";
    }

    if (!formData.co_business_address) {
      newErrors.co_business_address = "Business_Address is Requried";
    }
    if (!formData.co_bank_name) {
      newErrors.co_bank_name = " Bank name is Requried";
    }
    if (!formData.co_account_type) {
      newErrors.co_account_type = "account type  is Requried";
    }
    if (!formData.co_user_loan_type) {
      newErrors.co_user_loan_type = "Loan Type  is Requried";
    }
    if (!formData.co_account_number) {
      newErrors.co_account_number = "Account Number is Requried";
    }
    if (!formData.co_spouse_dob) {
      newErrors.co_spouse_dob = "Spouse DOB is Requried";
    }
    if (!formData.co_spouse_name) {
      newErrors.co_spouse_name = "Sopouse Name is Requried";
    }
    if (!formData.co_remark) {
      newErrors.co_remark = "Remark is Requried";
    }
    if (!formData.co_bank_nbfc) {
      newErrors.co_bank_nbfc = "Bank_nbfc is Requried";
    }
    if (!formData.co_emi) {
      newErrors.co_emi = "EMI is Requried";
    }
    if (!formData.co_pandding) {
      newErrors.co_pandding = "Pending is Requried";
    }
    if (!formData.co_pan_no) {
      newErrors.co_pan_no = "Pancard is Requried";
    }
    if (!formData.co_adhar_no) {
      newErrors.co_adhar_no = "Adhar_no is Requried";
    }
    if (!formData.co_dob) {
      newErrors.co_dob = "dob is Requried";
    }
    if (!formData.co_voter_id) {
      newErrors.co_voter_id = "VoterId is Requried";
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

    // Add more validations for other fields

    setErrors(newErrors);

    // Return true if there are no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(formData);

    const object = {
      dividendArr,
      dividendArr1,
      dividendArr2,
      dividendArr3,
      formData,
    };
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
        Accept: "*/*",
        "Content-Type": "application/json",
      };

      let bodyContent = JSON.stringify(object);

      let reqOptions = {
        url: "http://localhost:8000/api/v1/personalLoanForm",
        method: "POST",
        headers: headersList,
        data: bodyContent,
      };

      let response = await axios.request(reqOptions);
      console.log(response.data);

      if (response) {
        // Handle success
        console.log(response.data.id);
        const response2 = await axios.post(
          `http://localhost:8000/api/v1/personalformUploadfiles/${response.data.id}`,
          newformData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        if (response2) {
          alert(response2.data.message);
          window.location.reload(); // Reload the page after successful submission
        } else {
          console.error("Error sending data to the backend");
        }
      } else {
        // Handle error
        console.error("Error sending data to the backend");
      }
    } catch (error) {
      console.error("Error:", error);
    }

    // setFormData({
    //   name: "",
    //   email: "",
    //   phone: "",
    //   application_no: "",
    //   salary: "",
    //   loan_type: "",
    //   user_loan_type: "",
    //   spouse_name: "",
    //   spouse_dob: "",
    //   address: "",
    //   business_address: "",
    //   bank_name: "",
    //   account_type: "",
    //   account_number: "",
    //   remark: "",
    //   pan_no: "",
    //   adhar_no: "",
    //   dob: "",
    //   voter_id: "",
    //   three_month_salary: null,
    //   itr: null,
    //   income_proof: null,
    //   registration_proof: null,
    //   // need to this data add
    //   bank_nbfc: "",
    //   emi: "",
    //   pandding: "",
    //   //Co_Application
    //   co_name: "",
    //   co_email: "",
    //   co_phone: "",
    //   co_application_no: "",
    //   co_salary: "",
    //   co_loan_type: "",
    //   co_user_loan_type: "",
    //   co_spouse_name: "",
    //   co_address: "",
    //   co_business_address: "",
    //   co_bank_name: "",
    //   co_account_type: "",
    //   co_account_number: "",
    //   co_remark: "",
    //   co_pan_no: "",
    //   co_adhar_no: "",
    //   co_dob: "",
    //   co_voter_id: "",
    //   co_bank_nbfc: "",
    //   co_emi: "",
    //   co_pandding: "",
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
        <section className="pt-18 pb-10 Personal-header-page">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="bg-white p-5 rounded-top-md">
                  <div className="row align-items-center">
                    <div className="col-md-6 col-xl-8 col-sm-12 col-12">
                      <h1 className="mb-0">Personal Loan </h1>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12 col-12">
                      <div className="text-md-end mt-3 mt-md-0">
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
                      <a href="#section-faq" className="page-scroll nav-link">
                        FAQ’S
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
        <section className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="mt-n6 bg-white mb-10 rounded-3 shadow-sm position-relative">
                <div className="section-scroll p-lg-10 p-5" id="section-about">
                  <h2>About Personal Loan</h2>
                  <p className="lead">
                    A personal loan is an unsecured loan provided by banks,
                    credit unions, or online lenders to individuals for various
                    personal purposes. Unlike a mortgage or a car loan, a
                    personal loan is not secured by collateral, making it a
                    versatile financial product. Here are key points about
                    personal loans:
                  </p>
                  <div className="row">
                    <h3> 1. Unsecured Nature:</h3>
                    <ul className="text-decoration: none;">
                      <li>
                        {" "}
                        Personal loans are unsecured, meaning borrowers do not
                        need to provide collateral such as a house or car to
                        secure the loan.
                      </li>
                    </ul>
                    <h3>2. Usage: </h3>
                    <ul className="text-decoration: none;">
                      <li>
                        {" "}
                        Borrowers can use personal loan funds for a wide range
                        of purposes, including debt consolidation, home
                        improvement, medical expenses, education, travel, or any
                        other personal financial need.
                      </li>
                    </ul>

                    <h3>3. Loan Amount and Tenure:</h3>
                    <ul className="text-decoration: none;">
                      <li>
                        {" "}
                        Loan amounts vary based on the borrower's
                        creditworthiness, income, and other factors.
                      </li>
                      <li>
                        {" "}
                        Repayment tenures typically range from one to seven
                        years, and the terms are agreed upon at the time of loan
                        approval.
                      </li>
                    </ul>

                    <h3> 4. Interest Rates:</h3>
                    <ul className="text-decoration: none;">
                      <li>
                        Personal loan interest rates can be fixed or variable,
                        depending on the lender.
                      </li>
                      <li>
                        The interest rates are influenced by the borrower's
                        credit score, income, and the overall economic
                        environment.
                      </li>
                    </ul>
                    <h3> 5. Credit Score:</h3>
                    <ul className="text-decoration: none;">
                      <li>
                        {" "}
                        A good credit score improves the chances of loan
                        approval and may result in lower interest rates.{" "}
                      </li>
                      <li>
                        {" "}
                        Lenders evaluate the borrower's creditworthiness before
                        approving a personal loan application.{" "}
                      </li>
                    </ul>

                    <h3> 6. Application Process:</h3>
                    <ul className="text-decoration: none;">
                      <li>
                        Applying for a personal loan involves submitting an
                        application with personal and financial information.
                      </li>
                      <li>
                        Lenders may require documents such as proof of identity,
                        address, income, and employment details.
                      </li>
                    </ul>
                    <h3> 7. Quick Disbursement:</h3>
                    <ul className="text-decoration: none;">
                      <li>
                        {" "}
                        Personal loans often have a quicker approval and
                        disbursement process compared to other types of loans.
                      </li>
                      <li>
                        Some lenders offer instant or same-day approval and fund
                        disbursal.
                      </li>
                    </ul>
                    <h3> 8. Prepayment and Foreclosure:</h3>
                    <ul className="text-decoration: none;">
                      <li>
                        Borrowers can prepay the entire loan amount before the
                        end of the tenure, but some lenders may charge
                        prepayment penalties.
                      </li>
                    </ul>

                    <h3>9. Fixed Monthly Payments:</h3>
                    <ul className="text-decoration: none;">
                      <li>
                        Personal loans typically have fixed monthly payments,
                        making it easier for borrowers to budget and plan their
                        finances.
                      </li>
                    </ul>
                    <h3> 10. Risk for Lenders:</h3>
                    <ul className="text-decoration: none;">
                      <li>
                        Since personal loans are unsecured, lenders take on more
                        risk. Therefore, interest rates may be higher compared
                        to secured loans like home loans or auto loans.
                      </li>
                    </ul>
                    <h3> 11. Credit History Impact:</h3>
                    <ul className="text-decoration: none;">
                      <li>
                        • Timely repayment of personal loans can positively
                        impact the borrower's credit history, while defaults or
                        late payments can have a negative effect
                      </li>
                    </ul>
                  </div>
                  <hr />
                </div>
                <div className="section-scroll" id="section-typeloan">
                  <div className="bg-light p-lg-10 p-5">
                    <div className="row">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="mb-5">
                          <h2>Personal Loan Products</h2>
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
                          <h4>Medical Emergency</h4>
                          <p className="mb-0">
                            JoyoMoney Company offers you personal loan for your
                            unexpected medical emergency.Get instant personal
                            loan for your all kind of medical emergency
                            expenses.
                          </p>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className=" mb-5">
                          <h4>Wedding Purpose</h4>
                          <p className="mb-0">
                            You can manage your deram marriage day with our
                            personal loan option. Have the wedding celebration
                            of your dreams. Apply now personal loan for wedding
                            purpose.
                          </p>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className=" mb-5 mb-lg-0">
                          <h4>Abroad Travel</h4>
                          <p className="mb-0">
                            Get the funds for the expenditure involved in going
                            abroad for taking up employment. Manage your
                            personal with Borrow Company for fulfill your
                            travelling to abroad.
                          </p>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className=" mb-5 mb-lg-0">
                          <h4>Child Educations</h4>
                          <p className="mb-0">
                            We provides child loan for pursuing higher, We given
                            the right tools to every potential child. Also,
                            grant personal loan for your child higher education.
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
                          <h2>Features of Personal Loan</h2>
                          <p>
                            The features of a personal loan can vary slightly
                            among different lenders, but here are some common
                            features associated with personal loans:
                          </p>

                          <h3> 1. Unsecured Nature:</h3>
                          <ul className=" text-decoration-none">
                            <li>
                              Personal loans are typically unsecured, meaning
                              borrowers do not need to provide collateral such
                              as property or assets to secure the loan.
                            </li>
                          </ul>

                          <h3> 2. Loan Amount:</h3>
                          <ul className=" text-decoration-none">
                            <li>
                              The loan amount varies based on factors like the
                              borrower's income, credit score, and the lending
                              institution's policies.
                            </li>
                          </ul>

                          <h3>3. Usage Flexibility:</h3>
                          <ul className=" text-decoration-none">
                            <li>
                              Borrowers can use personal loan funds for various
                              purposes, including debt consolidation, medical
                              expenses, education, travel, home improvement, or
                              any other personal financial need.
                            </li>
                          </ul>

                          <h3> 4. Interest Rates:</h3>
                          <ul className=" text-decoration-none">
                            <li>
                              Personal loan interest rates can be fixed or
                              variable, depending on the lender and the type of
                              interest rate chosen by the borrower.
                            </li>
                          </ul>

                          <h3> 5. Credit Score Impact:</h3>
                          <ul className=" text-decoration-none">
                            <li>
                              Timely repayment of a personal loan can positively
                              impact the borrower's credit score. Conversely,
                              defaults or late payments can have a negative
                              effect.
                            </li>
                          </ul>

                          <h3>6. Quick Approval and Disbursement:</h3>
                          <ul className=" text-decoration-none">
                            <li>
                              Personal loans often have a quicker approval
                              process compared to other types of loans. Some
                              lenders offer instant approval and same-day
                              disbursal of funds..
                            </li>
                          </ul>
                          <h3>7. Repayment Tenure:</h3>
                          <ul className=" text-decoration-none">
                            <li>
                              Timely repayment of a personal loan can positively
                              impact the borrower's credit score. Conversely,
                              defaults or late payments can have a negative
                              effect.
                            </li>
                          </ul>
                          <h3>8. Prepayment and Foreclosure:</h3>
                          <ul className=" text-decoration-none">
                            <li>
                              Borrowers can prepay the entire loan amount before
                              the end of the tenure, but some lenders may charge
                              prepayment penalties.
                            </li>
                          </ul>
                          <h3>9. Online Application:</h3>
                          <ul className=" text-decoration-none">
                            <li>
                              Many lenders offer online application processes
                              for personal loans, making it convenient for
                              borrowers to apply from the comfort of their
                              homes.{" "}
                            </li>
                          </ul>
                          <h3>10. Documentation:</h3>
                          <ul className=" text-decoration-none">
                            <li>
                              The documentation required for personal loan
                              applications typically includes proof of identity,
                              address, income, and employment details.
                            </li>
                          </ul>
                          <h3>11. Risk for Lenders:</h3>
                          <ul className=" text-decoration-none">
                            <li>
                              Since personal loans are unsecured, lenders take
                              on more risk. As a result, interest rates may be
                              higher compared to secured loans.{" "}
                            </li>
                          </ul>

                          <h3>12. Fixed Monthly Payments:</h3>
                          <ul className=" text-decoration-none">
                            <li>
                              Personal loans usually come with fixed monthly
                              payments, providing borrowers with a predictable
                              repayment schedule.{" "}
                            </li>
                          </ul>
                          <h3>13. Loan Eligibility Criteria:</h3>
                          <ul className=" text-decoration-none">
                            <li>
                              Lenders assess the borrower's eligibility based on
                              factors such as age, income, employment stability,
                              and creditworthiness.{" "}
                            </li>
                          </ul>

                          <h3>14. Credit History Check:</h3>
                          <ul className=" text-decoration-none">
                            <li>
                              Lenders assess the borrower's eligibility based on
                              factors such as age, income, employment stability,
                              and creditworthiness.{" "}
                            </li>
                          </ul>
                          <h3>15. No Restrictions on End Use:</h3>
                          <ul className=" text-decoration-none">
                            <li>
                              Unlike some other types of loans that are specific
                              to particular purchases (e.g., home loans or auto
                              loans), personal loans offer flexibility in how
                              the funds are utilized.{" "}
                            </li>
                          </ul>
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
                          <h2>Personal Loan - Eligibility</h2>
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
                            Maximum age of applicant at loan maturity: 60 years
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

                <section className="">
                  <div className="container">
                    <div className="mb-2">
                      <div className="offset-xl-2 col-xl-8 offset-lg-2 col-lg-8 col-md-12 col-sm-12 col-12">
                        <div className="mb-4 text-center">
                          {/* section title start*/}
                          <h1 className="mb-0">Loan Application Form </h1>
                        </div>
                      </div>
                      <form>
                        <div>
                          {/* Text input*/}
                          <div className="row">
                            <h3> User Details </h3>

                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
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
                            {/* Text input*/}
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
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
                            {/* Text input*/}
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
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

                            {dividendArr.map((item, index) => (
                              <div className="" key={index}>
                                <h3>
                                  {" "}
                                  {index === 0 && "Banking Details"}{" "}
                                  <span>
                                    {" "}
                                    <button
                                      type="button"
                                      className={`add-button  ${
                                        (index === 0 && "d-none") || ""
                                      }`}
                                      onClick={() => handleRemove(index)}
                                      style={{ backgroundColor: "blue" }}
                                    >
                                      -
                                    </button>
                                    {index === 0 && (
                                      <button
                                        type="button"
                                        className=""
                                        onClick={handleAdd}
                                        style={{ backgroundColor: "blue" }}
                                      >
                                        +
                                      </button>
                                    )}
                                  </span>
                                </h3>

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
                                      {errors.bank_name && (
                                        <div className="text-danger">
                                          {errors.bank_name}
                                        </div>
                                      )}
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
                                      {errors.account_type && (
                                        <div className="text-danger">
                                          {errors.account_type}
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
                                      {errors.account_number && (
                                        <div className="text-danger">
                                          {errors.account_number}
                                        </div>
                                      )}
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
                                        id={`fast_remark ${index}`}
                                        // id="fast_remark"
                                        name="fast_remark"
                                        disabled={textDisabld}
                                        type="text"
                                        value={item.fast_remark}
                                        onChange={(e) =>
                                          handleInputChange1(e, index)
                                        }
                                        // onChange={handleInputChange}
                                        placeholder="Remarks holder"
                                        className="form-control"
                                      />
                                      {errors.fast_remark && (
                                        <div className="text-danger">
                                          {errors.fast_remark}
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}

                            {/*Loan Repyment Details start  */}
                            {dividendArr1.map((item, index) => (
                              <div className="" key={index}>
                                <h3>
                                  {" "}
                                  {index === 0 && "Loan Repyment Details"}{" "}
                                  <span>
                                    {" "}
                                    <button
                                      type="button"
                                      className={`add-button  ${
                                        (index === 0 && "d-none") || ""
                                      }`}
                                      onClick={() => handleRemove1(index)}
                                      style={{ backgroundColor: "blue" }}
                                    >
                                      -
                                    </button>
                                    {index === 0 && (
                                      <button
                                        type="button"
                                        className=""
                                        onClick={handleAdd1}
                                        style={{ backgroundColor: "blue" }}
                                      >
                                        +
                                      </button>
                                    )}
                                  </span>
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
                                        id={`bank_nbfc ${index}`}
                                        name="bank_nbfc"
                                        type="text"
                                        disabled={textDisabld}
                                        value={item.bank_nbfc}
                                        onChange={(e) =>
                                          handleInputChange2(e, index)
                                        }
                                        placeholder="Name OfBank NBFC"
                                        className="form-control"
                                      />
                                      {/* {errors.bank_nbfc && (
                          <div className="text-danger">{errors.bank_nbfc}</div>
                        )} */}
                                    </div>
                                  </div>
                                  <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                                    <div className="mb-3">
                                      <select
                                        id={`loan_type ${index}`}
                                        disabled={textDisabld}
                                        name="loan_type"
                                        className="form-select"
                                        value={item.loan_type}
                                        onChange={(e) =>
                                          handleInputChange2(e, index)
                                        }
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
                          <div className="text-danger">{errors.loan_type}</div>
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
                                        id={`emi ${index}`}
                                        disabled={textDisabld}
                                        name="emi"
                                        type="text"
                                        value={item.emi}
                                        onChange={(e) =>
                                          handleInputChange2(e, index)
                                        }
                                        placeholder="EMI"
                                        className="form-control"
                                      />
                                      {/* {errors.emi && (
                          <div className="text-danger">{errors.emi}</div>
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
                                        id={`pandding ${index}`}
                                        disabled={textDisabld}
                                        name="pandding"
                                        type="text"
                                        value={item.pandding}
                                        onChange={(e) =>
                                          handleInputChange2(e, index)
                                        }
                                        placeholder="Pending"
                                        className="form-control"
                                      />
                                      {/* {errors.pandding && (
                          <div className="text-danger">{errors.pandding}</div>
                        )} */}
                                    </div>
                                  </div>

                                  <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                                    <div className="mb-3">
                                      <label
                                        className="sr-only form-label mb-0"
                                        htmlFor="text"
                                      >
                                        Applicant Pan No.
                                      </label>
                                      <input
                                        id={`pan_no ${index}`}
                                        disabled={textDisabld}
                                        name="pan_no"
                                        type="text"
                                        value={item.pan_no}
                                        onChange={(e) =>
                                          handleInputChange2(e, index)
                                        }
                                        placeholder="Applicant Pan No."
                                        className="form-control"
                                      />
                                      {/* {errors.pan_no && (
                          <div className="text-danger">{errors.pan_no}</div>
                        )} */}
                                    </div>
                                  </div>
                                  <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                                    <div className="mb-3">
                                      <label
                                        className="sr-only form-label mb-0"
                                        htmlFor="text"
                                      >
                                        Adhar No.
                                      </label>
                                      <input
                                        id={`adhar_no ${index}`}
                                        disabled={textDisabld}
                                        name="adhar_no"
                                        type="text"
                                        value={item.adhar_no}
                                        onChange={(e) =>
                                          handleInputChange2(e, index)
                                        }
                                        placeholder="Adhar No."
                                        className="form-control"
                                      />
                                      {/* {errors.adhar_no && (
                          <div className="text-danger">{errors.adhar_no}</div>
                        )} */}
                                    </div>
                                  </div>
                                  <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                                    <div className="mb-3">
                                      <label
                                        className="sr-only form-label mb-0"
                                        htmlFor="text"
                                      >
                                        Applicant DOB
                                      </label>
                                      <input
                                        id={`dob ${index}`}
                                        disabled={textDisabld}
                                        name="dob"
                                        type="text"
                                        value={item.dob}
                                        onChange={(e) =>
                                          handleInputChange2(e, index)
                                        }
                                        placeholder="Applicant DOB"
                                        className="form-control"
                                      />
                                      {/* {errors.dob && (
                          <div className="text-danger">{errors.dob}</div>
                        )} */}
                                    </div>
                                  </div>
                                  <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                                    <div className="mb-3">
                                      <label
                                        className="sr-only form-label mb-0"
                                        htmlFor="text"
                                      >
                                        Voter Id No.
                                      </label>
                                      <input
                                        id={`dob ${index}`}
                                        disabled={textDisabld}
                                        name="voter_id"
                                        type="text"
                                        value={item.voter_id}
                                        onChange={(e) =>
                                          handleInputChange2(e, index)
                                        }
                                        placeholder="Voter Id No."
                                        className="form-control"
                                      />
                                      {/* {errors.voter_id && (
                          <div className="text-danger">{errors.voter_id}</div>
                        )} */}
                                    </div>
                                  </div>

                                  <div className="col-xl-6 col-lg-2 col-md-12 col-sm-12 col-12">
                                    <div className="mb-3">
                                      <label
                                        className="sr-only form-label mb-0"
                                        htmlFor="text"
                                      >
                                        Spouse Name
                                      </label>
                                      <input
                                        id={`spouse_name ${index}`}
                                        disabled={textDisabld}
                                        name="spouse_name"
                                        type="text"
                                        value={item.spouse_name}
                                        onChange={(e) =>
                                          handleInputChange2(e, index)
                                        }
                                        placeholder="Spose Name."
                                        className="form-control"
                                      />
                                      {/* {errors.spouse_name && (
                          <div className="text-danger">
                            {errors.spouse_name}
                          </div>
                        )} */}
                                    </div>
                                  </div>

                                  <div className="col-xl-6 col-lg-2 col-md-12 col-sm-12 col-12">
                                    <div className="mb-3">
                                      <label
                                        className="sr-only form-label mb-0"
                                        htmlFor="text"
                                      >
                                        Spouse DOB
                                      </label>
                                      <input
                                        id={`spouse_dob ${index}`}
                                        disabled={textDisabld}
                                        onChange={(e) =>
                                          handleInputChange2(e, index)
                                        }
                                        name="spouse_dob"
                                        type="text"
                                        value={item.spouse_dob}
                                        placeholder="Spouse DOB."
                                        className="form-control"
                                      />
                                      {/* {errors.spouse_dob && (
                          <div className="text-danger">{errors.spouse_dob}</div>
                        )} */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                            {/* Loan  End  */}
                            <h3>Co-Applicant Details </h3>
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                              <div className="mb-3">
                                <label
                                  className="sr-only form-label mb-0"
                                  htmlFor="name"
                                >
                                  name
                                </label>
                                <input
                                  id="co_name"
                                  name="co_name"
                                  type="text"
                                  value={formData.co_name}
                                  onChange={handleInputChange}
                                  placeholder="Name"
                                  className="form-control"
                                />
                                {errors.co_name && (
                                  <div className="text-danger">
                                    {errors.co_name}
                                  </div>
                                )}
                              </div>
                            </div>
                            {/* Text input*/}
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                              <div className="mb-3">
                                <label
                                  className="sr-only form-label mb-0"
                                  htmlFor="email"
                                >
                                  Email
                                </label>
                                <input
                                  id="co_email"
                                  name="co_email"
                                  type="email"
                                  value={formData.co_email}
                                  onChange={handleInputChange}
                                  placeholder="Email"
                                  className="form-control"
                                />
                                {errors.co_email && (
                                  <div className="text-danger">
                                    {errors.co_email}
                                  </div>
                                )}
                              </div>
                            </div>
                            {/* Text input*/}
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                              <div className="mb-3">
                                <label
                                  className="sr-only form-label mb-0"
                                  htmlFor="phone"
                                >
                                  Phone
                                </label>
                                <input
                                  id="co_phone"
                                  name="co_phone"
                                  type="text"
                                  value={formData.co_phone}
                                  onChange={handleInputChange}
                                  placeholder="Phone"
                                  className="form-control"
                                />
                                {errors.co_phone && (
                                  <div className="text-danger">
                                    {errors.co_phone}
                                  </div>
                                )}
                              </div>
                            </div>

                            {/* Select Basic */}

                            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                              <div className="mb-3">
                                <label
                                  className="sr-only form-label mb-0"
                                  htmlFor="message"
                                ></label>
                                <textarea
                                  className="form-control"
                                  id="co_address"
                                  rows={3}
                                  name="co_address"
                                  value={formData.co_address}
                                  onChange={handleInputChange}
                                  placeholder="Residence Address"
                                  defaultValue={""}
                                />
                                {errors.co_address && (
                                  <div className="text-danger">
                                    {errors.co_address}
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
                                  id="co_business_address"
                                  rows={3}
                                  name="co_business_address"
                                  value={formData.co_business_address}
                                  onChange={handleInputChange}
                                  placeholder="Business Address"
                                  defaultValue={""}
                                />
                                {errors.co_business_address && (
                                  <div className="text-danger">
                                    {errors.co_business_address}
                                  </div>
                                )}
                              </div>
                            </div>

                            {/* Bank Details start  */}
                            {dividendArr2.map((item, index) => (
                              <div className="" key={index}>
                                <h3>
                                  {" "}
                                  {index === 0 && "Banking Details"}{" "}
                                  <span>
                                    {" "}
                                    <button
                                      type="button"
                                      className={`add-button  ${
                                        (index === 0 && "d-none") || ""
                                      }`}
                                      onClick={() => handleRemove2(index)}
                                      style={{ backgroundColor: "blue" }}
                                    >
                                      -
                                    </button>
                                    {index === 0 && (
                                      <button
                                        type="button"
                                        className=""
                                        onClick={handleAdd2}
                                        style={{ backgroundColor: "blue" }}
                                      >
                                        +
                                      </button>
                                    )}
                                  </span>
                                </h3>

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
                                        // id={`dividend_stock_amount${index}`}
                                        id={`co_bank_name ${index}`}
                                        name="co_bank_name"
                                        type="text"
                                        disabled={textDisabld}
                                        value={item.co_bank_name}
                                        onChange={(e) =>
                                          handleInputChange3(e, index)
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
                                        id={`co_account_type ${index}`}
                                        // id="account_type"
                                        name="co_account_type"
                                        className="form-select"
                                        disabled={textDisabld}
                                        value={item.co_account_type}
                                        onChange={(e) =>
                                          handleInputChange3(e, index)
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
                                        id={`co_account_number ${index}`}
                                        // id="account_number"
                                        name="co_account_number"
                                        disabled={textDisabld}
                                        type="text"
                                        value={item.co_account_number}
                                        onChange={(e) =>
                                          handleInputChange3(e, index)
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
                                        id={`co_remark ${index}`}
                                        name="co_remark"
                                        type="text"
                                        value={item.co_remark}
                                        onChange={(e) =>
                                          handleInputChange3(e, index)
                                        }
                                        placeholder="Remarks"
                                        className="form-control"
                                      />
                                      {/* {errors.remark && (
                          <div className="text-danger">{errors.remark}</div>
                        )} */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                            {/* Bank Details End  */}
                            {/* Loan Repyment Details stat */}

                            {dividendArr3.map((item, index) => (
                              <div className="" key={index}>
                                <h3>
                                  {" "}
                                  {index === 0 && "Loan Repyment Details"}{" "}
                                  <span>
                                    {" "}
                                    <button
                                      type="button"
                                      className={`add-button  ${
                                        (index === 0 && "d-none") || ""
                                      }`}
                                      onClick={() => handleRemove3(index)}
                                      style={{ backgroundColor: "blue" }}
                                    >
                                      -
                                    </button>
                                    {index === 0 && (
                                      <button
                                        type="button"
                                        className=""
                                        onClick={handleAdd3}
                                        style={{ backgroundColor: "blue" }}
                                      >
                                        +
                                      </button>
                                    )}
                                  </span>
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
                                        id={`co_bank_nbfc ${index}`}
                                        disabled={textDisabld}
                                        onChange={(e) =>
                                          handleInputChange4(e, index)
                                        }
                                        name="co_bank_nbfc"
                                        type="text"
                                        value={item.co_bank_nbfc}
                                        placeholder="Name OfBank NBFC"
                                        className="form-control"
                                      />
                                      {/* {errors.co_bank_nbfc && (
                          <div className="text-danger">{errors.co_bank_nbfc}</div>
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
                                        disabled={textDisabld}
                                        onChange={(e) =>
                                          handleInputChange4(e, index)
                                        }
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
                          <div className="text-danger">{errors.co_loan_type}</div>
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
                                        id={`co_emi ${index}`}
                                        disabled={textDisabld}
                                        onChange={(e) =>
                                          handleInputChange4(e, index)
                                        }
                                        name="co_emi"
                                        type="text"
                                        value={item.co_emi}
                                        placeholder="EMI"
                                        className="form-control"
                                      />
                                      {/* {errors.co_emi && (
                          <div className="text-danger">{errors.co_emi}</div>
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
                                        id={`co_pandding ${index}`}
                                        disabled={textDisabld}
                                        onChange={(e) =>
                                          handleInputChange4(e, index)
                                        }
                                        name="co_pandding"
                                        type="text"
                                        value={item.co_pandding}
                                        placeholder="Pending"
                                        className="form-control"
                                      />
                                      {/* {errors.co_pandding && (
                          <div className="text-danger">{errors.co_pandding}</div>
                        )} */}
                                    </div>
                                  </div>

                                  <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                                    <div className="mb-3">
                                      <label
                                        className="sr-only form-label mb-0"
                                        htmlFor="text"
                                      >
                                        Applicant Pan No.
                                      </label>
                                      <input
                                        id={`co_pan_no ${index}`}
                                        disabled={textDisabld}
                                        onChange={(e) =>
                                          handleInputChange4(e, index)
                                        }
                                        name="co_pan_no"
                                        type="text"
                                        value={item.co_pan_no}
                                        placeholder="Applicant Pan No."
                                        className="form-control"
                                      />
                                      {/* {errors.co_pan_no && (
                          <div className="text-danger">{errors.co_pan_no}</div>
                        )} */}
                                    </div>
                                  </div>
                                  <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                                    <div className="mb-3">
                                      <label
                                        className="sr-only form-label mb-0"
                                        htmlFor="text"
                                      >
                                        Adhar No.
                                      </label>
                                      <input
                                        id={`co_adhar_no ${index}`}
                                        disabled={textDisabld}
                                        onChange={(e) =>
                                          handleInputChange4(e, index)
                                        }
                                        name="co_adhar_no"
                                        type="text"
                                        value={item.co_adhar_no}
                                        placeholder="Adhar No."
                                        className="form-control"
                                      />
                                      {/* {errors.co_adhar_no && (
                          <div className="text-danger">{errors.co_adhar_no}</div>
                        )} */}
                                    </div>
                                  </div>
                                  <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                                    <div className="mb-3">
                                      <label
                                        className="sr-only form-label mb-0"
                                        htmlFor="text"
                                      >
                                        Applicant DOB
                                      </label>
                                      <input
                                        id={`co_dob ${index}`}
                                        disabled={textDisabld}
                                        onChange={(e) =>
                                          handleInputChange4(e, index)
                                        }
                                        name="co_dob"
                                        type="text"
                                        value={item.co_dob}
                                        placeholder="Applicant DOB"
                                        className="form-control"
                                      />
                                      {/* {errors.co_dob && (
                          <div className="text-danger">{errors.co_dob}</div>
                        )} */}
                                    </div>
                                  </div>
                                  <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                                    <div className="mb-3">
                                      <label
                                        className="sr-only form-label mb-0"
                                        htmlFor="text"
                                      >
                                        Voter Id No.
                                      </label>
                                      <input
                                        id={`co_voter_id ${index}`}
                                        disabled={textDisabld}
                                        onChange={(e) =>
                                          handleInputChange4(e, index)
                                        }
                                        name="co_voter_id"
                                        type="text"
                                        value={item.co_voter_id}
                                        placeholder="Voter Id No."
                                        className="form-control"
                                      />
                                      {/* {errors.co_voter_id && (
                          <div className="text-danger">{errors.co_voter_id}</div>
                        )} */}
                                    </div>
                                  </div>

                                  <div className="col-xl-6 col-lg-2 col-md-12 col-sm-12 col-12">
                                    <div className="mb-3">
                                      <label
                                        className="sr-only form-label mb-0"
                                        htmlFor="text"
                                      >
                                        Spouse Name
                                      </label>
                                      <input
                                        id={`co_spouse_name ${index}`}
                                        disabled={textDisabld}
                                        onChange={(e) =>
                                          handleInputChange4(e, index)
                                        }
                                        name="co_spouse_name"
                                        type="text"
                                        value={item.co_spouse_name}
                                        placeholder="Spouse Name."
                                        className="form-control"
                                      />
                                      {/* {errors.co_spouse_name && (
                          <div className="text-danger">
                            {errors.co_spouse_name}
                          </div>
                        )} */}
                                    </div>
                                  </div>

                                  <div className="col-xl-6 col-lg-2 col-md-12 col-sm-12 col-12">
                                    <div className="mb-3">
                                      <label
                                        className="sr-only form-label mb-0"
                                        htmlFor="text"
                                      >
                                        Spouse DOB
                                      </label>
                                      <input
                                        id={`co_spouse_dob ${index}`}
                                        disabled={textDisabld}
                                        onChange={(e) =>
                                          handleInputChange4(e, index)
                                        }
                                        name="co_spouse_dob"
                                        type="text"
                                        value={item.co_spouse_dob}
                                        placeholder="Spouse DOB."
                                        className="form-control"
                                      />
                                      {/* {errors.co_spouse_dob && (
                          <div className="text-danger">{errors.co_spouse_dob}</div>
                        )} */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                            {/* Loan Repyment Details End */}

                            <h3>Details of Profession </h3>

                            <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
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
                            <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
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
                            <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
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
                                    Selected File: {formData2.income_proof.name}
                                  </p>
                                )}
                              </div>
                            </div>
                            <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
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
                        </div>
                      </form>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default PersonalLoan;
