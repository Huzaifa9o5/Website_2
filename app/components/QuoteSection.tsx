"use client";

export default function QuoteSection() {
  return (
    <section className="bg-[#0b1d3a] text-white py-24 px-4 text-center relative z-10">
      <div className="container mx-auto max-w-4xl flex flex-col items-center justify-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-snug tracking-wide hover:scale-105 transition-transform duration-300">
          Budget your project with a{" "}
          <span className="bg-gradient-to-r from-[#0f68f7] to-[#e80219] bg-clip-text text-transparent">
            quick quote.
          </span>
        </h2>

        <button className="mt-4 px-8 py-4 bg-white text-black rounded-full text-lg font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 hover:bg-gradient-to-r hover:from-[#0f68f7] hover:to-[#e80219] hover:text-white hover:scale-105 whitespace-nowrap">
          Let's Talk{" "}
        </button>
      </div>
    </section>
  );
}
