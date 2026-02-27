import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  Typography,
  IconButton,
  TextField,
  Grid,
  CircularProgress,
  Divider
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import "./BusinessPartner.scss";

import Logo from "../assets/logo/transparentIco.png";
import BannerImg from "../assets/get-in-touch.webp";
import privateAPI from "../api/privateAxios";


interface DocumentItem {
  label: string;
  file: File | null;
}

const BusinessPartner: React.FC = () => {
  const [documents, setDocuments] = useState<DocumentItem[]>([
    { label: "Aadhaar Card", file: null },
    { label: "PAN Card", file: null },
    { label: "GST Certificate", file: null },
    { label: "Shop Image", file: null },
    { label: "Partner Photo", file: null },
  ]);

  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0] || null;
    const updated = [...documents];
    updated[index].file = file;
    setDocuments(updated);
  };

  const removeFile = (index: number) => {
    const updated = [...documents];
    updated[index].file = null;
    setDocuments(updated);
  };

  const renderPreview = (file: File) => {
    const url = URL.createObjectURL(file);

    if (file.type.startsWith("image/")) {
      return <img src={url} alt="preview" className="preview-img" />;
    }

    if (file.type === "application/pdf") {
      return <iframe src={url} title="pdf" className="preview-pdf" />;
    }

    return <Typography variant="caption">{file.name}</Typography>;
  };

  const handleSubmit = async () => {

  if (!fullName.trim() || mobile.length !== 10) {
    alert("Please enter valid name and mobile number");
    return;
  }

  const formData = new FormData();

  formData.append("fullName", fullName);
  formData.append("mobile", mobile);

  documents.forEach(doc => {
    if (doc.file) {
      formData.append("documents", doc.file);
    }
  });

  try {
    setLoading(true);

    const res = await privateAPI.post(
      "/api/partners/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    if (res.data.success) {

      alert("Application submitted successfully ✅");

      setFullName("");
      setMobile("");

      setDocuments(prev =>
        prev.map(d => ({ ...d, file: null }))
      );
    }

  } catch (error) {
    console.error(error);
    alert("Upload failed");
  } finally {
    setLoading(false);
  }
};

  return (
    <section className="partner-form">
      {/* HEADER */}
      <div className="header">
        <img src={Logo} alt="logo" className="logo" />
        <img src={BannerImg} alt="banner" className="banner" />
      </div>

      <Card className="form-card">
        <Typography variant="h4" className="title">
          Become a Business Partner
        </Typography>
        <Typography className="subtitle">
          Submit your details & documents to start working with us
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* BASIC DETAILS */}
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              label="Full Name"
              fullWidth
              value={fullName}
              disabled={loading}
              onChange={(e) => setFullName(e.target.value)}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              label="Mobile Number"
              fullWidth
              inputProps={{ maxLength: 10 }}
              value={mobile}
              disabled={loading}
              onChange={(e) =>
                setMobile(e.target.value.replace(/\D/g, ""))
              }
            />
          </Grid>
        </Grid>

        {/* DOCUMENT UPLOADS */}
        <Typography className="section-title">
          Upload Required Documents
        </Typography>

        <Grid container spacing={2}>
          {documents.map((doc, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={index}>
              <Card className="doc-card">
                <Typography className="doc-label">
                  {doc.label}
                </Typography>

                <Button
                  component="label"
                  variant="outlined"
                  fullWidth
                  startIcon={<UploadFileIcon />}
                  disabled={loading}
                >
                  Choose File (Max 10MB)
                  <input
                    hidden
                    type="file"
                    accept="image/*,.pdf"
                    onChange={(e) => handleFileChange(index, e)}
                  />
                </Button>

                {doc.file && (
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
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* SUBMIT */}
        <Button
          variant="contained"
          size="large"
          fullWidth
          className="submit-btn"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : "Submit Application"}
        </Button>
      </Card>
    </section>
  );
};

export default BusinessPartner;
