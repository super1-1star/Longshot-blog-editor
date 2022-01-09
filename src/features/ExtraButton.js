
const type = ['Instruct Me','Unstruct Me','Write More'];

const ExtraButton = ()=>{
    return (
      <div className='extra-button-container'>
        {type.map((types)=>
          
            <button className='extra-button'>{types} </button>
          
          
        )}
      </div>
    );
}

export default ExtraButton;