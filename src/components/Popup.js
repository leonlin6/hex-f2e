import React, {useState} from 'react';

const Popup = ({content, modalShow, setModalShow, modalDataNo}) => {

    const closeModal = () => {
        setModalShow(false);
    }

    

    if(content !== null){
        return (
            <div className="popWrap" style={{visibility: modalShow ? `visible`:`hidden`}}>
                <div className="container">
                    <div className="photo">
                        <img src={require("../images/test.png").default}></img>
                    </div>
                    <div className="changeBtn">
                        <div className="prevIcon">
                            <div className="prev"></div>
                        </div>
                        <div className="nextIcon">
                            <div className="next"></div>
                        </div>                    
                    </div>
                    <div className="name">{content.data[modalDataNo].Name}</div>
                    <div className="description">{content.data[modalDataNo].Description}</div>
                    <div className="infoWrap">
                        <div className="infoA">
                            <div className="openingHour"><img src={require('../images/time.png').default}></img>{content.data[modalDataNo].EndTime}</div>
                            <div className="address"><img src={require('../images/Subtract.png').default}></img>{content.data[modalDataNo].Location}</div>
                        </div>
                        <div className="infoB">
                            <div className="ticketPrice"><img src={require('../images/ticket.png').default}></img>免費</div>
                            <div className="tel"><img src={require('../images/tel.png').default}></img>{content.data[modalDataNo].Phone}</div>
                        </div>
                    </div>

                </div>
                <div className="closeBtn" onClick={closeModal}></div>            
            </div>
        );    
    }

    return null;
}

export default Popup;