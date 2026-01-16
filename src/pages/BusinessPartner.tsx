import React, { useState } from "react";
import {
    Box,
    Button,
    Card,
    Typography,
    IconButton,
    TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import "./BusinessPartner.scss"
import Logo from "../assets/logo/transparentIco.png"
import BannerImg from "../assets/get-in-touch.webp"

const BusinessPartner: React.FC = () => {
    const [files, setFiles] = useState<(File | null)[]>([
        null,
        null,
        null,
        null,
        null,
    ]);

    const documentLabels = [
        "Aadhaar Card",
        "PAN Card",
        "GST",
        "Shop Image",
        "Photo"
    ];

    const [fullName, setFullName] = useState("");
    const [mobile, setMobile] = useState("");
    const [loading, setLoading] = useState(false);

    const handleFileChange = (
        index: number,
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const selectedFile = event.target.files?.[0] || null;
        const updatedFiles = [...files];
        updatedFiles[index] = selectedFile;
        setFiles(updatedFiles);
    };

    const removeFile = (index: number) => {
        const updatedFiles = [...files];
        updatedFiles[index] = null;
        setFiles(updatedFiles);
    };

    const renderPreview = (file: File | null) => {
        if (!file) return null;

        const fileUrl = URL.createObjectURL(file);

        if (file.type.startsWith("image/")) {
            return (
                <img
                    src={fileUrl}
                    alt="preview"
                    style={{
                        width: "100%",
                        height: 150,
                        objectFit: "cover",
                        borderRadius: 8,
                    }}
                />
            );
        }

        if (file.type === "application/pdf") {
            return (
                <iframe
                    src={fileUrl}
                    title="PDF Preview"
                    width="100%"
                    height="150"
                    style={{ borderRadius: 8, border: "1px solid #ddd" }}
                />
            );
        }

        return <Typography variant="body2">📄 {file.name}</Typography>;
    };

    const handleSubmit = async () => {
        if (!fullName || !mobile) {
            alert("Please fill name and mobile");
            return;
        }

        const formData = new FormData();
        formData.append("fullName", fullName);
        formData.append("mobile", mobile);

        files.forEach((file) => {
            if (file) formData.append("documents", file);
        });

        try {
            setLoading(true);
// https://api.gatishiftingpackers.com/upload
            const res = await fetch("https://api.gatishiftingpackers.com/upload", {
                method: "POST",
                body: formData,
            });

            const data = await res.json();

            if (data.success) {
                alert("Form submitted successfully!");
                setFiles([null, null, null, null, null]);
                setFullName("");
                setMobile("");
            } else {
                alert("Upload failed");
            }
        } catch (err) {
            alert("Server error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="form-section">
            <div className="logo">
                <img src={Logo} className="logoImg" />
                <div className="images">
                    <img src={BannerImg} />
                </div>
            </div>
            <Box m={0} >
                <Typography variant="h5" mb={3} fontWeight="bold">
                    Business Partner Form
                </Typography>

                {/* Inputs */}
                <TextField
                    label="Full Name"
                    fullWidth
                    sx={{ mb: 2 }}
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                />

                <TextField
                    label="Mobile No."
                    fullWidth
                    sx={{ mb: 3 }}
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                />

                {/* File Uploads */}
                {files.map((file, index) => (
                    <Card key={index} sx={{ p: 2, mb: 2, borderRadius: 2 }}>
                        <Typography fontWeight="bold">
                            {documentLabels[index]}
                        </Typography>

                        <Button
                            fullWidth
                            variant="outlined"
                            component="label"
                            sx={{ mt: 1 }}
                        >
                            Choose File
                            <input
                                hidden
                                type="file"
                                accept="image/*,.pdf"
                                onChange={(e) => handleFileChange(index, e)}
                            />
                        </Button>

                        {file && (
                            <Box mt={2}>
                                {renderPreview(file)}

                                <Box
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="space-between"
                                    mt={1}
                                >
                                    <Typography variant="caption" noWrap>
                                        {file.name}
                                    </Typography>

                                    <IconButton
                                        size="small"
                                        color="error"
                                        onClick={() => removeFile(index)}
                                    >
                                        <DeleteIcon fontSize="small" />
                                    </IconButton>
                                </Box>
                            </Box>
                        )}
                    </Card>
                ))}

                {/* Submit */}
                <Button
                    variant="contained"
                    size="large"
                    fullWidth
                    onClick={handleSubmit}
                    disabled={loading}
                >
                    {loading ? "Submitting..." : "Submit Form"}
                </Button>
            </Box>
        </section>
    );
};

export default BusinessPartner;
