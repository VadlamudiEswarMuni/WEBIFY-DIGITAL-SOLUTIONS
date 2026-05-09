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
  ArrowRight,
} from "lucide-react";

export default function App() {
  const services = [
    {
      icon: <Code2 size={34} />,
      title: "Enterprise Software",
      desc: "ERP systems, CRM platforms, POS systems, inventory management and business automation.",
    },
    {
      icon: <BrainCircuit size={34} />,
      title: "AI & Automation",
      desc: "AI chatbots, intelligent analytics, automation workflows and enterprise AI systems.",
    },
    {
      icon: <Smartphone size={34} />,
      title: "Web & Mobile Apps",
      desc: "Modern websites, Android apps, iOS applications and scalable SaaS platforms.",
    },
    {
      icon: <Cloud size={34} />,
      title: "Cloud Infrastructure",
      desc: "AWS deployment, DevOps solutions, cloud management and scalable cloud systems.",
    },
  ];

  const industries = [
    { icon: <Building2 size={22} />, name: "Hospitality" },
    { icon: <HeartPulse size={22} />, name: "Healthcare" },
    { icon: <ShoppingBag size={22} />, name: "Retail & Fashion" },
    { icon: <Fuel size={22} />, name: "Oil & Gas" },
    { icon: <TrendingUp size={22} />, name: "Commodity Trading" },
    { icon: <Landmark size={22} />, name: "Banking & Finance" },
    { icon: <RadioTower size={22} />, name: "Telecommunications" },
    { icon: <Building size={22} />, name: "Real Estate" },
    { icon: <Truck size={22} />, name: "Supply Chain & Logistics" },
    { icon: <ShoppingCart size={22} />, name: "E-Commerce" },
  ];

  return (
    <div className="app">
      <header className="navbar">
        <div className="logo-box">
          <img src="/Logo.png" alt="Logo" className="logo" />

          <h2>
            <span>WEBIFY</span> DIGITAL SOLUTIONS
          </h2>
        </div>

        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#industries">Industries</a>
          <a href="/contact.html">Contact</a>
        </nav>

        <a href="/contact.html" className="btn primary">
          Get Started
        </a>
      </header>

      <section className="hero" id="home">
        <div className="hero-left">
          <div className="tag">ENTERPRISE TECHNOLOGY COMPANY</div>

          <h1>
            Empowering Industries Through
            <span> Digital Transformation</span>
          </h1>

          <p>
            We deliver enterprise software, AI-powered platforms,
            cloud systems, mobile applications and digital
            transformation services that drive growth and efficiency.
          </p>

          <div className="mini-tags">
            <span>📱 Mobile Apps</span>
            <span>💻 Laptop Software</span>
            <span>🖥️ Tablet Solutions</span>
          </div>

          <div className="hero-buttons">
            <a href="/contact.html" className="btn primary">
              Get Free Consultation
            </a>

            <a href="#services" className="btn secondary">
              Explore Services
              <ArrowRight size={18} />
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-card">
            <img src="/Logo.png" alt="Logo" className="hero-logo" />

            <div className="stats">
              <div className="stat-box">
                <h2>50+</h2>
                <p>Projects</p>
              </div>

              <div className="stat-box pink">
                <h2>10+</h2>
                <p>Industries</p>
              </div>
            </div>

            <div className="ai-box">
              AI + Enterprise
              <br />
              Solutions
            </div>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="section-head">
          <p>OUR SERVICES</p>
          <h2>Enterprise Solutions Built for Growth</h2>
        </div>

        <div className="service-grid">
          {services.map((item, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="industries" id="industries">
        <div className="section-head">
          <p>INDUSTRIES</p>
          <h2>Industries We Serve</h2>
        </div>

        <div className="industry-grid">
          {industries.map((item, index) => (
            <div className="industry-card" key={index}>
              {item.icon}
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-cta">
        <div className="cta-box">
          <p>CONTACT US</p>

          <h2>Let's Build Something Amazing</h2>

          <p className="cta-text">
            Contact Webify Digital Solutions for enterprise software,
            AI systems, mobile apps, cloud infrastructure and digital
            transformation services.
          </p>

          <div className="cta-buttons">
            <a href="/contact.html" className="btn primary">
              Contact Now
            </a>

            <a
              href="https://wa.me/7032541775"
              className="btn whatsapp"
            >
              WhatsApp Consultation
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>
          © 2026 WEBIFY DIGITAL SOLUTIONS. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
