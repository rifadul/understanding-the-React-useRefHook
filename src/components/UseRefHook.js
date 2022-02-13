import React,{useRef, useState} from 'react';

export default function UseRefHook() {
    const luckyName = useRef(null);
    const [validationError,setValidationError] = useState(false);
    const formSubmit = (e)=>{
        e.preventDefault();
        const name = luckyName.current.value;
        name===''? alert('Please enter the lucky name'): setValidationError(true);
        
        console.log("i am click",luckyName.current.value);
    }
    return (
        <div>
            <form action="" onSubmit={formSubmit}>
                <label htmlFor="luckyName">Enter your lucky name</label> <br />
                <br />
                <input type="text" id="luckyName" ref={luckyName} />
                <br />
                <br />
                <button type="submit">Submit</button>
            </form>
            <p>{ validationError ? `Your lucky name is ${luckyName.current.value}` : ""}</p>
        </div>
    );
}
