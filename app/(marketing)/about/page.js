const AboutUs = () => {
  return (
    <div className="min-h-screen  flex items-center justify-center">
      <div className="max-w-3xl w-full space-y-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          About Us
        </h1>
        <p className="text-gray-600 text-sm text-center">
          Who we are and what we do
        </p>
        <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
          <h2 className="text-lg font-semibold">Our Mission</h2>
          <p>
            We aim to provide high-quality services that empower businesses and
            individuals to achieve their goals through innovative solutions.
          </p>

          <h2 className="text-lg font-semibold">Our Vision</h2>
          <p>
            To become a leading company recognized for our commitment to
            excellence, innovation, and customer satisfaction.
          </p>

          <h2 className="text-lg font-semibold">Our Values</h2>
          <ul className="list-disc pl-6">
            <li>Integrity</li>
            <li>Customer Commitment</li>
            <li>Innovation</li>
            <li>Collaboration</li>
            <li>Excellence</li>
          </ul>

          <h2 className="text-lg font-semibold">Contact Us</h2>
          <p>
            If you have any questions or inquiries, please reach out to us
            through our support email.
          </p>
        </div>
        <p className="text-xs text-center text-gray-500">
          We are dedicated to delivering the best experience to our customers.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
