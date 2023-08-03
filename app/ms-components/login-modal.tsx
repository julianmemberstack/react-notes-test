// login-modal.tsx
import { useMemberstackModal } from "@memberstack/react";
import { useEffect, useState } from "react";

export function useLoginModal() {
  const { openModal, hideModal } = useMemberstackModal();
  const [shouldOpen, setShouldOpen] = useState(false);

  const openLoginModal = () => {
    setShouldOpen(true);
  }

  useEffect(() => {
    if (shouldOpen) {
      openModal({
        type: "LOGIN",
      }).then(({ data, type }) => {
        // Check if data and redirect are defined before attempting to redirect
        if (data && data.redirect) {
          console.log('data', data);
          console.log('type: ', type);
          const redirectUrl = data.redirect;
          window.location.href = redirectUrl;
        } else {
          // Handle the case where login was not completed, if necessary
          console.log('Login was not completed or data was in an unexpected format');
        }
        setShouldOpen(false); // set the state back to false after opening
      });
    }
  }, [shouldOpen]);

  return openLoginModal;
}