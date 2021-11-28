import React, {useState, useEffect, useRef} from "react";

const Dropdown = ({option, selected, onSelectedChange}) =>{

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
        if(option === "類別"){
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
        <div className="dropdown" onClick={onDropDown} ref={ref}>           
            {selected}
            <div className={open === true ? "dropIconOpen" : "dropIconClose"}> </div>
            <div className={`menu ${open ? 'visible' : ''}`}>
                {renderedOptions}
            </div>      
        </div>
    );
}

export default Dropdown; 