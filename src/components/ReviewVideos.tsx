import "./ReviewVideos.scss"

const ReviewVideo = ()=>{
    return (
        
            <section id="customer-review">
                <h1>What Our Customers Say</h1>
                <h4>Real experiences from real people. Watch how we made their move stress-free.</h4>

                <div className="video">
                    <iframe width="400" height="255" src="https://www.youtube.com/embed/MlgLNz2-wbo?si=CWB7OKc-LM9dVgoa" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

                    <iframe width="400" height="255" src="https://youtube.com/embed/OMZEgiWrRfk?si=ImcWBYp5ve7AU-eJ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

                    <iframe width="400" height="255" src="https://youtube.com/embed/1OkHdHUVhyY?si=F_-9Rte1auEfRJKA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </section>
    )
}

export default ReviewVideo;