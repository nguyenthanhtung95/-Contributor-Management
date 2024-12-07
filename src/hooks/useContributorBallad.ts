import { useState } from "react";
import { Contributor } from "../mockdata/data";

export default function useContributorBallad() {
  const [contributorBallad, setContributorBallad] = useState<Contributor[]>([]);

  const handleDeleteBallad = (id: number) => {
    setContributorBallad((prev) =>
      prev.filter((contributor) => contributor.contributorId !== id)
    );
  };

  const handleAddBallad = (data: Contributor) => {
    if (
      !contributorBallad.some(
        (item) => item.contributorId === data.contributorId
      )
    ) {
      if (
        data.contributorRole === "FeaturedArtist" ||
        data.contributorRole === "MainArtist"
      ) {
        const result = contributorBallad.filter(
          (item) =>
            item.contributorRole === "FeaturedArtist" ||
            item.contributorRole === "MainArtist"
        );
        result.length < 3
          ? setContributorBallad((prev) => [...prev, data])
          : alert(
              "Main Artist and Featured Artist combined must not exceed 3 contributors"
            );
      } else {
        setContributorBallad((prev) => [...prev, data]);
      }
    }
  };

  const handleSaveEditBallad = (data: Contributor) => {
    setContributorBallad((prev) =>
      prev.map((contributor) =>
        contributor.contributorId === data.contributorId
          ? { ...data }
          : contributor
      )
    );
  };

  const handleValidateFormBallad = () => {
    if (
      contributorBallad.filter((item) => item.contributorRole === "Composer")
        .length > 0 &&
      contributorBallad.filter((item) => item.contributorRole === "Lyricist")
        .length > 0 &&
      contributorBallad.filter((item) => item.contributorRole === "MainArtist")
        .length > 0 &&
      contributorBallad.filter((item) => item.contributorRole === "Mixer")
        .length > 0 &&
      contributorBallad.filter(
        (item) => item.contributorRole === "MusicPublisher"
      ).length > 0 &&
      contributorBallad.filter((item) => item.contributorRole === "Producer")
        .length > 0
    ) {
      return "Save success";
    } else {
      return "All fields are required except for Featured Artist and Remixer.";
    }
  };

  return {
    contributorBallad,
    handleDeleteBallad,
    handleSaveEditBallad,
    handleAddBallad,
    handleValidateFormBallad,
  };
}
