import "./ContactForm.scss";

const ContactForm = () => {
    return (
        <section id="get-in-touch-form">
            <h1>Get In Touch</h1>
            <p>We make shifting fast, safe & affordable. Connect now!</p>
            <div className="container">
                <div className="detail">
                    <h4>Gati Shifting Packers and Movers</h4>
                    <span>+91 72900 08200</span>
                    <span>gatishiftingpackers@gmail.com</span>
                    <p>Office No. 001, Shree Ganesh Tower CHS, Plot No. 98, Sector 21, Ghansoli, Navi Mumbai, Maharashtra 400701, India</p>
                </div>
                <div className="form">
                    <form>
                        <input type="text" placeholder="Your Name" />
                        <input type="text" placeholder="Your Email" />
                        <input type="text" placeholder="Contact Number" />
                        <input type="text" placeholder="Pickup From" />
                        <input type="text" placeholder="Drop Point" />
                        <input type="text" placeholder="Goods Type (e.g. Furniture, Boxes)" />
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactForm;