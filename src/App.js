import "./App.css";
import React, { useState } from "react";
import ExampleData from "./ExampleData";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import GeneratedSchedulesPage from "./pages/GeneratedSchedulesPage/GeneratedSchedulesPage";
import GroupingPage from "./pages/GroupingPage/GroupingPage";
import HelpPage from "./pages/HelpPage/HelpPage";

function App() {
  const [groupCards, setGroupCards] = useState([]); // LIFTING STATE HERE SO WE CAN ACCESS THE GLOBAL ARRAY
  const [unassignedClasses, setUnassignedClass] = useState(ExampleData);
  const [allClasses, setAllClasses] = useState([
    ...unassignedClasses,
    ...groupCards,
  ]);

  return (
    <Router>
      <div className="container row">
        <Switch>
          {/* the main page */}
          <Route exact path="/ut-course-schedule-visualizer">
            <GroupingPage
              groupCards={groupCards}
              setGroupCards={setGroupCards}
              unassignedClasses={unassignedClasses}
              setUnassignedClass={setUnassignedClass}
              allClasses={allClasses}
              setAllClasses={setAllClasses}
            />
            
          </Route>

          {/* the schedules page*/}
          <Route exact path="/ut-course-schedule-visualizer/schedules">
            <GeneratedSchedulesPage />
          </Route>

          {/* the help page */}
          <Route exact path="/ut-course-schedule-visualizer/help">
            <HelpPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
