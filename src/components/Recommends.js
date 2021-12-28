import styled from "styled-components";
import {Link } from "react-router-dom";
import { useSelector} from "react-redux";
import {selectRecommend} from "../features/movie/movieSlicer";
const Recommends =()=>
{   
     const movies = useSelector(selectRecommend);
     console.log ( movies );
    return (
        <Container>
            <h4>Recommended for you</h4>
            <Content>
            {movies && movies.map((movie,key)=>(
                <Wrap key = {key}>
                    {/* {movie.id} */}
                    <Link to ={`/detail/`+ movie.id}>
                        <img src={movie.cardImg} alt ={movie.title}/> 
                    </Link>
                </Wrap>
                
            ))}
            </Content>
  
        </Container>
    )
}




const Container =  styled.div`

padding : 0px 0px 26px;
height:100%;
 `;

 const Content = styled.div`
    display:grid;
    gap:25px;
    width:100%;
    height:100%;
 
    grid-template-columns:  repeat(4, minmax(0,1fr)) ;
 
 

    @media  screen and ( max-width:768px)
    {
        grid-template-columns:  repeat(2, minmax(0,1fr)) ;
    }
`;



const Wrap = styled.div`

    padding - top : 56.25%;
    border-radius : 10px;
     cursor: pointer ;
      position : relative ;
     overflow : hidden;
     transition : all 250ms cubic - bezier ( 0.25 ,0.46 ,0.45,0.94)0s;
     border : 3px solid grey ;
    img{
        inset : 0px ; 
        display : block;
        height : 100%;
        object-fit:cover;
        opacity:1;
        position : relative;
        width:100%;
        z-index:1;
        transition: opacity 500ms ease-in-out 0s;
        top:0;
    }
   
    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform:scale(1.05);
        border-color : rgba(249,249,249,0.8);
       
    }
`;




export default Recommends;