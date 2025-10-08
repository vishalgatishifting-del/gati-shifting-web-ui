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
import "./MovingGuide.scss"

const MovingGuide = () => {
    return (
        <>
            <section id="movingguidesec">
                <div className="container">
                    <aside className="left-area">
                        <a href="#beforemove">Before The Move</a>
                        <a href="#packing">Packing Tips</a>
                        <a href="#movingdayadvice">Moving Day Advice</a>
                        <a href="#afterthemove">After The Move</a>
                        <a href="#7daysmoving">7-Day Moving Checklist</a>
                        <a href="#tipstestimonials">Tips & Testimonials</a>
                        <a href="#downloadpdf">Download PDF Guide</a>
                    </aside>

                    <div className="right-area">
                        <div id="beforemove" className="card">
                            <h1>🏁 Before the Move: Preparation Tips</h1>
                            <ul>
                                <li>Start packing non-essential items 2 weeks before moving day.</li>
                                <li>Declutter your home to avoid unnecessary items.</li>
                                <li>Do not pack valuables like important documents or jewelry.</li>
                                <li>Label boxes with room name, contents, and priority.</li>
                                <li>Notify utility services about your move date.</li>
                            </ul>
                        </div>
                        <div id="packing" className="card">
                            <h1>📦 Packing Tips (Do’s & Don’ts)</h1>
                            <ul>
                                <li>Use bubble wrap and packing paper to protect fragile items.</li>
                                <li>Pack electronics in original boxes if possible.</li>
                                <li>Do not overload boxes to prevent breakage.</li>
                                <li>Seal boxes securely with packing tape.</li>
                            </ul>
                        </div>
                        <div id="movingdayadvice" className="card">
                            <h1>🚚 Moving Day Advice</h1>
                            <ul>
                                <li>Keep an essentials bag with clothes, chargers, snacks, and medicines.</li>
                                <li>Coordinate with your movers and confirm schedules.</li>
                                <li>Do a last walk-through to check all items are packed.</li>
                            </ul>
                        </div>
                        <div id="afterthemove" className="card">
                            <h1>🏡 After the Move</h1>
                            <ul>
                                <li>Unpack smartly by prioritizing essentials first.</li>
                                <li>Update your address on IDs, bank accounts, and subscriptions.</li>
                                <li>Check the safety and condition of your new home.</li>
                            </ul>
                        </div>
                        <div id="7daysmoving" className="card">
                            <h1>📅 7-Day Moving Checklist</h1>

                            <TableContainer component={Paper}>
                                <Table>
                                    <TableHead>
                                        <TableRow sx={{ backgroundColor: '#2563eb' }}>
                                            <TableCell align="center" sx={{ color: '#fff' }}><b>Days Before Move</b></TableCell>
                                            <TableCell align="center" sx={{ color: '#fff' }}><b>Task No.</b></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell align="center">30 Days</TableCell>
                                            <TableCell align="center">Book packers and movers, start decluttering</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align="center">15 Days</TableCell>
                                            <TableCell align="center">Begin packing non-essentials</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align="center">7 Days</TableCell>
                                            <TableCell align="center">Confirm bookings, prepare essentials bag</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align="center">1 Day</TableCell>
                                            <TableCell align="center">Disconnect appliances, last-day packing</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align="center">Moving Day</TableCell>
                                            <TableCell align="center">Verify inventory, oversee loading</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align="center">1 Day After</TableCell>
                                            <TableCell align="center">Begin unpacking essentials</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align="center">7 Days After</TableCell>
                                            <TableCell align="center">Settle in, update address</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>

                        <div id="tipstestimonials" className="card">
                            <h1>✍️ Tips & Testimonials</h1>
                            <p>
                                “Labeling saved me so much hassle!” – Rahul, Delhi<br />
                                “Wrap electronics in soft blankets to avoid scratches.” – Gati Shifting Expert
                            </p>
                        </div>
                        <div id="downloadpdf" className="card">
                            <h1>⬇️ Download Our Free Moving Checklist PDF</h1>
                            <button>Download Now</button>
                        </div>
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

export default MovingGuide;