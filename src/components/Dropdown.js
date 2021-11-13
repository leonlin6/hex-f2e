import React, {useState, useEffect, useRef} from "react";

const Dropdown = ({label, option, selected, onSelectedChange}) =>{

    const [open , setOpen] = useState(false);
    const ref = useRef();

    useEffect(
        () => {
            const onBodyClick = (event) => {
                if(ref.current.contains(event.target)){
                    return;
                }
                setOpen(false);
            }

            document.body.addEventListener('click',onBodyClick,{capture: true}); 

            return () => {
                document.body.removeEventListener('click',onBodyClick,{capture: true});
            }
        },[]
    );

    const renderedOptions = option.map((option, index) => { 
        if(index === 0){
            return null;
        }
        if(option === selected){
            return null;
        }

        return(
            <div key={option} className="dropItem" onClick={() => {onSelectedChange(option)}}>
                {option}
            </div>
        )
    });

    const onDropDown = () =>{
        setOpen(!open);
    }
    
    return(
        <div ref={ref} >
            <span className="dropdown" onClick={onDropDown}>{selected}
                <div className="dropIcon"> </div>
                <div className={`menu ${open ? 'visible' : ''}`}>
                    {renderedOptions}
                </div>
            </span>
            
        </div>
    );
}

export default Dropdown; 