import { useEffect, useRef, useState } from "react";
import { emojis } from "../constants/emojis";

/**
 * EmojiSelector Component
 *
 * This component renders an emoji selector dropdown that allows users to pick an emoji.
 * The selected emoji is displayed as a button, and clicking the button toggles the dropdown.
 * The dropdown automatically closes when the user clicks outside of it or presses the Escape key.
 */
export const EmojiSelector = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Ref to track if the component is loading for the first time to avoid animation on page render
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

  /**
   * Effect hook to handle closing the emoji dropdown when the Escape key is pressed.
   * The event listener is only added when the dropdown is open, and it is removed when the component is unmounted or the dropdown is closed.
   */
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        // Close menu on Escape key press
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isOpen]);

  return (
    <>
      {/* Background overlay, scales in/out based on isOpen state */}
      <div
        className={`fixed inset-0 ${
          isOpen ? "scale-100" : "animate-quickScaleDown"
        } ${firstLoad.current ? "scale-0" : ""}`}
      >
        {/* Clickable backdrop, closes the dropdown when clicked */}
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
          aria-label={`Emoji Selector. Selected emoji: ${selectedEmoji}`} // Accessibility: describes the button and the selected emoji
          onClick={toggleDropdown}
          className="rounded-full h-12 w-12 bg-post text-2xl"
        >
          {selectedEmoji}
        </button>

        <div
          tabIndex={1}
          className={`absolute z-10 mt-3 w-64 border-primary border bg-post rounded-lg shadow-lg p-4 grid grid-cols-6 gap-2 ${
            isOpen ? "animate-fadeIn" : "animate-fadeOut hidden"
          } ${firstLoad.current ? "scale-0" : ""}`}
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
