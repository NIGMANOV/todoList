import React, { useEffect, useState } from "react";
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
  const [item, setItem] = useState([]);

  useEffect(() => {
    if (item.length) {
      console.log("Запись");
      localStorage.setItem("data", JSON.stringify(item));
    }
  }, [item]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data"));
    if (data) {
      setItem(
        data.map((item) => ({
          ...item,
          date: new Date(item.date), 
        }))
      );
    }
  }, []);

  const addItem = (item) => {
    setItem((oldItem) => [
      ...oldItem,
      {
        text: item.text,
        title: item.title, // Corrected the key from 'titlew' to 'title'
        date: new Date(item.date),
        id: Date.now(),
      },
    ]);
  };

  const sortItem = (a, b) => {
    return b.date - a.date;
  };

  return (
    <div className="app">
      <LeftPanel>
        <Logo />
        <ButtonAdd />
        <JournalList>
          {item.sort(sortItem).map((elem) => (
            <CardButton key={elem.id}>
              <JournalItem title={elem.title} text={elem.text} date={elem.date} />
            </CardButton>
          ))}
        </JournalList>
      </LeftPanel>

      <Body>
        <JournalForm onSubmit={addItem} />
      </Body>
    </div>
  );
};

export default App;
