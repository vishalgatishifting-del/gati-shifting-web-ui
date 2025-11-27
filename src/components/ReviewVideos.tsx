import "./ReviewVideos.scss"

const ReviewVideo = ()=>{
    return (
        
            <section id="customer-review">
                <h1>What Our Customers Say</h1>
                <h4>Real experiences from real people. Watch how we made their move stress-free.</h4>

                <div className="video">
                    <iframe width="400" height="255" src="https://www.youtube.com/embed/-l-_tRAUn2w?si=5D1-ktq_OxaF59R9" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

                    <iframe width="400" height="255" src="https://www.youtube.com/embed/KafXJZeP0mE?si=D8wqrw-b7cvKgLSE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

                    <iframe width="400" height="255" src="https://www.youtube.com/embed/crpkuDgv_oA?si=cp_UHi8nlsx_Z_Dq" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </section>
    )
}

export default ReviewVideo;