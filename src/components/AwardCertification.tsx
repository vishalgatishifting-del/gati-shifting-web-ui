import { motion, type Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import moves from "../assets/transport.png";
import satisfaction from "../assets/satisfaction.png";
import city from "../assets/city.png";
import awards from "../assets/awards.png";
import CountUp from "react-countup";
import "./AwardCertification.scss"

const AwardCertification = () => {

    const zoomIn: Variants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: (delay = 0) => ({
            opacity: 1,
            scale: 1,
            transition: { duration: 0.3, ease: "easeOut", delay },
        }),
    };

    const { ref: ref5, inView: inView5 } = useInView({ triggerOnce: false, threshold: 0.2 });
    return (
        <section id="award-certifications">
            <h2>Awards & Certifications</h2>
            <div className="container">

                <motion.div
                    ref={ref5}
                    variants={zoomIn}
                    initial="hidden"
                    animate={inView5 ? "visible" : "hidden"}
                    custom={0.4}
                    className="p-10 bg-blue-200 rounded-xl shadow-lg w-80 mx-auto mt-20 text-center"
                >
                    <div className="card">
                        <div className="img-bx">
                            <img src={moves} alt="Gati has completed over 10,000 successful relocations across India" title="moves" loading="lazy" />

                        </div>
                        <div className="details">
                            <h3><CountUp start={0} end={10000} duration={2} suffix="+" /> Moves</h3>
                            <p>We’ve completed over 10,000 successful relocations nationwide.</p>
                        </div>
                    </div>
                </motion.div>


                <motion.div
                    ref={ref5}
                    variants={zoomIn}
                    initial="hidden"
                    animate={inView5 ? "visible" : "hidden"}
                    custom={0.5}
                    className="p-10 bg-blue-200 rounded-xl shadow-lg w-80 mx-auto mt-20 text-center"
                >
                    <div className="card">
                        <div className="img-bx">
                            <img src={satisfaction} alt="Customer Satisfaction" title="Customer Satisfaction" loading="lazy" />
                        </div>
                        <div className="details">
                            <h3><CountUp start={0} end={99} duration={2} suffix="%" /> Satisfaction</h3>
                            <p>Our customers rate us 4.9/5 for reliable, friendly service.</p>
                        </div>
                    </div>
                </motion.div>


                <motion.div
                    ref={ref5}
                    variants={zoomIn}
                    initial="hidden"
                    animate={inView5 ? "visible" : "hidden"}
                    custom={0.6}
                    className="p-10 bg-blue-200 rounded-xl shadow-lg w-80 mx-auto mt-20 text-center"
                >
                    <div className="card">
                        <div className="img-bx">
                            <img src={city} alt="Moving Services in 180+ cities" title="Cities" loading="lazy" />
                        </div>
                        <div className="details">
                            <h3><CountUp start={0} end={180} duration={2} suffix="+" /> Cities</h3>
                            <p>We offer moving services in over 180 cities across India.</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    ref={ref5}
                    variants={zoomIn}
                    initial="hidden"
                    animate={inView5 ? "visible" : "hidden"}
                    custom={0.7}
                    className="p-10 bg-blue-200 rounded-xl shadow-lg w-80 mx-auto mt-20 text-center"
                >
                    <div className="card">
                        <div className="img-bx">

                            <img src={awards} alt="Company Receiving best packers and movers award" title="Company's awards" loading="lazy" />
                        </div>
                        <div className="details">
                            <h3>
                                <CountUp start={0} end={25} duration={2} suffix="+" />Awards

                            </h3>
                            <p>Recognized by leading industry bodies for excellence in service.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default AwardCertification;