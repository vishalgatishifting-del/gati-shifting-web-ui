import zoffImg from "../assets/brands/zoff.png";
import wakeFitImg from "../assets/brands/wakefit.jpg";
import flatHeadsImg from "../assets/brands/flatheads.png";
import superBottomsImg from "../assets/brands/superbottoms.png";
import kimiricaImg from "../assets/brands/kimirica.png";
import bummerImg from "../assets/brands/bummer.png";
import thewholetruth from "../assets/brands/thewholetruth.jpg";

import "./BrandList.scss"

const BrandList = () => {
    return (
        <section id="brands-list">
            <h2>Brands That Trusted Us</h2>
            <div className="container">
                <div className="brand">
                    <img src={zoffImg} alt="zoff-company-logo" title="zofflogo" loading="lazy" />
                </div>
                <div className="brand">
                    <img src={wakeFitImg} alt="wakefit-company-logo" title="wakefitlogo" loading="lazy" />
                </div>
                <div className="brand">
                    <img src={flatHeadsImg} alt="flatheads-company-logo" title="flatheadslogo" loading="lazy" />
                </div>
                <div className="brand">
                    <img src={superBottomsImg} alt="superbottoms-company-logo" title="superbottomslogo" loading="lazy" />
                </div>
                <div className="brand">
                    <img src={kimiricaImg} alt="kimirica-company-logo" title="kimiricalogo" loading="lazy" />
                </div>
                <div className="brand">
                    <img src={bummerImg} alt="bummer-company-logo" title="bummerlogo" loading="lazy" />
                </div>
                <div className="brand">
                    <img src={thewholetruth} alt="thewholetruth-company-logo" title="thewholetruthlogo" loading="lazy" />
                </div>
            </div>
        </section>
    )
}
export default BrandList;