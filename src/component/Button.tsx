import { ButtonType } from "../types";

export default function Button({ text, isActive }: ButtonType) {
  return (
    <button
      className={`px-12 py-4 text-gray-400 border-solid border-2 border-neutral-700 bg-black w-[15.5rem] rounded hover:border-white ${
        isActive && "border-white"
      }`}
    >
      {text}
    </button>
  );
}
