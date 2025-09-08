import "./agentsPage.scss";

function AgentsPage() {
  const agents = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Senior Real Estate Agent",
      experience: "8 years",
      specialties: ["Luxury Homes", "Commercial Properties"],
      phone: "+1 (555) 123-4567",
      email: "sarah@lamaestate.com",
      image: "/noavatar.png",
      rating: 4.9,
      propertiesSold: 150,
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Investment Specialist",
      experience: "12 years",
      specialties: ["Investment Properties", "Rental Management"],
      phone: "+1 (555) 234-5678",
      email: "michael@lamaestate.com",
      image: "/noavatar.png",
      rating: 4.8,
      propertiesSold: 200,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      title: "First-Time Buyer Specialist",
      experience: "6 years",
      specialties: ["First-Time Buyers", "Condos", "Townhouses"],
      phone: "+1 (555) 345-6789",
      email: "emily@lamaestate.com",
      image: "/noavatar.png",
      rating: 4.9,
      propertiesSold: 120,
    },
    {
      id: 4,
      name: "David Thompson",
      title: "Luxury Property Expert",
      experience: "15 years",
      specialties: ["Luxury Estates", "Waterfront Properties"],
      phone: "+1 (555) 456-7890",
      email: "david@lamaestate.com",
      image: "/noavatar.png",
      rating: 5.0,
      propertiesSold: 300,
    },
    {
      id: 5,
      name: "Lisa Wang",
      title: "Commercial Real Estate Agent",
      experience: "10 years",
      specialties: ["Office Buildings", "Retail Spaces", "Warehouses"],
      phone: "+1 (555) 567-8901",
      email: "lisa@lamaestate.com",
      image: "/noavatar.png",
      rating: 4.7,
      propertiesSold: 180,
    },
    {
      id: 6,
      name: "James Wilson",
      title: "Rental Property Specialist",
      experience: "7 years",
      specialties: ["Rental Properties", "Property Management"],
      phone: "+1 (555) 678-9012",
      email: "james@lamaestate.com",
      image: "/noavatar.png",
      rating: 4.8,
      propertiesSold: 140,
    },
  ];

  return (
    <div className="agentsPage">
      <div className="hero">
        <div className="container">
          <h1>Our Expert Agents</h1>
          <p>Meet our professional real estate team</p>
        </div>
      </div>

      <div className="content">
        <div className="container">
          <div className="intro">
            <h2>Why Choose Our Agents?</h2>
            <p>
              Our team of experienced real estate professionals is dedicated to
              helping you achieve your property goals. With years of local
              market knowledge and a commitment to exceptional service, we're
              here to guide you through every step of your real estate journey.
            </p>
          </div>

          <div className="agentsGrid">
            {agents.map((agent) => (
              <div key={agent.id} className="agentCard">
                <div className="agentImage">
                  <img src={agent.image} alt={agent.name} />
                  <div className="rating">
                    <span>⭐ {agent.rating}</span>
                  </div>
                </div>

                <div className="agentInfo">
                  <h3>{agent.name}</h3>
                  <p className="title">{agent.title}</p>
                  <p className="experience">{agent.experience} experience</p>

                  <div className="specialties">
                    <h4>Specialties:</h4>
                    <div className="tags">
                      {agent.specialties.map((specialty, index) => (
                        <span key={index} className="tag">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="stats">
                    <div className="stat">
                      <span className="number">{agent.propertiesSold}</span>
                      <span className="label">Properties Sold</span>
                    </div>
                  </div>

                  <div className="contact">
                    <div className="contactItem">
                      <span className="icon">📞</span>
                      <span>{agent.phone}</span>
                    </div>
                    <div className="contactItem">
                      <span className="icon">✉️</span>
                      <span>{agent.email}</span>
                    </div>
                  </div>

                  <button className="contactBtn">Contact Agent</button>
                </div>
              </div>
            ))}
          </div>

          <div className="cta">
            <h2>Ready to Work with Us?</h2>
            <p>
              Get in touch with our team today and let us help you find your
              perfect property or sell your current one with confidence.
            </p>
            <div className="ctaButtons">
              <button className="primaryBtn">Find an Agent</button>
              <button className="secondaryBtn">Schedule Consultation</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgentsPage;
