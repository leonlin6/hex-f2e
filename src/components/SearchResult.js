import React, {useState, useRef, useEffect} from 'react';
import subtrcatIcon from '../images/Subtract.png';
import {connect} from 'react-redux';
import {setCurrentPage} from '../Actions'


const SearchResult = (props) => {  

    const [pageAreaShow, setPageAreaShow] = useState(false);

    useEffect(() => {
        try{
            if(props.searchResultData.data.length !== 0){
                setPageAreaShow(true);
            }
            
            if(props.searchResultData.data.length === 0){
                setPageAreaShow(false);
            }
        }catch(error){
            console.log('searchResultData no data');
        }

    }, [props.searchResultData]);

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
        props.setModalDataNo(idNo);
        props.setModalShow(true);
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

    const pageClick = (i) => {
        props.setCurrentPage(i)
        window.scrollTo({
            top: 400,
            behavior: "smooth"
        });
    }
 
    const changePageRender = () =>{
        let pageArray = [];

        if(pageLimit() < 5){
            for(let i = 1; i <= pageLimit(); i++){
                pageArray.push(<div className={i === props.currentPage ? 'page active' : 'page'} id={`id${i}`} key={`id${i}`} onClick={() => {pageClick(i)}}>{i}</div>);        
            }
        }else{
            // 初始化的分頁標籤，最多顯示4個，其他為點點呈現
            if(props.currentPage < 5){
                for(let i = 1; i < 7; i++){
                    pageArray.push(<div className={i === props.currentPage ? 'page active' : 'page'} id={`id${i}`} key={`id${i}`} onClick={() => {pageClick(i)}}>{i}</div>);        
                }
    
                pageArray.push(<div style={{padding:'8px'}}>...</div>);  
    
                for(let v = pageLimit(); v <= pageLimit(); v++){
                    pageArray.push(<div className={v === props.currentPage ? 'page active' : 'page'} id={`id${v}`} key={`id${v}`} onClick={() => {pageClick(v)}}>{v}</div>);        
                }
            // 
            }else {
                if(pageLimit() - props.currentPage < 5){
                    //
                    for(let i = 1; i <= 1; i++){
                        pageArray.push(<div className={i === props.currentPage ? 'page active' : 'page'} id={`id${i}`} key={`id${i}`} onClick={() => {pageClick(i)}}>{i}</div>);        
                    }
        
                    pageArray.push(<div style={{padding:'8px'}}>...</div>);  
        
                    for(let v = props.currentPage - 2; v <= pageLimit(); v++){
                        pageArray.push(<div className={v === props.currentPage ? 'page active' : 'page'} id={`id${v}`} key={`id${v}`} onClick={() => {pageClick(v)}}>{v}</div>);        
                    }
                // 
                }else{
                    // middle的狀況
                    pageArray.push(<div className='page' key={`id${1}`} onClick={() => {props.setCurrentPage(1)}}>1</div>);      
                    pageArray.push(<div style={{padding:'8px'}}>...</div>);      

                    for(let i = props.currentPage-2; i <= props.currentPage + 2; i++){
                        pageArray.push(<div className={i === props.currentPage ? 'page active' : 'page'} id={`id${i}`} key={`id${i}`} onClick={() => {pageClick(i)}}>{i}</div>);        
                    }
        
                    pageArray.push(<div style={{padding:'8px'}}>...</div>);                             
                    pageArray.push(<div className={'page'} id={`id${pageLimit()}`}  key={`id${pageLimit()}`} onClick={() => {props.setCurrentPage(pageLimit())}}>{pageLimit()}</div>);        
                   
                }
            }  
        }

        const ren = pageArray.map((item) => {
            return item;
        });
        return ren;
    }

    const pageLimit = () => {
        try{
            return Math.ceil(props.searchResultData.data.length / 20);

        }catch(error){
            console.log('no searchResultData.data. error');
        }

    }    

    const prevPage = () => {
        if(props.currentPage - 1 < 1)
            return;

        props.setCurrentPage(props.currentPage-1);
    }  

    const nextPage = () => {
        if(props.currentPage + 1 > pageLimit())
            return ;

            props.setCurrentPage(props.currentPage + 1 );
    }

    const renderSearchResult = () => {
            try{
                const results = props.searchResultData.data.map((item, index) => {
                    if(Math.ceil((index+1) / 20) === props.currentPage){
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
                    }else{
                        return null;
                    }

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

                if(props.searchResultData.data.length === 0){
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
    if(props.searchResultData !== {}){
        return (
            <div>   
                <div className="searchResults">
                    <div className="title">
                        <div className="icon"> </div>
                        {props.cityTitle}
                    </div>
                    <div className="activities">
                        {renderSearchResult()}
                    </div>
                    <div className="pageChange" style={{display: pageAreaShow === false ? 'none' : 'inline-flex'}}>
                        <div className="prevIcon" onClick={prevPage}><div className="prev"></div></div>                       
                        <div className="pageWrap">{changePageRender()}</div>
                        <div className="nextIcon" onClick={nextPage}><div className="next"></div></div>                          
                    </div>   
                </div>       
            </div>    
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.selectedRoute,
        currentPage: state.currentPage
    }
}

export default connect(mapStateToProps, {setCurrentPage})(SearchResult);
