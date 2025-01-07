import { motion } from 'framer-motion';
import { FaFutbol, FaDumbbell, FaUsers, FaTrophy, FaHeart, FaChartLine } from 'react-icons/fa';

const services = [
  {
    icon: <FaFutbol className="w-16 h-16 mx-auto" />,
    title: "Pengembangan Keterampilan Dasar Sepak Bola",
    description:
      "Program pelatihan komprehensif untuk mengembangkan teknik dasar seperti passing, dribbling, shooting, dan kontrol bola.",
  },
  {
    icon: <FaDumbbell className="w-16 h-16 mx-auto" />,
    title: "Pelatihan Fisik dan Mental",
    description:
      "Latihan yang dirancang untuk meningkatkan kekuatan, kecepatan, ketahanan, dan mental para peserta.",
  },
  {
    icon: <FaUsers className="w-16 h-16 mx-auto" />,
    title: "Pendekatan Usia dan Tingkat Kemampuan",
    description:
      "Program yang disesuaikan dengan kelompok usia dan tingkat kemampuan untuk hasil optimal.",
  },
  {
    icon: <FaTrophy className="w-16 h-16 mx-auto" />,
    title: "Kompetisi dan Turnamen",
    description:
      "Kesempatan untuk berpartisipasi dalam berbagai kompetisi dan turnamen untuk mengasah kemampuan.",
  },
  {
    icon: <FaHeart className="w-16 h-16 mx-auto" />,
    title: "Pendidikan Nilai Positif",
    description:
      "Menanamkan nilai-nilai seperti sportivitas, kerja sama tim, dan kepemimpinan.",
  },
  {
    icon: <FaChartLine className="w-16 h-16 mx-auto" />,
    title: "Pemantauan Perkembangan Individu",
    description:
      "Evaluasi dan pemantauan berkala untuk memastikan perkembangan setiap peserta.",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-[#f88f4d]">Program Kami</h2>
          <p className="mt-4 text-xl text-[#f88f4d]">Mendukung Setiap Langkah Menuju Impianmu di Dunia Sepak Bola!</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-[#f88f4d] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              {service.icon}
              <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
              <p className="text-white">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
