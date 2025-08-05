import React from 'react';

const problems = [
  {
    icon: '😰',
    title: 'गंजेपन के धब्बे',
    description: 'सिर पर छोटे-बड़े गंजे धब्बे'
  },
  {
    icon: '💔',
    title: 'बाल टूटना',
    description: 'कमजोर बाल जो आसानी से टूट जाते हैं'
  },
  {
    icon: '😔',
    title: 'तनाव से बाल झड़ना',
    description: 'स्ट्रेस की वजह से बालों का गिरना'
  },
  {
    icon: '👩',
    title: 'महिलाओं में क्राउन पैचेस',
    description: 'सिर के ऊपरी हिस्से में बाल कम होना'
  }
];

const ProblemSection = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 
            className="text-2xl md:text-3xl font-bold text-red-700 mb-6"
            style={{ fontFamily: 'Noto Sans Devanagari' }}
          >
            आप भी इन समस्याओं से परेशान हैं?
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {problems.map((problem, index) => (
              <div 
                key={index}
                className="bg-red-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-300 border border-red-100"
              >
                <div className="text-4xl mb-3">{problem.icon}</div>
                <h3 className="text-lg font-semibold text-red-800 mb-2" style={{ fontFamily: 'Noto Sans Devanagari' }}>
                  {problem.title}
                </h3>
                <p className="text-red-600 text-sm" style={{ fontFamily: 'Noto Sans Devanagari' }}>
                  {problem.description}
                </p>
              </div>
            ))}
          </div>

          {/* Solution Statement */}
          <div className="bg-gradient-to-r from-green-100 to-amber-100 p-8 rounded-2xl border-2 border-green-200">
            <h3 
              className="text-2xl md:text-3xl font-bold text-green-800 mb-4"
              style={{ fontFamily: 'Noto Sans Devanagari' }}
            >
              हमारा जड़ी-बूटी तेल आपका हल है –<br />
              <span className="text-amber-700">2 हफ्तों में असर महसूस होगा! ✨</span>
            </h3>
            <p className="text-green-700 text-lg" style={{ fontFamily: 'Noto Sans Devanagari' }}>
              प्राकृतिक जड़ी-बूटियों की शक्ति से बने इस तेल से हजारों लोगों को फायदा मिला है
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;