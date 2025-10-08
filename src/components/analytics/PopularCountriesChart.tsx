"use client";

interface CountryData {
  name: string;
  width: number;
  color: string;
}

export default function PopularCountriesChart() {
  const countries: CountryData[] = [
    { name: "USA", width: 127, color: "#4A3AFF" },
    { name: "Canada", width: 130.1, color: "#E0C6FD" },
    { name: "UK", width: 98.31, color: "#962DFF" },
    { name: "Australia", width: 49.52, color: "#C6D2FD" },
  ];

  const percentages = ["0%", "50%", "100%"];

  return (
    <div className="w-[337px] bg-white border border-[rgba(21,21,21,0.1)] rounded-[20px]">
      {/* Card Info */}
      <div className="pt-[23px] px-[30px] mb-[10px]">
        <p className="text-[#9291A5] text-lg mb-1">Statistics</p>
        <h3 className="text-[#1E1B39] text-lg font-semibold">
          Popular countries
        </h3>
      </div>

      {/* Countries with bars */}
      <div className="px-[30px] flex flex-col gap-[14px] mt-[10px]">
        {countries.map((country, index) => (
          <div key={index} className="flex items-center gap-[64px]">
            <p className="text-lg text-[#615E83] min-w-[70px]">
              {country.name}
            </p>
            <div
              className="h-[12px] rounded-[4px]"
              style={{
                width: `${country.width}px`,
                backgroundColor: country.color,
              }}
            />
          </div>
        ))}
      </div>

      {/* X-axis percentages */}
      <div className="mt-[10px] ml-[130px] flex justify-between px-[30px]">
        {percentages.map((percentage, index) => (
          <p key={index} className="text-lg text-[#615E83] text-center">
            {percentage}
          </p>
        ))}
      </div>
    </div>
  );
}
