import "./ReviewVideos.scss"

const ReviewVideo = () => {
    document.querySelectorAll(".yt-placeholder").forEach(el => {
        const element = el as HTMLElement;

        element.addEventListener("click", () => {
            const id = element.dataset.id;
            if (!id) return;

            element.innerHTML = `
      <iframe
      width="400" height="255"
        src="https://www.youtube.com/embed/${id}?autoplay=1"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe>
    `;
        });
    });


    return (

        <section id="customer-review">
            <h1>What Our Customers Say</h1>
            <h4>Real experiences from real people. Watch how we made their move stress-free.</h4>

            <div className="video">
                <div className="yt-placeholder" data-id="-l-_tRAUn2w">
                    <img style={{borderRadius: "20px"}} width="400" height="255" src="https://img.youtube.com/vi/-l-_tRAUn2w/hqdefault.jpg" />
                </div>
                <div className="yt-placeholder" data-id="KafXJZeP0mE">
                    <img style={{borderRadius: "20px"}} width="400" height="255" src="https://img.youtube.com/vi/KafXJZeP0mE/hqdefault.jpg" />
                </div>
                <div className="yt-placeholder" data-id="crpkuDgv_oA">
                    <img style={{borderRadius: "20px"}} width="400" height="255" src="https://img.youtube.com/vi/crpkuDgv_oA/hqdefault.jpg" />
                </div>
            </div>
        </section>
    )
}

export default ReviewVideo;