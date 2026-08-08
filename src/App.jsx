import { useState, useEffect } from "react";

function HomePage() {
  const players = [
    {name: "Sharif Ahmed",
     image: "/images/Sharif.jpeg"
    },
    {name: "Player 1",
     image: "/images/Player 1.jpeg"
    },
    {name: "Player 2",
     image: "/images/Player 2.jpeg"
    },
    {name: "Lamin",
     image: "/images/Lamin.jpeg"
    },
    
    // "Ebenezer Annan",
    // "Prince Kwabena Adu",
    // "Edmund Addo",
  ];

  return (
    <div>
      <header className="relative h-[80vh] bg-gradient-to-r from-black via-zinc-900 to-green-900 flex items-center">
        <div className="max-w-7xl mx-auto px-8">
          <p className="text-green-400 uppercase tracking-widest mb-4">
            M.F Football Management
          </p>

          <h1 className="text-6xl font-bold max-w-4xl mb-6">
            Driving Athletes Toward Elite Careers
          </h1>

          <p className="text-xl text-zinc-300 max-w-2xl mb-8">
            Professional scouting, transfers, player management and career
            development.
          </p>

          {/* <button className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-2xl font-semibold">
            Explore Players
          </button> */}
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-8 py-20 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-4xl font-bold mb-6">Our Story</h2>
          <p className="text-zinc-300 leading-8">
            Founded to identify, develop and promote football talent, our
            agency connects promising athletes with professional opportunities
            across global leagues.
          </p>
        </div>

        <div className="bg-zinc-900 rounded-3xl p-8 shadow-2xl">
          <h3 className="text-2xl font-semibold mb-4">Why Choose Us?</h3>

          <ul className="space-y-3 text-zinc-300">
            <li>✓ International scouting network</li>
            <li>✓ Professional contract negotiation</li>
            <li>✓ Career and brand management</li>
            <li>✓ Athlete development programs</li>
          </ul>
        </div>
      </section>

      <section className="bg-zinc-950 py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Featured Players
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {players.map((player) => (
              <div
                // key={player.name}
                // className="bg-zinc-900 rounded-3xl overflow-hidden"
              > 
                <img 
                  src={player.image}
                  alt
                  className="h-64 w-full object-cover"
                />
                
                

                {/* <div className="p-5">
                  <h3 className="font-semibold">{player.name}</h3>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
}

function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-8 py-20">
      <h1 className="text-5xl font-bold mb-4">Contact Us</h1>

      <p className="text-gray-400 mb-10">
        Get in touch with our team for player representation, scouting,
        transfers and partnerships.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-semibold mb-6">
            Contact Information
          </h2>

          <div className="space-y-4">
            <p>
              <span className="text-green-400 font-bold">Email:</span>
              <br />
              faroukmusah@gmail.com
            </p>

            <p>
              <span className="text-green-400 font-bold">Phone:</span>
              <br />
              +233256526423 <br />
              +447538296533 <br />
              +233537890295 <br />
              +4591435426
            </p>

            <p>
              <span className="text-green-400 font-bold">Address:</span>
              <br />
              Northampton, United Kingdom
            </p>
          </div>
        </div>

              <form
        action="https://formspree.io/f/xeeynljg"
        method="POST"
        target="_blank"
        className="bg-zinc-900 p-8 rounded-3xl"
        >
        <div className="mb-4">
          <label className="block mb-2">Name</label>
          <input
            name="name"
            type="text"
            required
            className="w-full p-3 rounded-xl bg-zinc-800 border border-zinc-700"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input
            name="email"
            type="email"
            required
            className="w-full p-3 rounded-xl bg-zinc-800 border border-zinc-700"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Message</label>
          <textarea
            name="message"
            rows="5"
            required
            className="w-full p-3 rounded-xl bg-zinc-800 border border-zinc-700"
          ></textarea>
        </div>

        <input
          type="hidden"
          name="_subject"
          value="New Website Enquiry"
        />

        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl font-semibold"
        >
          Send Message
        </button>
        </form>
      </div>
    </div>
  );
}

function AgentsPage() {
  const agents = [
    {
      name: "Muhammad",
      position: "Manager",
      image: "/images/Agent1.jpeg",
    },
    {
      name: "Farouk Musah",
      position: "Chief Scout",
      image: "/images/Agent2.jpeg",
    },
    
  ];

  return (
    <div className="max-w-7xl mx-auto px-8 py-20">
      <h1 className="text-5xl font-bold text-center mb-4">
        Our Agents
      </h1>

      <p className="text-center text-zinc-400 mb-12">
        Meet the professionals dedicated to supporting our players
        throughout their careers.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {agents.map((agent) => (
          <div
            key={agent.name}
            className="bg-zinc-900 rounded-3xl overflow-hidden hover:scale-105 transition"
          >
            <img 
            src={agent.image}
            alt={agent.name}
            className="h-96 w-full object-cover"></img>
              
          <div/>

            <div className="p-6">
              <h3 className="text-xl font-bold">
                {agent.name}
              </h3>

              <p className="text-zinc-400 mt-2">
                {agent.position}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
function GalleryPage() {
  const images = [
    "/images/Gallery1.jpeg",
    "/images/Gallery2.jpeg",
    "/images/Gallery3.jpeg",
    "/images/Gallery4.jpeg",
    "/images/Gallery5.jpeg",
    "/images/Gallery6.jpeg",
    "/images/Gallery7.jpeg",
    "/images/Gallery8.jpeg",
    "/images/Gallery9.jpeg",
    "/images/Gallery10.jpeg",
    "/images/Gallery11.jpeg",
    "/images/Gallery12.jpeg",
    "/images/Gallery13.jpeg",
    "/images/Gallery14.jpeg",
    "/images/Gallery15.jpeg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-8 py-20">
      <h1 className="text-5xl font-bold text-center mb-6">
        Our Journey
      </h1>

      <p className="text-center text-zinc-400 text-lg max-w-3xl mx-auto mb-12">
        Explore the moments that define our journey. From player
        development and international transfers to scouting events,
        club partnerships and career milestones, this gallery
        showcases the people and opportunities that continue to drive
        our success in football management.
      </p>

      <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl">
       <img src={images[currentImage]}
            className="w-full h-[700px] object-contain bg-black"
       ></img> 
      </div>

      <div className="flex justify-center gap-3 mt-6">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentImage
                ? "bg-green-500"
                : "bg-zinc-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
// function GalleryPage() {
//   const images = [
//     "/images/Lamin.jpeg",
//     "/images/Sharif.jpeg",
//     "/images/Player 1.jpeg",
//     "/images/Player 2.jpeg",
//     "/images/Agent1.jpeg",
//   ];

//   return (
//     <div className="max-w-7xl mx-auto px-8 py-20">
//       <h1 className="text-5xl font-bold text-center mb-6">
//         Our Journey
//       </h1>

//       <p className="text-center text-zinc-400 text-lg max-w-3xl mx-auto mb-12">
//         Explore the moments that define our journey. From player development
//         and international transfers to scouting events, club partnerships,
//         and career milestones, this gallery showcases the people and
//         opportunities that continue to drive our success in football
//         management.
//       </p>

//       <div className="grid md:grid-cols-3 gap-8">
//         {images.map((image, index) => (<div 
//         key={index}
//         className="bg-zinc-900 rounded-3xl overflow-hidden"
//         >
//         <img 
//             src={image} 
//             alt={`Gallery ${index + 1} `}
//             className="w-full h-80 object-cover">

//         </img>
            
//         </div>))}
        
//       </div>

//     </div>
//   );
// }
export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="bg-zinc-950 border-b border-zinc-800 px-8 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src= "/images/logo1.jpeg"
                  alt= "M.F Football Management Logo"
                  className="h-50 w-50 object-contain"
            ></img>
            <h1 className="text-green-400 font-bold text-xl">
              M.F Football Management
            </h1>
          </div>
          <div className="space-x-4">
            <button
              onClick={() => setPage("home")}
              className="hover:text-green-400"
            >
              Home
            </button>

            <button
              onClick={() => setPage("contact")}
              className="hover:text-green-400"
            >
              Contact Us
            </button>

            <button
              onClick={() => setPage("agents")}
              className="hover:text-green-400"
            >
              Agents
            </button>

            <button
              onClick={() => setPage("gallery")}
              className="hover:text-green-400"
            >
              Gallery
            </button>
          </div>
        </div>
      </nav>

      {page === "home" && <HomePage />}
      {page === "contact" && <ContactPage />}
      {page === "agents" && <AgentsPage />}
      {page === "gallery" && <GalleryPage />}
      

      <footer className="bg-green-600 py-16 text-center mt-20">
  <h2 className="text-4xl font-bold mb-4">
    Ready To Build Your Career?
  </h2>

  <p className="mb-6 text-lg">
    Connect with our team today and take the next step in your
    football journey. Whether you're a player, coach, club, or
    partner, we're here to help you succeed.
  </p>

  <button
    onClick={() => setPage("contact")}
    className="bg-black text-white px-8 py-3 rounded-2xl hover:bg-zinc-900 transition"
  >
    Contact Us
  </button>
  
</footer>
<div className="bg-black text-center py-6 border-t border-zinc-800">  <p className="text-zinc-400">    © 2026 M.F Football Management. All Rights Reserved.  </p></div>
    </div>
  );
}