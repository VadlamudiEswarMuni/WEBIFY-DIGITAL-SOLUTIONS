import "./App.css";

function App() {
  return (
    <div className="app">

      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">
           <img
            src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
            alt="logo"
          />
          <h2>WEBIFY DIGITAL SOLUTIONS</h2>
        </div>

        <nav>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#industries">Industries</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="nav-btn">Get Started</button>
      </header>

      {/* HERO */}
      <section className="hero" id="home">

        <div className="hero-left">

          <div className="tag">
            ENTERPRISE TECHNOLOGY COMPANY
          </div>

          <h1>
            Empowering Industries Through
            <span> Digital Transformation</span>
          </h1>

          <p>
            We deliver enterprise software, AI-powered platforms,
            cloud systems, mobile applications and digital
            transformation services that drive business growth.
          </p>

          <div className="hero-tags">
            <span>📱 Mobile Apps</span>
            <span>💻 Laptop Software</span>
            <span>🖥 Tablet Solutions</span>
          </div>

          <div className="hero-buttons">
            <button className="primary-btn">
              Get Free Consultation
            </button>

            <button className="secondary-btn">
              Explore Services →
            </button>
          </div>

        </div>

        <div className="hero-right">

          <div className="hero-card">

            <img
              src="https://i.imgur.com/7b1H6tB.png"
              alt="webify"
            />

            <div className="stats">

              <div className="stat-box cyan">
                <h2>50+</h2>
                <p>Projects</p>
              </div>

              <div className="stat-box pink">
                <h2>10+</h2>
                <p>Industries</p>
              </div>

            </div>

            <div className="solution-box">
              AI + Enterprise Solutions
            </div>

          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section className="services" id="services">

        <div className="section-title">
          <p>OUR SERVICES</p>
          <h2>Enterprise Solutions Built for Growth</h2>
        </div>

        <div className="service-grid">

          <div className="service-card">
            <h3>Enterprise Software</h3>
            <p>
              ERP systems, CRM platforms, POS systems,
              inventory management and automation.
            </p>
          </div>

          <div className="service-card">
            <h3>AI & Automation</h3>
            <p>
              AI chatbots, analytics, workflows and
              enterprise automation systems.
            </p>
          </div>

          <div className="service-card">
            <h3>Web & Mobile Apps</h3>
            <p>
              Modern websites, Android apps,
              iOS apps and SaaS platforms.
            </p>
          </div>

          <div className="service-card">
            <h3>Cloud Infrastructure</h3>
            <p>
              AWS deployment, DevOps solutions and
              scalable cloud management.
            </p>
          </div>

        </div>

      </section>

      {/* INDUSTRIES */}
      <section className="industries" id="industries">

        <div className="section-title">
          <p>INDUSTRIES</p>
          <h2>Industries We Serve</h2>
        </div>

        <div className="industry-grid">

          <div className="industry-card">🏨 Hospitality</div>
          <div className="industry-card">❤️ Healthcare</div>
          <div className="industry-card">🛍 Retail & Fashion</div>
          <div className="industry-card">⛽ Oil & Gas</div>
          <div className="industry-card">🏦 Banking & Finance</div>
          <div className="industry-card">📡 Telecommunications</div>
          <div className="industry-card">🏢 Real Estate</div>
          <div className="industry-card">🚚 Supply Chain & Logistics</div>
          <div className="industry-card">🛒 E-Commerce</div>

        </div>

      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">

        <div className="contact-box">

          <p>CONTACT US</p>

          <h2>Let’s Build Something Amazing</h2>

          <span>
            Contact Webify Digital Solutions for enterprise software,
            AI systems, mobile apps and digital transformation services.
          </span>

          <form
            action="https://formsubmit.co/webifydigitalsolutions.com@gmail.com"
            method="POST"
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </section>

      {/* FOOTER */}
      <footer>
        © 2026 WEBIFY DIGITAL SOLUTIONS. All Rights Reserved.
      </footer>

    </div>
  );
}

export default App;
