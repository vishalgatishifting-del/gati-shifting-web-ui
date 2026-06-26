import React, { useState, useRef, useCallback } from "react";
import {
  Box,
  Button,
  Card,
  Typography,
  IconButton,
  TextField,
  Grid,
  CircularProgress,
  Divider,
  Chip,
  LinearProgress,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BusinessIcon from "@mui/icons-material/Business";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import "./BusinessPartner.scss";

import Logo from "../assets/logo/transparentIco.png";
import privateAPI from "../api/privateAxios";
import { siteConfig } from "../config/Company";



interface DocumentItem {
  label: string;
  file: File | null;
  required: boolean;
  hint: string;
  icon: string;
}

interface FormErrors {
  fullName?: string;
  mobile?: string;
  email?: string;
  city?: string;
  businessName?: string;
  experience?: string;
}

const BENEFITS = [
  {
    icon: <TrendingUpIcon />,
    title: "Grow Your Business",
    desc: "Access 10,000+ customers across India through our network",
  },
  {
    icon: <VerifiedUserIcon />,
    title: "Verified Partner Badge",
    desc: "Build trust with our official certification & branding",
  },
  {
    icon: <SupportAgentIcon />,
    title: "24/7 Support",
    desc: "Dedicated partner support team always ready to help",
  },
  {
    icon: <LocalShippingIcon />,
    title: "Priority Leads",
    desc: "Get first access to high-value moving & packing jobs",
  },
];

const STEPS = [
  { label: "Basic Info", step: 1 },
  { label: "Business Details", step: 2 },
  { label: "Documents", step: 3 },
  { label: "Review & Submit", step: 4 },
];

const BusinessPartner: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [documents, setDocuments] = useState<DocumentItem[]>([
    {
      label: "Aadhaar Card",
      file: null,
      required: true,
      hint: "Front & back of Aadhaar (JPG/PNG/PDF, max 10MB)",
      icon: "🪪",
    },
    {
      label: "PAN Card",
      file: null,
      required: true,
      hint: "Clear photo of PAN card (JPG/PNG/PDF, max 10MB)",
      icon: "💳",
    },
    {
      label: "GST Certificate",
      file: null,
      required: false,
      hint: "GST registration certificate if applicable",
      icon: "📄",
    },
    {
      label: "Shop / Office Image",
      file: null,
      required: true,
      hint: "Clear photo of your shop or office (JPG/PNG, max 10MB)",
      icon: "🏪",
    },
    {
      label: "Partner Photo",
      file: null,
      required: true,
      hint: "Recent passport-size photo (JPG/PNG, max 5MB)",
      icon: "🤳",
    },
    {
      label: "Bank Passbook / Cancelled Cheque",
      file: null,
      required: false,
      hint: "For payment processing (JPG/PNG/PDF, max 10MB)",
      icon: "🏦",
    },
  ]);

  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [experience, setExperience] = useState("");
  const [vehicleCount, setVehicleCount] = useState("");
  const [serviceArea, setServiceArea] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [dragOver, setDragOver] = useState<number | null>(null);
  const fileInputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const validateStep1 = (): boolean => {
    const newErrors: FormErrors = {};
    if (!fullName.trim() || fullName.trim().length < 3)
      newErrors.fullName = "Full name must be at least 3 characters";
    if (!/^[6-9]\d{9}$/.test(mobile))
      newErrors.mobile = "Enter a valid 10-digit Indian mobile number";
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Enter a valid email address";
    if (!city.trim()) newErrors.city = "City is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = (): boolean => {
    const newErrors: FormErrors = {};
    if (!businessName.trim())
      newErrors.businessName = "Business name is required";
    if (!experience) newErrors.experience = "Please select years of experience";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep3 = (): boolean => {
    const requiredDocs = documents.filter((d) => d.required);
    const missing = requiredDocs.some((d) => !d.file);
    if (missing) {
      alert("Please upload all required documents (marked with *)");
      return false;
    }
    return true;
  };

  const handleNext = () => {
    if (currentStep === 1 && !validateStep1()) return;
    if (currentStep === 2 && !validateStep2()) return;
    if (currentStep === 3 && !validateStep3()) return;
    setCurrentStep((s) => Math.min(s + 1, 4));
  };

  const handleBack = () => {
    setCurrentStep((s) => Math.max(s - 1, 1));
  };

  const handleFileChange = (index: number, file: File | null) => {
    if (!file) return;
    const maxSize = 10 * 1024 * 1024;
    if (file.size > maxSize) {
      alert(`File size must be under 10MB. "${file.name}" is too large.`);
      return;
    }
    const updated = [...documents];
    updated[index].file = file;
    setDocuments(updated);
  };

  const removeFile = (index: number) => {
    const updated = [...documents];
    updated[index].file = null;
    setDocuments(updated);
  };

  const handleDrop = useCallback(
    (index: number, e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      setDragOver(null);
      const file = e.dataTransfer.files?.[0] || null;
      if (file) handleFileChange(index, file);
    },
    []
  );

  const renderPreview = (file: File) => {
    const url = URL.createObjectURL(file);
    if (file.type.startsWith("image/")) {
      return (
        <img src={url} alt="preview" className="preview-img" loading="lazy" />
      );
    }
    if (file.type === "application/pdf") {
      return <iframe src={url} title="pdf" className="preview-pdf" />;
    }
    return <Typography variant="caption">{file.name}</Typography>;
  };

  const uploadedCount = documents.filter((d) => d.file).length;
  const progressPercent = (uploadedCount / documents.length) * 100;

  const handleSubmit = async () => {
    if (!validateStep1()) {
      setCurrentStep(1);
      return;
    }
    if (!validateStep2()) {
      setCurrentStep(2);
      return;
    }
    if (!validateStep3()) {
      setCurrentStep(3);
      return;
    }

    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("mobile", mobile);
    formData.append("email", email);
    formData.append("city", city);
    formData.append("businessName", businessName);
    formData.append("experience", experience);
    formData.append("vehicleCount", vehicleCount);
    formData.append("serviceArea", serviceArea);
    documents.forEach((doc) => {
      if (doc.file) formData.append("documents", doc.file);
    });

    try {
      setLoading(true);
      const res = await privateAPI.post("/api/partners/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      if (res.data.success) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error(error);
      alert("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section className="partner-form">
        <div className="success-screen">
          <div className="success-icon-wrap">
            <CheckCircleIcon className="success-check" />
          </div>
          <Typography variant="h4" className="success-title">
            Application Submitted! 🎉
          </Typography>
          <Typography className="success-sub">
            Thank you, <strong>{fullName}</strong>! Our team will review your
            application and contact you on{" "}
            <strong>{mobile}</strong> within 2–3 business days.
          </Typography>
          <div className="success-ref">
            Reference ID:{" "}
            <strong>MP{Date.now().toString().slice(-8)}</strong>
          </div>
          <Button
            variant="contained"
            className="go-home-btn"
            onClick={() => window.location.reload()}
          >
            Submit Another Application
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className="partner-form">
      {/* HERO */}
      <div className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <img src={Logo} alt="logo" className="logo" loading="lazy" />
          <div className="hero-badge">
            <LocalShippingIcon sx={{ fontSize: 16 }} /> Now Hiring Partners
            Across India
          </div>
          <Typography variant="h1" className="hero-title">
            Grow With Us. <span className="accent">Move Forward.</span>
          </Typography>
          <Typography className="hero-sub">
            Join India's most trusted Movers & Packers network. Earn more, work
            smarter, and build a lasting business.
          </Typography>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-num">{siteConfig.stats.totalActivePartners}</span>
              <span className="stat-label">Active Partners</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num">{siteConfig.stats.totalHappyCustomers}</span>
              <span className="stat-label">Moves Completed</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num">{siteConfig.stats.totalCitiesCovered}</span>
              <span className="stat-label">Cities Covered</span>
            </div>
          </div>
        </div>
      </div>

      {/* BENEFITS */}
      <div className="benefits-section">
        <Typography className="section-eyebrow">Why Partner With Us?</Typography>
        <Typography variant="h3" className="benefits-title">
          Everything you need to succeed
        </Typography>
        <div className="benefits-grid">
          {BENEFITS.map((b, i) => (
            <div className="benefit-card" key={i}>
              <div className="benefit-icon">{b.icon}</div>
              <Typography className="benefit-title">{b.title}</Typography>
              <Typography className="benefit-desc">{b.desc}</Typography>
            </div>
          ))}
        </div>
      </div>

      {/* FORM */}
      <div className="form-section">
        <Typography className="section-eyebrow">Partner Registration</Typography>
        <Typography variant="h3" className="form-main-title">
          Complete Your Application
        </Typography>

        {/* STEP INDICATOR */}
        <div className="steps-bar">
          {STEPS.map(({ label, step }) => (
            <div
              key={step}
              className={`step-item ${
                currentStep === step
                  ? "active"
                  : currentStep > step
                  ? "done"
                  : ""
              }`}
            >
              <div className="step-circle">
                {currentStep > step ? <CheckCircleIcon sx={{ fontSize: 18 }} /> : step}
              </div>
              <span className="step-label">{label}</span>
              {step < 4 && <div className="step-connector" />}
            </div>
          ))}
        </div>

        <Card className="form-card">
          {/* STEP 1 */}
          {currentStep === 1 && (
            <div className="step-content animate-in">
              <div className="step-header">
                <PersonIcon className="step-icon" />
                <div>
                  <Typography className="step-title">
                    Personal Information
                  </Typography>
                  <Typography className="step-desc">
                    Tell us about yourself so we can get in touch
                  </Typography>
                </div>
              </div>
              <Divider sx={{ my: 3 }} />
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    label="Full Name *"
                    fullWidth
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                      if (errors.fullName)
                        setErrors((prev) => ({ ...prev, fullName: undefined }));
                    }}
                    error={!!errors.fullName}
                    helperText={errors.fullName}
                    InputProps={{
                      startAdornment: (
                        <PersonIcon sx={{ mr: 1, color: "#94a3b8" }} />
                      ),
                    }}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    label="Mobile Number *"
                    fullWidth
                    inputProps={{ maxLength: 10 }}
                    value={mobile}
                    onChange={(e) => {
                      setMobile(e.target.value.replace(/\D/g, ""));
                      if (errors.mobile)
                        setErrors((prev) => ({ ...prev, mobile: undefined }));
                    }}
                    error={!!errors.mobile}
                    helperText={errors.mobile || "10-digit Indian mobile number"}
                    InputProps={{
                      startAdornment: (
                        <PhoneIcon sx={{ mr: 1, color: "#94a3b8" }} />
                      ),
                    }}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    label="Email Address (Optional)"
                    fullWidth
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email)
                        setErrors((prev) => ({ ...prev, email: undefined }));
                    }}
                    error={!!errors.email}
                    helperText={errors.email || "For updates and confirmations"}
                    InputProps={{
                      startAdornment: (
                        <EmailIcon sx={{ mr: 1, color: "#94a3b8" }} />
                      ),
                    }}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    label="City *"
                    fullWidth
                    value={city}
                    onChange={(e) => {
                      setCity(e.target.value);
                      if (errors.city)
                        setErrors((prev) => ({ ...prev, city: undefined }));
                    }}
                    error={!!errors.city}
                    helperText={errors.city || "City where you operate"}
                    InputProps={{
                      startAdornment: (
                        <LocationOnIcon sx={{ mr: 1, color: "#94a3b8" }} />
                      ),
                    }}
                  />
                </Grid>
              </Grid>
            </div>
          )}

          {/* STEP 2 */}
          {currentStep === 2 && (
            <div className="step-content animate-in">
              <div className="step-header">
                <BusinessIcon className="step-icon" />
                <div>
                  <Typography className="step-title">
                    Business Details
                  </Typography>
                  <Typography className="step-desc">
                    Help us understand your operations and capacity
                  </Typography>
                </div>
              </div>
              <Divider sx={{ my: 3 }} />
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    label="Business / Shop Name *"
                    fullWidth
                    value={businessName}
                    onChange={(e) => {
                      setBusinessName(e.target.value);
                      if (errors.businessName)
                        setErrors((prev) => ({
                          ...prev,
                          businessName: undefined,
                        }));
                    }}
                    error={!!errors.businessName}
                    helperText={errors.businessName}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    label="Years of Experience *"
                    fullWidth
                    select
                    value={experience}
                    onChange={(e) => {
                      setExperience(e.target.value);
                      if (errors.experience)
                        setErrors((prev) => ({
                          ...prev,
                          experience: undefined,
                        }));
                    }}
                    error={!!errors.experience}
                    helperText={errors.experience}
                    SelectProps={{ native: true }}
                  >
                    <option value="">Select experience</option>
                    <option value="0-1">Less than 1 year</option>
                    <option value="1-3">1–3 years</option>
                    <option value="3-5">3–5 years</option>
                    <option value="5-10">5–10 years</option>
                    <option value="10+">10+ years</option>
                  </TextField>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    label="Number of Vehicles (Optional)"
                    fullWidth
                    value={vehicleCount}
                    onChange={(e) =>
                      setVehicleCount(e.target.value.replace(/\D/g, ""))
                    }
                    helperText="Trucks, tempos, mini trucks etc."
                    inputProps={{ maxLength: 3 }}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    label="Service Area / Coverage (Optional)"
                    fullWidth
                    value={serviceArea}
                    onChange={(e) => setServiceArea(e.target.value)}
                    helperText="e.g. Delhi NCR, Mumbai suburbs, All India"
                  />
                </Grid>
              </Grid>
            </div>
          )}

          {/* STEP 3 */}
          {currentStep === 3 && (
            <div className="step-content animate-in">
              <div className="step-header">
                <CloudUploadIcon className="step-icon" />
                <div>
                  <Typography className="step-title">
                    Upload Documents
                  </Typography>
                  <Typography className="step-desc">
                    Upload clear, legible copies. Max 10MB per file.
                    JPG/PNG/PDF accepted.
                  </Typography>
                </div>
              </div>

              <div className="doc-progress-bar">
                <div className="doc-progress-header">
                  <span>
                    {uploadedCount} of {documents.length} documents uploaded
                  </span>
                  <Chip
                    label={`${Math.round(progressPercent)}%`}
                    size="small"
                    className="progress-chip"
                  />
                </div>
                <LinearProgress
                  variant="determinate"
                  value={progressPercent}
                  className="linear-progress"
                />
              </div>

              <Divider sx={{ my: 3 }} />

              <Grid container spacing={3}>
                {documents.map((doc, index) => (
                  <Grid size={{ xs: 12, md: 6 }} key={index}>
                    <div
                      className={`doc-card ${doc.file ? "uploaded" : ""} ${
                        dragOver === index ? "drag-active" : ""
                      }`}
                      onDragOver={(e) => {
                        e.preventDefault();
                        setDragOver(index);
                      }}
                      onDragLeave={() => setDragOver(null)}
                      onDrop={(e) => handleDrop(index, e)}
                    >
                      <div className="doc-card-header">
                        <span className="doc-icon">{doc.icon}</span>
                        <div>
                          <Typography className="doc-label">
                            {doc.label}
                            {doc.required && (
                              <span className="required-star"> *</span>
                            )}
                          </Typography>
                          <Typography className="doc-hint">
                            {doc.hint}
                          </Typography>
                        </div>
                        {doc.file && (
                          <CheckCircleIcon className="doc-check" />
                        )}
                      </div>

                      {!doc.file ? (
                        <div
                          className="upload-zone"
                          onClick={() =>
                            fileInputRefs.current[index]?.click()
                          }
                        >
                          <CloudUploadIcon className="upload-icon" />
                          <Typography className="upload-text">
                            Click to upload or drag & drop
                          </Typography>
                          <Typography className="upload-subtext">
                            JPG, PNG, PDF up to 10MB
                          </Typography>
                          <input
                            ref={(el) => {
                              fileInputRefs.current[index] = el;
                            }}
                            hidden
                            type="file"
                            accept="image/*,.pdf"
                            onChange={(e) =>
                              handleFileChange(
                                index,
                                e.target.files?.[0] || null
                              )
                            }
                          />
                        </div>
                      ) : (
                        <Box className="preview-box">
                          {renderPreview(doc.file)}
                          <Box className="preview-footer">
                            <Typography variant="caption" noWrap>
                              {doc.file.name}
                            </Typography>
                            <IconButton
                              color="error"
                              size="small"
                              onClick={() => removeFile(index)}
                            >
                              <DeleteIcon />
                            </IconButton>
                          </Box>
                        </Box>
                      )}
                    </div>
                  </Grid>
                ))}
              </Grid>
            </div>
          )}

          {/* STEP 4 */}
          {currentStep === 4 && (
            <div className="step-content animate-in">
              <div className="step-header">
                <VerifiedUserIcon className="step-icon" />
                <div>
                  <Typography className="step-title">
                    Review & Submit
                  </Typography>
                  <Typography className="step-desc">
                    Verify your details before submitting your application
                  </Typography>
                </div>
              </div>
              <Divider sx={{ my: 3 }} />

              <div className="review-grid">
                <div className="review-section">
                  <Typography className="review-section-title">
                    Personal Information
                  </Typography>
                  <div className="review-row">
                    <span className="review-key">Full Name</span>
                    <span className="review-val">{fullName}</span>
                  </div>
                  <div className="review-row">
                    <span className="review-key">Mobile</span>
                    <span className="review-val">+91 {mobile}</span>
                  </div>
                  {email && (
                    <div className="review-row">
                      <span className="review-key">Email</span>
                      <span className="review-val">{email}</span>
                    </div>
                  )}
                  <div className="review-row">
                    <span className="review-key">City</span>
                    <span className="review-val">{city}</span>
                  </div>
                </div>

                <div className="review-section">
                  <Typography className="review-section-title">
                    Business Details
                  </Typography>
                  <div className="review-row">
                    <span className="review-key">Business Name</span>
                    <span className="review-val">{businessName}</span>
                  </div>
                  <div className="review-row">
                    <span className="review-key">Experience</span>
                    <span className="review-val">{experience} years</span>
                  </div>
                  {vehicleCount && (
                    <div className="review-row">
                      <span className="review-key">Vehicles</span>
                      <span className="review-val">{vehicleCount}</span>
                    </div>
                  )}
                  {serviceArea && (
                    <div className="review-row">
                      <span className="review-key">Service Area</span>
                      <span className="review-val">{serviceArea}</span>
                    </div>
                  )}
                </div>

                <div className="review-section full-width">
                  <Typography className="review-section-title">
                    Documents
                  </Typography>
                  <div className="doc-review-grid">
                    {documents.map((doc, i) => (
                      <div
                        key={i}
                        className={`doc-review-item ${
                          doc.file ? "has-file" : "no-file"
                        }`}
                      >
                        <span>{doc.icon}</span>
                        <span>{doc.label}</span>
                        {doc.file ? (
                          <CheckCircleIcon
                            sx={{ fontSize: 16, color: "#22c55e" }}
                          />
                        ) : (
                          <span className="optional-tag">Optional</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="terms-note">
                By submitting, you agree to our{" "}
                <a target="_blank" href="/terms-and-conditions">Terms & Conditions</a> and{" "}
                <a target="_blank" href="/privacy-and-policy">Privacy Policy</a>. Your data is safe with
                us.
              </div>
            </div>
          )}

          {/* NAVIGATION */}
          <div className="form-nav">
            {currentStep > 1 && (
              <Button
                variant="outlined"
                className="back-btn"
                onClick={handleBack}
                disabled={loading}
              >
                ← Back
              </Button>
            )}
            <div style={{ flex: 1 }} />
            {currentStep < 4 ? (
              <Button
                variant="contained"
                className="next-btn"
                onClick={handleNext}
                disabled={loading}
              >
                Continue →
              </Button>
            ) : (
              <Button
                variant="contained"
                className="submit-btn"
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? (
                  <CircularProgress size={22} sx={{ color: "#fff" }} />
                ) : (
                  "Submit Application 🚀"
                )}
              </Button>
            )}
          </div>
        </Card>
      </div>

      {/* FOOTER NOTE */}
      <div className="footer-note">
        <Typography>
          Questions? Call us at{" "}
          <a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a> or email{" "}
          <a href={`mailto:${siteConfig.email.info}`}>
            {siteConfig.email.info}
          </a>
        </Typography>
      </div>
    </section>
  );
};

export default BusinessPartner;