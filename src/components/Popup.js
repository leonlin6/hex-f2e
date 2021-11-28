import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';

const Popup = (props) => {
    // const [currentModalData , setCurrentModalData] = useState([]);
    const [searchResultData , setSearchResultData] = useState([]);
    const [hotActivityData , setHotActivityData] = useState([]);
    const [pageCount , setPageCount] = useState(1);
    const [currentSrc, setCurrentSrc] = useState("");
    const [picLimit, setPicLimit] = useState(1);


    const loadingImgae = (src) => {
        if(!src){
            return require('../images/no-image.jpg').default;
        }else{
            return src;
        }
    }

    //將搜尋的結果轉給reducer儲存
    const transferData = (originData=null, type) => {
        if(originData !== null){
            let newData = originData.data.map((item) => {
                switch(type){
                    case "hotActivity":{
                        return {
                            imageUrl:item.Picture,
                            imageDescription:item.Picture.PictureDescription1,
                            name:item.ActivityName,
                            description:item.Description,
                            location:item.Location    
                        };   
                    }
                    case "hotRestaurant":{
                        return {
                            imageUrl:item.Picture,
                            imageDescription:item.Picture.PictureDescription1,
                            name:item.Name,
                            description:item.Description,
                            location:item.Address    
                        };   
                    }      
                    case "spot":{  
                        return {
                            imageUrl:item.Picture,
                            imageDescription:item.Picture.PictureDescription1,
                            name:item.Name,
                            description:item.DescriptionDetail,
                            location:item.City    
                        };   
                    }        
                    case "activity":{
                        return {
                            imageUrl:item.Picture,
                            imageDescription:item.Picture.PictureDescription1,
                            name:item.ActivityName,
                            description:item.Description,
                            location:item.Location    
                        };   
                    }        
                    case "restaurant":{
                        return {
                            imageUrl:item.Picture,
                            imageDescription:item.Picture.PictureDescription1,
                            name:item.Name,
                            description:item.Description,
                            location:item.Address    
                        };   
                    }        
                    case "hotel":{
                        return {
                            imageUrl:item.Picture,
                            imageDescription:item.Picture.PictureDescription1,
                            name:item.Name,
                            description:item.Description,
                            location:item.Address    
                        };   
                    }        
                    default:{
                        return [];
                    }
                }
            });

            if(type === "hotActivity")
                setHotActivityData(newData);
            else{
                setSearchResultData(newData);
            }

        }        
    }

    //
    useEffect(() => {
        if(props.modalType === "hotActivity"){
            if(hotActivityData.length !== 0){
                setCurrentSrc(hotActivityData[props.modalDataNo].imageUrl[`PictureUrl${pageCount}`]);
                setPicLimit(Object.keys(hotActivityData[props.modalDataNo].imageUrl).length / 2);    
            }
        }else{
            if(searchResultData.length !== 0){                
                setCurrentSrc(searchResultData[props.modalDataNo].imageUrl[`PictureUrl${pageCount}`]);
                setPicLimit(Object.keys(searchResultData[props.modalDataNo].imageUrl).length / 2);    
            } 
        }

    },[pageCount, props.modalDataNo]);

    //transfer search result data
    useEffect(() => {
        transferData(props.modalData.data, props.modalData.dataType);
    },[props.modalData]);

    //transfer hot activity data
    useEffect(() => {
        transferData(props.hotActivityData.data, props.hotActivityData.dataType);
    },[props.hotActivityData]);

    //transfer hot restaurant data
    useEffect(() => {        
        transferData(props.hotRestaurantData.data, props.hotRestaurantData.dataType);
    },[props.hotRestaurantData]);


    useEffect(() => {
    },[currentSrc, props.modalType]);

    const closeModal = () => {
        props.setModalShow(false);
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

    const renderSearchResultModal = (data={}) => {
        return (
            <div>
                <div className="popWrap" style={{visibility: props.modalShow ? `visible`:`hidden`}}>
                    <div className="container">
                        <div className="photo">
                            <img alt="" src={loadingImgae(currentSrc)}></img>
                        </div>
                        <div className="changeBtn">
                            <div className="prevIcon" onClick={prevPic}>
                                <div className="prev"></div>
                            </div>
                            <div className="nextIcon" onClick={nextPic}>
                                <div className="next"></div>
                            </div>                    
                        </div>
                        <div className="name">{data[props.modalDataNo].name}</div>
                        <div className="description">{data[props.modalDataNo].description}</div>
                        <div className="infoWrap">
                            <div className="infoA">
                                <div className="openingHour"><img alt="" src={require('../images/time.png').default}></img>{data[props.modalDataNo].EndTime}</div> 
                                <div className="address"><img alt="" src={require('../images/Subtract.png').default}></img>{data[props.modalDataNo].location}</div> 
                            </div>
                            <div className="infoB">
                                <div className="ticketPrice"><img alt="" src={require('../images/ticket.png').default}></img>免費</div>
                                <div className="tel"><img alt="" src={require('../images/tel.png').default}></img>{data[props.modalDataNo].Phone}</div>
                            </div>
                        </div>
                    </div>
                    <div className="closeBtn" onClick={closeModal}></div>            
                </div>
            </div>
        )
    }

    try{
        if(props.modalType === "hotActivity"){
            console.log('props.modalType ', hotActivityData );
            return renderSearchResultModal(hotActivityData)                  
        }  
        else{
            
            console.log('else ', searchResultData );
            return renderSearchResultModal(searchResultData)
        } 
    }catch(error){
        return null;
    }
}

const mapStateToProps = (state) => {
    return {
        modalData: state.modalData,
        hotActivityData:state.hotActivityData,
        hotRestaurantData:state.hotRestaurantData,        
        modalType:state.modalType      
    }
}

export default connect(mapStateToProps)(Popup);