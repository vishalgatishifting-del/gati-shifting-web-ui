import AwardCertification from "../components/AwardCertification";
import BrandList from "../components/BrandsList";
import ContactForm from "../components/ContactForm";
import FAQList from "../components/FAQList";
import OfficeLocation from "../components/OfficeLocation";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper
} from "@mui/material";
import "./CustomerSupport.scss";


interface props{
  successCondition: React.Dispatch<React.SetStateAction<boolean>>;
}
const CustomerSupport = ({successCondition} : props) => {
    return (
        <>
        <div className="bg-attached">
                    <h1>Customer Support</h1>
                </div>
            <section id="customer-support-sec">
                <div className="container">
                    <div className="content">
                        <h1>Customer Support | Gati Shifting Packers</h1>
                        <h3>Welcome to Our Customer Support</h3>
                        <p>At Gati Shifting Packers , your satisfaction is our top priority. We understand that moving can be stressful, and our goal is to make the entire experience smoother for you. Whether you have a query before booking, need help during transit, or want feedback after delivery — our dedicated support team is here for you.</p>


                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow sx={{ backgroundColor: '#2563eb' }}>
                                        <TableCell align="left" sx={{ color: '#fff' }}><b>Channel</b></TableCell>
                                        <TableCell className="dynamic-column" align="left" sx={{ color: '#fff' }}><b>Details</b></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell align="left">Phone</TableCell>
                                        <TableCell align="left">+91 9422799477</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell align="left">E-mail</TableCell>
                                        <TableCell align="left">
                                            <a href="mailto:gatishiftingpackers@gmail.com">gatishiftingpackers@gmail.com</a>
                                            <br />
                                            <a href="mailto:infogatishiftingpackers@gmail.com">infogatishiftingpackers@gmail.com</a>
                                            <br />  
                                            <a href="mailto:salesgatishifting@gmail.com">salesgatishifting@gmail.com</a>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell align="left">Live Chat/Whatsapp</TableCell>
                                        <TableCell align="left">Use the chat widget (bottom-right corner) or WhatsApp at +91-[ 72900 08200]</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>

                        <p>We aim to respond to all messages within 24 hours on working days.</p>

                        <h2>Support for Every Stage of Your Move</h2>
                        <h3>Before You Book</h3>
                        <ul>
                            <li>Questions about our services (household shifting, office relocation, packing, crating, etc.)</li>
                            <li>Estimation requests & quotations</li>
                            <li>Insurance, valuation, and liability clarifications</li>
                            <li>Moving date flexibility and scheduling</li>
                        </ul>
                        <h3>During Transit</h3>
                        <ul>
                            <li>Tracking your goods in real time</li>
                            <li>Updates on transit status and estimated delivery</li>
                            <li>Managing special items (fragile goods, bulky furniture, electronics)</li>
                            <li>Packaging and handling clarifications</li>
                        </ul>
                        <h3>After Delivery</h3>
                        <ul>
                            <li>Inspection and report of any missing or damaged items</li>
                            <li>Claims process / insurance settlement</li>
                            <li>Feedback, testimonials, and suggestions</li>
                            <li>Future service booking assistance</li>
                        </ul>
                    </div>
                    <div className="quick-support">
                        <div className="card">
                            <h3>E-mail Us</h3>
                            <p>Have a query? Get in touch via email.</p>
                            <a href="mailto:gatishiftingpackers@gmail.com">gatishiftingpackers@gmail.com</a>
                        </div>
                        <div className="card">
                            <h3>Live WhatsApp Chat</h3>
                            <p>Chat with us instantly on WhatsApp.</p>
                            <a href="https://wa.me/917290008200">Start Chat</a>
                        </div>
                        <div className="card">
                            <h3>Call Us</h3>
                            <p>Call Us for any query</p>
                            <a href="tel:+917290008200">Start Chat</a>
                        </div>
                    </div>
                </div>
            </section>
            <ContactForm successCondition={successCondition}></ContactForm>
            <OfficeLocation></OfficeLocation>
            <AwardCertification></AwardCertification>
            <BrandList></BrandList>
            <FAQList></FAQList>
        </>
    )
}

export default CustomerSupport;