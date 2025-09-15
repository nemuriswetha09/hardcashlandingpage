"use client";

export default function TrustedBy() {
  const banks = [
    { name: "ICICI Bank", logo: "/public/icici.png" },
    { name: "Moneyview", logo: "/logos/moneyview.png" },
    { name: "SBI", logo: "/logos/sbi.png" },
    { name: "Axis Bank", logo: "/logos/axis.png" },
    { name: "Bajaj Finserv", logo: "/logos/bajajfinserv.png" },
    { name: "IIFL", logo: "/logos/iifl.png" },
    { name: "RBL Bank", logo: "/logos/rbl.png" },
    { name: "Kissht", logo: "/logos/kissht.png" },
    { name: "South Indian Bank", logo: "/logos/sib.png" },
  ];

  return (
    <section
      id="trustedby"
      className="py-20 bg-gray-950 text-white text-center overflow-hidden"
    >
      <h2 className="text-3xl font-bold mb-8">Trusted By Our Beloved Clients</h2>
      <p className="max-w-xl mx-auto text-gray-400 mb-10">
        Integrity & Quality Service has helped us gain trust of major banks &
        NBFCs. Join them and minimize debt today.
      </p>

      {/* Scrolling container */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll gap-8 whitespace-nowrap">
          {banks.concat(banks).map((bank, idx) => (
            <div
              key={idx}
              className="min-w-[150px] h-16 bg-gray-800 flex items-center justify-center rounded-lg px-4"
            >
              <img
                src={bank.logo}
                alt={bank.name}
                className="h-10 object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind animation */}
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
      `}</style>
    </section>
  );
}
