import React, {useRef, useEffect} from 'react';
import subtrcatIcon from '../images/Subtract.png';

const SearchResult = ({content, searchResultData, setModalShow, setModalDataNo, cityTitle}) => {  

    const clickRef = useRef(null);

    const addressSlice = (address) => {
        try{
            //const place = address.indexOf('');

            return address;
            //return address.slice(0,6);
        }
        catch(error){
            return "";
        }
    }

    const onOpenmodal = (e) => {     
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
    }, [content, searchResultData]);

 
    const renderSearchResult = () => {
            try{
                const results = searchResultData.data.map((item, index) => {
                    return(
                        <div key={`searchResultData` + index} className="activityWrap" >
                            <div className="activity" ref={clickRef} id={`searchResult-`+ index} onClick={onOpenmodal}>
                                <div className="image">
                                    <img src={loadingImgae(item.Picture.PictureUrl1)} alt='loading' onError={defaultImg}></img>
                                </div>
                                <div className="name">
                                    {item.Name}
                                </div>
                                <div className="location">
                                    <img alt="subtrcat Icon" src={subtrcatIcon}></img>
                                    {item.Address !== undefined ? addressSlice(item.Address) : addressSlice(item.City)}
                                </div>
                            </div>
                            <div className="searchShadow">
                                <div className="shadow"></div>
                                <div className="shadow"></div>
                            </div>
                        </div>
                    );
                });  

                const noResults = () => {
                    return(
                        <div className="noResults">
                            <img alt="no result" src={require('../images/Union.png').default}></img>
                            <div className="vertical">
                                <p>Oop!</p>                                
                                <p>很抱歉，找不到符合此搜尋相關的內容。</p>
                            </div> 
                        </div>
                    );
                }

                if(searchResultData.data.length === 0){
                    return noResults();
                }
                return results;
            }
            catch(error){
                    return (
                        <div className="noResults">
                            <img alt="no result" src={require('../images/Union.png').default}></img>
                            <div className="vertical">
                                <p>Oop!</p>                                
                                <p>很抱歉，找不到符合此搜尋相關的內容。</p>
                            </div> 
                        </div>
                    );              
            }
    } 

    // Render Here
    if(searchResultData !== {}){
        return (
            <div>   
                <div className="searchResults">
                    <div className="title">
                        <div className="icon"> </div>
                        {cityTitle}
                    </div>
                    <div className="activities">
                        {renderSearchResult()}
                    </div>
                </div>       
            </div>    
        );
    }


}

export default SearchResult;