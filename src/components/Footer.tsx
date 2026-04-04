
import { Link } from "react-router-dom";
import "./Footer.scss"
import logoImg from "../assets/logo/transparentIco.png"
import { useState } from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';


import { cities2 } from "./citiesData";
import { COMPANY } from "../config/Company";


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

    // const cities = [
    //     "Jaipur", "Nagaon", "Thrissur", "Vishakhapatnam", "Thiruvananthapuram", "Coimbatore", "Manipur", "Dimapur", "Shilong", "Rishikesh", "Haridwar", "Gorakhpur", "Ranipet", "Amrawati", "Jorhat", "Palakkad", "Sambalpur", "Berhampur", "Imphal", "Rourkela", "Balasore", "Puri", "Baripada", "Jharsuguda", "Angul", "Bhadrak", "Bargarh", "Jeypore", "Kendrapara", "Rayagada", "Whitefield", "Electronic-City", "Koramangala", "Indiranagar", "Marathahalli", "Yelahanka", "Jayanagar", "Rajajinagar", "HSR-Layout", "BTM-Layout", "Hebbal", "Malleshwaram", "Kalyan-Dombivli", "Banashankari", "Nagpur", "Solapur", "Sangli", "Jalgaon", "Akola", "Latur", "Dhule", "Ahmednagar", "Chandrapur", "Parbhani", "Nanded", "Wardha", "Satara", "Ratnagiri", "Palghar", "Basavanagudi", "Bengaluru", "Mysuru", "Dharwad", "Belagavi", "Belgaum", "Kalaburagi", "Gulbarga", "Ballari", "Davanagere", "Tumakuru", "Shivamogga", "Raichur", "Vijayapura", "Bidar", "Hassan", "Chitradurga", "Kolar", "Udupi", "Karwar", "Bagalkot", "Varanasi", "Thoubal", "Churachandpur", "Bishnupur", "Ukhrul", "Senapati", "Kakching", "Tamenglong", "Jiribam", "Moreh", "Shimla", "Manali", "Kullu", "Mandi", "Solan", "Dharamshala", "Kangra", "Hamirpur", "Una", "Chamba", "Palampur", "Nahan", "Kinnaur", "Keylong", "Srinagar", "Anantnag", "Baramulla", "Udhampur", "Kathua", "Sopore", "Kupwara", "Pulwama", "Rajouri", "Poonch", "Bandipora", "Ganderbal", "Kulgam", "Doda", "Kishtwar", "Samba", "Shopian", "Leh", "Kargil", "Itanagar", "Naharlagun", "Tawang", "Bomdila", "Ziro", "Pasighat", "Roing", "Tezu", "Namsai", "Yingkiong", "Along", "Daporijo", "Seppa", "Khonsa", "Changlang", "Longding", "Mizoram", "Aizawl", "Lunglei", "Champhai", "Serchhip", "Kolasib", "Mamit", "Lawngtlai", "Saiha", "Khawzawl", "Saitual", "Hnahthial", "Gangtok", "Namchi", "Gyalshing", "Mangan", "Singtam", "Rangpo", "Jorethang", "Soreng", "Chungthang", "Pakyong", "Ravangla", "Lachung", "Gaya", "Bhagalpur", "Muzaffarpur", "Darbhanga", "Purnia", "Arrah", "Hajipur", "Begusarai", "Chhapra", "Samastipur", "Lakhisarai", "Buxar", "Vijayawada", "Guntur", "Nellore", "Tirupati", "Kurnool", "Rajahmundry", "Kadapa", "Anantapur", "Eluru", "Ongole", "Srikakulam", "Vizianagaram", "Chittoor", "Proddatur", "Hindupur", "Tenali", "Nandyal", "Adoni", "Nepal", "Kollam", "Alappuzha", "Idukki", "Kozhikode", "Wayanad", "Kannur", "Kasaragod", "Pathanamthitta", "Warangal", "Nizamabad", "Khammam", "Karimnagar", "Mahbubnagar", "Adilabad", "Nagarkurnool", "Medak", "Vikarabad", "Suryapet", "Wanaparthy", "Howrah", "Durgapur", "Asansol", "Siliguri", "Darjeeling", "Kharagpur", "Haldia", "Malda", "Bardhaman", "Jalpaiguri", "Berhampore", "Cooch", "Krishnanagar", "Chandannagar", "Panaji", "Mapusa", "Bicholim", "Sanquelim", "Ponda", "Margao", "Vasco-da-Gama", "Madurai", "Tiruchirappalli", "Salem", "Tirunelveli", "Erode", "Vellore", "Thanjavur", "Thoothukudi", "Dindigul", "Kanchipuram", "Tiruppur", "Cuddalore", "Nagercoil", "Hosur", "Sivakasi", "Davangere", "Hospet", "Rajkot", "Mundra", "Gandhinagar", "Morbi", "Mehsana", "Navsari", "Bharuch", "Valsad", "Roorkee", "Haldwani", "Rudrapur", "Kashipur", "Nainital", "Almora", "Mussoorie", "Bareilly", "Aligarh", "Moradabad", "Saharanpur", "Jhansi", "Mathura", "Firozabad", "Ayodhya", "Muzaffarnagar", "Rajasthan", "Kakinada", "Dibrugarh", "Silchar", "Bhilai", "Durg", "Bilaspur", "Junagadh", "Bhavnagar", "Nadiad", "Hisar", "Panipat", "Rohtak", "Yamunanagar", "Karnal", "Dhanbad", "Hazaribagh", "Bokaro-Steel-City", "Bangalore", "Mysore", "Jabalpur", "Ujjain", "Sagar", "Satna", "Kohima", "Amritsar", "Jalandhar", "Patiala", "Bathinda", "Jodhpur", "Kota", "Ajmer", "Udaipur", "Agartala"

    // ];

    // Helper function to split array into N columns
    // const splitIntoColumns = (arr: string[], numCols: number) => {
    //     const cols: string[][] = Array.from({ length: numCols }, () => []);
    //     arr.forEach((city, index) => {
    //         cols[index % numCols].push(city);
    //     });
    //     return cols;
    // };

    // const numCols = 4; // 4 columns like your previous example
    // const columns = splitIntoColumns(cities, numCols);


    // const [show, setShow] = useState(0);

    const [visibleCount, setVisibleCount] = useState(28);
    return (
        <>
            <section id="redirect-links">
                 <h1>Search By Location</h1>
                <div className="container">
                    <ul>
                        {cities2.slice(0, visibleCount).map((item, i) => (
                            <li key={i}>
                                <Link to={`/packers-and-movers-in-${item.city}`}>
                                    <span><LocationOnIcon></LocationOnIcon>Movers and Packers {item.city}</span>
                                </Link>
                            </li>
                        ))}

                    </ul>
                    {visibleCount < cities2.length && (
                        <button className="show-more-btn" onClick={() => setVisibleCount(prev => prev + 28)}>
                            Show More
                        </button>
                    )}
                </div>
            </section>
            {/* <section id="redirect-links" >
               
                <div className="container">
                    <ul>
                        <li>
                            <Link to="/city/Agra">
                                <img src={agra} />
                                <span>Agra</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/city/ankleshwar">
                                <img src={ankleshwar} />
                                <span>Ankleshwar</span>
                            </Link>
                        </li>
                        <li><Link to="/city/Bhiwandi"><LocationOnIcon></LocationOnIcon>Packers & Movers Bhiwandi</Link></li>
                        <li><Link to="/city/Calicut"><LocationOnIcon></LocationOnIcon>Packers & Movers Calicut</Link></li>
                        <li><Link to="/city/Cuttack"><LocationOnIcon></LocationOnIcon>Packers & Movers Cuttack</Link></li>
                        <li><Link to="/city/Gandhidham"><LocationOnIcon></LocationOnIcon>Packers & Movers Gandhidham</Link></li>
                        <li><Link to="/city/Guwahati"><LocationOnIcon></LocationOnIcon>Packers & Movers Guwahati</Link></li>
                        <li><Link to="/city/Hyderabad"><LocationOnIcon></LocationOnIcon>Packers & Movers Hyderabad</Link></li>
                        <li><Link to="/city/Jamshedpur"><LocationOnIcon></LocationOnIcon>Packers & Movers Jamshedpur</Link></li>
                        <li><Link to="/city/Kolhapur"><LocationOnIcon></LocationOnIcon>Packers & Movers Kolhapur</Link></li>
                        <li><Link to="/city/Lucknow"><LocationOnIcon></LocationOnIcon>Packers & Movers Lucknow</Link></li>
                        <li><Link to="/city/Meerut"><LocationOnIcon></LocationOnIcon>Packers & Movers Meerut</Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/city/ahmedabad"><LocationOnIcon></LocationOnIcon>Packers & Movers Ahmedabad</Link></li>
                        <li><Link to="/city/aurangabad"><LocationOnIcon></LocationOnIcon>Packers & Movers Aurangabad</Link></li>
                        <li><Link to="/city/bhopal"><LocationOnIcon></LocationOnIcon>Packers & Movers Bhopal</Link></li>
                        <li><Link to="/city/chandigarh"><LocationOnIcon></LocationOnIcon>Packers & Movers Chandigarh</Link></li>
                        <li><Link to="/city/dehradun"><LocationOnIcon></LocationOnIcon>Packers & Movers Dehradun</Link></li>
                        <li><Link to="/city/ghaziabad"><LocationOnIcon></LocationOnIcon>Packers & Movers Ghaziabad</Link></li>
                        <li><Link to="/city/gwalior"><LocationOnIcon></LocationOnIcon>Packers & Movers Gwalior</Link></li>
                        <li><Link to="/city/indore"><LocationOnIcon></LocationOnIcon>Packers & Movers Indore</Link></li>
                        <li><Link to="/city/jamnagar"><LocationOnIcon></LocationOnIcon>Packers & Movers Jamnagar</Link></li>
                        <li><Link to="/city/kolkata"><LocationOnIcon></LocationOnIcon>Packers & Movers Kolkata</Link></li>
                        <li><Link to="/city/ludhiana"><LocationOnIcon></LocationOnIcon>Packers & Movers Ludhiana</Link></li>
                        <li><Link to="/city/mumbai"><LocationOnIcon></LocationOnIcon>Packers & Movers Mumbai</Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/city/allahabad"><LocationOnIcon></LocationOnIcon>Packers & Movers Allahabad</Link></li>
                        <li><Link to="/city/alwar"><LocationOnIcon></LocationOnIcon>Packers & Movers Alwar</Link></li>
                        <li><Link to="/city/ambala"><LocationOnIcon></LocationOnIcon>Packers & Movers Ambala</Link></li>
                        <li><Link to="/city/vadodara"><LocationOnIcon></LocationOnIcon>Packers & Movers Vadodara</Link></li>
                        <li><Link to="/city/bikaner"><LocationOnIcon></LocationOnIcon>Packers & Movers Bikaner</Link></li>
                        <li><Link to="/city/bhubaneswar"><LocationOnIcon></LocationOnIcon>Packers & Movers Bhubaneswar</Link></li>
                        <li><Link to="/city/chennai"><LocationOnIcon></LocationOnIcon>Packers & Movers Chennai</Link></li>
                        <li><Link to="/city/kochi"><LocationOnIcon></LocationOnIcon>Packers & Movers Kochi</Link></li>
                        <li><Link to="/city/delhi"><LocationOnIcon></LocationOnIcon>Packers & Movers Delhi</Link></li>
                        <li><Link to="/city/dwarka"><LocationOnIcon></LocationOnIcon>Packers & Movers Dwarka</Link></li>
                        <li><Link to="/city/faridabad"><LocationOnIcon></LocationOnIcon>Packers & Movers Faridabad</Link></li>
                        <li><Link to="/city/goa"><LocationOnIcon></LocationOnIcon>Packers & Movers Goa</Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/city/greaternoida"><LocationOnIcon></LocationOnIcon>Packers & Movers Greaternoida</Link></li>
                        <li><Link to="/city/gurgaon"><LocationOnIcon></LocationOnIcon>Packers & Movers Gurgaon</Link></li>
                        <li><Link to="/city/hubli"><LocationOnIcon></LocationOnIcon>Packers & Movers Hubli</Link></li>
                        <li><Link to="/city/jammu"><LocationOnIcon></LocationOnIcon>Packers & Movers Jammu</Link></li>
                        <li><Link to="/city/kanpur"><LocationOnIcon></LocationOnIcon>Packers & Movers Kanpur</Link></li>
                        <li><Link to="/city/kottayam"><LocationOnIcon></LocationOnIcon>Packers & Movers Kottayam</Link></li>
                        <li><Link to="/city/mangalore"><LocationOnIcon></LocationOnIcon>Packers & Movers Mangalore</Link></li>
                        <li><Link to="/city/nashik"><LocationOnIcon></LocationOnIcon>Packers & Movers Nashik</Link></li>
                        <li><Link to="/city/noida"><LocationOnIcon></LocationOnIcon>Packers & Movers Noida</Link></li>
                        <li><Link to="/city/patna"><LocationOnIcon></LocationOnIcon>Packers & Movers Patna</Link></li>
                        <li><Link to="/city/pune"><LocationOnIcon></LocationOnIcon>Packers & Movers Pune</Link></li>
                        <li><Link to="/city/surat"><LocationOnIcon></LocationOnIcon>Packers & Movers Surat</Link></li>
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
                                                <img src={`../assets/CityPages/${city}.webp`} />
                                                <LocationOnIcon></LocationOnIcon> Packers & Movers {city}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            ))}
                        </div> : ""}


                {show == 0 ? (<button className="show-more-btn" onClick={() => {
                    setShow(1)
                }}>Show More</button>) : ""}
            </section> */}

            <footer className="footer">
                <div className="footer-top">
                    <div className="footer-col logo-col">
                        <img src={logoImg} alt="Gati Logo" className="footer-logo" />
                        <p>📍 Gati Shifting Packers<br />
                            Ghansoli, Navi Mumbai<br /> Maharashtra 400701
                        </p>
                        <p>📞 +91 {COMPANY.phone}</p>
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
                            <li><Link to="/storage">Storage</Link></li>
                            <li><Link to="/car-storage">Car Storage</Link></li>
                            <li><Link to="/bike-storage">Bike Storage</Link></li>
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