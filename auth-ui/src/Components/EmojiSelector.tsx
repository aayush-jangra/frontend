import { useState } from "react";
import { emojis } from "../schema/constant.schema";

export const EmojiSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState("💬");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectEmoji = (emoji: string) => {
    setSelectedEmoji(emoji);
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-xs"
          onClick={() => {
            setIsOpen(false);
          }}
        ></div>
      )}
      <div className="relative inline-block">
        <button
          onClick={toggleDropdown}
          className="rounded-full h-12 w-12 bg-post text-2xl"
        >
          {selectedEmoji}
        </button>
        {isOpen && (
          <div className="absolute z-10 mt-3 w-64 border-primary border bg-post rounded-lg shadow-lg p-4 grid grid-cols-6 gap-2">
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
        )}
      </div>
    </>
  );
};
