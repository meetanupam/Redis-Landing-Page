import Image from "next/image";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-10 px-6 md:px-20 text-gray-600 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Left Section */}
        <div>
          <Link href={"/"}>
            <Image src="/footlogo.svg" width={80} height={80} alt="logo" />
          </Link>
          <div className="flex space-x-4 mt-6">
            <FaFacebookF />
            <i className="fab fa-youtube"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-x"></i>
          </div>
          <ul className="mt-6 space-y-2 text-sm">
            <li>Trust</li>
            <li>Privacy</li>
            <li>Terms of use</li>
            <li>Legal notices</li>
          </ul>
        </div>

        {/* Use Cases */}
        <div>
          <h3 className="text-gray-800 font-semibold">USE CASES</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Vector database</li>
            <li>Feature stores</li>
            <li>Semantic cache</li>
            <li>Caching</li>
            <li>NoSQL database</li>
            <li>Leaderboards</li>
            <li>Data deduplication</li>
            <li>Messaging</li>
            <li>Authentication token storage</li>
            <li>Fast data ingest</li>
            <li>Query caching</li>
            <li>All solutions</li>
          </ul>
        </div>

        {/* Other Links */}
        <div>
          <h3 className="text-gray-800 font-semibold">INDUSTRIES</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Financial Services</li>
            <li>Gaming</li>
            <li>Healthcare</li>
            <li>Retail</li>
            <li>All industries</li>
          </ul>
          <h3 className="text-gray-800 font-semibold mt-6">COMPARE</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Redis vs. ElastiCache</li>
            <li>Redis vs. Memcached</li>
            <li>Redis vs. Memorystore</li>
            <li>Redis vs. Source Available</li>
          </ul>
        </div>

        {/* Company & Partners */}
        <div>
          <h3 className="text-gray-800 font-semibold">COMPANY</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Mission & values</li>
            <li>Leadership</li>
            <li>Careers</li>
            <li>News</li>
          </ul>
          <h3 className="text-gray-800 font-semibold mt-6">PARTNERS</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Amazon Web Services</li>
            <li>Google Cloud</li>
            <li>Azure</li>
            <li>All partners</li>
          </ul>
          <h3 className="text-gray-800 font-semibold mt-6">SUPPORT</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Professional Services</li>
            <li>Support</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
