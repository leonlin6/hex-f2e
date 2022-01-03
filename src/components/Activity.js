import React, {useState, useEffect, useRef} from 'react';
import subtrcatIcon from '../images/Subtract.png';
import CityCarousel from './CityCarousel';
import {setModalType} from '../Actions'
import {connect} from 'react-redux';


import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/scrollbar/scrollbar.min.css';

const Activity = (props) => {
    const [carouselPage, setCarouselPage] = useState(1);

    const ref = useRef(null);

    useEffect(() => {        
    }, [props.content, props.searchResultData]);


    const addressSlice = (address) => {
        try{
            //const place = address.indexOf('');
            return address.slice(0,6);
        }
        catch(error){
            return "";
        }
    }

    const onOpenmodal = (e, type) => {
        const noPos = e.target.id.indexOf('-');
        const idNo = e.target.id.slice(noPos + 1);

        props.setModalDataNo(idNo);
        props.setModalShow(true);
        props.setModalType(type);
    }

    const nextSwiper = () => {
        console.log( ref.current.swiper.activeIndex);
        if (ref.current !== null && ref.current.swiper !== null) {
            ref.current.swiper.slideNext();
          }
    }

    const prevSwiper = () => {
        if (ref.current !== null && ref.current.swiper !== null) {
            ref.current.swiper.slidePrev();
          }
    }

    const onChangeSwiperSetSliderPage = () => {
       
        if(ref.current.swiper.activeIndex === 1 ){
            setCarouselPage(2);
        }

        if(ref.current.swiper.activeIndex === 0 ){
            setCarouselPage(1);
        }
    }

    const loadingImgae = (src) => {
        if(!src){
            return require('../images/no-image.jpg').default;
        }else{
            return src;
        }
    }




    const renderActivity = () => {
        try{
            const render = props.content.data.map((item, index) => {
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
                                    <div key={`content`+ index} id={`content-`+ index} className="infomation" onClick={(e) => {onOpenmodal(e ,'hotActivity')}}>
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
            const render = props.searchResultData.data.map((item, index) => {
                return(
                    <div key={`searchResultData` + index} className="activityWrap">
                        <div className="activity"  id={`searchResult-`+ index} onClick={(e) => {onOpenmodal(e, 'smallActivity')}} >
                            <div className="image">
                                <img src={loadingImgae(item.Picture.PictureUrl1)} alt={'actvity'}></img>
                            </div>
                            <div className="name">
                                {item.RestaurantName}
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
 
    // return 首頁的預設畫面
    if(props.searchResultData !== {}){
        return (
            <div>
                <div className="mainCity">
                    <div className={carouselPage === 1 ? 'carouselIconPrev': 'carouselIconPrev active'} onClick={() => {prevSwiper()}}>
                        <div className="prev"></div>
                    </div>
                    <div className="title">
                        <div className="icon"> </div>
                        熱門城市
                    </div>
                    <div className="activities">
                        <Swiper
                            ref={ref}
                            // install Swiper modules
                            // modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={128}
                            slidesPerView='auto'
                            // navigation
                            // pagination={{ clickable: true }}
                            // scrollbar={{ draggable: true }}
                            // onSwiper={(swiper) => console.log(swiper)}
                            freeMode={true}
                            onSlideChange={() => {onChangeSwiperSetSliderPage()}}
                            >
                            <SwiperSlide><CityCarousel type={1} setCurrentCity={props.setCurrentCity}></CityCarousel></SwiperSlide> 
                            <SwiperSlide><CityCarousel type={2} setCurrentCity={props.setCurrentCity}></CityCarousel></SwiperSlide>
                        </Swiper>
                    </div>
                    <div className={carouselPage === 2 ? 'carouselIconNext': 'carouselIconNext active'} onClick={() => {nextSwiper()}}>
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

const mapStateToProps = (state) => {
    return {
        modalType:state.modalType  
    }
}

export default connect(mapStateToProps, {setModalType})(Activity);