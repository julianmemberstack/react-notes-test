// signup-modal.tsx
import { useMemberstackModal } from "@memberstack/react";
import { useEffect, useState } from "react";

export function useSignupModal() {
  const { openModal, hideModal } = useMemberstackModal();
  const [shouldOpen, setShouldOpen] = useState(false);

  const openSignupModal = () => {
    setShouldOpen(true);
  }

  useEffect(() => {
    if (shouldOpen) {
      openModal({
        type: "SIGNUP",
        planId: ["pln_fake-plan-wj8s0dka"],
      }).then(({ data, type }) => {
        // Check if data and redirect are defined before attempting to redirect
        if (data && data.redirect) {
          console.log('data', data);
          console.log('type: ', type);
          const redirectUrl = data.redirect;
          window.location.href = redirectUrl;
        } else {
          // Handle the case where signup was not completed, if necessary
          console.log('Signup was not completed or data was in an unexpected format');
        }
        setShouldOpen(false); // set the state back to false after opening
      });
    }
  }, [shouldOpen]);

  return openSignupModal;
}
