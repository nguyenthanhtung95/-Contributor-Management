import { useState } from "react";
import { Contributor } from "../mockdata/data";

export default function ContributorCard({
  contributor,
  handleEdit,
  handleDelete,
}: {
  contributor: Contributor;
  handleEdit: (id: number) => void;
  handleDelete: (id: number) => void;
}) {
  const [openAction, setOpenAction] = useState(false);
  return (
    <div className="flex items-center bg-gray-800 rounded w-[250px] p-2">
      <div className="flex-shrink-0">
        <img
          className="w-8 h-8 rounded-full"
          src={contributor?.contributorAvatarUrl || ""}
          alt={contributor?.contributorName || ""}
        />
      </div>
      <div className=" min-w-0 ms-4 flex-1">
        <p className="text-sm font-medium text-gray-400 truncate dark:text-white">
          {contributor?.contributorName || ""} (ID: {contributor.contributorId})
        </p>
        {contributor.contributorAlias && (
          <p className="text-sm text-gray-600 truncate dark:text-gray-400">
            Alias:&nbsp;{contributor.contributorAlias}
          </p>
        )}
      </div>
      <div
        className="cursor-pointer relative"
        onClick={() => setOpenAction((prev) => !prev)}
      >
        <svg
          width="30px"
          height="30px"
          viewBox="0 0 24.00 24.00"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#f5f0f0"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke="#CCCCCC"
            stroke-width="0.384"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M12 12.5C12.2761 12.5 12.5 12.2761 12.5 12C12.5 11.7239 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.7239 11.5 12C11.5 12.2761 11.7239 12.5 12 12.5Z"
              fill="#fafafa"
              stroke="#fafafa"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M12 18.5C12.2761 18.5 12.5 18.2761 12.5 18C12.5 17.7239 12.2761 17.5 12 17.5C11.7239 17.5 11.5 17.7239 11.5 18C11.5 18.2761 11.7239 18.5 12 18.5Z"
              fill="#fafafa"
              stroke="#fafafa"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M12 6.5C12.2761 6.5 12.5 6.27614 12.5 6C12.5 5.72386 12.2761 5.5 12 5.5C11.7239 5.5 11.5 5.72386 11.5 6C11.5 6.27614 11.7239 6.5 12 6.5Z"
              fill="#fafafa"
              stroke="#fafafa"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
        </svg>
        {openAction && (
          <div className="absolute flex flex-col bg-white rounded p-2 text-gray-600">
            <ul className="list-none cursor-pointer">
              <li
                onClick={() => handleEdit(contributor.contributorId)}
                className="hover:text-black p-1"
              >
                Edit
              </li>
              <li
                onClick={() => handleDelete(contributor.contributorId)}
                className="hover:text-black p-1"
              >
                Delete
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
