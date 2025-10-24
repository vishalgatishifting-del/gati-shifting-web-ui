import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import ReviewForm from "../components/ReviewForm";
import "./ReviewDialog.scss"

const ReviewDialog = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (

        <>
            <button className="btn" onClick={handleClickOpen}>Send Feedback</button>
            <Dialog open={open} onClose={handleClose}>
                <DialogActions>
                    <Button onClick={handleClose}><CloseIcon></CloseIcon></Button>
                </DialogActions>
                <DialogContent sx={{ padding: '0 !important' }}>

                    <ReviewForm dialog={true}></ReviewForm>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default ReviewDialog;