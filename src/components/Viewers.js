import styled from "styled-components";

const Viewers =() =>
{
    return (
       <Container>
           <Content>
                <Wrap>
                    <img src="/images/viewers-disney.png"/>
                    <video autoPlay={true} loop={true} playsInline={true}>
                    <source src ="/videos/1564674844-disney.mp4"   type="video/mp4"/>
                    </video>
                </Wrap>
                <Wrap>
                    <img src="/images/viewers-marvel.png"/>
                    <video autoPlay={true} loop={true} playsInline={true}>
                    <source src ="/videos/1564676115-marvel.mp4"   type="video/mp4"/>
                    </video>
                </Wrap>
                <Wrap>
                    <img src="/images/viewers-pixar.png"/>
                    <video autoPlay={true} loop={true}  playsInline={true}>
                    <source src ="/videos/1564676714-pixar.mp4"   type="video/mp4"/>
                    </video>

                </Wrap>
                <Wrap>
                    <img src="/images/viewers-starwars.png"/>
                    <video autoPlay={true} loop={true} playsInline={true}>
                    <source src ="/videos/1608229455-star-wars.mp4"   type="video/mp4"/>
                    </video>

                </Wrap>
                <Wrap>
                    <img src="/images/viewers-national.png"/>
                    <video autoPlay={true} loop={true} playsInline={true}>
                    <source src ="/videos/1564676296-national-geographic.mp4"   type="video/mp4"/>
                    </video>

                    
                </Wrap>
            </Content>
        </Container>
    )
}

const Container =  styled.div`

margin-top : 30px;
padding : 30px 0px 26px;

 `;

 const Content = styled.div`
 display:grid;
 gap:25px;
 width:100%;

 
 grid-template-columns:  repeat(5, minmax(0,1fr)) ;
 
 

 @media  screen and ( max-width:768px)
 {
    grid-template-columns:  repeat(1, minmax(0,1fr)) ;
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
        position : absolute;
        width:100%;
        z-index:-1;
        transition: opacity 500ms ease-in-out 0s;
        top:0;
    }
    video{
        width:100%;
        height:100%;
        // position:absolute;
        top:0px;
        opacity:0px;
        z-index:0;
    }
    &:hover {

        transform:scale(1.05);
        border-color : rgba(249,249,249,0.8);
        video{
            opacity:1;
        }
    }
`;





export default Viewers;