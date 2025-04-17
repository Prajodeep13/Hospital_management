import React from "react";

const pricingData = [
  { cells: "25M", price: "INR 175000", exosomes: "NO", vitamins: "YES", buffet: "NO", prp: "YES" },
  { cells: "50M", price: "INR 290000", exosomes: "25 BILLION", vitamins: "YES", buffet: "NO", prp: "YES" },
  { cells: "100M", price: "INR 520000", exosomes: "50 BILLION", vitamins: "YES", buffet: "NO", prp: "YES" },
  { cells: "125M", price: "INR 620000", exosomes: "50 BILLION", vitamins: "YES", buffet: "NO", prp: "YES" },
  { cells: "150M", price: "INR 740000", exosomes: "75 BILLION", vitamins: "YES", buffet: "YES", prp: "YES" },
  { cells: "175M", price: "INR 820000", exosomes: "75 BILLION", vitamins: "YES", buffet: "YES", prp: "YES" },
  { cells: "200M", price: "INR 935000", exosomes: "100 BILLION", vitamins: "YES", buffet: "YES", prp: "YES" },
  { cells: "250M", price: "INR 1100000", exosomes: "100 BILLION", vitamins: "YES", buffet: "YES", prp: "YES" },
  { cells: "100 BILLION", price: "INR 300000", exosomes: "NO", vitamins: "YES", buffet: "NO", prp: "YES" },
];

const PricingTable = () => {
  return (
    <section className="bg-[#1b3a3f] py-16 px-4 md:px-20 text-white">
      <div className="max-w-7xl mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
        <div className="text-center py-10 px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1b3a3f] mb-2">
            QA Virtual Healthcare Pricing
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-cyan-800 text-white uppercase text-sm">
              <tr>
                <th className="px-6 py-3 font-bold">Cell Counts</th>
                <th className="px-6 py-3 font-bold">Pricing</th>
                <th className="px-6 py-3 font-bold">Free Exosomes</th>
                <th className="px-6 py-3 font-bold">Multi Vitamin Therapy</th>
                <th className="px-6 py-3 font-bold">Free Buffet (2 @ 5-Star)</th>
                <th className="px-6 py-3 font-bold">PRP</th>
              </tr>
            </thead>
            <tbody className="text-gray-800">
              {pricingData.map((row, index) => (
                <tr key={index} className="even:bg-gray-100">
                  <td className="px-6 py-4 font-medium">{row.cells}</td>
                  <td className="px-6 py-4">{row.price}</td>
                  <td className="px-6 py-4">{row.exosomes}</td>
                  <td className="px-6 py-4">{row.vitamins}</td>
                  <td className="px-6 py-4">{row.buffet}</td>
                  <td className="px-6 py-4">{row.prp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="h-2 bg-cyan-800" />
      </div>
    </section>
  );
};

export default PricingTable;
