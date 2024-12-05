// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;





import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./component/Sidebar"; 
import MainContent from "./component/Maincontent"; 
import CreateGroup from "./component/CreateGroup"; 
import Notes from "./component/Notes"; 
import "./App.css"; 

const App = () => {
  // Defining the state variable 'groups' to hold an array of group objects
  const [groups, setGroups] = useState([
    { name: "My Notes", color: "#007bff" }, // Group 1
    { name: "My personal grp", color: "#9b59b6" }, // Group 2
    { name: "Javascript grp", color: "#e74c3c" }, // Group 3
  ]);

  // Defining the state variable 'selectedGroup' to keep track of the currently selected group
  const [selectedGroup, setSelectedGroup] = useState(null);

  // Function to add a new group to the 'groups' state
  const addGroup = (group) => {
    setGroups((prevGroups) => [...prevGroups, group]); // Add the new group to the existing list of groups
  };

  return (
    <Router>
      <div className="container">
        {/* Rendering the Sidebar component and passing groups data and onGroupSelect handler as props */}
        <Sidebar groups={groups} onGroupSelect={setSelectedGroup} />

        <Routes>
          {/* Route for the default path ("/") */}
          <Route
            path="/"
            element={
              // If a group is selected, render the Notes component with the selected group
              selectedGroup ? (
                <Notes group={selectedGroup} />
              ) : (
                // If no group is selected, render the MainContent component
                <MainContent />
              )
            }
          />
          
          {/* Route for the '/create-group' path */}
          <Route
            path="/create-group"
            element={<CreateGroup addGroup={addGroup} />} // Pass the 'addGroup' function as a prop to CreateGroup
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App; 








