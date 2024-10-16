import Link from "next/link";

export default function Contact() {
    return (
      <div className="contactpage">
        <div className="contact-container">
          <h1 className="contactheading">Contact Me</h1>
          <form className="contact-form" action="#" method="POST">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={3}
                required
              ></textarea>
            </div>

            <div className="form-group">
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </div>
          </form>
        </div>
        
      </div>
    );
}