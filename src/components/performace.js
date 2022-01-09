import '../App.css'

const totalPowerWords = 6;
const powerWords = 2;
const Readability = 'Fairly complex to read'
const wordsCount = 535;

const Performance = ()=>{


    return (
      <div className='heading'>
        <h1>Performance</h1>
        
        <div className='sub-heading'>
          <h2>Power Words</h2>
          <p>
            {powerWords}<span>/</span>
            {totalPowerWords}
          </p>
        </div>
        <div className='sub-heading'>
          <h2> Readability</h2>
          <p>{Readability}</p>
        </div>
        <div className='sub-heading'>
          <h2>Words Count</h2>
          <p>{wordsCount}</p>
        </div>
      </div>
    );
}

export default Performance;

