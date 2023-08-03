// profile-modal.tsx
import { useMemberstackModal } from "@memberstack/react";
import { useEffect, useState } from "react";

export function useProfileModal() {
  const { openModal, hideModal } = useMemberstackModal();
  const [shouldOpen, setShouldOpen] = useState(false);

  const openProfileModal = () => {
    setShouldOpen(true);
  };

  useEffect(() => {
    if (shouldOpen) {
      openModal({
        type: "PROFILE",
      });
      setShouldOpen(false); // set the state back to false after opening
    }
  }, [shouldOpen]);

  return openProfileModal;
}
