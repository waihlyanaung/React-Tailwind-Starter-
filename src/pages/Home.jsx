import React, { useState, useEffect, useRef } from "react";

const Home = () => {
  // --- HANGUL DATA STRUCTURE ---
  const hangulData = {
    consonants: [
      { char: 'ㄱ', rom: 'G/K' }, { char: 'ㄴ', rom: 'N' }, { char: 'ㄷ', rom: 'D/T' },
      { char: 'ㄹ', rom: 'R/L' }, { char: 'ㅁ', rom: 'M' }, { char: 'ㅂ', rom: 'B/P' },
      { char: 'ㅅ', rom: 'S' }, { char: 'ㅇ', rom: 'ng (initial silent)' }, { char: 'ㅈ', rom: 'J' },
      { char: 'ㅊ', rom: 'Ch' }, { char: 'ㅋ', rom: 'K' }, { char: 'ㅌ', rom: 'T' },
      { char: 'ㅍ', rom: 'P' }, { char: 'ㅎ', rom: 'H' },
      { char: 'ㄲ', rom: 'KK' }, { char: 'ㄸ', rom: 'TT' }, { char: 'ㅃ', rom: 'PP' },
      { char: 'ㅆ', rom: 'SS' }, { char: 'ㅉ', rom: 'JJ' }
    ],
    vowels: [
      { char: 'ㅏ', rom: 'a (like father)' }, { char: 'ㅑ', rom: 'ya' }, { char: 'ㅓ', rom: 'eo (like awful)' },
      { char: 'ㅕ', rom: 'yeo' }, { char: 'ㅗ', rom: 'o (like boat)' }, { char: 'ㅛ', rom: 'yo' },
      { char: 'ㅜ', rom: 'u (like boot)' }, { char: 'ㅠ', rom: 'yu' }, { char: 'ㅡ', rom: 'eu (like good)' },
      { char: 'ㅣ', rom: 'i (like free)' }
    ],
    complexVowels: [
      { char: 'ㅐ', rom: 'ae (like air)' }, { char: 'ㅒ', rom: 'yae' }, { char: 'ㅔ', rom: 'e (like get)' },
      { char: 'ㅖ', rom: 'ye' }, { char: 'ㅘ', rom: 'wa' }, { char: 'ㅙ', rom: 'wae' },
      { char: 'ㅚ', rom: 'oe (like way)' }, { char: 'ㅝ', rom: 'wo' }, { char: 'ㅞ', rom: 'we' },
      { char: 'ㅟ', rom: 'wi' }, { char: 'ㅢ', rom: 'ui (like wheel)' }
    ],
    finalConsonants: [
      { char: '값', rom: 'gap (Value - ㅂ sound)' }, 
      { char: '닭', rom: 'dal-k (Chicken - ㄺ sound)' }, 
      { char: '앉', rom: 'an-t (Sit - ㄴㅈ sound)' },
      { char: '읽', rom: 'il-k (Read - ㄺ sound)' }, 
      { char: '없', rom: 'eop (Not exist - ㅂ sound)' }, 
      { char: '밖', rom: 'pak (Outside - ㄱ sound)' },
      { char: '꽃', rom: 'kko-t (Flower - ㅌ sound)' }, 
      { char: '숲', rom: 'sup (Forest - ㅂ sound)' }, 
      { char: '낮', rom: 'nat (Day - ㅌ sound)' }, 
      { char: '밭', rom: 'pat (Field - ㅌ sound)' }
    ],
    syllables: [
      { char: '가', rom: 'Ga' }, { char: '나', rom: 'Na' }, { char: '다', rom: 'Da' },
      { char: '로', rom: 'Ro' }, { char: '물', rom: 'Mul' }, { char: '밥', rom: 'Bap' },
      { char: '집', rom: 'Jip' }, { char: '책', rom: 'Chaek' }, { char: '사랑', rom: 'Sarang' },
      { char: '학교', rom: 'Hakgyo' }, { char: '한국', rom: 'Hanguk' }, { char: '사람', rom: 'Saram' },
      { char: '있다', rom: 'Itda' }, { char: '좋다', rom: 'Jotda' }, { char: '친구', rom: 'Chingu' }
    ]
  };

  const categoryNames = {
    consonants: 'ဗျည်းများ',
    vowels: 'သရများ',
    complexVowels: 'သရအတွဲများ',
    finalConsonants: 'အသတ် (ဗျည်းများ)',
    syllables: 'စပ်လုံးများ'
  };

  // --- STATE ---
  const [currentCategory, setCurrentCategory] = useState('consonants');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shuffledData, setShuffledData] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const apiKey = ""; // Your API key here

  // --- EFFECTS ---
  useEffect(() => {
    loadCategory(currentCategory);
  }, [currentCategory]);

  // --- UTILITY FUNCTIONS ---
  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const base64ToArrayBuffer = (base64) => {
    const binaryString = atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
  };

  const pcmToWav = (pcm16, sampleRate = 24000) => {
    const buffer = new ArrayBuffer(44 + pcm16.length * 2);
    const view = new DataView(buffer);
    
    const writeString = (view, offset, string) => {
      for (let i = 0; i < string.length; i++) {
        view.setUint8(offset + i, string.charCodeAt(i));
      }
    };

    writeString(view, 0, 'RIFF');
    view.setUint32(4, 36 + pcm16.length * 2, true);
    writeString(view, 8, 'WAVE');
    writeString(view, 12, 'fmt ');
    view.setUint32(16, 16, true);
    view.setUint16(20, 1, true);
    view.setUint16(22, 1, true);
    view.setUint32(24, sampleRate, true);
    view.setUint32(28, sampleRate * 2, true);
    view.setUint16(32, 2, true);
    view.setUint16(34, 16, true);
    writeString(view, 36, 'data');
    view.setUint32(40, pcm16.length * 2, true);

    let offset = 44;
    for (let i = 0; i < pcm16.length; i++) {
      view.setInt16(offset, pcm16[i], true);
      offset += 2;
    }

    return new Blob([view], { type: 'audio/wav' });
  };

  // --- MAIN FUNCTIONS ---
  const loadCategory = (categoryKey) => {
    setCurrentCategory(categoryKey);
    const newShuffledData = shuffleArray([...hangulData[categoryKey]]);
    setShuffledData(newShuffledData);
    setCurrentIndex(0);
  };

  const navigate = (direction) => {
    const newIndex = currentIndex + direction;
    if (newIndex >= 0 && newIndex < shuffledData.length) {
      setCurrentIndex(newIndex);
    }
  };

  const handleShuffle = () => {
    const newShuffledData = shuffleArray([...shuffledData]);
    setShuffledData(newShuffledData);
    setCurrentIndex(0);
    setStatusMessage(`စာလုံး ${newShuffledData.length} လုံးကို မွှေနှောက်ပြီးပါပြီ။`);
    setTimeout(() => setStatusMessage(''), 2000);
  };

  const speakHangul = async (text) => {
    if (isPlaying) return;

    setStatusMessage('');
    setIsPlaying(true);
    setIsAudioPlaying(true);

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-tts:generateContent?key=${apiKey}`;
    const voiceName = "Kore";

    const prompt = `Read the Korean character or word: ${text}`;
    
    const payload = {
      contents: [{
        parts: [{ text: prompt }]
      }],
      generationConfig: {
        responseModalities: ["AUDIO"],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: voiceName }
          }
        }
      },
      model: "gemini-2.5-flash-preview-tts"
    };

    let audioData = null;
    let sampleRate = 24000;

    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (!response.ok) {
          throw new Error(`API call failed with status: ${response.status}`);
        }

        const result = await response.json();
        const part = result?.candidates?.[0]?.content?.parts?.[0];
        audioData = part?.inlineData?.data;
        const mimeType = part?.inlineData?.mimeType;

        if (audioData && mimeType && mimeType.startsWith("audio/L16")) {
          const match = mimeType.match(/rate=(\d+)/);
          if (match) {
            sampleRate = parseInt(match[1], 10);
          }
          break;
        } else {
          throw new Error('Invalid audio data or mime type received.');
        }
      } catch (error) {
        console.error(`Attempt ${attempt + 1} failed:`, error);
        if (attempt < 2) {
          const delay = Math.pow(2, attempt) * 1000;
          await new Promise(resolve => setTimeout(resolve, delay));
        } else {
          setStatusMessage('အသံထွက် ထုတ်လုပ်မှု မအောင်မြင်ပါ (ကွန်ရက် ပြဿနာ)');
          audioData = null;
          break;
        }
      }
    }
    
    setIsPlaying(false);

    if (audioData) {
      try {
        const pcmData = base64ToArrayBuffer(audioData);
        const pcm16 = new Int16Array(pcmData);
        const wavBlob = pcmToWav(pcm16, sampleRate);
        const audioUrl = URL.createObjectURL(wavBlob);
        
        const audio = new Audio(audioUrl);
        
        audio.onended = () => {
          setIsAudioPlaying(false);
          URL.revokeObjectURL(audioUrl);
        };

        audio.onerror = () => {
          setIsAudioPlaying(false);
          setStatusMessage('အသံဖွင့်ရန် မအောင်မြင်ပါ');
        };

        await audio.play();
      } catch (e) {
        console.error('Error processing audio data:', e);
        setStatusMessage('အသံဖိုင် စီမံမှု အမှား');
        setIsAudioPlaying(false);
      }
    } else {
      setIsAudioPlaying(false);
    }
  };

  const handlePlaySound = () => {
    const currentItem = shuffledData[currentIndex];
    if (currentItem) {
      speakHangul(currentItem.char);
    }
  };

  const currentItem = shuffledData[currentIndex] || { char: '...', rom: '' };
  const dataLength = shuffledData.length;

  // --- STYLES ---
  const styles = `
    @keyframes pulse-audio {
      0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(74, 144, 226, 0.7); }
      70% { transform: scale(1.05); box-shadow: 0 0 0 15px rgba(74, 144, 226, 0); }
      100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(74, 144, 226, 0); }
    }
    .audio-playing {
      animation: pulse-audio 1.0s infinite;
    }
    
    .char-display {
      min-height: 150px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 6rem;
      font-weight: 900;
      line-height: 1;
    }
    
    @media (min-width: 640px) {
      .char-display {
        font-size: 8rem;
      }
    }
    
    @media (min-width: 1024px) {
      .char-display {
        font-size: 10rem;
      }
    }
    
    .main-card {
      border-bottom: 8px solid #3b82f6;
      transition: all 0.3s ease-in-out;
    }
    
    .no-scrollbar::-webkit-scrollbar {
      display: none;
    }
    
    .no-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="bg-gray-800 text-white flex items-center justify-center min-h-screen p-4 font-sans">
        <div className="w-full max-w-xl">
          <h1 className="text-3xl font-bold text-center mb-6 text-blue-400">
            ကိုရီးယား ဟန်ဂုလ် အသံထွက် လေ့လာရန်
          </h1>
          <p className="text-center text-sm mb-8 text-gray-400">
            ဗျည်းများ၊ သရများ၊ သရအတွဲများ နှင့် စပ်လုံးများကို လေ့လာပါ။
          </p>

          <p className="text-center text-sm mb-8 text-white">
            Create By WHA
          </p>

          {/* Main Card */}
          <div className="main-card bg-gray-700 rounded-xl shadow-2xl p-6 mb-8 transform hover:scale-[1.01]">
            
            {/* Category Display */}
            <div className="mb-4 text-center">
              <span className="inline-block px-4 py-1 bg-blue-500 text-white text-sm font-semibold rounded-full shadow-md">
                {`${categoryNames[currentCategory]} (${currentIndex + 1}/${dataLength})`}
              </span>
            </div>

            {/* Hangul Character Display */}
            <div className={`char-display text-blue-400 transition duration-300 ease-in-out ${isAudioPlaying ? 'audio-playing' : ''}`}>
              {currentItem.char}
            </div>
            
            {/* Romanization/Hint Display */}
            <div className="text-center mt-2 h-6">
              <span className="text-gray-300 text-lg font-mono">
                {currentItem.rom ? `[${currentItem.rom}]` : ''}
              </span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex flex-col space-y-4">
            
            {/* Play Sound Button */}
            <button 
              onClick={handlePlaySound}
              disabled={isPlaying}
              className="flex items-center justify-center w-full py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl shadow-lg transition duration-200 focus:outline-none focus:ring-4 focus:ring-green-500/50 active:scale-95 disabled:bg-gray-500"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-3">
                <path d="M13.5 4.06c0-1.336-1.636-2.007-2.577-1.285L5.43 7.545A4.5 4.5 0 003 11.5v1c0 1.946 1.34 3.657 3.238 4.394l5.772 2.309c.94.376 2.01-.295 2.01-1.37v-16z" />
                <path fillRule="evenodd" d="M19.98 5.672a.75.75 0 00-.734.185L17.5 7.644V5.25a.75.75 0 00-.75-.75h-2.25a.75.75 0 000 1.5H16V9.06l-1.398-1.05a.75.75 0 00-.734-.185c-.94.376-2.01-.295-2.01-1.37v-2.18c0-1.336-1.636-2.007-2.577-1.285L5.43 7.545A4.5 4.5 0 003 11.5v1c0 1.946 1.34 3.657 3.238 4.394l5.772 2.309c.94.376 2.01-.295 2.01-1.37V15a.75.75 0 00.75.75h2.25a.75.75 0 000-1.5H16V10.94l1.346 1.01a.75.75 0 00.734.185c.94-.376 2.01.295 2.01 1.37v2.18c0 1.336 1.636 2.007 2.577 1.285l4.339-3.255a4.5 4.5 0 000-7.228l-4.339-3.255z" clipRule="evenodd" />
              </svg>
              <span>{isPlaying ? 'အသံထုတ်လုပ်နေသည်...' : 'အသံထွက်ပြရန်'}</span>
            </button>

            {/* Navigation and Shuffle Buttons */}
            <div className="flex space-x-4">
              <button 
                onClick={() => navigate(-1)}
                disabled={currentIndex === 0}
                className="flex-1 py-3 bg-gray-500 hover:bg-gray-600 text-white font-bold rounded-xl shadow-lg transition duration-200 active:scale-95 disabled:opacity-50"
              >
                နောက်သို့
              </button>
              <button 
                onClick={handleShuffle}
                className="flex-1 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-bold rounded-xl shadow-lg transition duration-200 active:scale-95"
              >
                မွှေနှောက်
              </button>
              <button 
                onClick={() => navigate(1)}
                disabled={currentIndex >= dataLength - 1}
                className="flex-1 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl shadow-lg transition duration-200 active:scale-95 disabled:opacity-50"
              >
                ရှေ့သို့
              </button>
            </div>

            {/* Category Tabs */}
            <div className="flex space-x-2 text-xs md:text-sm pt-4 no-scrollbar gap-3 flex-wrap">
              {Object.entries(categoryNames).map(([key, name]) => (
                <button
                  key={key}
                  onClick={() => setCurrentCategory(key)}
                  className={`px-3 py-2 rounded-lg shadow-md hover:bg-gray-500 transition duration-150 flex-shrink-0 ${
                    currentCategory === key 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-600 text-white'
                  }`}
                >
                  {name}
                </button>
              ))}
            </div>
            
            {/* Status Message */}
            <div className="text-center text-sm text-red-400 h-6">
              {statusMessage}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;