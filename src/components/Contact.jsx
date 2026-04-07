import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaPhoneAlt, FaLinkedin } from 'react-icons/fa';
import styles from './Contact.module.css';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(
      'YOUR_SERVICE_ID', // Replace with EmailJS Service ID
      'YOUR_TEMPLATE_ID', // Replace with EmailJS Template ID
      form.current,
      'YOUR_PUBLIC_KEY' // Replace with EmailJS Public Key
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
      <div className={styles.container}>
        <h2 className={styles.sectionHeading}>
          <span className="code-font">initiate_contact()</span>
        </h2>
        
        <div className={styles.contactLayout}>
          
          <div className={styles.contactInfo}>
            <p className={styles.tagline}>
              Currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className={styles.contactMethods}>
              <a href="mailto:syedmuhammadw86@gmail.com" className={styles.methodCard}>
                <div className={styles.iconBox}><FaEnvelope /></div>
                <div className={styles.methodDetails}>
                  <p className="code-font">Email</p>
                  <h4>syedmuhammadw86@gmail.com</h4>
                </div>
              </a>
              
              <a href="tel:+923002072477" className={styles.methodCard}>
                <div className={styles.iconBox}><FaPhoneAlt /></div>
                <div className={styles.methodDetails}>
                  <p className="code-font">Phone</p>
                  <h4>+92 300 2072477</h4>
                </div>
              </a>
              
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className={styles.methodCard}>
                <div className={styles.iconBox}><FaLinkedin /></div>
                <div className={styles.methodDetails}>
                  <p className="code-font">LinkedIn</p>
                  <h4>Let's Connect</h4>
                </div>
              </a>
            </div>
          </div>

          <div className={styles.formContainer}>
            <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className="code-font">Name</label>
                <input type="text" id="name" name="user_name" required placeholder="John Doe" />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="email" className="code-font">Email</label>
                <input type="email" id="email" name="user_email" required placeholder="john@example.com" />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="message" className="code-font">Message</label>
                <textarea id="message" name="message" rows="5" required placeholder="Hello Write..."></textarea>
              </div>
              
              <button 
                type="submit" 
                className={`btn-primary ${styles.submitBtn}`}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              
              {status === 'success' && <p className={styles.successMsg}>Message sent successfully!</p>}
              {status === 'error' && <p className={styles.errorMsg}>Failed to send. Please try again later.</p>}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
