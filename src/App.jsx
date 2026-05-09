import "./App.css";
import {
  Code2,
  BrainCircuit,
  Smartphone,
  Cloud,
  Building2,
  HeartPulse,
  ShoppingBag,
  Fuel,
  Landmark,
  RadioTower,
  Building,
  Truck,
  ShoppingCart,
  TrendingUp,
} from "lucide-react";

function App() {
  return (
    <div className="main-container">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          <img src="/Logo.png" alt="Logo" />
          <h2>
            <span>WEBIFY</span> DIGITAL SOLUTIONS
          </h2>
        </div>

<nav className="nav-links">
  <a href="#home">Home</a>
  <a href="#about">About Us</a>
  <a href="#services">Services</a>
  <a href="#industries">Industries</a>
  <a href="#contact">Contact</a>
</nav>

        <a href="/contact.html" className="nav-btn">
          Get Started
        </a>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-text">

          <h4>ENTERPRISE TECHNOLOGY COMPANY</h4>

          <h1>
            Empowering Industries Through
            <br />
            <span className="gradient-text">
              Digital Transformation
            </span>
          </h1>

          <p>
            We deliver enterprise software, AI-powered platforms,
            cloud systems, mobile applications and digital
            transformation services that drive growth and efficiency.
          </p>

          <div className="tech-stack">
            <span>📱 Mobile Apps</span>
            <span>💻 Laptop Software</span>
            <span>🖥 Tablet Solutions</span>
          </div>

          <div className="hero-buttons">
            <a href="/contact.html" className="primary-btn">
              Get Free Consultation
            </a>

            <a href="#services" className="secondary-btn">
              Explore Services →
            </a>
          </div>
        </div>

        {/* HERO CARD */}
        <div className="hero-card">

          <img src="/Logo.png" alt="Logo" />

          <div className="stats">

            <div className="stat-box">
              <h2 className="blue">50+</h2>
              <p>Projects</p>
            </div>

            <div className="stat-box">
              <h2 className="pink">10+</h2>
              <p>Industries</p>
            </div>

          </div>

          <div className="ai-box">
            AI + Enterprise Solutions
          </div>

        </div>
      </section>

{/* ABOUT SECTION */}
<section className="about-section" id="about">
  <div className="about-container">

    <div className="about-left">
      <span className="section-tag">ABOUT US</span>

      <h2>
        Innovative Digital Solutions
        <span> For Modern Businesses</span>
      </h2>

      <p>
        WEBIFY DIGITAL SOLUTIONS is a next-generation technology company
        delivering enterprise software, AI automation, cloud infrastructure,
        mobile applications, and scalable digital transformation solutions.
      </p>

      <p>
        We help startups, hospitals, retail businesses, educational
        institutions, and enterprises build powerful digital ecosystems
        that improve growth, efficiency, and customer experience.
      </p>

      <div className="about-stats">

        <div>
          <h3>50+</h3>
          <p>Projects Completed</p>
        </div>

        <div>
          <h3>10+</h3>
          <p>Industries Served</p>
        </div>

        <div>
          <h3>24/7</h3>
          <p>Support Available</p>
        </div>

      </div>
    </div>

    <div className="about-right">

      <div className="about-card">

        <img src="/Logo.png" alt="Logo" />

        <h3>WEBIFY DIGITAL SOLUTIONS</h3>

        <p>
          Building futuristic websites, AI systems, mobile apps,
          enterprise software and cloud platforms for modern businesses.
        </p>

      </div>

    </div>

  </div>
</section>

      {/* SERVICES */}
      <section className="section" id="services">

        <div className="section-title">
          <h4>OUR SERVICES</h4>
          <h2>Enterprise Solutions Built for Growth</h2>
        </div>

        <div className="services-grid">

          <div className="service-card">
            <div className="service-icon">
              <Code2 />
            </div>

            <h3>Enterprise Software</h3>

            <p>
              ERP systems, CRM platforms, POS systems,
              inventory management and business automation.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <BrainCircuit />
            </div>

            <h3>AI & Automation</h3>

            <p>
              AI chatbots, intelligent analytics,
              automation workflows and enterprise AI systems.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <Smartphone />
            </div>

            <h3>Web & Mobile Apps</h3>

            <p>
              Modern websites, Android apps,
              iOS applications and scalable SaaS platforms.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <Cloud />
            </div>

            <h3>Cloud Infrastructure</h3>

            <p>
              AWS deployment, DevOps solutions,
              cloud management and scalable cloud systems.
            </p>
          </div>

        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="section" id="industries">

        <div className="section-title">
          <h4>INDUSTRIES</h4>
          <h2>Industries We Serve</h2>
        </div>

        <div className="industries-grid">

          <div className="industry-card">
            <Building2 size={22} />
            Hospitality
          </div>

          <div className="industry-card">
            <HeartPulse size={22} />
            Healthcare
          </div>

          <div className="industry-card">
            <ShoppingBag size={22} />
            Retail & Fashion
          </div>

          <div className="industry-card">
            <Fuel size={22} />
            Oil & Gas
          </div>

          <div className="industry-card">
            <TrendingUp size={22} />
            Commodity Trading
          </div>

          <div className="industry-card">
            <Landmark size={22} />
            Banking & Finance
          </div>

          <div className="industry-card">
            <RadioTower size={22} />
            Telecommunications
          </div>

          <div className="industry-card">
            <Building size={22} />
            Real Estate
          </div>

          <div className="industry-card">
            <Truck size={22} />
            Supply Chain & Logistics
          </div>

          <div className="industry-card">
            <ShoppingCart size={22} />
            E-Commerce
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section className="section">

        <div className="contact-box">

          <h2>Let’s Build Something Amazing</h2>

          <p>
            Contact Webify Digital Solutions for enterprise software,
            AI systems, mobile apps, cloud infrastructure and
            digital transformation services.
          </p>

          <div className="contact-buttons">

            <a href="/contact.html" className="primary-btn">
              Contact Now
            </a>

            <a
              href="https://wa.me/917032541775"
              className="whatsapp-btn"
            >
              WhatsApp Consultation
            </a>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="footer">
        © 2026 WEBIFY DIGITAL SOLUTIONS. All Rights Reserved.
      </footer>

    </div>
  );
}

export default App;
