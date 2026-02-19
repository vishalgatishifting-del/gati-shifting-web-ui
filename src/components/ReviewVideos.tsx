import { useEffect } from "react";
import "./ReviewVideos.scss";

const ReviewVideo = () => {

  useEffect(() => {

    const elements = document.querySelectorAll(".yt-card");

    elements.forEach(el => {

      el.addEventListener("click", () => {

        const id = el.getAttribute("data-id");

        if (!id) return;

        el.innerHTML = `
          <iframe
            src="https://www.youtube.com/embed/${id}?autoplay=1"
            allow="autoplay; encrypted-media"
            allowfullscreen
          ></iframe>
        `;

      });

    });

  }, []);


  return (

    <section id="customer-review">

      <div className="header">
        <h2>What Our Customers Say</h2>
        <p>
          Real experiences from real customers who trusted our relocation services.
        </p>
      </div>


      <div className="video-grid">

        <div className="yt-card" data-id="-l-_tRAUn2w">
          <img src="https://img.youtube.com/vi/-l-_tRAUn2w/hqdefault.jpg" />
          <div className="play-btn">▶</div>
        </div>

        <div className="yt-card" data-id="KafXJZeP0mE">
          <img src="https://img.youtube.com/vi/KafXJZeP0mE/hqdefault.jpg" />
          <div className="play-btn">▶</div>
        </div>

        <div className="yt-card" data-id="crpkuDgv_oA">
          <img src="https://img.youtube.com/vi/crpkuDgv_oA/hqdefault.jpg" />
          <div className="play-btn">▶</div>
        </div>

      </div>

    </section>

  );
};

export default ReviewVideo;
