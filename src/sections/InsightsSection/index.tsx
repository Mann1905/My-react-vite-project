import { insights } from "../../mockData";

export const InsightsSection = () => {
  return (
    <section className="py-20 bg-[#E8E6E4] overflow-x-hidden w-full">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12 w-full">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light">
            Latest Insights
          </h2>
          <a
            href="#"
            className="text-sm tracking-wide hover:opacity-70 transition-opacity underline"
          >
            View all
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {insights.map((insight) => (
            <a
              key={insight.id}
              href="#"
              className="group bg-white overflow-hidden"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={insight.image}
                  alt={insight.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3 text-xs tracking-wide text-black/60">
                  <span>{insight.type}</span>
                  <span>•</span>
                  <span>{insight.readTime}</span>
                </div>
                <h3 className="text-lg font-light leading-snug group-hover:opacity-70 transition-opacity">
                  {insight.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
