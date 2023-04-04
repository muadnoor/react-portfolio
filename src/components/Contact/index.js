import "./style.css"

function Contact() {
    return(
       <section className="contact">
        <h1>Contact Me</h1>
        <section>
        <form
  action="https://formspree.io/f/xayzpkoz"
  method="POST"
>
  <label>
    Email
  </label>
    <div>
    <input type="email" name="email"/>
    </div>
  <label>
    Message
  </label>
    <div>
    <textarea name="message"></textarea>
    </div>
  <button type="submit">Send</button>
</form>

        </section>
       </section>
    )
}

export default Contact;