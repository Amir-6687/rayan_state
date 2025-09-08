import "./aboutPage.scss";
import AboutSection3 from "../../components/ui/about-section";

function AboutPage() {
  return (
    <div className="aboutPage">
      <AboutSection3 />

      <div className="content">
        <div className="container">
          <div className="section">
            <h2>Why Choose Us?</h2>
            <div className="features">
              <div className="feature">
                <div className="icon">🏆</div>
                <h3>200+ Awards</h3>
                <p>Recognized for excellence in real estate services</p>
              </div>
              <div className="feature">
                <div className="icon">🏠</div>
                <h3>2000+ Properties</h3>
                <p>Extensive portfolio of quality properties</p>
              </div>
              <div className="feature">
                <div className="icon">👥</div>
                <h3>Expert Team</h3>
                <p>Professional agents with local market knowledge</p>
              </div>
              <div className="feature">
                <div className="icon">💼</div>
                <h3>16+ Years</h3>
                <p>Decades of experience in real estate</p>
              </div>
            </div>
          </div>

          <div className="section">
            <h2>Our Values</h2>
            <div className="values">
              <div className="value">
                <h3>Integrity</h3>
                <p>We conduct business with honesty and transparency</p>
              </div>
              <div className="value">
                <h3>Excellence</h3>
                <p>We strive for the highest standards in everything we do</p>
              </div>
              <div className="value">
                <h3>Innovation</h3>
                <p>We embrace technology to improve our services</p>
              </div>
              <div className="value">
                <h3>Client Focus</h3>
                <p>Your success is our success</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
