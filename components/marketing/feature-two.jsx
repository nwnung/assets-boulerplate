import { Button } from "@/components/ui/button";
import { Globe, User, DollarSign, Layers, Newspaper } from "lucide-react";

const features = [
  {
    icon: DollarSign,
    title: "Accurate Revenue",
    description:
      "We pull from multiple sources to get accurate, up-to-date revenue data.",
    link: "Try it out",
  },
  {
    icon: Layers,
    title: "Technologies",
    description:
      "Get the scoop on technographic data. Find exactly what technologies your leads are using right now.",
    link: "Filter by tech",
  },
  {
    icon: DollarSign,
    title: "Funding & Investments",
    description:
      "Funded companies love buying your stuff. Filter by funding rounds & find investors who’ve backed them.",
    link: "Take a look",
  },
  {
    icon: Globe,
    title: "Web Traffic (soon)",
    description:
      "Don't waste time selling to dead companies. Get up-to-date traffic data on every company.",
    link: "View Template",
  },
  {
    icon: User,
    title: "Employee count",
    description:
      "A boring, but necessary filter. Find companies based on their team size.",
    link: "Find people",
  },
  {
    icon: Newspaper,
    title: "News (soon)",
    description:
      "You can use our AI Agent to research the latest news on any company.",
    link: "Start your research",
  },
];

const FeatureTwo = () => {
  return (
    <section className="py-16 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        A dozen filters to build the perfect list
      </h2>
      <p className="text-lg text-gray-600 mb-10">
        Filter by revenue, funding, web traffic & more
      </p>
      <div className="flex justify-center gap-4 mb-10">
        <Button variant="outline">Documentation</Button>
        <Button>Ask us anything</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 border rounded-2xl shadow-lg text-left hover:shadow-xl transition-all"
          >
            <feature.icon className="w-6 h-6 mb-4 text-gray-700" />
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{feature.description}</p>
            <a href="#" className="text-blue-500 text-sm font-semibold">
              {feature.link} →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureTwo;
