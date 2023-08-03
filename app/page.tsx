"use client"
import React, { useState } from 'react'; // import the useState hook from React

import {
  PencilBar,
  Nav,
  Hero,
  LogoSection,
  ValueSection,
  ContentSectionRight,
  CardSection,
  PricingSection,
  FaqSection,
  Footer,
} from "@/devlink"

// Memberstack
import { useSignupModal } from "@/app/ms-components/signup-modal";
import { useLoginModal } from "@/app/ms-components/login-modal";

export default function Home() {

  const openSignupModal = useSignupModal();
  const openLoginModal = useLoginModal();

  return (
  <>

  <PencilBar />
  
  <Nav 
    login={{
      onClick: openLoginModal,
    }}
    signup={{
      onClick: openSignupModal,
    }}
  />

  <Hero />

  <LogoSection />

  <ContentSectionRight />

  <CardSection />

  <ValueSection />

  <PricingSection />

  <FaqSection />

  <Footer />

  </>
  )
}
