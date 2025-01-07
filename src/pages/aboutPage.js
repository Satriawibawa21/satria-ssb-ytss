import { motion } from 'framer-motion';

const AboutPage = () => {

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#f88f4d] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Tentang Kami</h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
            Membangun Talenta Sepak Bola Profesional untuk Generasi Mendatang.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision Mission Section */}
      <section className="py-20 bg-[#fff2e6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-center text-[#f88f4d] mb-12"
          >
            Visi & Misi Kami
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-white to-orange-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out border-2 border-orange-100"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-[#f88f4d] rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-[#f88f4d]">Visi</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Menjadikan Youth Tiger Soccer School sebagai pusat pembinaan bola usia dini yang terbaik di Indonesia, dengan program latihan profesional dari usia dini hingga remaja.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-white to-orange-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out border-2 border-orange-100"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-[#f88f4d] rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-[#f88f4d]">Misi</h2>
              </div>
              <ul className="text-gray-700 space-y-4">
                {[
                  "Pembinaan usia dini untuk membentuk karakter, sikap yang baik, dan keterampilan / skill.",
                  "Memiliki program dan fasilitas latihan yang memadai (profesional).",
                  "Menyiapkan mental pemain dalam bertanding di kompetisi level junior hingga remaja.",
                  "Menjadikan Youth Tiger Soccer School sebagai wadah pembinaan bakat bola usia dini hingga remaja terbaik di Indonesia.",
                  "Mengikuti kompetisi Nasional hingga Internasional.",
                  "Membentuk fisik pemain dengan program latihan dan asupan gizi yang baik."
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-start"
                  >
                    <span className="inline-block w-2 h-2 mt-2 mr-3 bg-[#f88f4d] rounded-full"></span>
                    <span className="text-lg leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
