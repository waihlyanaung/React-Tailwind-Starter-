import React, { useState } from 'react';

const CardTwoA = () => {
  const [activeRule, setActiveRule] = useState('rule-1');

  const ruleButtons = [
    { id: 'rule-1', text: '၁။ ㅂ + ㄴ = ㅁ' },
    { id: 'rule-2', text: '၂။ ㄹ + ㄹ = ㄹㄹ' },
    { id: 'rule-3', text: '၃။ ㄷ + ㅎ = ㅌ' },
    { id: 'rule-4', text: '၄။ ㄱ + ㅎ = ㅋ' },
    { id: 'rule-5', text: '၅။ ㅂ + ㅎ = ㅍ' },
    { id: 'rule-6', text: '၆။ ㄹ + ㅎ = ㄹ' },
    { id: 'rule-7', text: '၇။ ㅌ + 이 = 치' },
    { id: 'rule-8', text: '၈။ ㄷ + 이 = 지' },
    { id: 'rule-9', text: '၉။ ㄴ + ㅎ = ㄴ' },
    { id: 'rule-10', text: '၁၀။ ㅇ + ㅎ = ㅇ' }
  ];

  const styles = {
    body: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      backgroundColor: '#f8f7f6'
    },
    navButton: {
      padding: '0.5rem 1rem',
      fontWeight: '600',
      borderRadius: '0.5rem',
      transition: 'all 0.2s ease-in-out',
      backgroundColor: 'white',
      border: '1px solid #d6d3d1',
      color: '#44403c',
      boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      cursor: 'pointer',
      flexGrow: '1',
      minWidth: '100px',
      textAlign: 'center'
    },
    activeButton: {
      backgroundColor: '#4f46e5',
      color: 'white',
      borderColor: '#4f46e5'
    },
    rulePanel: {
      display: 'none',
      animation: 'fadeIn 0.5s',
      border: '1px solid #e7e5e4',
      backgroundColor: '#ffffff',
      borderRadius: '0.75rem',
      padding: '1.5rem'
    },
    activePanel: {
      display: 'block'
    },
    ruleFormula: {
      backgroundColor: '#e7e5e4',
      color: '#1c1917',
      fontFamily: 'monospace, sans-serif',
      fontSize: '1.25rem',
      padding: '1rem',
      borderRadius: '0.5rem',
      textAlign: 'center',
      marginBottom: '1rem'
    },
    exampleCard: {
      backgroundColor: '#fafaf9',
      border: '1px solid #e7e5e4',
      borderRadius: '0.75rem',
      padding: '1.5rem',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    },
    exampleArrow: {
      fontSize: '1.1rem',
      color: '#4f46e5',
      margin: '0.5rem 0',
      fontWeight: 'bold'
    },
    koreanText: {
      fontSize: '1.7rem',
      fontWeight: '700',
      color: '#292524',
      marginBottom: '0.5rem'
    },
    transliterationText: {
      fontSize: '1.35rem',
      fontWeight: '600',
      color: '#4f46e5'
    },
    romanizationText: {
      fontSize: '0.9rem',
      color: '#78716c'
    }
  };

  const ExampleCard = ({ korean, beforeRoman, beforeTrans, afterRoman, afterTrans }) => (
    <div style={styles.exampleCard}>
      <div style={styles.koreanText}>{korean}</div>
      
      {/* BEFORE */}
      <div className="mb-4 pb-2 border-b border-dashed border-stone-300">
        <p className="text-sm font-semibold text-stone-500 mb-1">အသံမပြောင်းမီ (Before)</p>
        <div style={styles.romanizationText}>{beforeRoman}</div>
        <div style={styles.transliterationText}>{beforeTrans}</div>
      </div>

      <div style={styles.exampleArrow}>→ ပြောင်းလဲပြီး →</div>
      
      {/* AFTER */}
      <div>
        <p className="text-sm font-semibold text-indigo-600 mb-1 mt-4">အသံပြောင်းပြီး (After)</p>
        <div style={styles.romanizationText}>{afterRoman}</div>
        <div style={styles.transliterationText}>{afterTrans}</div>
      </div>
    </div>
  );

  return (
    <div style={styles.body} className="bg-stone-50 text-stone-800 min-h-screen">
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .nav-button:hover {
            background-color: #f5f5f4;
          }
          .active-button:hover {
            background-color: #4338ca;
          }
        `}
      </style>

      <div className="container mx-auto p-4 md:p-8 max-w-5xl">
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-stone-900">ကိုရီးယားဘာသာစကား အသံပြောင်းလဲမှု စည်းမျဉ်း (၁၀) မျိုး</h1>
          <p className="text-lg text-stone-600 mt-2">အသံမပြောင်းမီနှင့် အသံပြောင်းပြီး အသံထွက်များ နှိုင်းယှဉ်ချက်။</p>
        </header>

        <nav className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8">
          {ruleButtons.map((button) => (
            <button
              key={button.id}
              onClick={() => setActiveRule(button.id)}
              style={{
                ...styles.navButton,
                ...(activeRule === button.id ? styles.activeButton : {})
              }}
              className="nav-button"
            >
              {button.text}
            </button>
          ))}
        </nav>

        <main>
          {/* Rule 1: Nasalization */}
          <div 
            id="rule-1" 
            style={{
              ...styles.rulePanel,
              ...(activeRule === 'rule-1' ? styles.activePanel : {})
            }}
          >
            <h2 className="text-2xl font-bold mb-4 text-stone-800">၁။ နှာခေါင်းသံပြောင်းခြင်း (ㅂ + ㄴ = ㅁ)</h2>
            <div style={styles.ruleFormula}>ㅂ (p/b) + ㄴ (n) → ㅁ (m) + ㄴ (n)</div>
            <p className="mb-6 text-stone-700">
              <strong>ရှင်းလင်းချက်:</strong> စကားလုံးအဆုံးသတ် ဗျည်းသံ <strong>ㅂ</strong> (P/B) သည် နှာခေါင်းသံ <strong>ㄴ</strong> (N) နှင့် တွေ့သောအခါ နှာခေါင်းသံ <strong>ㅁ</strong> (M) အဖြစ် ပြောင်းလဲသွားသည်။ <strong>မှတ်ချက်:</strong> ဤစည်းမျဉ်းတွင် ပထမဗျည်း **ㅂ** သာ **ㅁ** သို့ပြောင်းခြင်းဖြစ်ပြီး၊ နောက်ဆက်တွဲ **ㄴ** ဗျည်းသည် <strong>န</strong> သံအတိုင်း ဆက်လက်တည်ရှိနေပါသည်။ (ဥပမာ: Ham-ni-da)
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <ExampleCard
                korean="합니다"
                beforeRoman="(Hap-ni-da - စာလုံးပါအတိုင်းထွက်လျှင်)"
                beforeTrans="ဟပ်-နီ-ဒါ"
                afterRoman="(Ham-ni-da)"
                afterTrans="ဟမ်-နီ-ဒါ"
              />
              <ExampleCard
                korean="십년"
                beforeRoman="(Sip-nyeon)"
                beforeTrans="ဆစ်-ညောန်"
                afterRoman="(Sim-nyeon)"
                afterTrans="ဆိမ်-ညောန်"
              />
              <ExampleCard
                korean="앞날"
                beforeRoman="(Ap-nal)"
                beforeTrans="အပ်-နာလ်"
                afterRoman="(Am-nal)"
                afterTrans="အမ်-နာလ်"
              />
            </div>
          </div>

          {/* Rule 2: Liquidification */}
          <div 
            id="rule-2" 
            style={{
              ...styles.rulePanel,
              ...(activeRule === 'rule-2' ? styles.activePanel : {})
            }}
          >
            <h2 className="text-2xl font-bold mb-4 text-stone-800">၂။ အရည်သံပြောင်းခြင်း (ㄹ + ㄹ = ㄹㄹ)</h2>
            <div style={styles.ruleFormula}>ㄴ (n) + ㄹ (l) သို့မဟုတ် ㄹ (l) + ㄴ (n) → ㄹㄹ (ll)</div>
            <p className="mb-6 text-stone-700">
              <strong>ရှင်းလင်းချက်:</strong> ဗျည်း **ㄴ** နှင့် **ㄹ** တို့ ရှေ့နောက် တွေ့သောအခါ နှစ်ခုစလုံးသည် **ㄹㄹ** (အသံနှစ်ထပ်) အဖြစ် ပြောင်းလဲကာ 'L' သံကို အားပြု၍ ထွက်ရသည်။
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <ExampleCard
                korean="설날"
                beforeRoman="(Seol-nal)"
                beforeTrans="ဆောလ်-နာလ်"
                afterRoman="(Seol-lal)"
                afterTrans="ဆောလ်-လာလ်"
              />
              <ExampleCard
                korean="신라"
                beforeRoman="(Sin-la)"
                beforeTrans="ဆင်-လာ"
                afterRoman="(Sil-la)"
                afterTrans="ဆီလ်-လာ"
              />
              <ExampleCard
                korean="난로"
                beforeRoman="(Nan-ro)"
                beforeTrans="နန်-ရို"
                afterRoman="(Nal-lo)"
                afterTrans="နာလ်-လို"
              />
            </div>
          </div>

          {/* Rule 3: Aspiration */}
          <div 
            id="rule-3" 
            style={{
              ...styles.rulePanel,
              ...(activeRule === 'rule-3' ? styles.activePanel : {})
            }}
          >
            <h2 className="text-2xl font-bold mb-4 text-stone-800">၃။ ပြင်းထန်သံပြောင်းခြင်း (ㄷ + ㅎ = ㅌ)</h2>
            <div style={styles.ruleFormula}>ㄷ (d) + ㅎ (h) → ㅌ (t)</div>
            <p className="mb-6 text-stone-700">
              <strong>ရှင်းလင်းချက်:</strong> ဗျည်းသံ <strong>ㄷ</strong> သို့မဟုတ် ၎င်းနှင့်အသံတူ ဗျည်းများသည် <strong>ㅎ</strong> ဗျည်းနှင့် တွဲမိသောအခါ ပေါင်းစပ်ပြီး ၎င်းထက်ပို၍ ပြင်းထန်သော **ㅌ** (T) အဖြစ်သို့ ပြောင်းလဲသွားသည်။ (ဥပမာ **갇히다** ကဲ့သို့သော စကားလုံးများသည် Aspiration ဖြစ်ပြီးနောက် **ㅌ** သံမှ **ㅊ** သို့ ရိုးသံပြောင်းခြင်း (Palatalization) နောက်တစ်ဆင့် ထပ်မံဖြစ်ပေါ်တတ်ပါသည်။)
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <ExampleCard
                korean="갇히다"
                beforeRoman="(Gat-hi-da)"
                beforeTrans="ဂတ်-ဟီ-ဒါ"
                afterRoman="(Ga-chi-da)"
                afterTrans="ဂါ-ချီ-ဒါ"
              />
              <ExampleCard
                korean="맡다"
                beforeRoman="(Mat-da)"
                beforeTrans="မတ်-ဒါ"
                afterRoman="(Mat-ta)"
                afterTrans="မာတ်-တာ"
              />
              <ExampleCard
                korean="끝을"
                beforeRoman="(Kkeut-eul)"
                beforeTrans="ကူတ်-အူလ်"
                afterRoman="(Kkeu-teul)"
                afterTrans="ကု-ထုလ်"
              />
            </div>
          </div>

          {/* Rule 4: Aspiration */}
          <div 
            id="rule-4" 
            style={{
              ...styles.rulePanel,
              ...(activeRule === 'rule-4' ? styles.activePanel : {})
            }}
          >
            <h2 className="text-2xl font-bold mb-4 text-stone-800">၄။ ပြင်းထန်သံပြောင်းခြင်း (ㄱ + ㅎ = ㅋ)</h2>
            <div style={styles.ruleFormula}>ㄱ (g/k) + ㅎ (h) → ㅋ (kh)</div>
            <p className="mb-6 text-stone-700">
              <strong>ရှင်းလင်းချက်:</strong> ဗျည်းသံ <strong>ㄱ</strong> သည် <strong>ㅎ</strong> ဗျည်းနှင့် တွဲမိသောအခါ ပေါင်းစပ်ပြီး ၎င်းထက်ပို၍ ပြင်းထန်သော **ㅋ** (KH) အဖြစ်သို့ ပြောင်းလဲသွားသည်။
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <ExampleCard
                korean="축하"
                beforeRoman="(Chuk-ha)"
                beforeTrans="ချူ-ဂ်-ဟာ"
                afterRoman="(Chu-kha)"
                afterTrans="ချူ-ခါ"
              />
              <ExampleCard
                korean="밝히다"
                beforeRoman="(Bal-hi-da)"
                beforeTrans="ဘာလ်-ဟီ-ဒါ"
                afterRoman="(Bal-khi-da)"
                afterTrans="ဘာလ်-ခီ-ဒါ"
              />
              <ExampleCard
                korean="놓고"
                beforeRoman="(Noh-go)"
                beforeTrans="နို-ဟ်-ဂို"
                afterRoman="(No-kho)"
                afterTrans="နို-ခို"
              />
            </div>
          </div>

          {/* Rule 5: Aspiration */}
          <div 
            id="rule-5" 
            style={{
              ...styles.rulePanel,
              ...(activeRule === 'rule-5' ? styles.activePanel : {})
            }}
          >
            <h2 className="text-2xl font-bold mb-4 text-stone-800">၅။ ပြင်းထန်သံပြောင်းခြင်း (ㅂ + ㅎ = ㅍ)</h2>
            <div style={styles.ruleFormula}>ㅂ (b/p) + ㅎ (h) → ㅍ (ph)</div>
            <p className="mb-6 text-stone-700">
              <strong>ရှင်းလင်းချက်:</strong> ဗျည်းသံ <strong>ㅂ</strong> သည် <strong>ㅎ</strong> ဗျည်းနှင့် တွဲမိသောအခါ ပေါင်းစပ်ပြီး ၎င်းထက်ပို၍ ပြင်းထန်သော **ㅍ** (PH) အဖြစ်သို့ ပြောင်းလဲသွားသည်။
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <ExampleCard
                korean="입학"
                beforeRoman="(Ip-hak)"
                beforeTrans="အစ်-ပ်-ဟာက်"
                afterRoman="(I-phak)"
                afterTrans="အီ-ဖတ်"
              />
              <ExampleCard
                korean="좁히다"
                beforeRoman="(Job-hi-da)"
                beforeTrans="ဂျိုပ်-ဟီ-ဒါ"
                afterRoman="(Jo-phi-da)"
                afterTrans="ဂျို-ဖီ-ဒါ"
              />
              <ExampleCard
                korean="급하다"
                beforeRoman="(Geup-ha-da)"
                beforeTrans="ဂူပ်-ဟာ-ဒါ"
                afterRoman="(Geu-pha-da)"
                afterTrans="ဂူ-ဖာ-ဒါ"
              />
            </div>
          </div>

          {/* Rule 6: H Elision */}
          <div 
            id="rule-6" 
            style={{
              ...styles.rulePanel,
              ...(activeRule === 'rule-6' ? styles.activePanel : {})
            }}
          >
            <h2 className="text-2xl font-bold mb-4 text-stone-800">၆။ 'ㅎ' သံ ပျောက်ကွယ်ခြင်း (ㄹ + ㅎ = ㄹ)</h2>
            <div style={styles.ruleFormula}>ㄹ (l) + ㅎ (h) → ㄹ (l)</div>
            <p className="mb-6 text-stone-700">
              <strong>ရှင်းလင်းချက်:</strong> **ㄹ** ဗျည်းနောက်မှ <strong>ㅎ</strong> ဗျည်း လိုက်ပါလာပြီး နောက်ဆက်တွဲ သရသံ သို့မဟုတ် အသံမမြည်သော ဗျည်း (ㅇ) ဖြင့် စသောအခါ **ㅎ** သံသည် ပျောက်ကွယ်သွားတတ်သည်။
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <ExampleCard
                korean="뚫는"
                beforeRoman="(Ttulh-neun)"
                beforeTrans="တူလ်-ဟ်-နင်"
                afterRoman="(Ttul-leun)"
                afterTrans="တူ-လ္လန်"
              />
              <ExampleCard
                korean="싫어요"
                beforeRoman="(Silh-eo-yo)"
                beforeTrans="ရှီလ်-ဟော-ယို"
                afterRoman="(Sir-eo-yo)"
                afterTrans="ရှီ-ရော-ယို"
              />
              <ExampleCard
                korean="돌하르방"
                beforeRoman="(Dol-ha-reu-bang)"
                beforeTrans="ဒိုလ်-ဟာ-ရု-ဘန်"
                afterRoman="(Dol-ha-ru-bang)"
                afterTrans="ဒိုလ်-ဟာ-ရု-ဘန်"
              />
            </div>
          </div>

          {/* Rule 7: Palatalization */}
          <div 
            id="rule-7" 
            style={{
              ...styles.rulePanel,
              ...(activeRule === 'rule-7' ? styles.activePanel : {})
            }}
          >
            <h2 className="text-2xl font-bold mb-4 text-stone-800">၇။ ရိုးသံပြောင်းခြင်း (ㅌ + 이 = 치)</h2>
            <div style={styles.ruleFormula}>ㅌ (t) + 이 (i) → 치 (ch)</div>
            <p className="mb-6 text-stone-700">
              <strong>ရှင်းလင်းချက်:</strong> စကားလုံးအဆုံးသတ် ဗျည်းသံ <strong>ㅌ</strong> သည် နောက်ဆက်တွဲ <strong>이 (I)</strong> သရနှင့် တွေ့သောအခါ **ㅊ (Ch)** အဖြစ် ပြောင်းလဲသွားသည်။
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <ExampleCard
                korean="같이"
                beforeRoman="(Gat-i)"
                beforeTrans="ဂတ်-အီ"
                afterRoman="(Ga-chi)"
                afterTrans="ဂါ-ချီ"
              />
              <ExampleCard
                korean="밭이"
                beforeRoman="(Bat-i)"
                beforeTrans="ဗတ်-အီ"
                afterRoman="(Ba-chi)"
                afterTrans="ဘာ-ချီ"
              />
              <ExampleCard
                korean="붙이다"
                beforeRoman="(But-i-da)"
                beforeTrans="ဘုတ်-အီ-ဒါ"
                afterRoman="(Bu-chi-da)"
                afterTrans="ဘူ-ချီ-ဒါ"
              />
            </div>
          </div>

          {/* Rule 8: Palatalization */}
          <div 
            id="rule-8" 
            style={{
              ...styles.rulePanel,
              ...(activeRule === 'rule-8' ? styles.activePanel : {})
            }}
          >
            <h2 className="text-2xl font-bold mb-4 text-stone-800">၈။ ရိုးသံပြောင်းခြင်း (ㄷ + 이 = ဂျိ)</h2>
            <div style={styles.ruleFormula}>ㄷ (d) + 이 (i) → 지 (j)</div>
            <p className="mb-6 text-stone-700">
              <strong>ရှင်းလင်းချက်:</strong> စကားလုံးအဆုံးသတ် ဗျည်းသံ <strong>ㄷ</strong> သည် နောက်ဆက်တွဲ <strong>이 (I)</strong> သရနှင့် တွေ့သောအခါ **ㅈ (J)** အဖြစ် ပြောင်းလဲသွားသည်။
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <ExampleCard
                korean="굳이"
                beforeRoman="(Gut-i)"
                beforeTrans="ဂူတ်-အီ"
                afterRoman="(Gu-ji)"
                afterTrans="ဂူ-ဂျီ"
              />
              <ExampleCard
                korean="해돋이"
                beforeRoman="(Hae-dot-i)"
                beforeTrans="ဟဲ-ဒိုတ်-အီ"
                afterRoman="(Hae-do-ji)"
                afterTrans="ဟဲ-ဒို-ဂျီ"
              />
              <ExampleCard
                korean="미닫이"
                beforeRoman="(Mi-dat-i)"
                beforeTrans="မီ-ဒါတ်-အီ"
                afterRoman="(Mi-da-ji)"
                afterTrans="မီ-ဒါ-ဂျီ"
              />
            </div>
          </div>

          {/* Rule 9: H Elision */}
          <div 
            id="rule-9" 
            style={{
              ...styles.rulePanel,
              ...(activeRule === 'rule-9' ? styles.activePanel : {})
            }}
          >
            <h2 className="text-2xl font-bold mb-4 text-stone-800">၉။ 'ㅎ' သံ ပျောက်ကွယ်ခြင်း (ㄴ + ㅎ = ㄴ)</h2>
            <div style={styles.ruleFormula}>ㄴ (n) + ㅎ (h) → ㄴ (n)</div>
            <p className="mb-6 text-stone-700">
              <strong>ရှင်းလင်းချက်:</strong> နှာခေါင်းသံ <strong>ㄴ</strong> ဗျည်းနောက်မှ <strong>ㅎ</strong> ဗျည်း လိုက်ပါလာပြီး နောက်ဆက်တွဲ သရသံ (သို့မဟုတ် ㅇ) ဖြင့် စသောအခါ **ㅎ** သံသည် ပျောက်ကွယ်သွားတတ်သည်။
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <ExampleCard
                korean="많아요"
                beforeRoman="(Manh-a-yo)"
                beforeTrans="မာန်-ဟာ-ယို"
                afterRoman="(Ma-na-yo)"
                afterTrans="မာ-နာ-ယို"
              />
              <ExampleCard
                korean="않다"
                beforeRoman="(Anh-da)"
                beforeTrans="အာန်-ဟ်-ဒါ"
                afterRoman="(An-ta)"
                afterTrans="အန်-ထာ"
              />
              <ExampleCard
                korean="끊임없이"
                beforeRoman="(Kkeunh-im-eop-si)"
                beforeTrans="ကူန်-ဟ်-အင်-မောပ်-ရှီ"
                afterRoman="(Kkeun-nim-eop-si)"
                afterTrans="ကူန်-နီ-မောပ်-ရှီ"
              />
            </div>
          </div>

          {/* Rule 10: H Elision */}
          <div 
            id="rule-10" 
            style={{
              ...styles.rulePanel,
              ...(activeRule === 'rule-10' ? styles.activePanel : {})
            }}
          >
            <h2 className="text-2xl font-bold mb-4 text-stone-800">၁၀။ 'ㅎ' သံ ပျောက်ကွယ်ခြင်း (ㅇ + ㅎ = ㅇ)</h2>
            <div style={styles.ruleFormula}>ㅇ (ng) + ㅎ (h) → ㅇ (ng)</div>
            <p className="mb-6 text-stone-700">
              <strong>ရှင်းလင်းချက်:</strong> အသံမမြည်သော ဗျည်း <strong>ㅇ</strong> (သို့မဟုတ် ၎င်း၏ အသံထွက်) နောက်မှ <strong>ㅎ</strong> ဗျည်း လိုက်ပါလာပြီး နောက်ဆက်တွဲ သရသံ (သို့မဟုတ် ㅇ) ဖြင့် စသောအခါ **ㅎ** သံသည် ပျောက်ကွယ်သွားတတ်သည်။
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <ExampleCard
                korean="좋아요"
                beforeRoman="(Joh-a-yo)"
                beforeTrans="ဂျို-ဟာ-ယို"
                afterRoman="(Jo-a-yo)"
                afterTrans="ဂျို-အာ-ယို"
              />
              <ExampleCard
                korean="놓아"
                beforeRoman="(Noh-a)"
                beforeTrans="နို-ဟာ"
                afterRoman="(No-a)"
                afterTrans="နို-အာ"
              />
              <ExampleCard
                korean="잃어버리다"
                beforeRoman="(Ilh-eo-beo-ri-da)"
                beforeTrans="အီလ်-ဟော-ဘော-ရီ-ဒါ"
                afterRoman="(Ir-eo-beo-ri-da)"
                afterTrans="အီ-ရော-ဘော-ရီ-ဒါ"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CardTwoA;