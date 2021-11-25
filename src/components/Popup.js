import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';

const Popup = (props) => {

    useEffect(() => {
        console.log('props.modalData',props.modalData);
    }
    ,[props.modalShow,props.modalDataNo]);

    const [pageCount , setPageCount] = useState(1);
    let picLimit = 1;
    let currentSrc= "";

    try{
        currentSrc = props.content.data[props.modalDataNo].Picture[`PictureUrl${pageCount}`];
        picLimit = Object.keys(props.content.data[props.modalDataNo].Picture).length / 2;

    }
    catch(error){
        currentSrc = "";
    }
   

    const closeModal = () => {
        props.setModalShow(false);
        setPageCount(1);
        console.log(props.modalData)
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
            <div className="popWrap" style={{visibility: props.modalShow ? `visible`:`hidden`}}>
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
                    <div className="name">{props.content.data[props.modalDataNo].Name}</div>
                    <div className="description">{props.content.data[props.modalDataNo].Description}</div>
                    <div className="infoWrap">
                        <div className="infoA">
                            <div className="openingHour"><img alt="" src={require('../images/time.png').default}></img>{props.content.data[props.modalDataNo].EndTime}</div>
                            <div className="address"><img alt="" src={require('../images/Subtract.png').default}></img>{props.content.data[props.modalDataNo].Location}</div>
                        </div>
                        <div className="infoB">
                            <div className="ticketPrice"><img alt="" src={require('../images/ticket.png').default}></img>免費</div>
                            <div className="tel"><img alt="" src={require('../images/tel.png').default}></img>{props.content.data[props.modalDataNo].Phone}</div>
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

const mapStateToProps = (state) => {
    return {modalData: state.modalData}
}

export default connect(mapStateToProps)(Popup);