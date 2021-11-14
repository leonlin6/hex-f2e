import React, {useState, useEffect} from 'react';
import subtrcatIcon from '../images/Subtract.png';
import CityCarousel from './CityCarousel';

const Activity = ({content, food, setModalShow, setModalDataNo, setCurrentCity, showMainPage}) => {
    const [carouselPage, setCarouselPage] = useState(1);

    const addressSlice = (address) => {
        try{
            //const place = address.indexOf('');
            return address.slice(0,6);
        }
        catch(error){
            return "";
        }
    }

    const onOpenmodal = (e) => {
        console.log('onclick');
        const noPos = e.target.id.indexOf('-');
        const idNo = e.target.id.slice(noPos + 1);
        setModalDataNo(idNo);
        setModalShow(true);
    }

    const defaultImg = (event) => {
        event.target.src = require('../images/no-image.jpg').default;
    }

    const loadingImgae = (src) => {
        if(!src){
            return require('../images/no-image.jpg').default;
        }else{
            return src;
        }
    }

    useEffect(() => {
        console.log('Effectfood= ', food);
        console.log('Effectcontent= ', content);
        
    }, [content, food]);

    
    const renderActivity = () => {
        try{
            const render = content.data.map((item, index) => {
                return(
                    <div key={`activity` + index} className="activityWrap">
                        <div className="activity">
                            <div className="image">
                                <img src={loadingImgae(item.Picture.PictureUrl1)} alt={item.Picture.PictureDescription1} ></img>
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
                                    <div key={`content`+ index} id={`content-`+ index} className="infomation" onClick={onOpenmodal}>
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
            return render;  
        } 
        catch(error){
            return null;
        }
    }
  

    const renderSmallActivity = () => {
        try{
            const render = food.data.map((item, index) => {
                return(
                    <div key={`food` + index} className="activityWrap">
                        <div className="activity"  onClick={onOpenmodal}>
                            <div className="image">
                                <img src={loadingImgae(item.Picture.PictureUrl1)} alt={'Picture'} onError={defaultImg}></img>
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
            return render;
        }catch(error){
            return null;
        }
    }
 
    const renderSearchResult = () => {
            try{
                const results = food.data.map((item, index) => {
                    return(
                        <div key={`food` + index} className="activityWrap">
                            <div className="activity">
                                <div className="image">
                                    <img src={loadingImgae(item.Picture.PictureUrl1)} alt={'Picture'} onError={defaultImg}></img>
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

                return results;
            }
            catch(error){
                    return (
                        <div className="noResults">
                            <img src={require('../images/Union.png').default}></img>
                            <div className="vertical">
                                <p>Oop!</p>                                
                                <p>很抱歉，找不到符合此搜尋相關的內容。</p>
                            </div> 
                        </div>
                    );              
            }
    } 


    if(food !== {}){
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
                        <CityCarousel type={1} carouselPage={carouselPage} setCurrentCity={setCurrentCity}></CityCarousel>
                        <CityCarousel type={2} carouselPage={carouselPage} setCurrentCity={setCurrentCity}></CityCarousel>
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
                        {renderActivity()}
                    </div>
                </div>
                <div className="mainFood">
                    <div className="title">
                        <div className="icon"> </div>
                        熱門餐飲
                    </div>
                    <div className="activities">
                        {renderSmallActivity()}
                    </div>
                </div>
            </div>    
        );
    }


}

export default Activity;