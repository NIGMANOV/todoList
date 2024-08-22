import React from "react";
import "./App.scss";
import JournalForm from "./components/JournalForm/JournalForm";
import LeftPanel from "./components/Layout/LeftPanel/LeftPanel";
import Body from "./components/Layout/Body/Body";
import Logo from "./components/Logo/Logo";
import ButtonAdd from "./components/ButtonAdd/ButtonAdd";
import JournalCard from "./components/JournalCard/JournalCard";

const App = () => {
  return (
    <div className="app">
      <LeftPanel>
      <Logo/>
      <ButtonAdd/>
      <JournalCard/>
      </LeftPanel>
      
      <Body>
      <JournalForm />
      </Body>
    </div>
  );
};

export default App;
