// import React from 'react';
// // import './ContactUs.css';

// const ContactUs = () => {
//   return (
//     <div className="contact-us">
//       <h1>Contact Us</h1>
      
//       <section className="contact-details">
//         <h2>School Address</h2>
//         <p>Little World School</p>
//         <p>Tilwara, Jabalpur</p>
//         <p>272, Near T.V. Tower, Katanga, Jabalpur</p>

//         <h2>Contact Numbers</h2>
//         <p>0761-2673623</p>
//         <p>0761-2403449</p>

//         <h2>Email</h2>
//         <p><a href="mailto:lws.jbp@gmail.com">lws.jbp@gmail.com</a></p>
//       </section>

//       <section className="contact-form">
//         <h2>Get in Touch</h2>
//         <form
//           action="https://formspree.io/f/xeqdgwnq"
//           method="POST"
//           className="contact-inputs"
//         >
//           <div className="form-group">
//             <label htmlFor="name">Name</label>
//             <input type="text" id="name" name="username" placeholder="Username" required autoComplete="off" />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input type="email" id="email" name="email" placeholder="Email" required autoComplete="off" />
//           </div>
//           <div className="form-group">
//             <label htmlFor="subject">Subject</label>
//             <input type="text" id="subject" name="subject" placeholder="Subject" required autoComplete="off" />
//           </div>
//           <div className="form-group">
//             <label htmlFor="message">Message</label>
//             <textarea id="message" name="message" rows="5" placeholder="Enter your message" required autoComplete="off"></textarea>
//           </div>
//           <button type="submit">Send Message</button>
//         </form>
//       </section>

//       <section className="map">
//         <h2>Our Location</h2>
//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58711.929180240695!2d79.79877772167971!3d23.115554299999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981b1f4cdafc8ad%3A0xe342b24bc1742fef!2sLittle%20World%20School%20Tilwara!5e0!3m2!1sen!2sin!4v1721789242228!5m2!1sen!2sin"
//           width="100%"
//           height="400"
//           style={{ border: 0 }}
//           allowFullScreen=""
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//         ></iframe>
//       </section>
//     </div>
//   );
// }

// export default ContactUs;













import React from 'react';
// import './
import  '../Acss/./ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      
      <section className="contact-details">
        <h2>School Address</h2>
        <p>Little World School</p>
        <p>Tilwara, Jabalpur</p>
        <p>272, Near T.V. Tower, Katanga, Jabalpur</p>

        <h2>Contact Numbers</h2>
        <p>0761-2673623</p>
        <p>0761-2403449</p>

        <h2>Email</h2>
        <p><a href="mailto:lws.jbp@gmail.com">lws.jbp@gmail.com</a></p>
      </section>

      <section className="contact-form">
        <h2>Get in Touch</h2>
        <form
          action="https://formspree.io/f/xeqdgwnq"
          method="POST"
          className="contact-inputs"
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="username" placeholder="Username" required autoComplete="off" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Email" required autoComplete="off" />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" placeholder="Subject" required autoComplete="off" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" placeholder="Enter your message" required autoComplete="off"></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </section>

      <section className="map">
        <h2>Our Location</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58711.929180240695!2d79.79877772167971!3d23.115554299999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981b1f4cdafc8ad%3A0xe342b24bc1742fef!2sLittle%20World%20School%20Tilwara!5e0!3m2!1sen!2sin!4v1721789242228!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
}

export default ContactUs;

