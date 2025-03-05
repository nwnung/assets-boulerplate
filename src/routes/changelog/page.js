const Changelog = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-3xl w-full space-y-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Changelog
        </h1>
        <p className="text-gray-600 text-sm text-center">
          Latest updates and improvements
        </p>
        <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
          <h2 className="text-lg font-semibold">
            Version 1.0.0 - February 2025
          </h2>
          <ul className="list-disc pl-6">
            <li>Initial release of the platform</li>
            <li>Basic user authentication</li>
            <li>Privacy policy and terms of service pages</li>
            <li>Responsive design</li>
          </ul>

          <h2 className="text-lg font-semibold">Version 1.1.0 - Coming Soon</h2>
          <ul className="list-disc pl-6">
            <li>Dark mode support</li>
            <li>Payment gateway integration</li>
            <li>User dashboard improvements</li>
            <li>Performance optimizations</li>
          </ul>
        </div>
        <p className="text-xs text-center text-gray-500">
          Stay updated with our latest features and improvements.
        </p>
      </div>
    </div>
  );
};

export default Changelog;
