import React from "react"; 
import { useNavigate } from "react-router-dom";
import "./Sidebar.css"; 

// Defining the Sidebar component, which takes 'groups' and 'onGroupSelect' as props
const Sidebar = ({ groups, onGroupSelect }) => {
  
  const navigate = useNavigate();

  return (
    <div className="sidebar"> 
      <h2 className="title">Pocket Notes</h2> 

      <div className="group-list"> 
        {/* Map over the 'groups' array and render each group as an item in the list */}
        {groups.map((group, index) => (
          <div
            className="group-item" 
            key={index} 
            onClick={() => onGroupSelect(group)} 
          >
            {/* A div to represent the group icon, with a background color matching the group's color */}
            <div className="group-icon" style={{ backgroundColor: group.color }}>
              {/* Display the first two letters of the group's name, converted to uppercase */}
              {group.name.substring(0, 2).toUpperCase()}
            </div>
            <span>{group.name}</span> {/* Display the full name of the group */}
          </div>
        ))}
      </div>

      {/* Button to navigate to the Create Group page */}
      <div className="add-button" onClick={() => navigate("/create-group")}>
        +
      </div>
    </div>
  );
};

export default Sidebar; 