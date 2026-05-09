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

        <div className="yt-card" data-id="YnYJ5izaQAU">
          <img src="https://img.youtube.com/vi/YnYJ5izaQAU/hqdefault.jpg" loading="lazy"  />
          <div className="play-btn">▶</div>
        </div>

        <div className="yt-card" data-id="6Xpc17JD92w">
          <img src="https://img.youtube.com/vi/6Xpc17JD92w/hqdefault.jpg" loading="lazy"  />
          <div className="play-btn">▶</div>
        </div>

        <div className="yt-card" data-id="6bK7VyZSmf4">
          <img src="https://img.youtube.com/vi/6bK7VyZSmf4/hqdefault.jpg" loading="lazy"  />
          <div className="play-btn">▶</div>
        </div>

      </div>

    </section>

  );
};

export default ReviewVideo;
