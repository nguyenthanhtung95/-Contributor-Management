import { useState } from "react";
import { Contributor } from "../mockdata/data";
import ContributorCard from "./ContributorCard";
import TitleHead from "./TitleHead";

export default function Card({
  contributorRole,
  contributors,
  contributorDefault,
  handleEditForm,
  handleDelete,
  handleAdd,
}: {
  contributorRole: string;
  contributors: Contributor[];
  contributorDefault: Contributor[];
  handleEditForm: (id: number) => void;
  handleDelete: (id: number) => void;
  handleAdd: (id: Contributor) => void;
}) {
  const [queryText, setQueryText] = useState("");
  const handleQueryContributors = () =>
    contributorDefault
      .filter((contributor) => contributor.contributorRole === contributorRole)
      .filter(
        (query) =>
          String(query.contributorId).includes(queryText) ||
          query.contributorName?.toLowerCase().includes(queryText.toLowerCase())
      );

  return (
    <div className="flex flex-col gap-2 bg-black p-2 rounded text-gray-400 ">
      <TitleHead
        title={contributorRole}
        isRequired={[
          "MainArtist",
          "Composer",
          "Lyricist",
          "MusicPublisher",
          "Producer",
          "Mixer",
        ].includes(contributorRole)}
      />
      <div className="flex gap-2 flex-wrap">
        {contributors.map((contributor) => (
          <ContributorCard
            contributor={contributor}
            key={contributor.contributorId}
            handleDelete={handleDelete}
            handleEdit={handleEditForm}
          />
        ))}
      </div>
      {!contributors.length && <p>No main artist selected</p>}
      <div className="flex row justify-start items-center p-3 gap-2  border-solid border-2 border-neutral-700 bg-black ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="20"
          height="20"
          viewBox="0,0,255.99536,255.99536"
        >
          <g
            fill-opacity="0.54902"
            fill="#eae5e5"
            fill-rule="nonzero"
            stroke="none"
            stroke-width="1"
            stroke-linecap="butt"
            stroke-linejoin="miter"
            stroke-miterlimit="10"
            stroke-dasharray=""
            stroke-dashoffset="0"
            font-family="none"
            font-weight="none"
            font-size="none"
            text-anchor="none"
            fontStyle="mix-blend-mode: normal"
          >
            <g transform="scale(8.53333,8.53333)">
              <path d="M13,3c-5.511,0 -10,4.489 -10,10c0,5.511 4.489,10 10,10c2.39651,0 4.59738,-0.85101 6.32227,-2.26367l5.9707,5.9707c0.25082,0.26124 0.62327,0.36648 0.97371,0.27512c0.35044,-0.09136 0.62411,-0.36503 0.71547,-0.71547c0.09136,-0.35044 -0.01388,-0.72289 -0.27512,-0.97371l-5.9707,-5.9707c1.41266,-1.72488 2.26367,-3.92576 2.26367,-6.32227c0,-5.511 -4.489,-10 -10,-10zM13,5c4.43012,0 8,3.56988 8,8c0,4.43012 -3.56988,8 -8,8c-4.43012,0 -8,-3.56988 -8,-8c0,-4.43012 3.56988,-8 8,-8z"></path>
            </g>
          </g>
        </svg>
        <input
          type="text"
          className="bg-black outline-none w-full"
          placeholder="Typing name or id of artist here"
          value={queryText}
          onChange={(e) => setQueryText(e.target.value)}
        />
        <button onClick={() => handleEditForm(contributorDefault.length + 1)}>
          +Add
        </button>
      </div>
      <div className="w-full bg-white">
        <ul className="list-none">
          {handleQueryContributors().map((contributor) => (
            <li
              className="hover:text-black p-1 cursor-pointer bg-gray-500"
              onClick={() => handleAdd(contributor)}
            >
              {contributor.contributorName}
            </li>
          ))}
        </ul>
      </div>
      <p>
        {contributors.length}
        &nbsp;selected
      </p>
    </div>
  );
}
