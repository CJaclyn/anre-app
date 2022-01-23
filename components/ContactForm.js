export default function ContactForm () {
    return (
        <aside className="contact-form" data-aos="fade-up">
            <div className="contact-form-top">
                <h2>Interested in this Property?</h2>
                <p>Request additional information or schedule a tour.</p>
            </div>
            <form className="contact-form-input">
                <label htmlFor="">Name</label>
                <input type="text" />
                <label htmlFor="">Email</label>
                <input type="text" />
                <label htmlFor="">Phone</label>
                <input type="text" />
                <label htmlFor="">Message</label>
                <textarea name="" id="" cols="30" rows="5"></textarea>
            </form>
            <button className="button">Contact Agent</button>
        </aside>
    )
}