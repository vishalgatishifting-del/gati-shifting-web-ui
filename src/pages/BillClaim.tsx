import AwardCertification from "../components/AwardCertification";
import BrandList from "../components/BrandsList";
import FAQList from "../components/FAQList";
import GetInTouch from "../components/GetInTouch";
import ReviewVideo from "../components/ReviewVideos";
import TrustUsSection from "../components/TrustUsSection";

import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper
} from "@mui/material";
import "./BillClaim.scss"
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ArticleIcon from '@mui/icons-material/Article';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import ReceiptIcon from '@mui/icons-material/Receipt';

const BillClaim = () => {
    return (
        <>
            <section id="billclaimsec">
                <div className="container">
                    <div className="card c1">
                        <div className="img-bx">
                            <img src="https://magenta-wildcat-322052.hostingersite.com/images/serviceboy2.png" />
                        </div>
                        <div className="details">
                            <h2>About Our Services</h2>
                            <p>We specialize in both residential and commercial moves, offering customized solutions tailored to client needs. High-quality packing and safe handling ensure belongings reach safely.</p>
                            <h2 className="h2">Bill for Claim Policy</h2>
                            <p>Our billing for claim policy ensures transparency in case of damages or losses during a move. Customers can request a bill for claim through our 24/7 support team.</p>
                        </div>
                    </div>

                    <div className="card">
                        <h3><AccountTreeIcon></AccountTreeIcon><span>Steps to File a Claim</span></h3>
                        <ol>
                            <li>Document damages or losses with photos.</li>
                            <li>Contact our support team immediately.</li>
                            <li>Submit claim form with details.</li>
                            <li>Attach invoices/receipts/photos.</li>
                            <li>Our team verifies & investigates.</li>
                            <li>Approved claims settled fairly.</li>
                        </ol>
                    </div>
                    <div className="card">
                        <h3><ArticleIcon></ArticleIcon><span>How to Identify Forged GST Invoices</span></h3>
                        <ul>
                            <li>Check GSTIN on GST portal</li>
                            <li>Verify invoice format</li>
                            <li>Cross-check tax %</li>
                            <li>Ensure digital signature</li>
                            <li>Unique invoice number</li>
                        </ul>
                    </div>

                    <div className="table">
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow sx={{ backgroundColor: '#2563eb' }}>
                                        <TableCell align="left" sx={{ color: '#fff' }}><b>Branch</b></TableCell>
                                        <TableCell className="dynamic-column" align="left" sx={{ color: '#fff' }}><b>Mobile No.</b></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell align="left">India (Head Office)</TableCell>
                                        <TableCell align="left">+91 7290008200</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                    
                    <div className="card">
                        <h3><DocumentScannerIcon></DocumentScannerIcon><span>Required Documents</span></h3>
                        <ul>
                            <li>Original Bill</li>
                            <li>Payment Receipts</li>
                            <li>Quotation & GST Bill</li>
                            <li>Itemized List of Goods</li>
                            <li>Insurance Papers</li>
                            <li>ID & Address Proof</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h3><ReceiptIcon></ReceiptIcon><span>GST Bill Structure</span></h3>
                        <ul>
                            <li><b>0% GST</b>: Transport-only (direct GST customer)</li>
                            <li><b>5% GST</b>: Basic transport</li>
                            <li><b>12% GST</b>: Transport with add-ons</li>
                            <li><b>18% GST</b>: Full service (packing, moving, insurance)</li>
                            <li><b>28% GST</b>: Luxury goods (not household)</li>
                        </ul>
                        Note: Please read policy terms carefully before submitting a claim.
                    </div>
                </div>
            </section>
            <ReviewVideo></ReviewVideo>
            <GetInTouch></GetInTouch>
            <AwardCertification></AwardCertification>
            <TrustUsSection></TrustUsSection>
            <BrandList></BrandList>
            <FAQList></FAQList>
        </>
    )
}

export default BillClaim;