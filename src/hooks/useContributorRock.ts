import { useState } from "react";
import { Contributor } from "../mockdata/data";

export default function useContributorRock() {
  const [contributorRock, setContributorRock] = useState<Contributor[]>([]);

  const handleDeleteRock = (id: number) => {
    setContributorRock((prev) =>
      prev.filter((contributor) => contributor.contributorId !== id)
    );
  };

  const handleAddRock = (data: Contributor) => {
    if (
      !contributorRock.some((item) => item.contributorId === data.contributorId)
    ) {
      if (
        data.contributorRole === "FeaturedArtist" ||
        data.contributorRole === "MainArtist"
      ) {
        const result = contributorRock.filter(
          (item) =>
            item.contributorRole === "FeaturedArtist" ||
            item.contributorRole === "MainArtist"
        );
        result.length < 3
          ? setContributorRock((prev) => [...prev, data])
          : alert(
              "Main Artist and Featured Artist combined must not exceed 3 contributors"
            );
      } else {
        setContributorRock((prev) => [...prev, data]);
      }
    }
  };

  const handleSaveEditRock = (data: Contributor) => {
    setContributorRock((prev) =>
      prev.map((contributor) =>
        contributor.contributorId === data.contributorId
          ? { ...data }
          : contributor
      )
    );
  };

  const handleValidateFormRock = () => {
    if (
      contributorRock.filter((item) => item.contributorRole === "Composer")
        .length > 0 &&
      contributorRock.filter((item) => item.contributorRole === "Lyricist")
        .length > 0 &&
      contributorRock.filter((item) => item.contributorRole === "MainArtist")
        .length > 0 &&
      contributorRock.filter((item) => item.contributorRole === "Mixer")
        .length > 0 &&
      contributorRock.filter(
        (item) => item.contributorRole === "MusicPublisher"
      ).length > 0 &&
      contributorRock.filter((item) => item.contributorRole === "Producer")
        .length > 0
    ) {
      return "Save success";
    } else {
      return "All fields are required except for Featured Artist and Remixer.";
    }
  };

  return {
    contributorRock,
    handleDeleteRock,
    handleSaveEditRock,
    handleAddRock,
    handleValidateFormRock,
  };
}
