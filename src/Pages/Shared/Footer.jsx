import { FaFacebook, FaGithub, FaLinkedinIn, FaMobileAlt, FaPhoneAlt } from 'react-icons/fa';
import logo from '../../../public/megapixel-fuchsia.png'
import { HiMail } from "react-icons/hi";
const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-black text-fuchsia-500 mt-16">
                <div>
                    <img src={logo} className='h-28' alt="" />
                    <h1 className='text-4xl font-bold'>Megapixel</h1>
                    <h2 className='text-xl'>A online photography school</h2>
                </div>
                <div>
                    <span className="footer-title">Physical Office</span>
                    <p>Barishal, Bangladesh</p>
                    <p>South Sagordi,</p>
                    <p>Megapixel Complex,</p>
                    <p>House No. 001</p>
                </div>
                <div>
                    <span className="footer-title">Contact Information</span>
                    <div className='flex items-center space-x-2'>
                        <HiMail />
                        <p>megapixel@photography.com</p>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <FaPhoneAlt /><p> +880 3659835</p>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <FaMobileAlt />
                        <p>+880 1712121212</p>
                    </div>
                </div>
                <div>
                    <span className="footer-title">Social Media</span>
                    <div className='flex space-x-4 text-2xl'>
                        <a href="https://www.facebook.com/shiningsudipto"><FaFacebook /></a>
                        <a href="https://github.com/shiningsudipto"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/shining-sudipto/"><FaLinkedinIn /></a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;