import { ChangeEvent, useEffect, useState } from "react";
import { Contributor, mockContributors } from "../mockdata/data";

const initialFormData: Contributor = {
  contributorId: 0,
  contributorName: "",
  contributorAlias: "",
  contributorAvatarUrl: "",
  contributorRole: "MainArtist",
};
const Dialog = ({
  contributorId,
  closeForm,
  listContributorRole,
  handleSaveForm,
}: {
  contributorId: number;
  closeForm: () => void;
  listContributorRole: string[];
  handleSaveForm: (contributor: Contributor) => void;
}) => {
  const [contributor, setContributor] = useState<Contributor>(initialFormData);

  const handleChangeForm = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    event &&
      setContributor((prev) => ({
        ...prev,
        [event.target.name]: event.target.value,
      }));
  };

  useEffect(() => {
    if (contributorId) {
      const result = mockContributors.find(
        (contributor) => contributor.contributorId === contributorId
      );
      result && setContributor(result);
    }
  }, [contributorId]);

  return (
    <div
      className={`${
        !contributorId && "hidden"
      }  overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
    >
      <div className="relative p-4 mx-auto w-full max-w-2xl max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Form Contributor
            </h3>
            <button
              onClick={closeForm}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
          <div className="p-4 md:p-5 space-y-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="">Contributor name:</label>
              <input
                type="text"
                name="contributorName"
                placeholder="Contributor Name"
                value={contributor?.contributorName || ""}
                className="text-gray-600 p-2 bg-slate-300 rounded"
                onChange={(event) => handleChangeForm(event)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Contributor alias:</label>
              <input
                type="text"
                name="contributorAlias"
                value={contributor?.contributorAlias || ""}
                className="text-gray-600 p-2 bg-slate-300 rounded"
                onChange={(event) => handleChangeForm(event)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="">contributorRole:</label>
              <select
                className="text-gray-600 p-2 bg-slate-300 rounded"
                name="contributorRole"
                value={contributor?.contributorRole || ""}
                onChange={(event) => handleChangeForm(event)}
              >
                {listContributorRole.map((contributorRole) => (
                  <option
                    value={contributorRole}
                    className="text-gray-600"
                    key={contributorRole}
                  >
                    {contributorRole}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              onClick={() => {
                handleSaveForm(contributor);
                setContributor(initialFormData);
                closeForm();
              }}
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
            <button
              onClick={() => {
                setContributor(initialFormData);
                closeForm();
              }}
              type="button"
              className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
