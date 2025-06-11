function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 grid grid-rows-4">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
        <div>
          <h3 className="font-semibold text-lg mb-2">Location</h3>
          <p>123 Book Street</p>
          <p>Accra, Ghana</p>
          <p>Email: info@bookstore.com</p>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2">About Us</h3>
          <p>
            We are passionate about healthy eating and healthy ingredients. Our
            mission is to connect food lovers with their next great meals.
          </p>

          <div>
            <h3 className="font-semibold text-lg mb-2 text-amber-300">
              Follow Us
            </h3>
            <ul className="space-y-1 align-">
              <li>
                <a href="#" className="hover:underline">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3>
              Contact Us
            </h3>
            <form>
              <div>
                <p>Name</p>
                <input type="text" placeholder="eg. Vanessa Collins" required />
              </div>
              <div>
                <p>Phone Number</p>
                <input type="text" placeholder="eg. +233 123 456 789" />
              </div>
              <div>
                <p>Message</p>
                <input type="text" placeholder="Type Your Message" />
              </div>
              <div>
                <button>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
