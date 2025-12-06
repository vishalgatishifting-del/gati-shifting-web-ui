
import { Link } from "react-router-dom";
import "./Footer.scss"
import logoImg from "../assets/logo/roundedLogo.png"
import { useState } from "react";

//     "Itanagar", "Dibrugarh", "Silchar", "Gaya", "Muzaffarpur", "Darbhanga",
//     "Raipur", "Bhilai", "Durg", "Bilaspur",
//     "Rajkot", "Junagadh", "Bhavnagar", "Nadiad", "Valsad",
//     "Hisar", "Panipat", "Rohtak", "Yamunanagar", "Karnal",
//     "Shimla", "Solan", "Mandi",
//     "Srinagar", "Udhampur",
//     "Dhanbad", "Hazaribagh", "Bokaro Steel City",
//     "Bangalore", "Mysore", "Davangere", "Belgaum",
//     "Thiruvananthapuram", "Thrissur", "Palakkad", "Alappuzha",
//     "Jabalpur", "Ujjain", "Sagar", "Satna",
//     "Nagpur", "Solapur", "Amravati", "Sangli", "Akola",
//     "Imphal", "Shillong", "Aizawl", "Kohima", "Dimapur",
//     "Rourkela", "Balasore", "Sambalpur",
//     "Amritsar", "Jalandhar", "Patiala", "Bathinda",
//     "Jaipur", "Jodhpur", "Kota", "Ajmer", "Udaipur",
//     "Gangtok",
//     "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Erode", "Vellore",
//     "Warangal", "Karimnagar", "Nizamabad",
//     "Agartala",
//     "Varanasi", "Bareilly", "Gorakhpur", "Moradabad", "Jhansi", "Mathura",
//     "Haridwar", "Rishikesh", "Haldwani",
//     "Asansol", "Durgapur", "Siliguri"
const Footer = () => {

    const cities = [
        "Jaipur", "Nagaon", "Thrissur", "Vishakhapatnam", "Thiruvananthapuram", "Coimbatore", "Manipur", "Dimapur", "Shilong", "Rishikesh", "Haridwar", "Gorakhpur", "Ranipet", "Amrawati", "Jorhat", "Palakkad", "Sambalpur", "Berhampur", "Imphal", "Rourkela", "Balasore", "Puri", "Baripada","Jharsuguda", "Angul", "Bhadrak", "Bargarh", "Jeypore", "Kendrapara", "Rayagada", "Whitefield", "Electronic-City", "Koramangala", "Indiranagar", "Marathahalli", "Yelahanka", "Jayanagar", "Rajajinagar", "HSR-Layout", "BTM-Layout", "Hebbal", "Malleshwaram", "Kalyan-Dombivli", "Banashankari", "Nagpur", "Solapur", "Sangli", "Jalgaon", "Akola", "Latur", "Dhule", "Ahmednagar", "Chandrapur", "Parbhani", "Nanded", "Wardha", "Satara", "Ratnagiri", "Palghar", "Basavanagudi", "Bengaluru", "Mysuru", "Dharwad","Belagavi", "Belgaum", "Kalaburagi", "Gulbarga", "Ballari", "Davanagere", "Tumakuru", "Shivamogga", "Raichur", "Vijayapura", "Bidar", "Hassan", "Chitradurga", "Kolar", "Udupi", "Karwar", "Bagalkot", "Varanasi", "Thoubal", "Churachandpur", "Bishnupur", "Ukhrul", "Senapati", "Kakching", "Tamenglong", "Jiribam", "Moreh", "Shimla", "Manali", "Kullu", "Mandi", "Solan", "Dharamshala", "Kangra", "Hamirpur", "Una", "Chamba", "Palampur", "Nahan", "Kinnaur", "Keylong", "Srinagar", "Anantnag", "Baramulla", "Udhampur", "Kathua", "Sopore", "Kupwara", "Pulwama", "Rajouri", "Poonch", "Bandipora", "Ganderbal", "Kulgam", "Doda", "Kishtwar", "Samba", "Shopian", "Leh", "Kargil", "Itanagar", "Naharlagun", "Tawang", "Bomdila", "Ziro", "Pasighat", "Roing", "Tezu", "Namsai", "Yingkiong", "Along", "Daporijo", "Seppa", "Khonsa", "Changlang", "Longding", "Mizoram", "Aizawl", "Lunglei", "Champhai", "Serchhip", "Kolasib"

    ];

    // Helper function to split array into N columns
    const splitIntoColumns = (arr: string[], numCols: number) => {
        const cols: string[][] = Array.from({ length: numCols }, () => []);
        arr.forEach((city, index) => {
            cols[index % numCols].push(city);
        });
        return cols;
    };

    const numCols = 4; // 4 columns like your previous example
    const columns = splitIntoColumns(cities, numCols);


    const [show, setShow] = useState(0);
    return (
        <>
            <section id="redirect-links">
                <h1>Search By Location</h1>
                <div className="container">
                    <ul>
                        <li><Link to="/city/Agra">Packers & Movers Agra</Link></li>
                        <li><Link to="/city/ankleshwar">Packers & Movers Ankleshwar</Link></li>
                        <li><Link to="/city/Bhiwandi">Packers & Movers Bhiwandi</Link></li>
                        <li><Link to="/city/Calicut">Packers & Movers Calicut</Link></li>
                        <li><Link to="/city/Cuttack">Packers & Movers Cuttack</Link></li>
                        <li><Link to="/city/Gandhidham">Packers & Movers Gandhidham</Link></li>
                        <li><Link to="/city/Guwahati">Packers & Movers Guwahati</Link></li>
                        <li><Link to="/city/Hyderabad">Packers & Movers Hyderabad</Link></li>
                        <li><Link to="/city/Jamshedpur">Packers & Movers Jamshedpur</Link></li>
                        <li><Link to="/city/Kolhapur">Packers & Movers Kolhapur</Link></li>
                        <li><Link to="/city/Lucknow">Packers & Movers Lucknow</Link></li>
                        <li><Link to="/city/Meerut">Packers & Movers Meerut</Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/city/ahmedabad">Packers & Movers Ahmedabad</Link></li>
                        <li><Link to="/city/aurangabad">Packers & Movers Aurangabad</Link></li>
                        <li><Link to="/city/bhopal">Packers & Movers Bhopal</Link></li>
                        <li><Link to="/city/chandigarh">Packers & Movers Chandigarh</Link></li>
                        <li><Link to="/city/dehradun">Packers & Movers Dehradun</Link></li>
                        <li><Link to="/city/ghaziabad">Packers & Movers Ghaziabad</Link></li>
                        <li><Link to="/city/gwalior">Packers & Movers Gwalior</Link></li>
                        <li><Link to="/city/indore">Packers & Movers Indore</Link></li>
                        <li><Link to="/city/jamnagar">Packers & Movers Jamnagar</Link></li>
                        <li><Link to="/city/kolkata">Packers & Movers Kolkata</Link></li>
                        <li><Link to="/city/ludhiana">Packers & Movers Ludhiana</Link></li>
                        <li><Link to="/city/mumbai">Packers & Movers Mumbai</Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/city/allahabad">Packers & Movers Allahabad</Link></li>
                        <li><Link to="/city/alwar">Packers & Movers Alwar</Link></li>
                        <li><Link to="/city/ambala">Packers & Movers Ambala</Link></li>
                        <li><Link to="/city/vadodara">Packers & Movers Vadodara</Link></li>
                        <li><Link to="/city/bikaner">Packers & Movers Bikaner</Link></li>
                        <li><Link to="/city/bhubaneswar">Packers & Movers Bhubaneswar</Link></li>
                        <li><Link to="/city/chennai">Packers & Movers Chennai</Link></li>
                        <li><Link to="/city/kochi">Packers & Movers Kochi</Link></li>
                        <li><Link to="/city/delhi">Packers & Movers Delhi</Link></li>
                        <li><Link to="/city/dwarka">Packers & Movers Dwarka</Link></li>
                        <li><Link to="/city/faridabad">Packers & Movers Faridabad</Link></li>
                        <li><Link to="/city/goa">Packers & Movers Goa</Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/city/greaternoida">Packers & Movers Greaternoida</Link></li>
                        <li><Link to="/city/gurgaon">Packers & Movers Gurgaon</Link></li>
                        <li><Link to="/city/hubli">Packers & Movers Hubli</Link></li>
                        <li><Link to="/city/jammu">Packers & Movers Jammu</Link></li>
                        <li><Link to="/city/kanpur">Packers & Movers Kanpur</Link></li>
                        <li><Link to="/city/kottayam">Packers & Movers Kottayam</Link></li>
                        <li><Link to="/city/mangalore">Packers & Movers Mangalore</Link></li>
                        <li><Link to="/city/nashik">Packers & Movers Nashik</Link></li>
                        <li><Link to="/city/noida">Packers & Movers Noida</Link></li>
                        <li><Link to="/city/patna">Packers & Movers Patna</Link></li>
                        <li><Link to="/city/pune">Packers & Movers Pune</Link></li>
                        <li><Link to="/city/surat">Packers & Movers Surat</Link></li>
                    </ul>
                </div>
                {
                    (show) ? 
                    <div className="container">
                    {columns.map((col, i) => (
                        <ul key={i}>
                            {col.map((city) => (
                                <li key={city}>
                                    <Link to={`/city/${city.replace(/\s+/g, "")}`}>
                                        Packers & Movers {city}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    ))}
                </div> : ""}


                {  show==0 ? (<button className="show-more-btn" onClick={() => {
                    setShow(1)
                    }}>Show More</button>):""}
            </section>

            <footer className="footer">
                <div className="footer-top">
                    <div className="footer-col logo-col">
                        <img src={logoImg} alt="Gati Logo" className="footer-logo" />
                        <p>Gati Shifting Packers & Movers<br />
                            Ghansoli, Navi Mumbai, Maharashtra – 400701
                        </p>
                        <p>📞 +91 9422799477</p>
                    </div>

                    <div className="footer-col">
                        <h4>About Gati</h4>
                        <ul>
                            <li><Link to="/who-we-are">Who We Are</Link></li>
                            <li><Link to="/why-gati">Why Gati</Link></li>
                            <li><Link to="/our-team">Our Team</Link></li>
                            <li><Link to="/vission-mission">Vision & Mission</Link></li>
                            <li><Link to="/video-gallery">Our Videos</Link></li>
                            <li><Link to="/photo-gallery">Photo Gallery</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Need Help?</h4>
                        <ul>
                            <li><Link to="/faqs">FAQs</Link></li>
                            <li><Link to="/contact-us">Get a Quote</Link></li>
                            <li><Link to="/customer-support">Customer Support</Link></li>
                            <li><Link to="/contact-us">Contact Us</Link></li>
                            <li><Link to="/moving-guide">Moving Guide</Link></li>
                            <li><Link to="/bill-claim">Bill Claim</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Our Services</h4>
                        <ul>
                            <li><Link to="/home-shifting">Home Shifting</Link></li>
                            <li><Link to="/office-relocation">Office Relocation</Link></li>
                            <li><Link to="/car-bike-transport">Car/Bike Transport</Link></li>
                            <li><Link to="/pet-relocation">Pet Relocation</Link></li>
                            <li><Link to="/commercial-shifting">Commercial Shifting</Link></li>
                            <li><Link to="/international-moves">International Moves</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Secure Storage</h4>
                        <ul>
                            <li><Link to="/warehouse">Warehouse</Link></li>
                            <li><Link to="/home-storage">Home Storage</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Other Links</h4>
                        <ul>
                            <li><Link to="/review">Customer Testimonials</Link></li>
                            <li><Link to="/safety-standard">Safety Standards</Link></li>
                            <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
                            <li><Link to="/privacy-and-policy">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2025 Gati Shifting Packers In  Collaboration with Gatisafe Express Private Limited. All Rights Reserved.</p>
                    <div className="footer-links">
                        <Link to="/terms-and-conditions">Terms</Link> | <Link to="/privacy-and-policy">Privacy</Link>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer;