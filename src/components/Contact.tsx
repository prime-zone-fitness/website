import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-prime-charcoal relative border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl sm:text-7xl font-bebas mb-4 leading-none"
          >
            LOCATE THE <span className="text-prime-neon">ZONE.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-xl mx-auto font-medium"
          >
            Visit our premium facility and experience the ultimate workout
            environment.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8 lg:col-span-5"
          >
            {/* Fitness Consultant Banner */}
            <div className="bg-prime-neon p-6 shadow-[0_0_20px_rgba(229,158,0,0.3)]">
              <h3 className="text-3xl font-bebas tracking-wide text-black uppercase mb-1">
                Need a Fitness Consultant?
              </h3>
              <p className="text-black font-bold text-lg tracking-widest uppercase flex items-center justify-between">
                Call us: +91 73865 62313
                <Phone className="w-6 h-6 ml-2" />
              </p>
            </div>

            <div className="glass-card p-8 border border-white/10 rounded-none shadow-[0_0_20px_rgba(229,158,0,0.05)]">
              <h3 className="text-2xl font-bebas tracking-wide mb-6 text-prime-neon uppercase">
                Contact Information
              </h3>
              <ul className="flex flex-col gap-6 text-gray-300 font-medium">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-none bg-prime-neon/10 border border-prime-neon/30 flex items-center justify-center shrink-0">
                    <MapPin className="text-prime-neon w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-white font-bold text-sm tracking-widest uppercase mb-1">
                      Address
                    </span>
                    <span className="text-sm">
                      304, Ayyappa Society Main Rd,
                      <br />
                      Ayyappa Society, Megha Hills,
                      <br />
                      Chanda Naik Nagar, Madhapur,
                      <br />
                      Hyderabad, Telangana 500081
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-none bg-prime-neon/10 border border-prime-neon/30 flex items-center justify-center shrink-0">
                    <Clock className="text-prime-neon w-5 h-5" />
                  </div>
                  <div className="w-full">
                    <span className="block text-white font-bold text-sm tracking-widest uppercase mb-1">
                      Business Hours
                    </span>
                    <div className="flex flex-col gap-1 text-sm mt-2 w-full max-w-[200px]">
                      <div className="flex justify-between border-b border-white/10 pb-1">
                        <span>Mon - Sat</span> <span>6:00 AM - 11:30 PM</span>
                      </div>
                      <div className="flex justify-between pt-1">
                        <span>Sunday</span>{" "}
                        <span className="text-prime-neon">
                          7:00 AM - 9:00 PM
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="glass-card p-8 border border-white/10 bg-white/5">
              <h3 className="text-2xl font-bebas tracking-wide mb-6 text-white uppercase">
                Send a Message
              </h3>
              <form className="flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] tracking-widest text-gray-500 font-bold uppercase">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="bg-black/50 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-prime-neon transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] tracking-widest text-gray-500 font-bold uppercase">
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="Your Phone"
                      className="bg-black/50 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-prime-neon transition-colors"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] tracking-widest text-gray-500 font-bold uppercase">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="bg-black/50 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-prime-neon transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] tracking-widest text-gray-500 font-bold uppercase">
                    Message
                  </label>
                  <textarea
                    placeholder="How can we help?"
                    rows={3}
                    className="bg-black/50 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-prime-neon transition-colors resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="mt-2 w-full py-3 bg-prime-neon hover:bg-white hover:text-prime-neon text-white font-bebas tracking-widest text-lg transition-colors border border-transparent shadow-[0_0_15px_rgba(229,158,0,0.3)] hover:shadow-none uppercase"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full h-[600px] lg:h-full lg:col-span-7 border border-white/10 p-2 relative shadow-[0_0_20px_rgba(229,158,0,0.1)] glass-card"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.244695565163!2d78.3920042!3d17.4479985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91ed61857efb%3A0xa5818d8434ce5b4f!2sPrime%20Zone%20Fitness%20-%20%5B%20PREMIUM%20%5D%20unisex%20gym!5e0!3m2!1sen!2sin!4v1779990518287!5m2!1sen!2sin"
              className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute top-4 right-4 bg-prime-neon text-white font-bebas px-3 py-1 shadow-lg pointer-events-none text-xl tracking-widest">
              PRIME ZONE FITNESS
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
