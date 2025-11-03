import React, { useState, useEffect } from 'react';

const VoiceChanges = () => {
  // Consonant Sound Change Rules (Aspiration)
  const consonantRules = [
    { input: 'ㄱ + ㅎ', output: 'ㅋ', romanization: 'K (ခ)', ruleName: 'Aspiration (အသံပြင်း)', description: 'ㄱ နှင့် ㅎ ပေါင်းစပ်ပြီး အသံပြင်း /ㅋ/ ဖြစ်' },
    { input: 'ㅎ + ㄱ', output: 'ㅋ', romanization: 'K (ခ)', ruleName: 'Aspiration (အသံပြင်း)', description: 'ㅎ နောက် ㄱ လိုက်သည့်အခါ အသံပြင်း /ㅋ/ ဖြစ်' },
    { input: 'ㄷ + ㅎ', output: 'ㅌ', romanization: 'T (ထ)', ruleName: 'Aspiration (အသံပြင်း)', description: 'ㄷ နှင့် ㅎ ပေါင်းစပ်ပြီး အသံပြင်း /ㅌ/ ဖြစ်' },
    { input: 'ㅎ + ㄷ', output: 'ㅌ', romanization: 'T (ထ)', ruleName: 'Aspiration (အသံပြင်း)', description: 'ㅎ နောက် ㄷ လိုက်သည့်အခါ အသံပြင်း /ㅌ/ ဖြစ်' },
    { input: 'ㅂ + ㅎ', output: 'ㅍ', romanization: 'P (ဖ)', ruleName: 'Aspiration (အသံပြင်း)', description: 'ㅂ နှင့် ㅎ ပေါင်းစပ်ပြီး အသံပြင်း /ㅍ/ ဖြစ်' },
    { input: 'ㅎ + ㅂ', output: 'ㅍ', romanization: 'P (ဖ)', ruleName: 'Aspiration (အသံပြင်း)', description: 'ㅎ နောက် ㅂ လိုက်သည့်အခါ အသံပြင်း /ㅍ/ ဖြစ်' },
    { input: 'ㅈ + ㅎ', output: 'ㅊ', romanization: 'CH (ချ)', ruleName: 'Aspiration (အသံပြင်း)', description: 'ㅈ နှင့် ㅎ ပေါင်းစပ်ပြီး အသံပြင်း /ㅊ/ ဖြစ်' },
    { input: 'ㅎ + ㅈ', output: 'ㅊ', romanization: 'CH (ချ)', ruleName: 'Aspiration (အသံပြင်း)', description: 'ㅎ နောက် ㅈ လိုက်သည့်အခါ အသံပြင်း /ㅊ/ ဖြစ်' },
  ];

  const [currentRuleIndex, setCurrentRuleIndex] = useState(-1);
  const [isFlipped, setIsFlipped] = useState(false);
  const [checkButtonText, setCheckButtonText] = useState('အဖြေစစ်ရန် / စည်းမျဉ်း ကြည့်ရန်');
  const [isCheckButtonDisabled, setIsCheckButtonDisabled] = useState(false);

  // Function to flip the card and reveal the answer
  const flipCard = () => {
    setIsFlipped(true);
    setCheckButtonText('အဖြေကြည့်ပြီးပါပြီ');
    setIsCheckButtonDisabled(true);
  };

  // Core function to load and display a rule based on its index
  const loadRuleByIndex = (index) => {
    setCurrentRuleIndex(index);
    setIsFlipped(false);
    setCheckButtonText('အဖြေစစ်ရန် / စည်းမျဉ်း ကြည့်ရန်');
    setIsCheckButtonDisabled(false);
  };

  // Function for sequential movement (Next)
  const loadSequentialRule = () => {
    const nextIndex = (currentRuleIndex + 1) % consonantRules.length;
    loadRuleByIndex(nextIndex);
  };

  // Function for sequential movement (Previous)
  const loadPreviousRule = () => {
    const prevIndex = (currentRuleIndex - 1 + consonantRules.length) % consonantRules.length;
    loadRuleByIndex(prevIndex);
  };

  // Function for random movement
  const loadRandomRule = () => {
    const randomIndex = Math.floor(Math.random() * consonantRules.length);
    loadRuleByIndex(randomIndex);
  };

  // Initial load
  useEffect(() => {
    loadSequentialRule();
  }, []);

  const currentRule = currentRuleIndex >= 0 ? consonantRules[currentRuleIndex] : null;

  return (
    <div className="p-4 md:p-8 bg-gray-100 min-h-screen">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Myanmar:wght@400;700&family=Inter:wght@400;700&display=swap');
        
        .flashcard {
          min-height: 250px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: #ffffff;
          border: 3px solid #1f2937;
          box-shadow: 8px 8px 0px #1f2937;
          transition: all 0.2s;
          transform-style: preserve-3d;
          perspective: 1000px;
        }
        
        .flashcard-inner {
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }
        
        .flashcard.flipped .flashcard-inner {
          transform: rotateY(180deg);
        }
        
        .flashcard-front, .flashcard-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          border-radius: 0.5rem;
        }
        
        .flashcard-back {
          transform: rotateY(180deg);
          background-color: #fce7f3;
        }
        
        .btn {
          color: white;
          padding: 0.75rem 1.0rem;
          border: 2px solid;
          box-shadow: 0 4px 0;
          transition: all 0.1s;
          font-weight: bold;
        }
        
        .btn:active {
          box-shadow: 0 0 0;
          transform: translateY(4px);
        }
        
        .btn-check {
          background-color: #ec4899;
          border-color: #be185d;
        }
        
        .btn-check:hover { 
          background-color: #db2777; 
        }
        
        .btn-check:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        
        .btn-sequential {
          background-color: #0d9488;
          border-color: #0f766e;
        }
        
        .btn-sequential:hover { 
          background-color: #0f766e; 
        }
        
        .btn-random {
          background-color: #3b82f6;
          border-color: #2563eb;
        }
        
        .btn-random:hover { 
          background-color: #2563eb; 
        }
        
        .input-text {
          font-size: 3rem;
        }
        
        body {
          font-family: 'Noto Sans Myanmar', 'Inter', sans-serif;
        }
      `}</style>

      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">ကိုရီးယား ဗျည်းအသံပြောင်း လေ့ကျင့်ခန်း</h1>
        <p className="text-center text-gray-600 mb-8">ရှေ့၊ နောက် သို့မဟုတ် ကျပန်း ရွေးချယ်ပြီး လေ့ကျင့်ပါ။</p>

        {/* Flashcard Area */}
        <div 
          className={`flashcard rounded-lg mb-8 ${isFlipped ? 'flipped' : ''}`}
        >
          <div className="flashcard-inner">
            {/* Front (Input) */}
            <div className="flashcard-front">
              <div className="text-center">
                <p className="text-2xl text-gray-500 mb-2">ဒီဗျည်းနှစ်လုံး ပေါင်းရင် ဘာဖြစ်မလဲ?</p>
                <span className="input-text font-extrabold text-gray-900" style={{ lineHeight: '1.2' }}>
                  {currentRule ? currentRule.input : '? + ?'}
                </span>
              </div>
            </div>

            {/* Back (Rule and Result) */}
            <div className="flashcard-back">
              <div className="text-center">
                <p className="text-xl text-gray-700 mb-3">
                  {currentRule ? currentRule.ruleName : ''}
                </p>
                <p className="text-5xl font-extrabold text-gray-900 mb-3">
                  {currentRule ? `${currentRule.output} (${currentRule.romanization})` : ''}
                </p>
                <p className="text-xl text-gray-700">
                  {currentRule ? currentRule.description : ''}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col space-y-4">
          <button 
            onClick={flipCard}
            disabled={isCheckButtonDisabled}
            className={`btn btn-check rounded-lg text-lg w-full ${isCheckButtonDisabled ? 'opacity-60 cursor-not-allowed' : ''}`}
          >
            {checkButtonText}
          </button>
          
          {/* Sequential Controls: Previous and Next */}
          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={loadPreviousRule}
              className="btn btn-sequential rounded-lg text-lg"
            >
              ရှေ့တစ်မျိုး (အစဉ်လိုက်)
            </button>
            <button 
              onClick={loadSequentialRule}
              className="btn btn-sequential rounded-lg text-lg"
            >
              နောက်တစ်မျိုး (အစဉ်လိုက်)
            </button>
          </div>
          
          {/* Random Control */}
          <button 
            onClick={loadRandomRule}
            className="btn btn-random rounded-lg text-lg w-full"
          >
            ကျပန်း ရွေးချယ်ရန်
          </button>
        </div>

        <p className="mt-8 text-sm text-gray-500 text-center">
          အဓိက အသံပြင်း (Aspiration) ဖြစ်ပေါ်မှု စည်းမျဉ်း ၄ ခု (၈ မျိုး) ပါဝင်ပါသည်။
        </p>
      </div>
    </div>
  );
};

export default VoiceChanges;