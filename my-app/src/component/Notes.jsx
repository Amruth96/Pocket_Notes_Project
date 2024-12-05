import React, { useState } from "react"; 
import "./Notes.css"; 

const Notes = ({ group }) => { 

  // Mock notes data for demonstration purposes. Each note has text, date, and time properties.
  const [notes, setNotes] = useState([
    {
      text: "Another productive way to use this tool is to begin a daily writing routine.",
      date: "9 Mar 2023",
      time: "10:10 AM",
    },
    {
      text: "The purpose here is to just get the writing started.",
      date: "9 Mar 2023",
      time: "10:15 AM",
    },
  ]);

  // State for handling the new note text input field
  const [newNote, setNewNote] = useState("");

  // Function to handle adding a new note
  const handleAddNote = () => {
    // Check if the new note text is not empty (after trimming any extra spaces)
    if (newNote.trim()) {
      // Get the current date and time when the note is created
      const currentDate = new Date();
      // Create a new note object with the text, date, and time
      const note = {
        text: newNote.trim(),
        date: currentDate.toLocaleDateString(), // Get the current date in the default locale format
        time: currentDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }), // Get the current time in a 2-digit hour and minute format
      };
      // Update the notes array by adding the new note to the previous notes
      setNotes((prevNotes) => [...prevNotes, note]);
      // Clear the input field after adding the note
      setNewNote("");
    }
  };

  return (
    <div className="notes-container"> 
      <h2>{group.name}</h2> 
      
      {/* Display the list of existing notes */}
      <div className="notes-list">
        {/* Map through each note in the 'notes' state and display it */}
        {notes.map((note, index) => (
          <div className="note-item" key={index}> {/* Unique key for each note item */}
            <p>{note.text}</p> 
            <div className="note-meta"> 
              <span>{note.date}</span> 
              <span>{note.time}</span> 
            </div>
          </div>
        ))}
      </div>

      {/* Textbox and Add Button for adding new notes */}
      <div className="note-input">
        <input
          type="text" 
          placeholder="Here's the sample text for sample work" 
          value={newNote} 
          onChange={(e) => setNewNote(e.target.value)} // Update the 'newNote' state whenever the user types in the input
        />
        <button onClick={handleAddNote}>Add</button> 
      </div>
    </div>
  );
};

export default Notes; 
