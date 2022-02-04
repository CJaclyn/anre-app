import { ClientImages } from "./ClientImages"
import ImageSlider from "./components/ImageSlider"
import Slider from "react-slick";

export default function Testimonials() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "ease-in-out",
        arrows: false, 
        pauseOnHover: false,
      };

    return (
        <section className="testimonials">
            <ImageSlider data={ ClientImages } />
            <div className="testimonial-container" data-aos="fade-in">
                <div className="header">
                    <h1>What Clients Have To Say</h1>
                    <p className="label">Testimonials</p>
                </div>
                <Slider {...settings}>
                    <div className="testimonial">
                        <p className="customer-testimonial">
                        Andy is great! I have a really tough house to sell and Andy has been a great resource on how to strategize selling my house. He has also gone above and beyond in helping me coordinate repairs/ touch-ups since I currently live out of state. A wealth of information! Very responsive to showing and selling agents requests- no issues with unanswered requests (most showing requests are responded within minutes). Very good negotiator as well in helping me to negotiate for the best deal. Would recommend Andy to anyone who needs a realtor that has their best interests at heart!
                        </p>
                        <p className="customer-name">Agnes H.</p>
                    </div>
                    <div className="testimonial">
                        <p className="customer-testimonial">
                        Andy has been such a great and easy person to work with since the beginning. He helped me step by step, explained each process, and answered all my questions. I was always updated on things about my house so I exactly knew what was going on or if there was anything that I needed to do. This was my first time selling a house and Andy made it a smooth process! Highly recommended!
                        </p>
                        <p className="customer-name">Colleen D.</p>
                    </div>
                    <div className="testimonial">
                        <p className="customer-testimonial">
                        Andy was an absolute delight to work with. He's incredibly efficient, informative, and responsive. I made the mistake of choosing an out-of-state online mortgage broker who made several blunders throughout the closing process, and Andy handled it all with admirable efficiency and professionalism. He worked hard to ensure my first time buying a home was as stress-free as possible, and I would highly recommend him to anyone in need of a realtor.
                        </p>
                        <p className="customer-name">Vivian N.</p>
                    </div>
                </Slider>
            </div>
        </section>
    )
}
