import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import { YinYang } from './AllSvgs'
import Intro from './Intro'
;


const MainContainer = styled.div`
background: ${props => props.theme.body};

background-color:pink;
width: 100vw;
height: 100vh;
overflow:hidden;

position: relative;

h2,h3,h4,h5,h6{
  font-family:'Karla', sans-serif ;
  font-weight:500;
}
`
const ABOUT = styled(NavLink)`
color: ${props => props.click ? 'black':'pink' };
position: absolute;
top: 20%;
left: 15%;

height:10px;
width:10px;;
width:10px;
transform:rotate(-90deg);
text-decoration: none;
z-index:1;
`

const WORK = styled(NavLink)`
color:  ${props => props.click ? 'black':'pink'};
position: absolute;
top: 35%;
left: 15%;

height:10px;
width:10px;;
transform:rotate(-90deg);
text-decoration: none;
z-index:1;
`

const SKILLS = styled(NavLink)`
color:  ${props => props.click ? 'black':'pink' };
position: absolute;
top: 50%;
left: 15%;

height:10px;
width:10px;;
transform:rotate(-90deg);
text-decoration: none;
z-index:1;
`

const BLOG = styled(NavLink)`
color:  ${props => props.click ? 'black':'pink' };
position: absolute;
top: 70%;
left: 15%;

height:10px;
width:10px;;
transform:rotate(-90deg);
text-decoration: none;
z-index:1;
`

const Container = styled.div`
padding: 2rem;
`

const Contact = styled(NavLink)`
color:  ${props => props.click ? 'black':'pink' };
position: absolute;
top: 90%;
left: 15%;

height:10px;
width:10px;;
transform:rotate(-90deg);
text-decoration: none;
z-index:1;
`





const rotate = keyframes`

`

const Center = styled.button`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
border: none;
outline: none;
background-color: transparent;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: all 1s ease;

&>:first-child{
    animation: ${rotate} infinite 1.5s linear;
}

&>:last-child{
    display: ${props => props.click ? 'none' :'inline-block'  };
    padding-top: 1rem;
}
`

const DarkDiv = styled.div`
position: absolute;
top: 0;
background-color: #000;
bottom: 0;
right: 50%;
width: ${props => props.click ? '50%' : '0%'};
height: ${props => props.click ? '100%' : '0%'};
z-index:1;
transition: height 0.5s ease, width 1s ease 0.5s;
`
const LeftBar = styled.div`
position: absolute;
top:12%;
left:0;
border:none;
border-radius:0px 40px 40px 0px;
outline:none;
background-color: ${props => props.click ? 'pink':'black'};
display:flex;
flex-direction:column;
align-items:left;
height:80vh;
width:8vw;
z-index:1;
@media(min-width:50em){
width:3.5vw;
}
`

const Main = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <MainContainer>
         <DarkDiv   click={click}/>
            <Container>
            <LogoComponent theme={click ? 'dark' :'light'}/>
            <SocialIcons />
            {click?null:<Center click={click}>
                <motion.div 
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,.9,1.1,1],rotate:['0deg','10deg','-10deg','10deg','-10deg','10deg','-10deg','10deg','-10deg','0deg']}}
            whileHover={{scale:1.1,rotate:['0deg','10deg','-10deg','10deg','-10deg','10deg','-10deg','10deg','-10deg','0deg']}}
            whileTap={{scale: 0.9}}
            transition={{type:'spring', duration:1.2, delay:.5}}><YinYang  onClick={()=> handleClick()} width={click ? 120 : 200} height={click ? 120 : 200} fill='currentColor' /></motion.div>
                <span>Click Me</span>
            </Center>}
            <LeftBar  click={+click}>
            <Contact target="_blank" to={{pathname:"mailto:ljain6789@gmail.com"}} click={+click}>
                <motion.h2
                initial={{
                    y:-200,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1.2}
                }}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                
                >
                    Contact
                </motion.h2>
            </Contact>
            <BLOG to="/blog" click={+click}>
                <motion.h2
                initial={{
                    y:-200,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1.1}
                }}
                 whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                >
                    Resume
                </motion.h2>
            </BLOG>
            <WORK to="/work" click={+click}>
                <motion.h2
                initial={{
                    y:-200,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:.9}
                }}
                 whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                >
                    Work
                </motion.h2>
            </WORK>
            <ABOUT to="/about" click={+click}>
                <motion.h2
                initial={{
                    y:-200,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:.8}
                }}
                 whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                >
                    About
                </motion.h2>
            </ABOUT>
            <SKILLS to="/skills" click={+click}>
                <motion.h2
                initial={{
                    y:-200,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                 whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                >
                    Skills
                </motion.h2>
            </SKILLS>
            </LeftBar>
            </Container>
                
                {click ? <Intro click={click} /> : null }
        </MainContainer>
    )
}

export default Main
