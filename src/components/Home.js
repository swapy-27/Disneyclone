import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Recommends from "./Recommends";
import Viewers from "./Viewers";
import NewDisney  from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";

import { useEffect } from "react";
import {useDispatch,useSelector} from "react-redux";
import db from "../firebase";
import {setMovies} from "../features/movie/movieSlicer";
import {selectUserName} from "../features/user/userSlice";
import { collection, collectionGroup, onSnapshot } from "firebase/firestore";

const Home = ()=>
{
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    let recommends =[];
    let newDisneys =[];
    let originals =[];
    let trendings =[];

    useEffect ( ()=>
    {
        console.log ("hello");
      
        onSnapshot( collectionGroup(db,"movies"),(snapshot)=>
        {
            snapshot.docs.map((doc)=>{
                console.log(recommends);
                switch(doc.data().type){
                    case "recommend":
                        recommends=[...recommends,{id:doc.id , ...doc.data()}];
                            break;
                    case "new":
                        newDisneys=[...newDisneys,{id:doc.id , ...doc.data()}];
                            break;
                    case "original":
                        originals=[...originals,{id:doc.id , ...doc.data()}];
                            break;
                    case "trending":
                        trendings=[...trendings,{id:doc.id , ...doc.data()}];
                            break;
    
                }
            });
      

    

    dispatch(
        setMovies({
            recommend:recommends,
            newDisney:newDisneys,
            original : originals ,
            trending:trendings,
        })
    );
});


    },[userName]);


return (
    <Container style={{height:'calc(100vh-250px)'}}>
           <ImgSlider/>
            <Viewers/>
          <Recommends/>
            <NewDisney/>
           <Originals/>
           <Trending/> 
    </Container>
)
};


const Container = styled.main`

    position:relative;
    min-height:90vh;
    overflow-x:hidden;
    display:block;
    top:72px;
    padding:0 calc(3.5vw + 5px);

    &:after{
        background: url("/images/home-background.png") center /  cover no-repeat fixed ;
        content : "";
        inset : 0px;
        position : absolute;
        opacity:1;
        z-index:-1;
    }
`;
export default Home ;