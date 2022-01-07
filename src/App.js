import "./App.css";
import EditorMain from "./components/inputField";
import Performance from "./components/performace";
import AddOns from "./components/addOns";
import KeywordsToUse from "./components/keywordsToUse";

function App() {
  return (
    <main>
      <div className='container'>
        <div className='left-col '>
          <EditorMain />
        </div>
        <div className='right-col'>
          <Performance />
          <AddOns />
          <KeywordsToUse />
        </div>
      </div>
    </main>
  );
}

export default App;
