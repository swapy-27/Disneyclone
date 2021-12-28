import styled from 'styled-components';


const Login =(props) => {
    return (
       <Container>
           <Content>
               <CTA>
                   <CTALogoone src="/images/cta-logo-one.svg" alt=""/>
                   <SignUp>GET ALL THERE</SignUp>
                   <Description>
                        Get Premier Acess to SpiderMan-No way Home with Disney+ subscription. 
                   </Description>
                   <CTALogotwo src="/images/cta-logo-two.png" alt=""/>
               </CTA>
                <BgImage/>
           </Content>
       </Container>
    )
};

const Container = styled.section`
overflow : hidden;
display : flex;
flex-direction : coloumn;
text-align: center;
height : 100vh ;
`;
const Content = styled.div`
margin-bottom: 10vw;
width:100%;
position: relative;
min-height:100vh;
box-sizing :  border-box;
display : flex;
justify-content : cenetr;
align-items : center;
flex-direction : column ;
padding : 80px 40px ;
height : 100%;
`;


const BgImage= styled.div`
    height:100%;
    background-position:top;
    background-repeat : no-repeat;
    background-size:cover;
    background-image:url("/images/login-background.jpg");
    position:absolute;
    top:0;
    right:0;
    left:0;

    //we are giving negative index so anything we will add will be on top of this 
    z-index:-1;
`;


const CTA = styled.div`
    
    max-width :650px;
    flex-wrap:wrap;
    display:flex;
    flex-direction : column;



`;
const CTALogoone=styled.img`
    margin-bottom:12px;
    max-width:600px;
    min-height:1px;
    display:block;
    width:100%;

`;
const CTALogotwo=styled.img`
    margin-bottom:20px;
    max-width:600px;
    min-height:1px;
    display:inline-block;
    vertical-align : bottom ;
    width:100%;

`;

const SignUp = styled.a`
    font-weight:bold;
    color:white;
    background-color:#0063e5;
    width:100%;
    letter-spacing:1px;
    font-size:18px;
    width:100%;
    padding : 16.5px 0;
    border : 1px solid transparent;
    border-radius:4px;
    &:hover{
        background-color: #0483ee;
    }
`;

const Description = styled.p`

    color :hsla(0,0%,95.3%,1);
    font-size : 11 px;
    margin : 0 0 24px;
    line-height : 1.5 ;
    letter-spacing : 1.5 px ; 

`;














export default Login;