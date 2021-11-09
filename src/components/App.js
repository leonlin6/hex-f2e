import React, {useState} from 'react';
import Nav from './Nav'
import SearchArea from './SearchArea'
import Main from './Main'
import '../SASS/App.css'

const App = () => {
    const [content, setContent] = useState(null);
    const [food, setFood] = useState(null);
    return (
        <div style={{backgroundColor:`#F6F7FB`}}>
            <Nav></Nav>
            <SearchArea content={content} setContent={setContent} food={food} setFood={setFood}></SearchArea>
            <Main content={content} setContent={setContent} food={food} setFood={setFood}></Main>
            {/* <Footer></Footer>  */}
        </div>
    );
    
}

export default App;