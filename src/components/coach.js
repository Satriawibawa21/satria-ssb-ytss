import { useState } from 'react';
import { motion } from 'framer-motion';
import photo1 from '../assets/coach-ytts-andar-suhendar.png'
import photo2 from '../assets/coach-ytts-dodi-kuswara.png'
import photo3 from '../assets/coach-ytts-abdul-luhu.jpg'
import photo4 from '../assets/coach-ytts-dudung.jpg'
import photo5 from '../assets/coach-ytts-perdi.jpg'
import photo6 from '../assets/coach-ytts-suganda.jpg'



const Coach = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#f88f4d] mb-2">Tim Pelatih Kami</h2>
          <p className="mt-4 text-xl text-gray-600">Dipimpin oleh pelatih profesional bersertifikat</p>
        </motion.div>

        {/* Main Coaches Section - 2 photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {[
            { img: photo1, name: "Andar Suhendar", position: "Head Coach" },
            { img: photo2, name: "Dodi Kuswara", position: "Assistant Head Coach" }
          ].map((coach, index) => (
            <motion.div
              key={`main-coach-${index}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.2 }
              }}
              className="relative group rounded-xl overflow-hidden shadow-2xl"
            >
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={coach.img}
                  alt={coach.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#f88f4d]/95 to-transparent p-8">
                <h3 className="text-2xl font-bold text-white mb-1">{coach.name}</h3>
                <p className="text-white/90 text-lg">{coach.position}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Assistant Coaches Section - 4 photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { img: photo3, name: "Abdul Luhu", specialty: "Pelatih Kiper" },
            { img: photo4, name: "Dudung", specialty: "Pelatih Fisik" },
            { img: photo5, name: "Perdi", specialty: "Pelatih Teknik" },
            { img: photo6, name: "Suganda", specialty: "Pelatih Taktik" }
          ].map((coach, index) => (
            <motion.div
              key={`assistant-coach-${index}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.2 }
              }}
              className="bg-gradient-to-b from-[#f88f4d]/10 to-[#f88f4d]/20 rounded-xl overflow-hidden shadow-xl"
            >
              <div className="aspect-w-3 aspect-h-4">
                <img
                  src={coach.img}
                  alt={coach.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6 text-center">
                <h4 className="text-xl font-bold text-[#f88f4d] mb-1">{coach.name}</h4>
                <p className="text-gray-600 font-medium">{coach.specialty}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coach;
