import "./CityPage.scss"

interface PageProps {
    city: string;
}
const CityPage: React.FC<PageProps> = ({ city }) => {
    return (
        <>
            <section id="city-page-sec">
                <div className="container">
                    <div className="content">
                        <h1>Gati Shifting Packers – Best Packers and Movers in {city}</h1>
                        <p>
                        Welcome to Gati Shifting Packers {city}!
                        If you are planning to move your home, office, or vehicle within or outside {city}, we are here to make your relocation simple, safe, and affordable. As one of the most trusted packers and movers in {city}, Gati Shifting Packers offers complete packing, loading, transportation, and unpacking solutions under one roof.
                        Our experienced and professional team ensures your goods are packed with care, transported securely, and delivered on time. Whether you’re moving locally within {city} or shifting to another city, we handle your belongings as our own — with utmost safety and professionalism.
                        With a wide service network and modern moving techniques, we are known for quick, efficient, and budget-friendly relocation services in {city}.</p> 

                        <h2>🌍 International Packers and Movers in {city}</h2>
                        <p>We, at Gati Shifting Packers – International Packers and Movers in {city}, provide seamless international relocation services for individuals, families, and businesses. Whether you’re moving to a new country for work or returning to India, we manage everything from packing to customs clearance.
                        Our global network and experience in international logistics ensure your belongings are shipped safely, tracked accurately, and delivered on time anywhere in the world. Choose Gati Shifting Packers {city} for a smooth, secure, and stress-free international move.</p>

                        <h2>Our Packers and Movers Services in {city}</h2>

                        <p>We offer a complete range of relocation services in {city}, designed to meet every need and budget:</p>

                        <h3>Home Shifting Services in {city}</h3>
                        <p>Our trained team provides safe and hassle-free home relocation services. We handle everything — packing, loading, transportation, and unpacking — using quality packing materials to keep your items damage-free.</p>
                        
                        <h3>Office Shifting Services in {city}</h3>
                        <p>We provide efficient office relocation services to ensure a smooth transition with minimal downtime. Office furniture, computers, and documents are moved carefully and securely.</p>
                        
                        <h3>Domestic Relocation Services</h3>
                        <p>Moving to another city? Our domestic packers and movers in {city} offer door-to-door relocation anywhere in India with real-time tracking and timely delivery.</p>

                        <h3>International Relocation Services</h3>
                        <p>We take care of international packing, shipping, and customs documentation, ensuring a stress-free global moving experience.</p>
                        
                        <h3>Vehicle Transport in {city}</h3>
                        <p>We provide safe and reliable car and bike transport services using covered carriers and protective packaging to ensure damage-free delivery.</p>
                        
                        <h3>Warehouse and Storage Services</h3>
                        <p>Need a safe place to store your belongings? Our secure and insured warehouses in {city} offer short-term and long-term storage with 24×7 CCTV monitoring.</p>
                        
                        <h3>Packing and Unpacking Services</h3>
                        <p>Our team uses premium-quality materials such as foam sheets, bubble wrap, and strong boxes to pack and unpack your goods safely.</p>
                        
                        <h3>Corporate Relocation Services</h3>
                        <p>We manage large-scale corporate moves including factories, showrooms, and office setups with detailed planning and execution.</p>
                        
                        <h2>Why Choose Gati Shifting Packers {city}?</h2>
                        <ul>
                            <li>✅ Experienced & Verified Movers</li>
                            <li>📦 High-Quality Packing Material</li>
                            <li>🚛 GPS-Enabled Vehicles for Tracking</li>
                            <li>💰 Affordable & Transparent Pricing</li>
                            <li>🧰 Trained & Professional Staff</li>
                            <li>🔒 Transit Insurance for Safety</li>
                            <li>☎️ 24×7 Customer Support</li>
                        </ul>
                        
                        <h2>How Gati Shifting Packers {city} Work</h2>
                        <ol>
                            <li>Share Your Requirement – Tell us where and when you need to move.</li>
                            <li>Get an Instant Quote – We’ll provide a clear and affordable price estimate.</li>
                            <li>Plan & Confirm Your Move – Choose your date and pay a small token amount.</li>
                            <li>Sit Back & Relax – Our expert team takes care of everything from start to finish.</li>
                        </ol>

                        <h2>Packers and Movers Charges in {city}</h2>	
                        <p>Here’s an estimated rate chart for your convenience:</p>
                        
                        <h2>Factors Affecting Packers and Movers Cost in {city}</h2>
                        <p>The relocation cost depends on several important factors:</p>
                        
                        <ol>
                            <li>Distance – Longer distances mean higher fuel and transport costs.</li>
                            <li>Number of Goods – More items require more labor, packing, and a bigger truck.</li>
                            <li>Floor & Lift Access – Moving from upper floors without a lift increases labor charges.</li>
                            <li>Time & Season – Costs are higher during weekends, month-end, or festive seasons.</li>
                            <li>Type of Service – Full-service moves (packing + loading + transport) cost more than basic transport.</li>
                            <li>Packing Material – Fragile or heavy items need extra packaging for safety.</li>
                            <li>Vehicle Type – Larger or specialized carriers cost more than small trucks.</li>
                            <li>Mode of Transport – Road is economical, while air cargo is faster but expensive.</li>
                            <li>Labor Requirement – More manpower reduces time but adds to the cost.</li>
                            <li>Accessibility – Difficult building access or narrow streets may affect overall cost.</li>
                        </ol>

                        <p>
                        Note: Prices mentioned above are approximate and may vary based on distance, items, and additional services.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CityPage;