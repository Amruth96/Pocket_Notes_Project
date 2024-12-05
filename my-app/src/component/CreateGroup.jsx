import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./CreateGroup.css"; 

const CreateGroup = ({ addGroup }) => {
  
  const [groupName, setGroupName] = useState(""); // groupName state to store the name of the group
  const [groupColor, setGroupColor] = useState(""); // groupColor state to store the color chosen for the group

 
  const navigate = useNavigate();

  // handleCreate function to create a new group
  const handleCreate = () => {
    // Check if both groupName and groupColor have been provided
    if (groupName && groupColor) {
     
      addGroup({ name: groupName, color: groupColor });
      // After adding the group, navigate back to the home page ("/")
      navigate("/");
    } else {
      alert("Please enter a group name and choose a color.");
    }
  };

  return (
    <div className="create-group-container"> {/* Container for the entire create group UI */}
      <h2>Create New Group</h2> 
      <div className="form-group"> 
        <label>Group Name</label> 
        <input
          type="text"
          placeholder="Enter group name" 
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)} 
        />
      </div>

      <div className="form-group"> {/* Wrapper for the group color selection */}
        <label>Choose Colour</label> 
        <div className="color-options">   
          {/* Map through an array of color hex codes and display each color option */}
          {["#9b59b6", "#e74c3c", "#1abc9c", "#007bff","#FF79F2" ,"#f39c12"].map((color) => (
            <div
              key={color} 
              // Apply the 'selected' class if this color is currently selected
              className={`color-circle ${groupColor === color ? "selected" : ""}`} 
              style={{ backgroundColor: color }} 
              onClick={() => setGroupColor(color)} // Update the 'groupColor' 
            ></div>
          ))}
        </div>
      </div>
      <button className="create-button" onClick={handleCreate}> 
        Create
      </button>
    </div>
  );
};

export default CreateGroup; 
