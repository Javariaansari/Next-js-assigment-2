import Header from "../components/header/header"
import Image from 'next/image'
import per from "../../../public/per.jpeg"
import styles from "./contact.module.css";
import Footer from "../components/footer/footer"

const Contactpage = () => {
console.log(styles)


  return (
   <div> <Header></Header>
    <section className={styles.contactSection}>
      
      <div className={styles.container}>
        <h2 className={styles.title}>Get in Touch</h2>

          {/* Contact Details */}
        <div className={styles.contactDetails}>
          <p>Email: <a href="mailto:info@example.com">info@example.com</a></p>
          <p>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
          <p>Address: 123 E-Commerce St., Shop City, EC 12345</p>
        </div>

        {/* Contact Form */}
        <form className={styles.contactForm}>
          <div className={styles.formGroup}>
           
            <label htmlFor="name">Name</label>
            <input type="text" id="name" className={styles.input} placeholder="Your Name" required />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" className={styles.input} placeholder="Your Email" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" className={styles.textarea} placeholder="Your Message" required></textarea>
          </div>

          <button type="submit" className={styles.submitButton}>Send Message</button>
        </form>
      </div>
     
    </section>
    <Footer></Footer>
    </div>
  );
};
    


export default Contactpage;