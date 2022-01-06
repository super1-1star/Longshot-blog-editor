import "./App.css";

function App() {
  return (
    <main>
      <div className='container'>
        <div className='left-col blue'>
          <div className='tool-box blue'></div>
          <div className='input-editor red'></div>
        </div>
        <div className='right-col'>
          <div className='performance-container red'></div>
          <div className='add-ons-container yellow'></div>
          <div className='keywords-to-use-container blue'></div>
        </div>
      </div>
    </main>
  );
}

export default App;
