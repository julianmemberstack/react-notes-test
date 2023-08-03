"use client"
import React, { useState, useEffect } from 'react';
import { useMemberstack } from "@memberstack/react";

import {
  NavMember,
  HeroFlat,
  LoadingBlock,
  BlankSection,
  TextInput,
  ButtonFake,
  H2,
  Card,
  FormBlock,
} from "@/devlink"

// Memberstack
import { useProfileModal } from "@/app/ms-components/profile-modal";

type Member = {
    id: string;
    verified: boolean;
    auth: {
      email: string;
      // Other auth properties as needed
    };
    customFields: {
      "first-name"?: string;
    }
  };
  
  export default function Dashboard() {
    
    // Memberstack
    const memberstack = useMemberstack();
    const [member, setMember] = useState<Member | null>(null);
    const openProfileModal = useProfileModal();

    // Loading state
    const [isLoading, setLoading] = useState(true);

    // Note creation
    const [title, setTitle] = useState('');
    const [note, setNote] = useState('');
    const [notes, setNotes] = useState<{ title: string; note: string }[]>([]);
    
    // Load notes from local storage when the component mounts
    useEffect(() => {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
    }, []);

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(event.target.value);
    };
  
    const handleNoteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setNote(event.target.value);
    };
  
    const handleSubmit = () => {
      // Create a new note
      const newNote = { title, note };
      // Append it to the existing notes
      const updatedNotes = [...notes, newNote];
      // Save to the component state
      setNotes(updatedNotes);
      // Save to local storage
      localStorage.setItem('notes', JSON.stringify(updatedNotes));
      // Reset the state
      setTitle('');
      setNote('');

      // Directly clear the input values by their IDs
      (document.getElementById('title') as HTMLInputElement).value = '';
      (document.getElementById('note') as HTMLInputElement).value = '';
    };
    
    // Authentication
    useEffect(() => {
      // Fetch the member data
      memberstack.getCurrentMember()
        .then(({ data: member }) => setMember(member))
        .catch(error => console.error('An error occurred:', error));
      
      // Set a timeout to turn off the loading state after 1 second
      const timer = setTimeout(() => setLoading(false), 1000);
  
      // Cleanup function to clear the timeout if the component is unmounted
      return () => clearTimeout(timer);
    }, []);
  
    if (isLoading) {
      return <LoadingBlock />; // Loading component
    }
  
    if (!member) {
        window.location.href = '/'; // Redirect if not logged in
        return null;
    }
  
    return (
      <>

        <NavMember 
          profile={{
            onClick: openProfileModal,
          }}
        />

        <HeroFlat 
          h1={`Hello there, ${member.customFields["first-name"]}`} 
          p={'Welcome back to our new notes app!'}
        />

        <BlankSection
          container={
            
            <>
            <FormBlock 
              inner={
                <>
                <H2 
                  text={'Create a new note'}
                />
                <TextInput
                  id={'title'}
                  label={'Title'}
                    inputprop={{
                      value: title,
                      onChange: handleTitleChange
                    }}
                />
                <TextInput
                  id={'note'}
                  label={'Write your note'}
                  inputprop={{
                  value: note,
                    onChange: handleNoteChange
                  }}
                />
                <ButtonFake
                  id={'submit'}
                  text={'Submit'}
                  makenote={{
                    onClick: handleSubmit
                  }}
                />
                </>
              }
              
            />
            
            <H2 
              text={'Your past notes'}
            />
            {notes.map((note, index) => (
              <Card key={index} h3={note.title} p={note.note} />
            ))}
            </>
          }
        />

      </>
    );
  }