const PrivacyUser = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-3xl w-full space-y-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          User Privacy
        </h1>
        <p className="text-gray-600 text-sm text-center">
          Your privacy is important to us
        </p>
        <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
          <h2 className="text-lg font-semibold">1. Information We Collect</h2>
          <p>
            We collect personal information such as name, email address, and
            usage data when you interact with our platform.
          </p>

          <h2 className="text-lg font-semibold">
            2. How We Use Your Information
          </h2>
          <p>
            Your information is used to improve our services, personalize your
            experience, and communicate updates.
          </p>

          <h2 className="text-lg font-semibold">3. Data Security</h2>
          <p>
            We implement security measures to protect your data from
            unauthorized access or misuse.
          </p>

          <h2 className="text-lg font-semibold">4. Third-Party Sharing</h2>
          <p>
            We do not share your personal information with third parties, except
            for essential services or when required by law.
          </p>

          <h2 className="text-lg font-semibold">5. Your Rights</h2>
          <p>
            You have the right to access, modify, or delete your personal data
            by contacting us.
          </p>
        </div>
        <p className="text-xs text-center text-gray-500">
          If you have any questions, please reach out to our support team.
        </p>
      </div>
    </div>
  );
};

export default PrivacyUser;
