function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div>
          <h3 className="text-lg font-semibold mb-3">📍 Location</h3>
          <p>123 Book Street</p>
          <p>Accra, Ghana</p>
          <p>Email: info@bookstore.com</p>
        </div>      
         <div>
          <h3 className="text-lg font-semibold mb-3 text-amber-300">About Us</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Donations</a></li>
            <li><a href="#" className="hover:underline">Bestsellers</a></li>
            <li><a href="#" className="hover:underline">License Summary</a></li>
             <li><a href="#" className="hover:underline">Terms of Service</a></li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold mb-3"> Opening Hours</h3>
          <ul>
            <li>Mon–Fri: 8:00am – 9:00pm</li>
            <li>Saturday: 10:00am – 6:00pm</li>
            <li>Sunday: 1:00pm – 8:00pm</li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-3 text-amber-300"> Follow Us</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Facebook</a></li>
            <li><a href="#" className="hover:underline">Twitter</a></li>
            <li><a href="#" className="hover:underline">Instagram</a></li>
             <li><a href="#" className="hover:underline">Linkedin</a></li>
          </ul>
        </div>
      </div>

      
      <div className="text-center text-xs text-gray-400 mt-8">
        © {new Date().getFullYear()} JE Library. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
