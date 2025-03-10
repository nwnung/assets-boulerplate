const FeatureOne = () => {
  return (
    <section className="py-8 px-6">
      <div className="bg-white rounded-2xl shadow-lg p-10 max-w-6xl mx-auto">
        <span className="text-sm font-medium bg-gray-100 px-3 py-1 rounded-full mb-4 inline-block">
          30+ Data Filters
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Unlimited data, one price.
        </h2>
        <p className="text-lg text-gray-600 mb-10 max-w-3xl">
          Instead of charging you into oblivion for incomplete data, you unlock
          the entire database for just $159. That way, you can spend more on
          marketing & less on data.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
          <div>
            <h3 className="text-3xl font-bold text-orange-500">100K+</h3>
            <p className="font-semibold mt-2">Verified Startups</p>
            <p className="text-sm text-gray-600 mt-2">
              It took us thousands of hours & $30,000+ to secure this amount of
              data. Then, we verified every email address.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-orange-500">30+</h3>
            <p className="font-semibold mt-2">Data Filters</p>
            <p className="text-sm text-gray-600 mt-2">
              We hate skin-deep databases. Use 30+ filters like traffic,
              funding, revenue, technologies used & more.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-orange-500">#1</h3>
            <p className="font-semibold mt-2">for email accuracy</p>
            <p className="text-sm text-gray-600 mt-2">
              We ran a cold email agency before this & dirty data sucked. So we
              made sure every email is 2X verified.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-orange-500">Unlimited</h3>
            <p className="font-semibold mt-2">Lists & Updates</p>
            <p className="text-sm text-gray-600 mt-2">
              Comb is getting constantly updated so everything is accurate.
              Plus, you can create as many lists as you like.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureOne;
