


const keywords = ['work Characterized','powerful forces' , 'growing' ,'artificial Intelligence','Work Commission']

const KeywordsToUse = ()=>{
    return (
      <div className='heading'>
        <h1 > Keywords to Use</h1>
        
        {keywords.map(el => <button className='keyword-btn'>{el}</button>)}
            
      </div>
    );
}

export default KeywordsToUse;
