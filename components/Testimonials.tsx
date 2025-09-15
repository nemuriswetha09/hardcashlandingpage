export default function Testimonials() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "ABC Financial Services",
      feedback:
        "The Hard Cash helped us recover debts faster than expected — highly professional and reliable.",
    },
    {
      name: "Priya Sharma",
      company: "XYZ Banking Corp",
      feedback:
        "Outstanding service quality and integrity. They’ve become our trusted partner for debt management.",
    },
    {
      name: "Amit Patel",
      company: "Global NBFC Ltd",
      feedback:
        "Their strategic approach and compliance standards are unmatched. Highly recommend their services.",
    },
  ];

  return (
    <section className="py-20 bg-black text-white text-center">
      <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="bg-gray-900 p-6 rounded-xl shadow hover:shadow-yellow-500/20"
          >
            <p className="text-gray-300 mb-4">“{t.feedback}”</p>
            <h4 className="font-semibold text-yellow-400">{t.name}</h4>
            <p className="text-sm text-gray-400">{t.company}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
