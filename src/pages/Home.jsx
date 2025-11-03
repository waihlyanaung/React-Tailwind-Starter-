import React, { useEffect } from 'react';

const KoreanLessons = () => {
    useEffect(() => {
        const learnContent = document.getElementById('learn-content');
        const testContent = document.getElementById('test-content');
        const navLearn = document.getElementById('nav-learn');
        const navTest = document.getElementById('nav-test');

        function showContent(section) {
            if (section === 'learn') {
                learnContent.classList.remove('hidden');
                testContent.classList.add('hidden');
                navLearn.classList.add('active-nav-btn');
                navTest.classList.remove('active-nav-btn');
            } else if (section === 'test') {
                learnContent.classList.add('hidden');
                testContent.classList.remove('hidden');
                navLearn.classList.remove('active-nav-btn');
                navTest.classList.add('active-nav-btn');
            }
        }

        function handleHashChange() {
            const hash = window.location.hash;
            if (hash.startsWith('#test')) {
                showContent('test');
            } else {
                showContent('learn');
            }

            const learnMatch = hash.match(/^#learn\/lesson\/(\d+)$/);
            const testMatch = hash.match(/^#test\/lesson\/(\d+)$/);
            
            if (learnMatch) {
                const lessonNumber = learnMatch[1];
                console.log(`[ROUTE] Navigating to Lesson ${lessonNumber} (Learning Mode)`);
            } else if (testMatch) {
                const lessonNumber = testMatch[1];
                console.log(`[ROUTE] Navigating to Lesson ${lessonNumber} (Quiz Mode)`);
            } else {
                console.log('[ROUTE] Viewing main Lesson Grid.');
            }
        }

        navLearn?.addEventListener('click', () => showContent('learn'));
        navTest?.addEventListener('click', () => showContent('test'));
        window.addEventListener('hashchange', handleHashChange);
        handleHashChange();

        return () => {
            navLearn?.removeEventListener('click', () => showContent('learn'));
            navTest?.removeEventListener('click', () => showContent('test'));
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    return (
        <div className="min-h-screen relative overflow-x-hidden" style={{ backgroundColor: '#1a1a2e' }}>
            <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Myanmar:wght@400;700&family=Inter:wght@400;700;800&display=swap');
                
                body {
                    font-family: 'Noto Sans Myanmar', 'Inter', sans-serif;
                }

                .liquid-bg {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                    z-index: 0;
                }

                .liquid-circle {
                    position: absolute;
                    width: 400px;
                    height: 400px;
                    border-radius: 50%;
                    filter: blur(80px);
                    opacity: 0.6;
                    animation: moveLiquid 15s infinite alternate ease-in-out;
                }

                .liquid-circle:nth-child(1) {
                    background: rgba(255, 99, 132, 0.7);
                    top: 10%;
                    left: -5%;
                    transform: scale(1.2);
                    animation-delay: 0s;
                }

                .liquid-circle:nth-child(2) {
                    background: rgba(54, 162, 235, 0.7);
                    bottom: 5%;
                    right: 10%;
                    transform: scale(0.9);
                    animation-delay: 5s;
                }

                .liquid-circle:nth-child(3) {
                    background: rgba(255, 206, 86, 0.7);
                    top: 40%;
                    left: 30%;
                    transform: scale(1.5);
                    animation-delay: 10s;
                }

                @keyframes moveLiquid {
                    0% { transform: translate(0, 0) scale(1.2) rotate(0deg); }
                    50% { transform: translate(50px, -50px) scale(1.3) rotate(180deg); }
                    100% { transform: translate(-50px, 50px) scale(1.2) rotate(360deg); }
                }

                .glass-card {
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 16px;
                    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    color: white;
                    transition: transform 0.3s, box-shadow 0.3s;
                }

                .glass-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 8px 50px rgba(255, 255, 255, 0.2);
                }

                .nav-btn {
                    padding: 0.75rem 1.5rem;
                    border-radius: 12px;
                    font-weight: 700;
                    color: #ccc;
                    transition: all 0.3s;
                    flex-grow: 1;
                    text-align: center;
                }

                .nav-btn:hover {
                    color: white;
                    background: rgba(255, 255, 255, 0.15);
                }

                .active-nav-btn {
                    background: rgba(255, 255, 255, 0.3);
                    color: white;
                    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
                }

                .lesson-btn-primary {
                    background-color: #ffffff;
                    color: #1a1a2e;
                    transition: background-color 0.2s;
                }

                .lesson-btn-primary:hover {
                    background-color: #e5e7eb;
                }

                .lesson-btn-secondary {
                    border: 1px solid rgba(255, 255, 255, 0.5);
                    background: rgba(255, 255, 255, 0.1);
                    color: white;
                    transition: background-color 0.2s;
                }

                .lesson-btn-secondary:hover {
                    background: rgba(255, 255, 255, 0.25);
                }
            `}</style>

            {/* Liquid Background */}
            <div className="liquid-bg">
                <div className="liquid-circle"></div>
                <div className="liquid-circle"></div>
                <div className="liquid-circle"></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 p-4 sm:p-8">
                <header className="text-center mb-10 pt-4">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
                        🇰🇷 ကိုရီးယားစာ လေ့လာရန် သင်ခန်းစာများ
                    </h1>
                    <p className="text-xl text-gray-300 mt-2">
                        သင်ယူမှု ခရီးစဉ်ကို အစဉ်လိုက် စတင်လိုက်ပါ။
                    </p>
                    <h1 className="text-4xl sm:text-5xl mt-2 font-extrabold text-white leading-tight">
                        Donate By KP Korea language Center
                        </h1>
                </header>

                {/* Navigation */}
                <nav id="main-nav" className=" hidden justify-center mb-10 max-w-lg mx-auto p-2 glass-card rounded-xl">
                    <button id="nav-learn" className="nav-btn active-nav-btn">သင်ယူရန် (Learn)</button>
                    <button id="nav-test" className="nav-btn">လေ့ကျင့်ရန် (Test)</button>
                </nav>

                {/* Learn Content */}
                <div id="learn-content">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        
                        {/* Lesson 1: Hangul */}
                        <div className="glass-card block p-6">
                            <div className="text-2xl font-extrabold mb-2 text-[#FFD700]">Lesson 01</div>
                            <h3 className="text-3xl font-bold mb-3">ဟန်ဂုလ် (Hangul) စတင်ခြင်း</h3>
                            <p className="text-gray-200">
                                ကိုရီးယား အက္ခရာ၊ ဗျည်း၊ သရများ၏ ပုံသဏ္ဍာန်နှင့် အခြေခံ အသံထွက်များ။
                            </p>
                            
                            {/* Two Buttons with Routes */}
                            <div className="flex space-x-3 mt-8">
                                <a href="#learn/lesson/1" className="lesson-btn-primary flex-1 text-sm py-2 px-3 rounded-lg font-semibold text-center">
                                    စတင်ရန် →
                                </a>
                                <a href="#test/lesson/1" className="lesson-btn-secondary flex-1 text-sm py-2 px-3 rounded-lg font-semibold text-center">
                                    Quiz/လေ့ကျင့်
                                </a>
                            </div>
                        </div>

                        {/* Lesson 2: Simple Vowels */}
                        <div className="glass-card block p-6">
                            <div className="text-2xl font-extrabold mb-2 text-[#4682B4]">Lesson 02</div>
                            <h3 className="text-3xl font-bold mb-3">ရိုးရှင်းသော သရ ၁၀ လုံး</h3>
                            <p className="text-gray-200">
                                အခြေခံ သရ (Simple Vowels) များ၏ အသံထွက်ပုံနှင့် ၎င်းတို့ ပေါင်းစပ်ပုံ နိယာမ။
                            </p>
                            
                            {/* Two Buttons with Routes */}
                            <div className="flex space-x-3 mt-8">
                                <a href="/cardTwoA" className="lesson-btn-primary flex-1 text-sm py-2 px-3 rounded-lg font-semibold text-center">
                                    စတင်ရန် →
                                </a>
                                <a href="/voicechange" className="lesson-btn-secondary flex-1 text-sm py-2 px-3 rounded-lg font-semibold text-center">
                                    Quiz/လေ့ကျင့်
                                </a>
                            </div>
                        </div>

                        {/* Lesson 3: Compound Consonants & Vowels */}
                        <div className="glass-card block p-6">
                            <div className="text-2xl font-extrabold mb-2 text-[#3CB371]">Lesson 03</div>
                            <h3 className="text-3xl font-bold mb-3">ဗျည်း/သရ တွဲများ (Compound)</h3>
                            <p className="text-gray-200">
                                ဗျည်းတွဲများနှင့် အသံပြင်း (Aspiration)၊ အသံနှစ်ထပ် သရ (Diphthongs) များ။
                            </p>
                            
                            {/* Two Buttons with Routes */}
                            <div className="flex space-x-3 mt-8">
                                <a href="#learn/lesson/3" className="lesson-btn-primary flex-1 text-sm py-2 px-3 rounded-lg font-semibold text-center">
                                    စတင်ရန် →
                                </a>
                                <a href="#test/lesson/3" className="lesson-btn-secondary flex-1 text-sm py-2 px-3 rounded-lg font-semibold text-center">
                                    Quiz/လေ့ကျင့်
                                </a>
                            </div>
                        </div>

                        {/* Lesson 4: Batchim */}
                        <div className="glass-card block p-6">
                            <div className="text-2xl font-extrabold mb-2 text-[#FF6347]">Lesson 04</div>
                            <h3 className="text-3xl font-bold mb-3">ဗတ်ချင်မ် (Batchim)</h3>
                            <p className="text-gray-200">
                                အောက်ခံ ဗျည်းများ၏ အသံထွက်ပြောင်းလဲမှုများနှင့် စကားလုံးပေါင်းစပ်ခြင်း။
                            </p>
                            
                            {/* Two Buttons with Routes */}
                            <div className="flex space-x-3 mt-8">
                                <a href="#learn/lesson/4" className="lesson-btn-primary flex-1 text-sm py-2 px-3 rounded-lg font-semibold text-center">
                                    စတင်ရန် →
                                </a>
                                <a href="#test/lesson/4" className="lesson-btn-secondary flex-1 text-sm py-2 px-3 rounded-lg font-semibold text-center">
                                    Quiz/လေ့ကျင့်
                                </a>
                            </div>
                        </div>
                        
                        {/* Lesson 5: Basic Greetings */}
                        <div className="glass-card block p-6">
                            <div className="text-2xl font-extrabold mb-2 text-[#EE82EE]">Lesson 05</div>
                            <h3 className="text-3xl font-bold mb-3">အခြေခံ နှုတ်ဆက်ခြင်း</h3>
                            <p className="text-gray-200">
                                '안녕하세요' နှင့် အခြား နေ့စဉ် သုံးစွဲသော နှုတ်ဆက်စကားလုံးများ။
                            </p>
                            
                            {/* Two Buttons with Routes */}
                            <div className="flex space-x-3 mt-8">
                                <a href="#learn/lesson/5" className="lesson-btn-primary flex-1 text-sm py-2 px-3 rounded-lg font-semibold text-center">
                                    စတင်ရန် →
                                </a>
                                <a href="#test/lesson/5" className="lesson-btn-secondary flex-1 text-sm py-2 px-3 rounded-lg font-semibold text-center">
                                    Quiz/လေ့ကျင့်
                                </a>
                            </div>
                        </div>

                        {/* Lesson 6: Basic Grammar */}
                        <div className="glass-card block p-6">
                            <div className="text-2xl font-extrabold mb-2 text-[#00FFFF]">Lesson 06</div>
                            <h3 className="text-3xl font-bold mb-3">အခြေခံ သဒ္ဒါ (Grammar)</h3>
                            <p className="text-gray-200">
                                နာမ်စားများ၊ စကားလုံး ပုံစံများ (Particle) နှင့် ရိုးရှင်းသော ဝါကျတည်ဆောက်ပုံ။
                            </p>
                            
                            {/* Two Buttons with Routes */}
                            <div className="flex space-x-3 mt-8">
                                <a href="#learn/lesson/6" className="lesson-btn-primary flex-1 text-sm py-2 px-3 rounded-lg font-semibold text-center">
                                    စတင်ရန် →
                                </a>
                                <a href="#test/lesson/6" className="lesson-btn-secondary flex-1 text-sm py-2 px-3 rounded-lg font-semibold text-center">
                                    Quiz/လေ့ကျင့်
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Test Content */}
                <div id="test-content" className="hidden max-w-6xl mx-auto">
                    <div className="glass-card p-10 text-center">
                        <h3 className="text-4xl font-bold mb-4">📝 လေ့ကျင့်ခန်းများ ကဏ္ဍ</h3>
                        <p className="text-xl text-gray-200 mb-4">
                            ဒီနေရာမှာ သင်ခန်းစာများ (Lesson) အတွက် လေ့ကျင့်ခန်း (Quiz) များကို ထည့်သွင်းပေးသွားပါမည်။
                        </p>
                        <div className="text-left text-gray-300 max-w-md mx-auto">
                            <p className="mb-2"><strong>လက်ရှိ လေ့ကျင့်နိုင်သော အရာများ:</strong></p>
                            <ul className="list-disc list-inside">
                                <li>Hangul ဗျည်း/သရ မှတ်ဉာဏ် စစ်ဆေးခြင်း</li>
                                <li>Batchim စည်းမျဉ်းများ စစ်ဆေးခြင်း</li>
                                <li>ဝါကျတည်ဆောက်မှု Quiz များ</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <footer className="text-center mt-12 py-4 text-gray-400">
                    <p>Made with love for Korean Learners | ကိုရီးယားစာ လေ့လာသူများအတွက်</p>
                </footer>
            </div>
        </div>
    );
};

export default KoreanLessons;