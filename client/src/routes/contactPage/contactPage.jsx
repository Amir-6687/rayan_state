import { useState } from "react";
import "./contactPage.scss";
import { PulseBeams } from "../../components/ui/pulse-beams";
import { Vortex } from "../../components/ui/vortex";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="contactPage">
      <div className="hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with our expert team</p>
        </div>
      </div>

      <div className="content">
        <div className="container">
          <div className="contactGrid">
            <div className="contactInfo">
              <h2>Get in Touch</h2>
              <p>
                Ready to find your dream property or have questions about our
                services? We're here to help! Contact us today and let our
                expert team guide you through your real estate journey.
              </p>

              <div className="infoCards">
                <div className="infoCard">
                  <div className="icon">📍</div>
                  <div className="details">
                    <h3>Address</h3>
                    <p>
                      123 Real Estate Street
                      <br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>

                <div className="infoCard">
                  <div className="icon">📞</div>
                  <div className="details">
                    <h3>Phone</h3>
                    <p>
                      +1 (555) 123-4567
                      <br />
                      +1 (555) 987-6543
                    </p>
                  </div>
                </div>

                <div className="infoCard">
                  <div className="icon">✉️</div>
                  <div className="details">
                    <h3>Email</h3>
                    <p>
                      info@lamaestate.com
                      <br />
                      support@lamaestate.com
                    </p>
                  </div>
                </div>

                <div className="infoCard">
                  <div className="icon">🕒</div>
                  <div className="details">
                    <h3>Hours</h3>
                    <p>
                      Mon - Fri: 9:00 AM - 6:00 PM
                      <br />
                      Sat: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contactForm">
              <h2>Send us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="formGroup">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="formGroup">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="formGroup">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="formGroup">
                  <label htmlFor="subject">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="buying">Buying a Property</option>
                    <option value="selling">Selling a Property</option>
                    <option value="renting">Renting a Property</option>
                    <option value="investment">Investment Opportunities</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div className="formGroup">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <PulseBeams
                  gradientColors={{
                    start: "#18CCFC",
                    middle: "#6344F5",
                    end: "#AE48FF",
                  }}
                  className="pulse-beams-wrapper"
                  width={480}
                  height={60}
                >
                  <button type="submit" className="pulse-button">
                    <span className="pulse-button-bg"></span>
                    <div className="pulse-button-content">
                      <span className="pulse-button-text">Send Message</span>
                    </div>
                  </button>
                </PulseBeams>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Vortex Section */}
      <div className="vortexSection">
        <Vortex
          backgroundColor="transparent"
          rangeY={200}
          particleCount={400}
          baseHue={200}
          className="flex items-center flex-col justify-center px-4 md:px-10 py-8 w-full h-full"
        >
          <h2 className="text-white text-3xl md:text-5xl font-bold text-center mb-6">
            Ready to Find Your Dream Property?
          </h2>
          <p className="text-white text-lg md:text-xl max-w-2xl mt-4 text-center leading-relaxed">
            Join thousands of satisfied clients who found their perfect home
            with Ryan Real Estate. Our expert team is here to guide you through
            every step of your property journey.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-6 mt-8">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset] font-semibold">
              Start Your Search
            </button>
            <button className="px-8 py-3 text-white border-2 border-white hover:bg-white hover:text-gray-900 transition duration-200 rounded-lg font-semibold">
              Schedule Consultation
            </button>
          </div>
        </Vortex>
      </div>
    </div>
  );
}

export default ContactPage;
