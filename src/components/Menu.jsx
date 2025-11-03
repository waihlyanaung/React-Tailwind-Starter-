import React from "react";
import { useState } from "react";

const Menu = ({ onSelectCategory, currentCategory }) => {
  const menuItems = [
    { key: "consonants", label: "ဗျည်းများ" },
    { key: "vowels", label: "သရများ" },
    { key: "complexVowels", label: "သရအတွဲများ" },
    { key: "finalConsonants", label: "အသတ် (ဗျည်းများ)" },
    { key: "syllables", label: "စပ်လုံးများ" },
  ];

  return (
    <div className="bg-gray-700 p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold text-white mb-4">ကိုရီးယား သင်ခန်းစာများ</h2>
      <ul className="space-y-2">
        {menuItems.map((item) => (
          <li key={item.key}>
            <button
              onClick={() => onSelectCategory(item.key)}
              className={`w-full text-left px-4 py-2 rounded-lg transition ${
                currentCategory === item.key
                  ? "bg-blue-500 text-white"
                  : "bg-gray-600 text-gray-300 hover:bg-gray-500"
              }`}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;