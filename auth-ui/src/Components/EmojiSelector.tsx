import { useRef, useState } from "react";
import { emojis } from "../constants/emojis";

export const EmojiSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const firstLoad = useRef(true);
  const [selectedEmoji, setSelectedEmoji] = useState("💬");

  const toggleDropdown = () => {
    firstLoad.current = false;
    setIsOpen(!isOpen);
  };

  const selectEmoji = (emoji: string) => {
    setSelectedEmoji(emoji);
    setIsOpen(false);
  };

  return (
    <>
      <div
        className={`fixed inset-0 ${
          isOpen ? "scale-100" : "animate-quickScaleDown"
        }
        ${firstLoad.current ? "scale-0" : ""}`}
      >
        <div
          className={`fixed inset-0 bg-black/50 backdrop-blur-xs ${
            isOpen ? "animate-fadeIn" : "animate-fadeOut"
          }`}
          onClick={() => {
            setIsOpen(false);
          }}
        ></div>
      </div>
      <div className="relative inline-block">
        <button
          aria-label={`Emoji Selector. Selected emoji: ${selectedEmoji}`}
          onClick={toggleDropdown}
          className="rounded-full h-12 w-12 bg-post text-2xl"
        >
          {selectedEmoji}
        </button>
        <div
          tabIndex={1}
          className={`absolute z-10 mt-3 w-64 border-primary border bg-post rounded-lg shadow-lg p-4 grid grid-cols-6 gap-2 ${
            isOpen ? "animate-fadeIn" : "animate-fadeOut hidden"
          }
          ${firstLoad.current ? "scale-0" : ""}`}
        >
          {emojis.map((emoji) => (
            <button
              key={emoji}
              onClick={() => selectEmoji(emoji)}
              className="text-2xl hover:bg-white rounded flex items-center justify-center"
            >
              {emoji}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
