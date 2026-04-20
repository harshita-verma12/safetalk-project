import { useState } from 'react';

const faqItems = [
  {
    q: 'What is SafeTalk?',
    a: 'SafeTalk is a compassionate mental health support platform designed to help you understand your emotions and access helpful resources.'
  },
  // ... (keep your other items here)
];

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-600">Find answers to common questions about mental health and our platform.</p>
      </div>

      <div className="space-y-4 mb-16">
        {faqItems.map((item, index) => (
          <div 
            key={index} 
            className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 bg-white shadow-sm"
          >
            <button 
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-5 text-left font-semibold text-gray-800 hover:bg-gray-50 transition-colors"
            >
              <span>{item.q}</span>
              <span className={`transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>
            
            <div 
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="p-5 text-gray-600 border-t border-gray-100 leading-relaxed bg-gray-50">
                {item.a}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Emergency Resources Box */}
      <div className="bg-blue-50 border-2 border-blue-200 p-8 rounded-2xl">
        <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
          📚 Additional Resources
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <li className="bg-white p-3 rounded-lg text-sm shadow-sm">
            <span className="font-bold text-blue-700">NAMI:</span> Education & Advocacy
          </li>
          <li className="bg-white p-3 rounded-lg text-sm shadow-sm">
            <span className="font-bold text-blue-700">Crisis Text Line:</span> Text HOME to 741741
          </li>
          {/* Add more as needed */}
        </ul>
      </div>
    </section>
  );
}