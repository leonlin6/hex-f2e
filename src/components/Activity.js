import React,{useEffect} from 'react';
import subtrcatIcon from '../images/Subtract.png';

const Activity = ({content,food}) => {

    const addressSlice = (address) => {
        console.log(address);
        if(address !== "")
            return address.slice(0,6);
    }

    useEffect(() => {
        console.log('food= ', food);
        console.log('content= ', content);
    }, [content, food]);

    if(content === null || food === null){
        return null;
    }
    
    const renderActivity = content.data.map((item, index) => {
        return(
            <div className="activityWrap">
                <div className="activity">
                    <div className="image">
                        <img src={item.Picture.PictureUrl1} alt={item.Picture.PictureDescription1}></img>
                    </div>
                    <div className="content">
                        <div className="name">
                            {item.Name}
                        </div>
                        <div className="description">
                            <p>{item.Description}</p>
                        </div>
                        <div className="detailArea">
                            <div className="location">
                                <img alt="subtrcat Icon" src={subtrcatIcon}></img>
                                {item.Location}
                            </div>
                            <div className="infomation">
                                活動詳情
                            </div>
                        </div>
                    </div>
                </div>
                <div className="searchShadow">
                    <div className="shadow"></div>
                    <div className="shadow"></div>
                </div>
            </div>
        );
    });      
  
    const renderSmallActivity = food.data.map((item, index) => {
        return(
            <div className="activityWrap">
                <div className="activity">
                    <div className="image">
                        <img src={item.Picture.PictureUrl1} alt={item.Picture.PictureDescription1}></img>
                    </div>
                    <div className="name">
                        {item.Name}
                    </div>
                    <div className="location">
                        <img alt="subtrcat Icon" src={subtrcatIcon}></img>
                        {addressSlice(item.Address)}
                    </div>
                </div>
                <div className="searchShadow">
                    <div className="shadow"></div>
                    <div className="shadow"></div>
                </div>
            </div>
        );
    });   


    if(content !== null){
        return (
            <div>
                <div className="mainActivities">
                    <div className="title">
                        <div className="icon"> </div>
                        熱門活動
                    </div>
                    <div className="activities">
                        {renderActivity}
                    </div>
                </div>
                <div className="mainFood">
                    <div className="title">
                        <div className="icon"> </div>
                        熱門餐飲
                    </div>
                    <div className="activities">
                        {renderSmallActivity}
                    </div>
            </div>    
        </div>    
        );
    }


}

export default Activity;