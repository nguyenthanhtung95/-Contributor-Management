import { useState } from "react";
import { Contributor, mockContributors } from "../mockdata/data";

export default function useContributorDefault() {
  const [contributorDefault, setContributorDefault] =
    useState<Contributor[]>(mockContributors);

  const handleSaveForm = (data: Contributor) => {
    const isHas = contributorDefault.some(
      (contributor) => contributor.contributorId === data.contributorId
    );
    isHas
      ? setContributorDefault((prev) =>
          prev.map((contributor) =>
            contributor.contributorId === data.contributorId
              ? { ...data }
              : contributor
          )
        )
      : setContributorDefault((prev) => [...prev, data]);
    console.log("data", data, isHas);
  };
  return { contributorDefault, handleSaveForm };
}
