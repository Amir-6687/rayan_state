import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";
import { StardustButton } from "../../components/ui/stardust-button";

function HomePage() {
  const { currentUser } = useContext(AuthContext);

  // console.log(currentUser);

  return (
    <>
      <div className="homePage">
        <div className="textContainer">
          <div className="wrapper">
            <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              explicabo suscipit cum eius, iure est nulla animi consequatur
              facilis id pariatur fugit quos laudantium temporibus dolor ea
              repellat provident impedit!
            </p>
            <SearchBar />
            <div className="boxes">
              <div className="box">
                <h1>16+</h1>
                <h2>Years of Experience</h2>
              </div>
              <div className="box">
                <h1>200</h1>
                <h2>Award Gained</h2>
              </div>
              <div className="box">
                <h1>2000+</h1>
                <h2>Property Ready</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="imgContainer">
          <img
            src="/bg.png"
            alt="Real Estate Background"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.parentElement.style.background =
                "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
            }}
          />
        </div>
      </div>

      {/* Properties Section */}
      <div className="propertiesSection">
        <div className="container">
          <h2 className="sectionTitle">Our Top Properties</h2>
          <div className="propertiesGrid">
            <div className="propertyCard">
              <div className="propertyImage">
                <img
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop"
                  alt="Modern Villa"
                />
                <div className="heartIcon">♡</div>
                <div className="price">ab €314/Nacht</div>
              </div>
              <div className="propertyInfo">
                <div className="propertyContent">
                  <div className="propertyType">Villa</div>
                  <div className="propertyDetails">
                    6 Gäste • 3 Schlafzimmer
                  </div>
                  <div className="propertyDescription">
                    Voll ausgestattetes weiträumiges Ferienhaus mit Pool
                  </div>
                  <div className="location">
                    <span className="locationIcon">📍</span>
                    <span>Búger, Mallorca</span>
                  </div>
                  <div className="rating">
                    <span className="stars">★5,0/5</span>
                    <span className="reviews">(3)</span>
                  </div>
                </div>
                <StardustButton
                  className="w-full"
                  onClick={() => alert("Property details coming soon!")}
                >
                  View Details
                </StardustButton>
              </div>
            </div>

            <div className="propertyCard">
              <div className="propertyImage">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop"
                  alt="Traditional House"
                />
                <div className="heartIcon">♡</div>
                <div className="price">ab €50/Nacht</div>
              </div>
              <div className="propertyInfo">
                <div className="propertyContent">
                  <div className="propertyType">Unterkunft</div>
                  <div className="propertyDetails">
                    3 Gäste • 1 Schlafzimmer
                  </div>
                  <div className="propertyDescription">
                    Romantisches Trullo über dem Fjord
                  </div>
                  <div className="location">
                    <span className="locationIcon">📍</span>
                    <span>Castro, Italien</span>
                  </div>
                  <div className="rating">
                    <span className="stars">★4,7/5</span>
                    <span className="reviews">(78)</span>
                  </div>
                </div>
                <StardustButton
                  className="w-full"
                  onClick={() => alert("Property details coming soon!")}
                >
                  View Details
                </StardustButton>
              </div>
            </div>

            <div className="propertyCard">
              <div className="propertyImage">
                <img
                  src="https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400&h=300&fit=crop"
                  alt="Apartment"
                />
                <div className="heartIcon">♡</div>
                <div className="price">ab €82/Nacht</div>
              </div>
              <div className="propertyInfo">
                <div className="propertyContent">
                  <div className="propertyType">Ferienwohnung</div>
                  <div className="propertyDetails">
                    2 Gäste • 1 Schlafzimmer
                  </div>
                  <div className="propertyDescription">
                    Gemütliche Ferienwohnung im Fachwerkhaus
                  </div>
                  <div className="location">
                    <span className="locationIcon">📍</span>
                    <span>Diemelstadt, Deutschland</span>
                  </div>
                  <div className="rating">
                    <span className="stars">★4,8/5</span>
                    <span className="reviews">(7)</span>
                  </div>
                </div>
                <StardustButton
                  className="w-full"
                  onClick={() => alert("Property details coming soon!")}
                >
                  View Details
                </StardustButton>
              </div>
            </div>

            <div className="propertyCard">
              <div className="propertyImage">
                <img
                  src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&h=300&fit=crop"
                  alt="Waterfront House"
                />
                <div className="heartIcon">♡</div>
                <div className="price">ab €136/Nacht</div>
              </div>
              <div className="propertyInfo">
                <div className="propertyContent">
                  <div className="propertyType">Ferienhaus</div>
                  <div className="propertyDetails">
                    6 Gäste • 3 Schlafzimmer
                  </div>
                  <div className="propertyDescription">
                    Wasserfront Ferienhaus mit Bootssteg
                  </div>
                  <div className="location">
                    <span className="locationIcon">📍</span>
                    <span>Konnevesi, Finnland</span>
                  </div>
                  <div className="rating">
                    <span className="stars">★5,0/5</span>
                    <span className="reviews">(5)</span>
                  </div>
                </div>
                <StardustButton
                  className="w-full"
                  onClick={() => alert("Property details coming soon!")}
                >
                  View Details
                </StardustButton>
              </div>
            </div>

            <div className="propertyCard">
              <div className="propertyImage">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop"
                  alt="Modern Villa with Pool"
                />
                <div className="heartIcon">♡</div>
                <div className="price">ab €152/Nacht</div>
              </div>
              <div className="propertyInfo">
                <div className="propertyContent">
                  <div className="propertyType">Ferienhaus</div>
                  <div className="propertyDetails">
                    6 Gäste • 3 Schlafzimmer
                  </div>
                  <div className="propertyDescription">
                    Privater Pool, Terrasse und Grill
                  </div>
                  <div className="location">
                    <span className="locationIcon">📍</span>
                    <span>Jakovici, Kroatien</span>
                  </div>
                  <div className="rating">
                    <span className="stars">★4,9/5</span>
                    <span className="reviews">(12)</span>
                  </div>
                </div>
                <StardustButton
                  className="w-full"
                  onClick={() => alert("Property details coming soon!")}
                >
                  View Details
                </StardustButton>
              </div>
            </div>

            <div className="propertyCard">
              <div className="propertyImage">
                <img
                  src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=400&h=300&fit=crop"
                  alt="Coastal House"
                />
                <div className="heartIcon">♡</div>
                <div className="price">ab €127/Nacht</div>
              </div>
              <div className="propertyInfo">
                <div className="propertyContent">
                  <div className="propertyType">Ferienhaus</div>
                  <div className="propertyDetails">
                    2 Gäste • 1 Schlafzimmer
                  </div>
                  <div className="propertyDescription">Grill und Meerblick</div>
                  <div className="location">
                    <span className="locationIcon">📍</span>
                    <span>Općina Sućuraj, Kroatien</span>
                  </div>
                  <div className="rating">
                    <span className="stars">★4,6/5</span>
                    <span className="reviews">(23)</span>
                  </div>
                </div>
                <StardustButton
                  className="w-full"
                  onClick={() => alert("Property details coming soon!")}
                >
                  View Details
                </StardustButton>
              </div>
            </div>

            <div className="propertyCard">
              <div className="propertyImage">
                <img
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=400&h=300&fit=crop"
                  alt="Pool Villa"
                />
                <div className="heartIcon">♡</div>
                <div className="price">ab €173/Nacht</div>
              </div>
              <div className="propertyInfo">
                <div className="propertyContent">
                  <div className="propertyType">Ferienhaus</div>
                  <div className="propertyDetails">
                    4 Gäste • 2 Schlafzimmer
                  </div>
                  <div className="propertyDescription">
                    Grill, privater Pool und Garten
                  </div>
                  <div className="location">
                    <span className="locationIcon">📍</span>
                    <span>Rakovci, Istrien</span>
                  </div>
                  <div className="rating">
                    <span className="stars">★4,8/5</span>
                    <span className="reviews">(15)</span>
                  </div>
                </div>
                <StardustButton
                  className="w-full"
                  onClick={() => alert("Property details coming soon!")}
                >
                  View Details
                </StardustButton>
              </div>
            </div>

            <div className="propertyCard">
              <div className="propertyImage">
                <img
                  src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400&h=300&fit=crop"
                  alt="Luxury Villa"
                />
                <div className="heartIcon">♡</div>
                <div className="price">ab €175/Nacht</div>
              </div>
              <div className="propertyInfo">
                <div className="propertyContent">
                  <div className="propertyType">Villa</div>
                  <div className="propertyDetails">
                    6 Gäste • 4 Schlafzimmer
                  </div>
                  <div className="propertyDescription">
                    Kinderfreundliche Villa mit privatem Pool
                  </div>
                  <div className="location">
                    <span className="locationIcon">📍</span>
                    <span>Selva, Mallorca</span>
                  </div>
                  <div className="rating">
                    <span className="stars">★5,0/5</span>
                    <span className="reviews">(8)</span>
                  </div>
                </div>
                <StardustButton
                  className="w-full"
                  onClick={() => alert("Property details coming soon!")}
                >
                  View Details
                </StardustButton>
              </div>
            </div>

            {/* Additional 4 Property Cards */}
            <div className="propertyCard">
              <div className="propertyImage">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop"
                  alt="Luxury Apartment"
                />
                <div className="heartIcon">♡</div>
                <div className="price">ab €189/Nacht</div>
              </div>
              <div className="propertyInfo">
                <div className="propertyContent">
                  <div className="propertyType">Apartment</div>
                  <div className="propertyDetails">
                    4 Gäste • 2 Schlafzimmer
                  </div>
                  <div className="propertyDescription">
                    Moderne Wohnung mit Meerblick und Terrasse
                  </div>
                  <div className="location">
                    <span className="locationIcon">📍</span>
                    <span>Palma, Mallorca</span>
                  </div>
                  <div className="rating">
                    <span className="stars">★4,8/5</span>
                    <span className="reviews">(12)</span>
                  </div>
                </div>
                <StardustButton
                  className="w-full"
                  onClick={() => alert("Property details coming soon!")}
                >
                  View Details
                </StardustButton>
              </div>
            </div>

            <div className="propertyCard">
              <div className="propertyImage">
                <img
                  src="https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400&h=300&fit=crop"
                  alt="Beach House"
                />
                <div className="heartIcon">♡</div>
                <div className="price">ab €450/Nacht</div>
              </div>
              <div className="propertyInfo">
                <div className="propertyContent">
                  <div className="propertyType">Beach House</div>
                  <div className="propertyDetails">
                    8 Gäste • 4 Schlafzimmer
                  </div>
                  <div className="propertyDescription">
                    Direkt am Strand gelegenes Haus mit Privatstrand
                  </div>
                  <div className="location">
                    <span className="locationIcon">📍</span>
                    <span>Cala d'Or, Mallorca</span>
                  </div>
                  <div className="rating">
                    <span className="stars">★4,9/5</span>
                    <span className="reviews">(6)</span>
                  </div>
                </div>
                <StardustButton
                  className="w-full"
                  onClick={() => alert("Property details coming soon!")}
                >
                  View Details
                </StardustButton>
              </div>
            </div>

            <div className="propertyCard">
              <div className="propertyImage">
                <img
                  src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&h=300&fit=crop"
                  alt="Mountain Chalet"
                />
                <div className="heartIcon">♡</div>
                <div className="price">ab €275/Nacht</div>
              </div>
              <div className="propertyInfo">
                <div className="propertyContent">
                  <div className="propertyType">Chalet</div>
                  <div className="propertyDetails">
                    6 Gäste • 3 Schlafzimmer
                  </div>
                  <div className="propertyDescription">
                    Gemütliches Chalet in den Bergen mit Kamin
                  </div>
                  <div className="location">
                    <span className="locationIcon">📍</span>
                    <span>Sóller, Mallorca</span>
                  </div>
                  <div className="rating">
                    <span className="stars">★4,7/5</span>
                    <span className="reviews">(9)</span>
                  </div>
                </div>
                <StardustButton
                  className="w-full"
                  onClick={() => alert("Property details coming soon!")}
                >
                  View Details
                </StardustButton>
              </div>
            </div>

            <div className="propertyCard">
              <div className="propertyImage">
                <img
                  src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&h=300&fit=crop"
                  alt="Historic Villa"
                />
                <div className="heartIcon">♡</div>
                <div className="price">ab €520/Nacht</div>
              </div>
              <div className="propertyInfo">
                <div className="propertyContent">
                  <div className="propertyType">Historic Villa</div>
                  <div className="propertyDetails">
                    10 Gäste • 5 Schlafzimmer
                  </div>
                  <div className="propertyDescription">
                    Historische Villa mit antiken Möbeln und Garten
                  </div>
                  <div className="location">
                    <span className="locationIcon">📍</span>
                    <span>Valldemossa, Mallorca</span>
                  </div>
                  <div className="rating">
                    <span className="stars">★4,9/5</span>
                    <span className="reviews">(4)</span>
                  </div>
                </div>
                <StardustButton
                  className="w-full"
                  onClick={() => alert("Property details coming soon!")}
                >
                  View Details
                </StardustButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
