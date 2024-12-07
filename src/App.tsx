import { useState } from "react";
import Card from "./component/Card";
import Dialog from "./component/Dialog";
import MusicTypes from "./component/MusicTypes";

import { mockContributors } from "./mockdata/data";
import useMusicType from "./hooks/useMusicType";
import useContributorDefault from "./hooks/useContributorDefault";
import useContributorInstrumental from "./hooks/useContributorInstrumental";
import useContributorBallad from "./hooks/useContributorBallad";
import useContributorRock from "./hooks/useContributorRock";

const listContributorRole = Array.from(
  new Set(mockContributors.map((role) => role.contributorRole))
);

function App() {
  const [contributorId, setContributorId] = useState(0);
  const { buttons, handleChangeActive } = useMusicType();
  const { contributorDefault, handleSaveForm } = useContributorDefault();
  const {
    contributorInstrumental,
    handleDeleteInstrumental,
    handleAddInstrumental,
    handleValidateFormInstrumental,
  } = useContributorInstrumental();

  const {
    contributorBallad,
    handleDeleteBallad,
    handleAddBallad,
    handleValidateFormBallad,
  } = useContributorBallad();

  const {
    contributorRock,
    handleDeleteRock,
    handleAddRock,
    handleValidateFormRock,
  } = useContributorRock();

  const handleCloseForm = () => {
    setContributorId(0);
  };

  const handleEditForm = (id: number) => {
    setContributorId(id);
  };

  const handleActiveMusicComponent = () => {
    const isActiveMusicType = buttons.find((button) => button.isActive)?.text!;
    switch (isActiveMusicType) {
      case "Instrumental":
        return (
          <>
            {listContributorRole.map((contributorRole) => (
              <Card
                key={contributorRole}
                contributorRole={contributorRole}
                contributors={contributorInstrumental.filter(
                  (contributor) =>
                    contributor.contributorRole === contributorRole
                )}
                contributorDefault={contributorDefault}
                handleEditForm={handleEditForm}
                handleDelete={handleDeleteInstrumental}
                handleAdd={handleAddInstrumental}
              />
            ))}
          </>
        );

      case "Ballad":
        return (
          <>
            {listContributorRole.map((contributorRole) => (
              <Card
                key={contributorRole}
                contributorRole={contributorRole}
                contributors={contributorBallad.filter(
                  (contributor) =>
                    contributor.contributorRole === contributorRole
                )}
                contributorDefault={contributorDefault}
                handleEditForm={handleEditForm}
                handleDelete={handleDeleteBallad}
                handleAdd={handleAddBallad}
              />
            ))}
          </>
        );
      case "Rock":
        return (
          <>
            {listContributorRole.map((contributorRole) => (
              <Card
                key={contributorRole}
                contributorRole={contributorRole}
                contributors={contributorRock.filter(
                  (contributor) =>
                    contributor.contributorRole === contributorRole
                )}
                contributorDefault={contributorDefault}
                handleEditForm={handleEditForm}
                handleDelete={handleDeleteRock}
                handleAdd={handleAddRock}
              />
            ))}
          </>
        );
      default:
        null;
    }
  };

  const handleSave = () => {
    const isActiveMusicType = buttons.find((button) => button.isActive)?.text!;
    switch (isActiveMusicType) {
      case "Instrumental":
        return alert(handleValidateFormInstrumental());
      case "Ballad":
        return alert(handleValidateFormBallad());
      case "Rock":
        return alert(handleValidateFormRock());
      default:
        break;
    }
  };

  return (
    <>
      <div className="container mx-auto my-4 flex flex-col gap-2">
        <MusicTypes buttons={buttons} handleChangeActive={handleChangeActive} />
        <div className="grid gap-4 sm:grid-cols-2  grid-cols-1">
          {handleActiveMusicComponent()}
        </div>
        <button
          className="px-12 py-4 text-black font-semibold border-2 border-neutral-700 bg-white w-[15rem] rounded-lg self-end"
          onClick={() => handleSave()}
        >
          Save
        </button>
      </div>
      <Dialog
        contributorId={contributorId}
        closeForm={handleCloseForm}
        listContributorRole={listContributorRole}
        handleSaveForm={handleSaveForm}
      />
    </>
  );
}

export default App;
