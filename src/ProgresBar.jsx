import { useEffect, useState } from "react";

export const ProgressBar = () => {
  const progressData = [
    { label: "Advanced Skin Analysis", value: 96 },
    { label: "Facial Treatment Expertise", value: 92 },
    { label: "Exfoliation Techniques", value: 79 },
  ];

  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimated(true);
    }, 100);
  }, []);

  return (
    <section className="py-3">
              {/* Progress Bars */}
              <div className="space-y-4 mb-6">
                {progressData.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className=" text-[var(--bg-light)] text-[16px] font-semibold ">{item.label}</span>
                      <span className=" text-[var(--bg-light)]">{item.value}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-[3px] relative overflow-visible">
                      <div
                        className={`h-[3px] rounded-full bg-[var(--bg-color)] transition-all duration-1000 relative`}
                        style={{
                          width: animated ? `${item.value}%` : '0%',
                        }}
                      >
                        {/* End circle */}
                        <span
                          className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-[var(--bg-color)] rounded-full shadow"
                          style={{
                            right: '-8px',
                            transition: 'all 1s ease',
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
    </section>
  );
};
