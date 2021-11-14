import React, {useState, useEffect} from 'react';

const Popup = ({food, content, modalShow, setModalShow, modalDataNo}) => {

    useEffect(() => {}
    ,[modalDataNo]);

    const [pageCount , setPageCount] = useState(1);
    let picLimit = 1;
    let currentSrc= "";

    try{
        currentSrc = content.data[modalDataNo].Picture[`PictureUrl${pageCount}`];
        picLimit = Object.keys(content.data[modalDataNo].Picture).length / 2;

    }
    catch(error){
        currentSrc = "";
    }
   

    const closeModal = () => {
        setModalShow(false);
        setPageCount(1);
    }

    const nextPic = () => {   
        if(pageCount < picLimit){
            setPageCount( pageCount + 1);

        }else{
            return;
        }
    }

    const prevPic = () => {
        if(pageCount > 1){
            setPageCount( pageCount - 1);
        }
        else{
            return;
        }
    }

    try{
        return (
            <div className="popWrap" style={{visibility: modalShow ? `visible`:`hidden`}}>
                <div className="container">
                    <div className="photo">
                        <img alt="" src={currentSrc}></img>
                    </div>
                    <div className="changeBtn">
                        <div className="prevIcon" onClick={prevPic}>
                            <div className="prev"></div>
                        </div>
                        <div className="nextIcon" onClick={nextPic}>
                            <div className="next"></div>
                        </div>                    
                    </div>
                    <div className="name">{content.data[modalDataNo].Name}</div>
                    <div className="description">{content.data[modalDataNo].Description}</div>
                    <div className="infoWrap">
                        <div className="infoA">
                            <div className="openingHour"><img alt="" src={require('../images/time.png').default}></img>{content.data[modalDataNo].EndTime}</div>
                            <div className="address"><img alt="" src={require('../images/Subtract.png').default}></img>{content.data[modalDataNo].Location}</div>
                        </div>
                        <div className="infoB">
                            <div className="ticketPrice"><img alt="" src={require('../images/ticket.png').default}></img>免費</div>
                            <div className="tel"><img alt="" src={require('../images/tel.png').default}></img>{content.data[modalDataNo].Phone}</div>
                        </div>
                    </div>
                </div>
                <div className="closeBtn" onClick={closeModal}></div>            
            </div>
        );    
    }catch(error){
        return null;
    }
}

export default Popup;