const express = require('express');
const router = express.Router();
const dotenv = require("dotenv");
const Image = require('../models/Images');
const multer = require('multer');
const Testimonials = require('../models/Testimonials');
const uuid4 = require('uuid4');
const path = require('path');
const SchoolLoanForm = require('../models/SchoolLoanForm');
const Notification = require('../models/Notification');
const mongoose = require('mongoose');
const GoldLoanForm = require('../models/GoldLoanForm');
const ProfessionalLoanForm = require('../models/ProfessionalLoanForm');
const Contacts = require('../models/Contacts');
const PersonalLoanForm = require('../models/PersonalLoanForm');
const HomeLoanForm = require('../models/HomeLoanForm');
const CarLoanForm = require('../models/CarLoanForm');
const BusinessLoanForm = require('../models/BusinessLoanForm');
const fs = require("fs");
const Blog = require('../models/Blog');


let fileName;
// Multer setup for handling image uploads
const storage = multer.diskStorage({

  destination: function (req, file, cb) {
    // Specify the local destination path
    // cb(null, 'C:/Users/yashc/OneDrive/Desktop/Gravitonweb/loanwebsite/src/assets/uploads/');
    cb(null, '../src/assets/uploads/');
  },
  filename: function (req, file, callback) {
    fileName = file.originalname;
    const filename = fileName;
    callback(null, filename);
  },

});
const storage2 = multer.diskStorage({

  destination: function (req, file, cb) {
    // Specify the local destination path
    // cb(null, 'C:/Users/yashc/OneDrive/Desktop/Gravitonweb/loanwebsite/src/assets/uploads/');
    cb(null, '../src/assets/blogImages/');
  },
  filename: function (req, file, callback) {
    fileName = file.originalname;
    const filename = fileName;
    callback(null, filename);
  },

});

const upload = multer({ storage: storage });
const upload2 = multer({ storage: storage2 })

// uplaoding the image to the database
router.post("/uploadImage", upload.single("image"), async (req, res) => {
  try {
    const image = new Image({
      fileName: req.file.originalname,
      path: `${req.file.destination}${req.file.filename}`,
    });
    const savedImage = await image.save();
    res
      .status(201)
      .send({ id: savedImage._id, message: "image uploaded succesfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});
// deleting uploaded image
router.delete("/deleteImage/:id", async (req, res) => {
  try {
    const imageId = req.params.id;
    // Find the image by its id
    const image = await Image.findById(imageId);
    if (!image) {
      return res.status(404).send("Image not found");
    }
    // Delete the image from the local file system
    fs.unlinkSync(image.path);
    // Delete the image from the database
    await Image.findByIdAndDelete(imageId);
    res.status(200).send({ message: "Image deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// router.use('/getImages', express.static(path.join(__dirname, 'uploads')));
router.get("/getImages", async (req, res) => {
  try {
    const images = await Image.find({});
    res.status(200).send({ images: images });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/uploadTestimonials", async (req, res) => {
  try {
    const { name, testimonial } = req.body;
    if (!name || !testimonial) return res.status(400).json("Missing fields");

    const currenttestimonial = new Testimonials({
      name: name,
      testimonial: testimonial,
    });

    await currenttestimonial.save();
    res.status(201).send({ message: "testimonial uploaded succesfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/getTestimonials", async (req, res) => {
  try {
    const images = await Testimonials.find({});

    res.status(200).send({ images: images });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// deleting testimonial
router.delete("/deleteTestimonial/:id", async (req, res) => {
  try {
    const testimonialId = req.params.id;
    // Find the testimonial by its id
    const testimonial = await Testimonials.findById(testimonialId);
    if (!testimonial) {
      return res.status(404).send("Testimonial not found");
    }
    // Delete the testimonial from the database
    await Testimonials.findByIdAndDelete(testimonialId);
    res.status(200).send({ message: "Testimonial deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/sendNotification", async (req, res) => {
  try {
    const { content, notificationSeen, email, subject } = req.body;
    // if (!content || !notificationSeen || !email || !subject)
    //   return res.status(400).json("Missing fields");

    const notification = new Notification({
      content: content,
      // notificationSeen: notificationSeen,
      email: email,
      subject: subject,
    });

    await notification.save();
    res.status(201).send({ message: "notification uploaded succesfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/notification/:id", async (req, res) => {
  try {
    await Notification.find(
      { _id: req.params.id },
      { $set: { notificationSeen: true } }
    );

    res.status(200).send({ message: "Notification seen successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/getNotification", async (req, res) => {
  try {
    const notifications = await Notification.find({});
    res.status(200).send({ notifications: notifications });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// deleting Notification
router.delete("/deleteNotification/:id", async (req, res) => {
  try {
    const notifictaionId = req.params.id;
    // Find the Notification by its id
    const notification = await Notification.findById(notifictaionId);
    if (!notification) {
      return res.status(404).send("Testimonial not found");
    }
    // Delete the Notification from the database
    await Notification.findByIdAndDelete(notifictaionId);
    res.status(200).send({ message: "Testimonial deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});


router.post("/schoolLoanForm", async (req, res) => {
  try {
    // Extact data from req.body
    const { dividendArr, dividendArr1, dividendArr2, dividendArr3, formData } =
      req.body;

    const collegeSchooldetails = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      conract_person: formData.conract_person,
      website_link: formData.website_link,
      sclclg_managed: formData.sclclg_managed,
      business_address: formData.business_address,
    };

    const annualfeescollection = {
      school_clg: formData.school_clg,
      transport: formData.transport,
      hostel: formData.hostel,
    };
    // Create a new user document
    const newForm = new SchoolLoanForm({
      trustees: dividendArr || [],
      institutes: dividendArr1 || [],
      students: dividendArr2 || [],
      studenthotel: dividendArr3 || [],
      collegeSchooldetails: collegeSchooldetails,
      annualfeescollection: annualfeescollection,
    });

    // Save the new user document
    await newForm.save();

    res.status(200).send({ id: newForm._id });
  } catch (error) {
    console.error("Error creating new user:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/getAllSchoolForms", async (req, res) => {
  try {
    const schoolloanform = await SchoolLoanForm.find({});
    res.status(200).send({ data: schoolloanform });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.post(
  "/uploadfiles/:id",
  upload.fields([
    { name: "three_month_salary", maxCount: 1 },
    { name: "itr", maxCount: 1 },
    { name: "income_proof", maxCount: 1 },
    { name: "registration_proof", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const formid = req.params.id;

      if (!mongoose.Types.ObjectId.isValid(formid)) {
        return res.status(400).send("Invalid formid");
      }

      // Find the user by its _id
      const form = await SchoolLoanForm.findById(formid);

      if (!form) {
        return res.status(404).send("form does not found");
      }

      // Update the files array in the form document
      for (const fieldName in req.files) {
        const files = req.files[fieldName];
        // Map uploaded files to the desired format and push them into the form.files array
        files.forEach((file) => {
          form.files.push({
            fieldName: fieldName,
            fileName: file.filename,
            path: file.destination,
            originalFileName: file.originalname,
          });
        });
      }
      // Save the updated form document
      await form.save();

      res.status(200).send({ message: "Form submitted successfully" });
    } catch (error) {
      console.error("Error adding files to user:", error);
      res.status(500).send("Internal Server Error");
    }
  }
);

router.get("/Schooldownload/:id", async (req, res) => {
  console.log("Hi")
  try {
    const fileid = req.params.id;
    // const formtype = req.params.form;

    const form = await SchoolLoanForm.findOne({
      files: { $elemMatch: { _id: fileid } },
    });

    const matchingFile = form.files.find(
      (file) => file._id.toString() === fileid
    );
    // Define the file path based on your uploads directory
    const filePath = matchingFile.path + matchingFile.originalFileName;

    // console.log("filePath = ",filePath,formtype)

    // Send the file as a response
    res.download(filePath, (err) => {
      if (err) {
        console.error("Error downloading file:", err);
      }
    });
  } catch (error) {
    console.log(error)
    res.status(500).send("Error while downloading the file");
  }
});


router.post("/goldLoanForm", async (req, res) => {
  try {
    // Extact data from req.body
    const {
      name,
      email,
      phone,
      application_no,
      dob,
      adhar_no,
      voter_id,
      address,
      business_address,
      pan_no,
      spouse_name,
      spouse_dob,
    } = req.body;

    // Create a new user document
    const newForm = new GoldLoanForm({
      name,
      email,
      phone,
      application_no,
      dob,
      adhar_no,
      voter_id,
      address,
      business_address,
      pan_no,
      spouse_name,
      spouse_dob,
    });

    // Save the new user document
    await newForm.save();

    res.status(200).send({ message: "Form submitted successfully" });
  } catch (error) {
    console.error("Error creating new user:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/getAllGoldForms", async (req, res) => {
  try {
    const goldloanform = await GoldLoanForm.find({});
    res.status(200).send({ data: goldloanform });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/Golddownload/:id", async (req, res) => {
  console.log("Hi")
  try {
    const fileid = req.params.id;
    // const formtype = req.params.form;

    const form = await GoldLoanForm.findOne({
      files: { $elemMatch: { _id: fileid } },
    });

    const matchingFile = form.files.find(
      (file) => file._id.toString() === fileid
    );
    // Define the file path based on your uploads directory
    const filePath = matchingFile.path + matchingFile.originalFileName;

    // console.log("filePath = ",filePath,formtype)

    // Send the file as a response
    res.download(filePath, (err) => {
      if (err) {
        console.error("Error downloading file:", err);
      }
    });
  } catch (error) {
    console.log(error)
    res.status(500).send("Error while downloading the file");
  }
});


router.post("/professionalLoanForm", async (req, res) => {
  try {
    // Extact data from req.body
    const {
      dividendArr,
      dividendArr1,
      dividendArr2,
      dividendArr3,
      formData,
      loanType,
    } = req.body;

    const userdetails = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      degree: formData.degree,
      address: formData.address,
      business_address: formData.business_address,
    };

    const coapplicantdetails = {
      co_name: formData.co_name,
      co_email: formData.co_email,
      co_phone: formData.co_phone,
      co_address: formData.co_address,
      co_business_address: formData.co_business_address,
    };
    // Create a new user document
    const newForm = new ProfessionalLoanForm({
      userbankingdeatails: dividendArr || [],
      userloanpaymentdetails: dividendArr1 || [],
      coapplicantbankingdetails: dividendArr2 || [],
      coapplicantloanpaymentdetails: dividendArr3 || [],
      userdetails: userdetails,
      coapplicantdetails: coapplicantdetails,
      loanType: loanType,
    });

    // Save the new user document
    await newForm.save();

    res.status(200).send({ id: newForm._id });
  } catch (error) {
    console.error("Error creating new user:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.post(
  "/prfessionalformUploadfiles/:id",
  upload.fields([
    { name: "three_month_salary", maxCount: 1 },
    { name: "itr", maxCount: 1 },
    { name: "income_proof", maxCount: 1 },
    { name: "registration_proof", maxCount: 1 },
  ]),
  async (req, res) => {
    console.log(req.files);
    try {
      const formid = req.params.id;

      if (!mongoose.Types.ObjectId.isValid(formid)) {
        return res.status(400).send("Invalid formid");
      }

      // Find the user by its _id
      const form = await ProfessionalLoanForm.findById(formid);

      if (!form) {
        return res.status(404).send("form does not found");
      }

      // Update the files array in the form document
      for (const fieldName in req.files) {
        const files = req.files[fieldName];
        // Map uploaded files to the desired format and push them into the form.files array
        files.forEach((file) => {
          form.files.push({
            fieldName: fieldName,
            fileName: file.filename,
            path: file.destination,
            originalFileName: file.originalname,
          });
        });
      }
      // Save the updated form document
      await form.save();

      res.status(200).send({ message: "Form submitted successfully" });
    } catch (error) {
      console.error("Error adding files to user:", error);
      res.status(500).send("Internal Server Error");
    }
  }
);

router.get("/getAllProfessionalForms", async (req, res) => {
  try {
    const goldloanform = await ProfessionalLoanForm.find({});
    res.status(200).send({ data: goldloanform });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/Professionaldownload/:id", async (req, res) => {
  console.log("Hi")
  try {
    const fileid = req.params.id;
    // const formtype = req.params.form;

    const form = await ProfessionalLoanForm.findOne({
      files: { $elemMatch: { _id: fileid } },
    });

    const matchingFile = form.files.find(
      (file) => file._id.toString() === fileid
    );
    // Define the file path based on your uploads directory
    const filePath = matchingFile.path + matchingFile.originalFileName;

    // console.log("filePath = ",filePath,formtype)

    // Send the file as a response
    res.download(filePath, (err) => {
      if (err) {
        console.error("Error downloading file:", err);
      }
    });
  } catch (error) {
    console.log(error)
    res.status(500).send("Error while downloading the file");
  }
});

router.post("/contacts", async (req, res) => {
  console.log("Hii");
  try {
    const { name, email, phone, message } = req.body;
    if (!name || !email || !phone || !message)
      return res.status(400).json("Missing fields");

    const object = {
      name: name,
      email: email,
      phone: phone,
      message: message,
    };

    const contacts = new Contacts(object);

    await contacts.save();
    res.status(201).send({ message: "Thank you for connecting with us!" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.get('/getAllContacts', async (req, res) => {
  try {


    const contacts = await Contacts.find({});

    res.status(201).send({ data: contacts });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
})

router.post("/personalLoanForm", async (req, res) => {
  try {
    // Extact data from req.body
    const { dividendArr, dividendArr1, dividendArr2, dividendArr3, formData } =
      req.body;

    const userdetails = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      business_address: formData.business_address,
    };

    const coapplicantdetails = {
      co_name: formData.co_name,
      co_email: formData.co_email,
      co_phone: formData.co_phone,
      co_address: formData.co_address,
      co_business_address: formData.co_business_address,
    };
    // Create a new user document
    const newForm = new PersonalLoanForm({
      userbankingdeatails: dividendArr || [],
      userloanpaymentdetails: dividendArr1 || [],
      coapplicantbankingdetails: dividendArr2 || [],
      coapplicantloanpaymentdetails: dividendArr3 || [],
      userdetails: userdetails,
      coapplicantdetails: coapplicantdetails,
    });

    // Save the new user document
    await newForm.save();

    res.status(200).send({ id: newForm._id });
  } catch (error) {
    console.error("Error creating new user:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/personalformUploadfiles/:id",
  upload.fields([
    { name: "three_month_salary", maxCount: 1 },
    { name: "itr", maxCount: 1 },
    { name: "income_proof", maxCount: 1 },
    { name: "registration_proof", maxCount: 1 },
  ]),
  async (req, res) => {
    console.log(req.files);
    try {
      const formid = req.params.id;

      if (!mongoose.Types.ObjectId.isValid(formid)) {
        return res.status(400).send("Invalid formid");
      }

      // Find the user by its _id
      const form = await PersonalLoanForm.findById(formid);

      if (!form) {
        return res.status(404).send("form does not found");
      }

      // Update the files array in the form document
      for (const fieldName in req.files) {
        const files = req.files[fieldName];
        // Map uploaded files to the desired format and push them into the form.files array
        files.forEach((file) => {
          form.files.push({
            fieldName: fieldName,
            fileName: file.filename,
            path: file.destination,
            originalFileName: file.originalname,
          });
        });
      }
      // Save the updated form document
      await form.save();

      res.status(200).send({ message: "Form submitted successfully" });
    } catch (error) {
      console.error("Error adding files to user:", error);
      res.status(500).send("Internal Server Error");
    }
  }
);

router.get("/getAllPersonalForms", async (req, res) => {
  try {
    const goldloanform = await PersonalLoanForm.find({});
    res.status(200).send({ data: goldloanform });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
})

router.get("/Personaldownload/:id", async (req, res) => {
  console.log("Hi")
  try {
    const fileid = req.params.id;
    // const formtype = req.params.form;

    const form = await PersonalLoanForm.findOne({
      files: { $elemMatch: { _id: fileid } },
    });

    const matchingFile = form.files.find(
      (file) => file._id.toString() === fileid
    );
    // Define the file path based on your uploads directory
    const filePath = matchingFile.path + matchingFile.originalFileName;

    // console.log("filePath = ",filePath,formtype)

    // Send the file as a response
    res.download(filePath, (err) => {
      if (err) {
        console.error("Error downloading file:", err);
      }
    });
  } catch (error) {
    console.log(error)
    res.status(500).send("Error while downloading the file");
  }
});

router.post("/homeLoanForm", async (req, res) => {

  try {
    // Extact data from req.body
    const {
      dividendArr,
      dividendArr1,
      dividendArr2,
      dividendArr3,
      dividendArr4,
      dividendArr5,
      dividendArr6,
      // selectedLanguage,
      formData,
    } = req.body;

    const userdetails = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      user_loan_type: formData.user_loan_type,
      address: formData.address,
      business_address: formData.business_address,
      user_salaried: formData.employment_type,
      monthly_salary: formData.monthly_salary,
      yearly_income: formData.yearly_income
    }

    // const coapplicantdetails = {
    //     co_name: formData.co_name,
    //     co_email: formData.co_email,
    //     co_phone: formData.co_phone,
    //     co_monthly_salary: formData.co_monthly_salary,
    //     co_yearly_income: formData.co_yearly_income,
    //     co_address: formData.co_address,
    //     co_business_address: formData.co_business_address,
    // }
    // Create a new user document
    const newForm = new HomeLoanForm({
      userbankingdetails: dividendArr || [],
      userloanpaymentdetails: dividendArr1 || [],
      coapplicantdetails: dividendArr2 || [],
      coapplicantloanpaymentdetails: dividendArr3 || [],
      guarantordetails: dividendArr4 || [],
      guarantorbankdetails: dividendArr5 || [],
      guarantorloandetails: dividendArr6 || [],
      // selectedLanguage: selectedLanguage,
      userdetails: userdetails,
      // coapplicantdetails: coapplicantdetails,
    });

    // Save the new user document
    await newForm.save();

    res.status(200).send({ id: newForm._id });
  } catch (error) {
    console.error('Error creating new user:', error);
    res.status(500).send('Internal Server Error');
  }
})

router.post('/homeloanformUploadfiles/:id', upload.fields([
  { name: 'three_month_salary', maxCount: 1 },
  { name: 'itr', maxCount: 1 },
  { name: 'income_proof', maxCount: 1 },
  { name: 'registration_proof', maxCount: 1 },
  { name: 'last_two_year_six', maxCount: 1 },
  { name: 'last_two_year_as', maxCount: 1 },
  { name: 'co_three_month_salary', maxCount: 1 },
  { name: 'co_income_proof', maxCount: 1 },
  { name: 'co_itr', maxCount: 1 },
  { name: 'co_registration_proof', maxCount: 1 },
  { name: 'co_last_two_year_six', maxCount: 1 },
  { name: 'co_last_two_year_as', maxCount: 1 },
  { name: 'guar_three_month_salary', maxCount: 1 },
  { name: 'guar_last_two_year_six', maxCount: 1 },
  { name: 'guar_last_two_year_as', maxCount: 1 },
  { name: 'guar_income_proof', maxCount: 1 },
  { name: 'guar_itr', maxCount: 1 },
  { name: 'guar_registration_proof', maxCount: 1 },
]), async (req, res) => {

  console.log(req.files);
  try {
    const formid = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(formid)) {
      return res.status(400).send('Invalid formid');
    }

    // Find the user by its _id
    const form = await HomeLoanForm.findById(formid);

    if (!form) {
      return res.status(404).send('form does not found');
    }

    // Update the files array in the form document
    for (const fieldName in req.files) {

      const files = req.files[fieldName];
      // Map uploaded files to the desired format and push them into the form.files array
      files.forEach(file => {
        form.files.push({
          fieldName: fieldName,
          fileName: file.filename,
          path: file.destination,
          originalFileName: file.originalname,
        });
      });
    }
    // Save the updated form document
    await form.save();

    res.status(200).send({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error adding files to user:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.get("/getAllHomeLoanForms", async (req, res) => {

  try {
    const goldloanform = await HomeLoanForm.find({});
    res.status(200).send({ data: goldloanform });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
})

router.get("/Homedownload/:id", async (req, res) => {
  console.log("Hi")
  try {
    const fileid = req.params.id;
    // const formtype = req.params.form;

    const form = await HomeLoanForm.findOne({
      files: { $elemMatch: { _id: fileid } },
    });

    const matchingFile = form.files.find(
      (file) => file._id.toString() === fileid
    );
    // Define the file path based on your uploads directory
    const filePath = matchingFile.path + matchingFile.originalFileName;

    // console.log("filePath = ",filePath,formtype)

    // Send the file as a response
    res.download(filePath, (err) => {
      if (err) {
        console.error("Error downloading file:", err);
      }
    });
  } catch (error) {
    console.log(error)
    res.status(500).send("Error while downloading the file");
  }
});

router.post("/carLoanForm", async (req, res) => {

  try {
    // Extact data from req.body
    const {
      dividendArr,
      dividendArr1,
      dividendArr2,
      dividendArr3,
      formData,
    } = req.body;

    const userdetails = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      business_address: formData.business_address
    }

    const coapplicantdetails = {
      co_name: formData.co_name,
      co_email: formData.co_email,
      co_phone: formData.co_phone,
      co_address: formData.co_address,
      co_business_address: formData.co_business_address,
    }

    // Create a new user document
    const newForm = new CarLoanForm({
      userbankingdetails: dividendArr || [],
      userloanpaymentdetails: dividendArr1 || [],
      coapplicantbankingdetails: dividendArr2 || [],
      coapplicantloanpaymentdetails: dividendArr3 || [],
      userdetails: userdetails,
      coapplicantdetails: coapplicantdetails,
    });

    // Save the new user document
    await newForm.save();

    res.status(200).send({ id: newForm._id });
  } catch (error) {
    console.error('Error creating new user:', error);
    res.status(500).send('Internal Server Error');
  }
})

router.post('/carformUploadfiles/:id', upload.fields([
  { name: 'three_month_salary', maxCount: 1 },
  { name: 'itr', maxCount: 1 },
  { name: 'income_proof', maxCount: 1 },
  { name: 'registration_proof', maxCount: 1 },
  { name: 'last_two_year_six', maxCount: 1 },
  { name: 'last_two_year_as', maxCount: 1 },
  { name: 'co_three_month_salary', maxCount: 1 },
  { name: 'co_income_proof', maxCount: 1 },
  { name: 'co_itr', maxCount: 1 },
  { name: 'co_registration_proof', maxCount: 1 },
  { name: 'co_last_two_year_six', maxCount: 1 },
  { name: 'co_last_two_year_as', maxCount: 1 },
  { name: 'guar_three_month_salary', maxCount: 1 },
  { name: 'guar_last_two_year_six', maxCount: 1 },
  { name: 'guar_last_two_year_as', maxCount: 1 },
  { name: 'guar_income_proof', maxCount: 1 },
  { name: 'guar_itr', maxCount: 1 },
  { name: 'guar_registration_proof', maxCount: 1 },
]), async (req, res) => {

  console.log(req.files);
  try {
    const formid = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(formid)) {
      return res.status(400).send('Invalid formid');
    }

    // Find the user by its _id
    const form = await CarLoanForm.findById(formid);

    if (!form) {
      return res.status(404).send('form does not found');
    }

    // Update the files array in the form document
    for (const fieldName in req.files) {

      const files = req.files[fieldName];
      // Map uploaded files to the desired format and push them into the form.files array
      files.forEach(file => {
        form.files.push({
          fieldName: fieldName,
          fileName: file.filename,
          path: file.destination,
          originalFileName: file.originalname,
        });
      });
    }
    // Save the updated form document
    await form.save();

    res.status(200).send({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error adding files to user:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.get("/getAllCarLoanForms", async (req, res) => {

  try {
    const goldloanform = await CarLoanForm.find({});
    res.status(200).send({ data: goldloanform });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
})

router.get("/Cardownload/:id", async (req, res) => {
  console.log("Hi")
  try {
    const fileid = req.params.id;
    // const formtype = req.params.form;

    const form = await CarLoanForm.findOne({
      files: { $elemMatch: { _id: fileid } },
    });

    const matchingFile = form.files.find(
      (file) => file._id.toString() === fileid
    );
    // Define the file path based on your uploads directory
    const filePath = matchingFile.path + matchingFile.originalFileName;

    // console.log("filePath = ",filePath,formtype)

    // Send the file as a response
    res.download(filePath, (err) => {
      if (err) {
        console.error("Error downloading file:", err);
      }
    });
  } catch (error) {
    console.log(error)
    res.status(500).send("Error while downloading the file");
  }
});

router.post("/businessLoanForm", async (req, res) => {

  try {
    // Extact data from req.body
    const {
      dividendArr,
      dividendArr1,
      dividendArr2,
      dividendArr3,
      dividendArr4,
      dividendArr5,
      dividendArr6,
      // selectedLanguage,
      formData,
    } = req.body;

    const userdetails = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      user_loan_type: formData.user_loan_type,
      address: formData.address,
      business_address: formData.business_address,
      user_salaried: formData.employment_type,
      monthly_salary: formData.monthly_salary,
      yearly_income: formData.yearly_income
    }

    // const coapplicantdetails = {
    //     co_name: formData.co_name,
    //     co_email: formData.co_email,
    //     co_phone: formData.co_phone,
    //     co_monthly_salary: formData.co_monthly_salary,
    //     co_yearly_income: formData.co_yearly_income,
    //     co_address: formData.co_address,
    //     co_business_address: formData.co_business_address,
    // }
    // Create a new user document
    const newForm = new BusinessLoanForm({
      userbankingdetails: dividendArr || [],
      userloanpaymentdetails: dividendArr1 || [],
      coapplicantdetails: dividendArr2 || [],
      coapplicantloanpaymentdetails: dividendArr3 || [],
      guarantordetails: dividendArr4 || [],
      guarantorbankdetails: dividendArr5 || [],
      guarantorloandetails: dividendArr6 || [],
      // selectedLanguage: selectedLanguage,
      userdetails: userdetails,
      // coapplicantdetails: coapplicantdetails,
    });

    // Save the new user document
    await newForm.save();

    res.status(200).send({ id: newForm._id });
  } catch (error) {
    console.error('Error creating new user:', error);
    res.status(500).send('Internal Server Error');
  }
})

router.post('/businessformUploadfiles/:id', upload.fields([
  { name: 'three_month_salary', maxCount: 1 },
  { name: 'itr', maxCount: 1 },
  { name: 'income_proof', maxCount: 1 },
  { name: 'registration_proof', maxCount: 1 },
  { name: 'last_two_year_six', maxCount: 1 },
  { name: 'last_two_year_as', maxCount: 1 },
  { name: 'co_three_month_salary', maxCount: 1 },
  { name: 'co_income_proof', maxCount: 1 },
  { name: 'co_itr', maxCount: 1 },
  { name: 'co_registration_proof', maxCount: 1 },
  { name: 'co_last_two_year_six', maxCount: 1 },
  { name: 'co_last_two_year_as', maxCount: 1 },
  { name: 'guar_three_month_salary', maxCount: 1 },
  { name: 'guar_last_two_year_six', maxCount: 1 },
  { name: 'guar_last_two_year_as', maxCount: 1 },
  { name: 'guar_income_proof', maxCount: 1 },
  { name: 'guar_itr', maxCount: 1 },
  { name: 'guar_registration_proof', maxCount: 1 },
]), async (req, res) => {

  console.log(req.files);
  try {
    const formid = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(formid)) {
      return res.status(400).send('Invalid formid');
    }

    // Find the user by its _id
    const form = await BusinessLoanForm.findById(formid);

    if (!form) {
      return res.status(404).send('form does not found');
    }

    // Update the files array in the form document
    for (const fieldName in req.files) {

      const files = req.files[fieldName];
      // Map uploaded files to the desired format and push them into the form.files array
      files.forEach(file => {
        form.files.push({
          fieldName: fieldName,
          fileName: file.filename,
          path: file.destination,
          originalFileName: file.originalname,
        });
      });
    }
    // Save the updated form document
    await form.save();

    res.status(200).send({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error adding files to user:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.get("/getAllBusinessLoanForms", async (req, res) => {

  try {
    const goldloanform = await BusinessLoanForm.find({});
    res.status(200).send({ data: goldloanform });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
})

// to create the blogs
router.post("/sendblog", async (req, res) => {

  try {
    const { heading, description, category } = req.body;
    if (!heading || !description || !category)
      return res.status(400).json("Missing fields");

    const object = {
      heading: heading,
      description: description,
      category: category,
    };

    const blog = new Blog(object);

    await blog.save();
    res.status(201).send({ id: blog._id });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});


router.post("/uploadImage/:id", upload2.single("image"), async (req, res) => {
  try {

    const blogid = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(blogid)) {
      return res.status(400).send('Invalid formid');
    }

    // Find the user by its _id
    const blog = await Blog.findById(blogid);

    if (!blog) {
      return res.status(404).send('blog does not found');
    }

    // Update the files array in the form document
    // Map uploaded files to the desired format and push them into the form.files array
    blog.image = {
      path: `${req.file.destination}${req.file.filename}`,
      originalFileName: req.file.originalname,
    }
    // Save the updated form document
    await blog.save();

    res
      .status(201)
      .send({ message: "blog uploaded succesfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/getBlogs", async (req, res) => {
  try {
    const blogs = await Blog.find({});
    res.status(200).send({ data: blogs });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
})


router.get("/Businessdownload/:id", async (req, res) => {
  // console.log("Hi")
  try {
    const fileid = req.params.id;
    // const formtype = req.params.form;

    const form = await BusinessLoanForm.findOne({
      files: { $elemMatch: { _id: fileid } },
    });

    const matchingFile = form.files.find(
      (file) => file._id.toString() === fileid
    );
    // Define the file path based on your uploads directory
    const filePath = matchingFile.path + matchingFile.originalFileName;

    // console.log("filePath = ",filePath,formtype)

    // Send the file as a response
    res.download(filePath, (err) => {
      if (err) {
        console.error("Error downloading file:", err);
      }
    });
  } catch (error) {
    console.log(error)
    res.status(500).send("Error while downloading the file");
  }
});

module.exports = router;
