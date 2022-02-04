export default function ContactForm () {
    return (
        <form className="contact-form-input">
            <label htmlFor="">Name</label>
            <input type="text" />
            <label htmlFor="">Email</label>
            <input type="text" />
            <label htmlFor="">Phone</label>
            <input type="text" />
            <label htmlFor="">Message</label>
            <textarea name="" id="" cols="30" rows="5"></textarea>
            <button className="button">Contact</button>
        </form>
    )
}