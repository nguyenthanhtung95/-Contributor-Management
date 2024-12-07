import { useState } from "react";
import { ButtonType } from "../types";

export default function useMusicType() {
  const [buttons, setButton] = useState<ButtonType[]>([
    { text: "Instrumental", isActive: true },
    { text: "Ballad", isActive: false },
    { text: "Rock", isActive: false },
  ]);

  const handleChangeActive = (text: string) => {
    setButton((prev) =>
      prev.map((button) =>
        button.text === text
          ? { ...button, isActive: true }
          : { ...button, isActive: false }
      )
    );
  };
  return { buttons, handleChangeActive };
}
