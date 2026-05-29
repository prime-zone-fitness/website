import { motion } from "motion/react";

const reviews = [
  {
    name: "Sharon Divine",
    time: "3 weeks ago",
    text: "Spacious gym with excellent equipment and a great atmosphere. Offers boxing and Zumba sessions, and the trainers are skilled, supportive, and motivating. Perfect place to achieve your fitness goals.",
  },
  {
    name: "Raja Santhro",
    time: "2 months ago",
    text: "Bunny trainer is very pro active and very attentive during training. Must recommend him for personal training.",
  },
  {
    name: "Gopika S",
    time: "3 months ago",
    text: "Great gym with a motivating atmosphere, supportive trainers, and well-maintained equipment that makes working out enjoyable every day. I’ve seen real positive changes since joining, and it’s become a place I genuinely look forward to going to. 💪",
  },
  {
    name: "kamal nath",
    time: "3 months ago",
    text: "The gym has a great ambiance, a good sound system, clean and hygienic washrooms, and top-quality equipment. When it comes to the trainers, Akash has strong knowledge of form and technique, while Bunny has excellent overall knowledge of bodybuilding. The support, spotting, and motivation provided by the trainers are exceptional. I highly recommend this place for your fitness journey! 💪",
  },
  {
    name: "Doctor Doom",
    time: "3 months ago",
    text: "I just joined this gym a week ago, and it's soo good. I take PT with Mr Akash ,,he gives lot of confidence and flexible with time. Motivating me to follow proper diet and so helpful. Would definitely recommend this gym",
  },
  {
    name: "Anish Kumar",
    time: "4 months ago",
    text: "The Gym is too good with all advanced and new equipments very friendly Trainers will guide everyone properly, very good gym with an excellent atmosphere.",
  },
];

export default function Reviews() {
  return (
    <section className="py-24 bg-prime-charcoal relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl sm:text-7xl font-bebas mb-6 leading-none"
          >
            MEMBER <span className="text-prime-neon">STORIES</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 font-medium max-w-xl"
          >
            Real results from our community. Here's what our members have to say
            about their experience at Primezone Fitness.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass-card p-8 border border-white/10 flex flex-col justify-between"
            >
              <div className="mb-6">
                <div className="flex text-prime-neon mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-300 font-medium leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-10 h-10 rounded-full bg-prime-neon/20 flex items-center justify-center font-bold text-prime-neon tracking-widest uppercase text-xs border border-prime-neon/40 shadow-[0_0_10px_rgba(229,158,0,0.2)]">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bebas tracking-wide text-lg uppercase leading-none">
                    {review.name}
                  </h4>
                  <span className="text-xs text-gray-500 font-bold uppercase tracking-widest">
                    {review.time}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
