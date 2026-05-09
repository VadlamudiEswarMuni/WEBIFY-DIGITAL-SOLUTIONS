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
} from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-pink-50 to-purple-100 text-gray-900 overflow-hidden">

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-white/40 shadow-sm">
        <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">

          <div className="flex items-center gap-3">
            <img
              src="/Logo.png"
              alt="Logo"
              className="w-14 h-14 rounded-full shadow-lg"
            />

            <h1 className="text-2xl md:text-4xl font-black bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500 bg-clip-text text-transparent">
              WEBIFY DIGITAL SOLUTIONS
            </h1>
          </div>

          <div className="hidden md:flex gap-10 font-semibold text-lg">
            <a href="#home" className="hover:text-cyan-500 transition">
              Home
            </a>

            <a href="#services" className="hover:text-pink-500 transition">
              Services
            </a>

            <a href="#industries" className="hover:text-purple-500 transition">
              Industries
            </a>

            <a href="#contact" className="hover:text-blue-500 transition">
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-pink-500 text-white font-bold shadow-xl hover:scale-105 transition"
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section
        id="home"
        className="max-w-7xl mx-auto px-5 py-12 grid lg:grid-cols-2 gap-8 items-center"
      >

        {/* LEFT */}
        <div>

          <div className="inline-block border border-pink-300 rounded-full px-5 py-2 mb-5 bg-white/60 backdrop-blur-md shadow">
            <p className="text-xs tracking-[4px] font-bold text-purple-600">
              ENTERPRISE TECHNOLOGY COMPANY
            </p>
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-[0.95] mb-5 text-gray-900">
            Empowering
            <br />
            Industries
            <br />
            Through
            <br />

            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500 bg-clip-text text-transparent">
              Digital
            </span>

            <br />

            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Transformation
            </span>
          </h1>

          <p className="text-gray-700 text-lg leading-relaxed mb-6 max-w-xl">
            We deliver enterprise software, AI-powered platforms,
            cloud systems, mobile applications and digital
            transformation services that drive business growth.
          </p>

          {/* TAGS */}
          <div className="flex flex-wrap gap-3 mb-6">

            <div className="px-4 py-2 rounded-xl bg-cyan-100 border border-cyan-200 text-sm font-semibold text-cyan-700 shadow">
              📱 Mobile Apps
            </div>

            <div className="px-4 py-2 rounded-xl bg-blue-100 border border-blue-200 text-sm font-semibold text-blue-700 shadow">
              💻 Laptop Software
            </div>

            <div className="px-4 py-2 rounded-xl bg-pink-100 border border-pink-200 text-sm font-semibold text-pink-700 shadow">
              🖥 Tablet Solutions
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4">

            <a
              href="#contact"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-pink-500 text-white font-bold shadow-xl hover:scale-105 transition"
            >
              Get Free Consultation
            </a>

            <a
              href="#services"
              className="px-8 py-4 rounded-2xl bg-white text-gray-800 font-bold border border-gray-200 shadow-lg hover:scale-105 transition"
            >
              Explore Services →
            </a>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="relative">

          <div className="bg-white/60 backdrop-blur-2xl border border-white rounded-[35px] p-6 shadow-2xl">

            <img
              src="/Logo.png"
              alt="Webify Logo"
              className="w-40 mx-auto rounded-3xl mb-6 shadow-lg"
            />

            {/* STATS */}
            <div className="grid grid-cols-2 gap-4 mb-5">

              <div className="bg-cyan-50 border border-cyan-200 rounded-3xl p-5 text-center shadow-lg">
                <h3 className="text-4xl font-black text-cyan-600">
                  50+
                </h3>

                <p className="text-gray-700 mt-2 font-medium">
                  Projects
                </p>
              </div>

              <div className="bg-pink-50 border border-pink-200 rounded-3xl p-5 text-center shadow-lg">
                <h3 className="text-4xl font-black text-pink-600">
                  10+
                </h3>

                <p className="text-gray-700 mt-2 font-medium">
                  Industries
                </p>
              </div>
            </div>

            {/* AI BOX */}
            <div className="rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500 p-5 text-center text-2xl font-black text-white shadow-xl">
              AI + Enterprise
              <br />
              Solutions
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="max-w-7xl mx-auto px-5 py-16"
      >

        <div className="text-center mb-14">
          <p className="tracking-[6px] text-sm font-bold text-cyan-500 mb-3">
            OUR SERVICES
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-gray-900">
            Enterprise Solutions Built for Growth
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {[
            {
              icon: <Code2 size={38} />,
              title: "Enterprise Software",
              text: "ERP systems, CRM platforms and automation solutions.",
              color: "from-cyan-400 to-blue-500",
            },

            {
              icon: <BrainCircuit size={38} />,
              title: "AI & Automation",
              text: "AI chatbots and intelligent business systems.",
              color: "from-pink-400 to-purple-500",
            },

            {
              icon: <Smartphone size={38} />,
              title: "Web & Mobile Apps",
              text: "Modern websites and Android applications.",
              color: "from-blue-400 to-indigo-500",
            },

            {
              icon: <Cloud size={38} />,
              title: "Cloud Infrastructure",
              text: "Cloud deployment and DevOps management.",
              color: "from-green-400 to-cyan-500",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white/70 backdrop-blur-xl p-8 shadow-xl hover:-translate-y-2 transition duration-300"
            >

              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 bg-gradient-to-r ${item.color}`}
              >
                {item.icon}
              </div>

              <h3 className="text-2xl font-black mb-4">
                {item.title}
              </h3>

              <p className="text-gray-700 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section
        id="industries"
        className="max-w-7xl mx-auto px-5 py-16"
      >

        <div className="text-center mb-14">
          <p className="tracking-[6px] text-sm font-bold text-pink-500 mb-3">
            INDUSTRIES
          </p>

          <h2 className="text-4xl md:text-5xl font-black">
            Industries We Serve
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">

          {[
            ["Hospitality", <Building2 />],
            ["Healthcare", <HeartPulse />],
            ["Retail & Fashion", <ShoppingBag />],
            ["Oil & Gas", <Fuel />],
            ["Banking & Finance", <Landmark />],
            ["Telecommunications", <RadioTower />],
            ["Real Estate", <Building />],
            ["Supply Chain & Logistics", <Truck />],
            ["E-Commerce", <ShoppingCart />],
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white/70 backdrop-blur-xl border border-white p-6 shadow-lg hover:scale-105 transition flex items-center gap-4"
            >

              <div className="text-pink-500">
                {item[1]}
              </div>

              <p className="font-bold text-lg">
                {item[0]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="max-w-5xl mx-auto px-5 py-16"
      >

        <div className="rounded-[40px] bg-gradient-to-r from-cyan-200 via-pink-100 to-purple-200 p-10 shadow-2xl">

          <div className="text-center mb-10">

            <p className="tracking-[6px] text-sm font-bold text-purple-600 mb-3">
              CONTACT US
            </p>

            <h2 className="text-4xl md:text-5xl font-black mb-5">
              Let's Build Something Amazing
            </h2>

            <p className="text-lg text-gray-700">
              Contact Webify Digital Solutions for enterprise
              software, AI systems, mobile apps and digital
              transformation services.
            </p>
          </div>

          <form
            action="https://formsubmit.co/webifydigitalsolutions.com@gmail.com"
            method="POST"
            className="grid gap-5"
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-4 rounded-2xl border border-white bg-white/70 shadow-lg outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-4 rounded-2xl border border-white bg-white/70 shadow-lg outline-none"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full p-4 rounded-2xl border border-white bg-white/70 shadow-lg outline-none"
            ></textarea>

            <button
              type="submit"
              className="py-4 rounded-2xl bg-gradient-to-r from-blue-500 via-cyan-500 to-pink-500 text-white font-black text-lg shadow-xl hover:scale-105 transition"
            >
              Send Message
            </button>
          </form>

          <div className="text-center mt-8">
            <a
              href="https://wa.me/917032541775"
              target="_blank"
              className="text-green-700 font-bold text-lg"
            >
              WhatsApp Consultation →
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-8 text-gray-700 font-medium">
        © 2026 WEBIFY DIGITAL SOLUTIONS. All Rights Reserved.
      </footer>
    </div>
  );
}
