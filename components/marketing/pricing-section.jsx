import { Button } from "@/components/ui/button";

const PricingSection = () => {
  return (
    <section className="py-16 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Simple, transparent pricing
      </h2>
      <p className="text-lg text-gray-600 mb-10">
        Choose the plan that works best for you
      </p>
      <div className="max-w-md mx-auto border rounded-2xl shadow-lg p-8">
        <div className="bg-black text-white py-1 px-4 rounded-full inline-block text-sm font-bold mb-6">
          SAVE 63%
        </div>
        <h3 className="text-xl font-bold mb-2">Early Bird Yearly</h3>
        <p className="text-sm text-gray-600 mb-6">Our most popular plan</p>
        <div className="text-5xl font-bold mb-4">
          <span className="line-through text-gray-400 text-3xl mr-2">$129</span>
          $67
        </div>
        <p className="text-sm text-gray-600 mb-8">per year</p>
        <Button className="w-full">Get Started →</Button>
        <ul className="text-left text-sm text-gray-600 mt-8 space-y-4">
          <li>✔ Full access to the entire database of 100,000+ startups!</li>
          <li>✔ Unlimited updates & feature releases</li>
          <li>
            ✔ Unlimited access to future data we add (eCommerce, agencies,
            brick-and-mortar)
          </li>
          <li>✔ Priority support (obviously)</li>
        </ul>
        <p className="text-xs text-gray-500 mt-6">
          🔒 Payments are secure & encrypted
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
