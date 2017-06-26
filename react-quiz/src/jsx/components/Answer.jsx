import React from "react";

const Answer = (props) =>{

    const options = props.options;
    

    return(
        <form>
         {options.map( (option,i) => {
            return <div className='options' key={i}>
                <input type="radio" name={`option_${i}`} id={`option_${i}`} value={i} defaultChecked={false} />
                <label> {option} </label>
            </div>
        })}
        </form>
    )
}


export default Answer;