import {
  Dumbbell,
  Instagram,
  Twitter,
  Youtube,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-prime-dark border-t border-white/10 pt-24 pb-12 overflow-hidden relative">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-prime-neon/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-16">
          <div className="md:col-span-2">
            <a
              href="#home"
              className="flex items-center gap-2 text-3xl font-bebas text-white mb-6"
            >
              <Dumbbell className="text-prime-neon" size={36} />
              PRIME <span className="text-prime-neon">ZONE</span>
            </a>
            <p className="text-gray-400 font-light max-w-sm mb-8">
              The premier athletic performance facility. We combine cutting-edge
              technology with raw biomechanical expertise to forge the strongest
              version of you.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/primezone_fitness/"
                target="_blank"
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-prime-neon hover:border-prime-neon transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] tracking-[0.3em] font-bold text-gray-500 mb-6">
              QUICK LINKS
            </h4>
            <ul className="flex flex-col gap-4 text-gray-400 font-bold text-xs uppercase tracking-wider">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  The Facility
                </a>
              </li>
              <li>
                <a
                  href="#classes"
                  className="hover:text-white transition-colors"
                >
                  Programs
                </a>
              </li>
              <li>
                <a
                  href="#trainers"
                  className="hover:text-white transition-colors"
                >
                  Our Trainers
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:text-white transition-colors"
                >
                  Memberships
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] tracking-[0.3em] font-bold text-gray-500 mb-6">
              LOCATION
            </h4>
            <ul className="flex flex-col gap-4 text-gray-400 font-bold text-[10px] uppercase tracking-widest">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-prime-neon shrink-0 mt-0.5" />
                <span>
                  304, Ayyappa Society Main Rd,
                  <br />
                  Ayyappa Society, Megha Hills,
                  <br />
                  Chanda Naik Nagar, Madhapur,
                  <br />
                  Hyderabad, Telangana 500081
                </span>
              </li>
              <li className="flex items-center gap-3 mt-2">
                <Phone size={16} className="text-prime-neon shrink-0" />
                <span>7386562313</span>
              </li>
              <li className="flex flex-col gap-2 mt-4 text-gray-500">
                <span className="text-prime-neon">HOURS:</span>
                <span className="flex justify-between">
                  <span>Mon-Sat</span>
                  <span>6 am – 11:30 pm</span>
                </span>
                <span className="flex justify-between">
                  <span>Sunday</span>
                  <span>7 am – 9:00 pm</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Prime Zone Fitness. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
