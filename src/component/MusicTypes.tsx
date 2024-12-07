import { ButtonType } from "../types";
import Button from "./Button";
import TitleHead from "./TitleHead";

export default function MusicTypes({
  buttons,
  handleChangeActive,
}: {
  buttons: ButtonType[];
  handleChangeActive: (text: string) => void;
}) {
  return (
    <div className="flex flex-col">
      <TitleHead title="Music type" isRequired />
      <div className="flex gap-2">
        {buttons.map((button) => (
          <div
            onClick={() => handleChangeActive(button.text)}
            key={button.text}
          >
            <Button {...button} />
          </div>
        ))}
      </div>
    </div>
  );
}
