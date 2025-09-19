"use client";

import Image from "next/image";

export default function TrustedBy() {
  const banks = [
    { name: "ICICI Bank", logo: "/img/icicibank.jpg" },
    { name: "Moneyview", logo: "/img/moneyview.jpg" },
    { name: "SBI", logo: "/img/SBi.jpg" },
    { name: "Axis Bank", logo: "/img/axis.jpg" },
    { name: "Bajaj Finserv", logo: "/img/bajajfinservbank.jpg" },
    { name: "IIFL", logo: "/img/IIFL.jpg" },
    { name: "RBL Bank", logo: "/img/RBL.jpg" },
    { name: "Kissht", logo: "/img/kissht-logo.jpg" },
    { name: "South Indian Bank", logo: "/img/southindianbank.jpg" },
  ];

  return (
    <section
      id="trustedby"
      className="py-20 text-foreground text-center overflow-hidden"
    >
      <h2 className="text-3xl font-bold mb-8">Trusted By Our Beloved Clients</h2>
      <p className="max-w-xl mx-auto text-gray-400 dark:text-gray-300 mb-10">
        Integrity & Quality Service has helped us gain trust of major banks & NBFCs. Join them and minimize debt today.
      </p>

      {/* Circular Infinite Scroll */}
      <div className="relative w-full overflow-hidden">
        <div className="marquee">
          <div className="marquee__group">
            {banks.map((bank, idx) => (
              <div
                key={idx}
                className="w-48 h-48 flex-shrink-0 flex flex-col items-center justify-center bg-white rounded-xl shadow-md p-4 mx-6 hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src={bank.logo}
                  alt={bank.name}
                  width={150}
                  height={100}
                  className="max-h-24 max-w-[150px] object-contain"
                  draggable="false"
                />
                <p className="mt-3 text-sm font-semibold text-gray-700">{bank.name}</p>
              </div>
            ))}
          </div>

          {/* duplicate once to make it circular */}
          <div className="marquee__group" aria-hidden="true">
            {banks.map((bank, idx) => (
              <div
                key={`dup-${idx}`}
                className="w-48 h-48 flex-shrink-0 flex flex-col items-center justify-center bg-white rounded-xl shadow-md p-4 mx-6"
              >
                <Image
                  src={bank.logo}
                  alt={bank.name}
                  width={150}
                  height={100}
                  className="max-h-24 max-w-[150px] object-contain"
                  draggable="false"
                />
                <p className="mt-3 text-sm font-semibold text-gray-700">{bank.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee {
          display: flex;
          width: max-content;
          overflow: hidden;
          position: relative;
        }
        .marquee__group {
          display: flex;
          flex-shrink: 0;
          animation: scroll 30s linear infinite;
        }
        .marquee__group[aria-hidden="true"] {
          position: absolute;
          left: 100%; /* starts right after the first track */
          top: 0;
        }
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </section>
  );
}
