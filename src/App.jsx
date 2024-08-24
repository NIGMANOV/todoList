import React from "react";
import "./App.scss";
import JournalForm from "./components/JournalForm/JournalForm";
import LeftPanel from "./components/Layout/LeftPanel/LeftPanel";
import Body from "./components/Layout/Body/Body";
import Logo from "./components/Logo/Logo";
import ButtonAdd from "./components/ButtonAdd/ButtonAdd";
import JournalList from "./components/JournalList/JournalList";
import CardButton from "./components/CardButton/CardButton";
import JournalItem from "./components/JournalItem/JournalItem";

const App = () => {
  return (
    <div className="app">
      <LeftPanel>
        <Logo />
        <ButtonAdd />
        <JournalList>
          <CardButton>
            <JournalItem />
          </CardButton>
        </JournalList>
      </LeftPanel>

      <Body>
        <JournalForm />
      </Body>
    </div>
  );
};

export default App;
