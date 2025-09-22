"use client";

import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "@/styles/Career/ApplyForm.module.scss";
import { FiUploadCloud } from "react-icons/fi";

export default function ApplyForm({ jobId }) {
  const [status, setStatus] = useState("");

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    resume: null,
    agree: false,
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    mobile: Yup.string().required("Required"),
    resume: Yup.mixed().required("Resume is required"),
    agree: Yup.bool().oneOf([true], "You must accept terms"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    setStatus("Submitting...");
    const fd = new FormData();
    fd.append("jobId", jobId);
    fd.append("firstName", values.firstName);
    fd.append("lastName", values.lastName);
    fd.append("email", values.email);
    fd.append("mobile", values.mobile);
    fd.append("resume", values.resume);

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        body: fd,
      });
      if (res.ok) {
        setStatus("Application submitted successfully!");
        resetForm();
      } else {
        setStatus("Failed to submit. Please try again.");
      }
    } catch (err) {
      setStatus("Error occurred. Please try again.");
    }
  };

  return (
    <div className={styles["apply-form-wrapper"]}>
      <h2>Apply For This Job</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
          <Form className={styles.form}>
            {/* Resume Upload */}
            <div className={styles.uploadBox}>
              <label>Resume/CV</label>
              <div
                className={styles.dropzone}
                onClick={() => document.getElementById("resumeInput").click()}
              >
                <FiUploadCloud size={32} />
                <p>Drag & drop your resume here</p>
                <span>or</span>
                <button type="button" className={styles.browseBtn}>
                  Browse file
                </button>
              </div>
              <input
                id="resumeInput"
                name="resume"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(e) =>
                  setFieldValue("resume", e.currentTarget.files[0])
                }
                hidden
              />
              <ErrorMessage
                name="resume"
                component="div"
                className={styles.error}
              />
            </div>

            {/* Fields */}
            <div className={styles.row}>
              <div className={styles.field}>
                <Field
                  type="text"
                  name="firstName"
                  placeholder="First name *"
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className={styles.error}
                />
              </div>
              <div className={styles.field}>
                <Field type="text" name="lastName" placeholder="Last name *" />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className={styles.error}
                />
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <Field type="email" name="email" placeholder="Email *" />
                <ErrorMessage
                  name="email"
                  component="div"
                  className={styles.error}
                />
              </div>
              <div className={styles.field}>
                <Field type="text" name="mobile" placeholder="Mobile No. *" />
                <ErrorMessage
                  name="mobile"
                  component="div"
                  className={styles.error}
                />
              </div>
            </div>

            {/* Checkbox */}
            <div className={styles.checkbox}>
              <Field type="checkbox" name="agree" />
              <span>
                Read and agree to{" "}
                <a href="/terms" target="_blank">
                  Terms & Conditions
                </a>{" "}
                -{" "}
                <a href="/privacy-policy" target="_blank">
                  Privacy Policy
                </a>
              </span>
              <ErrorMessage
                name="agree"
                component="div"
                className={styles.error}
              />
            </div>

            {/* Submit */}
            <button type="submit" className={styles.submitBtn}>
              Submit
            </button>
            {status && <p className={styles.status}>{status}</p>}
          </Form>
        )}
      </Formik>
    </div>
  );
}
