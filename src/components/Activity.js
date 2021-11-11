import React,{useState,useEffect} from 'react';
import subtrcatIcon from '../images/Subtract.png';
import CityCarousel from './CityCarousel';

const Activity = ({content,food}) => {
    const [carouselPage, setCarouselPage] = useState(1);

    const addressSlice = (address) => {
        try{return address.slice(0,6);}
        catch(error){return "";}
    }

    useEffect(() => {
        console.log('food= ', food);
        console.log('content= ', content);
    }, [content, food]);

    if(content === null){
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
                                {addressSlice(item.Location)}
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

    if(food === null){
        return null;
    }
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


    if(food !== null){
        return (
            <div>
                <div className="mainCity">
                    <div className="carouselIconPrev" style={{display: carouselPage === 1 ? 'none': 'block'}} onClick={() => {setCarouselPage(1)}}>
                        <div className="prev"></div>
                    </div>
                    <div className="title">
                        <div className="icon"> </div>
                        熱門城市
                    </div>
                    <div className="activities">
                        <CityCarousel type={1} carouselPage={carouselPage}></CityCarousel>
                        <CityCarousel type={2} carouselPage={carouselPage}></CityCarousel>
                    </div>
                    <div className="carouselIconNext" style={{display: carouselPage === 2 ? 'none': 'block'}} onClick={() => {setCarouselPage(2)}}>
                        <div className="next"></div>
                    </div>
                </div>                
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