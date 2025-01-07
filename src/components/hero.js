import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import photo1 from '../assets/ytss-display1.jpg';
import photo2 from '../assets/ytss-display2.jpg';
import photo3 from '../assets/ytss-display3.jpg';
import photo4 from '../assets/ytss-display4.jpg'; // Ganti dengan path foto Anda
import { FaDownload } from 'react-icons/fa';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const photos = [photo1, photo2, photo3, photo4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, [photos.length]);

  const titleWords = "YouthTigerSoccerSchool".split("");
  const descriptionWords = "Temukan bakatmu, kembangkan skill, dan raih impianmu bersama YouthTigerSoccerSchool".split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Slider */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url(${photos[currentIndex]})` }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-center text-center text-white">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4 flex flex-wrap justify-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {titleWords.map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="inline-block mx-[1px]"
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl mb-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {descriptionWords.map((word, index) => (
              <motion.span
                key={index}
                variants={wordVariants}
                className="inline-block mr-2"
              >
                {word}
              </motion.span>
            ))}
          </motion.p>
          
          {/* Tombol Download Brosur */}
          <motion.button
            className="inline-flex items-center px-6 py-3 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <FaDownload className="mr-2" />
            Download Brosur
          </motion.button>
        </motion.div>
      </div>
      {/* Sponsor Logos Section */}
      <div className="absolute bottom-10 w-full">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center items-center space-x-12">
            {/* Sponsor 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.1 }}
              className="bg-white/10 backdrop-blur-sm p-4 rounded-lg"
            >
              <img
                src={require('../assets/bank-bjb-logo.png')}
                alt="Sponsor 1"
                className="h-16 w-auto filter brightness-0 invert"
              />
            </motion.div>

            {/* Sponsor 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.1 }}
              className="bg-white/10 backdrop-blur-sm p-4 rounded-lg"
            >
              <img
                src={require('../assets/xten-logo.png')}
                alt="Sponsor 2"
                className="h-16 w-auto filter brightness-0 invert"
              />
            </motion.div>

            {/* Sponsor 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.1 }}
              className="bg-white/10 backdrop-blur-sm p-4 rounded-lg"
            >
              <img
                src={require('../assets/wan-solution-logo.png')}
                alt="Sponsor 3"
                className="h-16 w-auto filter brightness-0 invert"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
