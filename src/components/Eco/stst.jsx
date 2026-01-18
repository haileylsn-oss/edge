import { useEffect, useState } from "react";

const Counter = ({
  title,
  value,
  prefix = "",
  suffix = "",
  duration = 2000,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Number(start.toFixed(1)));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, duration]);

  return (
    <div className="text-center">
      <p className="text-sm text-gray-600 mb-2">{title}</p>
      <div className="text-3xl md:text-4xl font-bold text-gray-900">
        {prefix}
        {count}
        {suffix}
      </div>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

          <Counter
            title="Accounts Created"
            value={3.3}
            prefix="+"
            suffix="MM"
          />

          <Counter
            title="Assets Supported"
            value={130}
            prefix="+"
          />

          <Counter
            title="Languages Supported"
            value={10}
          />

          <Counter
            title="Countries Supported"
            value={179}
          />

        </div>
      </div>
    </section>
  );
};

export default StatsSection;
