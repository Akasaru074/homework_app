import Day from "./components/Day"

function App() {
  return (
    <div className="App">
      <header>
        <h2 className="title">Homework</h2>
      </header>
      <main>
        <Day weekDay = "Понедельник" />
        <Day weekDay = "Вторник" />
        <Day weekDay = "Среда" />
        <Day weekDay = "Четверг" />
        <Day weekDay = "Пятница" />
        <Day weekDay = "Суббота" />
      </main>
    </div>
  );
}

export default App;
