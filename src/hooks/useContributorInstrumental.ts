import { useState } from "react";
import { Contributor } from "../mockdata/data";

export default function useContributorInstrumental() {
  const [contributorInstrumental, setContributorInstrumental] = useState<
    Contributor[]
  >([]);

  const handleDeleteInstrumental = (id: number) => {
    setContributorInstrumental((prev) =>
      prev.filter((contributor) => contributor.contributorId !== id)
    );
  };

  const handleAddInstrumental = (data: Contributor) => {
    if (
      !contributorInstrumental.some(
        (item) => item.contributorId === data.contributorId
      )
    ) {
      if (
        data.contributorRole === "FeaturedArtist" ||
        data.contributorRole === "MainArtist"
      ) {
        const result = contributorInstrumental.filter(
          (item) =>
            item.contributorRole === "FeaturedArtist" ||
            item.contributorRole === "MainArtist"
        );
        result.length < 3
          ? setContributorInstrumental((prev) => [...prev, data])
          : alert(
              "Main Artist and Featured Artist combined must not exceed 3 contributors"
            );
      } else {
        setContributorInstrumental((prev) => [...prev, data]);
      }
    }
  };

  const handleValidateFormInstrumental = () => {
    if (
      contributorInstrumental.filter(
        (item) => item.contributorRole === "Lyricist"
      ).length > 0
    ) {
      return "If the selected music type is Instrumental, the Lyricist field should not be required.";
    }

    if (
      contributorInstrumental.filter(
        (item) => item.contributorRole === "Composer"
      ).length > 0 &&
      contributorInstrumental.filter(
        (item) => item.contributorRole === "MainArtist"
      ).length > 0 &&
      contributorInstrumental.filter((item) => item.contributorRole === "Mixer")
        .length > 0 &&
      contributorInstrumental.filter(
        (item) => item.contributorRole === "MusicPublisher"
      ).length > 0 &&
      contributorInstrumental.filter(
        (item) => item.contributorRole === "Producer"
      ).length > 0
    ) {
      return "Save success";
    } else {
      return "All fields are required except for Featured Artist and Remixer.";
    }
  };

  return {
    contributorInstrumental,
    handleDeleteInstrumental,
    handleAddInstrumental,
    handleValidateFormInstrumental,
  };
}
