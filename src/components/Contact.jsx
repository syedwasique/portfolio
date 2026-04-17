import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { FiMapPin } from 'react-icons/fi';
import styles from './Contact.module.css';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');
  const [focusedField, setFocusedField] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(
      'service_iem5ogx',
      'template_3q998zm',
      form.current,
      'Kc5vBFeUfywzzKvPd'
    )
      .then((result) => {
        console.log(result.text);
        setStatus('success');
        form.current.reset();
        setTimeout(() => setStatus(''), 5000);
      }, (error) => {
        console.log(error.text);
        setStatus('error');
        setTimeout(() => setStatus(''), 5000);
      });
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.bgGradient}></div>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionBadge}>Get In Touch</span>
          <h2 className={styles.sectionHeading}>
            Let's Work Together
          </h2>
          <div className={styles.headingUnderline}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className={styles.contactLayout}>

          <div className={styles.contactInfo}>
            <p className={styles.tagline}>
              I'm currently open to exciting opportunities and collaborations.
              Whether you have a project in mind or just want to connect,
              I'd love to hear from you!
            </p>

            <div className={styles.contactMethods}>


              <a href="tel:+923002072477" className={styles.methodCard}>
                <div className={styles.iconBox}>
                  <FaPhoneAlt />
                  <div className={styles.iconGlow}></div>
                </div>
                <div className={styles.methodDetails}>
                  <p className="code-font">Call Me</p>
                  <h4>+92 300 2072477</h4>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/wasique-rizvi-00ba86182/" target="_blank" rel="noopener noreferrer" className={styles.methodCard}>
                <div className={styles.iconBox}>
                  <FaLinkedin />
                  <div className={styles.iconGlow}></div>
                </div>
                <div className={styles.methodDetails}>
                  <p className="code-font">LinkedIn</p>
                  <h4>Let's Connect Professionally</h4>
                </div>
              </a>

              <div className={styles.methodCard}>
                <div className={styles.iconBox}>
                  <FiMapPin />
                  <div className={styles.iconGlow}></div>
                </div>
                <div className={styles.methodDetails}>
                  <p className="code-font">Location</p>
                  <h4>Pakistan / Remote Worldwide</h4>
                </div>
              </div>
            </div>


          </div>

          <div className={styles.formContainer}>
            <div className={styles.formHeader}>
              <MdOutlineAlternateEmail className={styles.formIcon} />
              <h3>Send me a message</h3>
              <p>I'll get back to you within 24 hours</p>
            </div>

            <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
              <div className={`${styles.formGroup} ${focusedField === 'name' ? styles.focused : ''}`}>
                <label htmlFor="name" className="code-font">
                  <span>Your Name</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="John Doe"
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                />
                <div className={styles.inputBorder}></div>
              </div>

              <div className={`${styles.formGroup} ${focusedField === 'email' ? styles.focused : ''}`}>
                <label htmlFor="email" className="code-font">
                  <span>Email Address</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                />
                <div className={styles.inputBorder}></div>
              </div>

              <div className={`${styles.formGroup} ${focusedField === 'message' ? styles.focused : ''}`}>
                <label htmlFor="message" className="code-font">
                  <span>Your Message</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  placeholder="Hello! I'd like to discuss..."
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                ></textarea>
                <div className={styles.inputBorder}></div>
              </div>

              <button
                type="submit"
                className={styles.submitBtn}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? (
                  <>
                    <div className={styles.spinner}></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </button>

              {status === 'success' && (
                <div className={styles.successMsg}>
                  <FaCheckCircle />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}
              {status === 'error' && (
                <div className={styles.errorMsg}>
                  <FaExclamationCircle />
                  <span>Failed to send. Please try again or email me directly.</span>
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;