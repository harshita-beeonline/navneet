"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "../../../styles/ContactUs/ContactForm.module.scss";

const initialValues = {
  firstName: "",
  lastName: "",
  mobile: "",
  email: "",
  department: "",
};

const nameRegex = /^[A-Za-z]+(?:[A-Za-z\s'-]*[A-Za-z]+)?$/;
const departmentRegex = /^[A-Za-z0-9&(),./\s-]+$/;

const validationSchema = Yup.object({
  firstName: Yup.string()
    .trim()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must be 50 characters or less")
    .matches(nameRegex, "Enter a valid first name")
    .required("First name is required"),
  lastName: Yup.string()
    .trim()
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name must be 50 characters or less")
    .matches(nameRegex, "Enter a valid last name")
    .required("Last name is required"),
  mobile: Yup.string()
    .transform((value) => (value ? value.replace(/[\s-]/g, "") : ""))
    .matches(/^(?:\+91)?[6-9]\d{9}$/, "Enter a valid mobile number")
    .required("Mobile number is required"),
  email: Yup.string()
    .trim()
    .email("Enter a valid email address")
    .max(100, "Email address must be 100 characters or less")
    .required("Email address is required"),
  department: Yup.string()
    .trim()
    .min(2, "Department must be at least 2 characters")
    .max(100, "Department must be 100 characters or less")
    .matches(departmentRegex, "Enter a valid department name")
    .required("Department is required"),
});

const errorTextStyle = {
  color: "red",
  fontSize: "12px",
  lineHeight: "16px",
  marginTop: "-4px",
};

const statusTextStyle = {
  color: "#ffffff",
  fontSize: "14px",
  lineHeight: "20px",
  margin: 0,
};

const ContactSection = () => {
  const [submitMessage, setSubmitMessage] = useState("");

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      const normalizedValues = {
        ...values,
        firstName: values.firstName.trim(),
        lastName: values.lastName.trim(),
        mobile: values.mobile.replace(/[\s-]/g, ""),
        email: values.email.trim(),
        department: values.department.trim(),
      };

      try {
        await Promise.resolve(normalizedValues);
        setSubmitMessage(
          "Submit"
        );
        resetForm();
      } finally {
        setSubmitting(false);
      }
    },
  });

  const getInputStyle = (fieldName) =>
    formik.touched[fieldName] && formik.errors[fieldName]
      ? { borderBottomColor: "red" }
      : undefined;

  return (
    <>
      <section className={styles.contactSection}>
        <div className={styles.contactWrapper}>
          {/* LEFT COLUMN */}
          <div className={styles.contactLeft}>
            <h3 className={styles.contactLeftTitle}>
              If you would like to know more about us, please fill the form below.
            </h3>
            <p>
              We create educational content, mob apps and great digital
              experiences for students. Connect with us to know more.
            </p>
          </div>

          {/* RIGHT COLUMN */}
          <div className={styles.contactRight}>
            <form className={styles.contactForm} onSubmit={formik.handleSubmit} noValidate>
              <input
                type="text"
                name="firstName"
                placeholder="First Name*"
                autoComplete="given-name"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                aria-label="First Name"
                aria-invalid={Boolean(
                  formik.touched.firstName && formik.errors.firstName
                )}
                style={getInputStyle("firstName")}
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <div style={errorTextStyle}>{formik.errors.firstName}</div>
              ) : null}

              <input
                type="text"
                name="lastName"
                placeholder="Last Name*"
                autoComplete="family-name"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                aria-label="Last Name"
                aria-invalid={Boolean(
                  formik.touched.lastName && formik.errors.lastName
                )}
                style={getInputStyle("lastName")}
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <div style={errorTextStyle}>{formik.errors.lastName}</div>
              ) : null}

              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number*"
                autoComplete="tel"
                inputMode="tel"
                value={formik.values.mobile}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                aria-label="Mobile Number"
                aria-invalid={Boolean(formik.touched.mobile && formik.errors.mobile)}
                style={getInputStyle("mobile")}
              />
              {formik.touched.mobile && formik.errors.mobile ? (
                <div style={errorTextStyle}>{formik.errors.mobile}</div>
              ) : null}

              <input
                type="email"
                name="email"
                placeholder="Email Address*"
                autoComplete="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                aria-label="Email Address"
                aria-invalid={Boolean(formik.touched.email && formik.errors.email)}
                style={getInputStyle("email")}
              />
              {formik.touched.email && formik.errors.email ? (
                <div style={errorTextStyle}>{formik.errors.email}</div>
              ) : null}

              <input
                type="text"
                name="department"
                placeholder="Department*"
                value={formik.values.department}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                aria-label="Department"
                aria-invalid={Boolean(
                  formik.touched.department && formik.errors.department
                )}
                style={getInputStyle("department")}
              />
              {formik.touched.department && formik.errors.department ? (
                <div style={errorTextStyle}>{formik.errors.department}</div>
              ) : null}

              {submitMessage ? <p style={statusTextStyle}>{submitMessage}</p> : null}

              <button type="submit" disabled={formik.isSubmitting}>
                {formik.isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className={styles.whiteBackgroundSection}>
        {/* This section provides white space after the GetInTouch section */}
      </section>
    </>
  );
};

export default ContactSection;
