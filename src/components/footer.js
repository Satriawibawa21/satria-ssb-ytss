import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">YouthTigerSoccerSchool</h3>
            <p className="text-gray-600">
              Temukan bakatmu, kembangkan skill, dan raih impianmu bersama YouthTigerSoccerSchool.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-black">Beranda</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-black">Tentang Kami</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Kontak</h3>
            <address className="text-gray-600 not-italic">
              <p>Stadion Elang Bondol</p>
              <p>Kabupaten Bogor, Indonesia</p>
              <p>Phone: 085939717750</p>
            </address>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Ikuti Kami</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-black">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-8 pt-8 text-center">
          <p className="text-gray-600">
            © {new Date().getFullYear()} YouthTigerSoccerSchool. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
