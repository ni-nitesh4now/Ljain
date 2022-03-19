import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {lightTheme} from './Themes';
import { Design, Develope} from './AllSvgs';
import { skills } from "../data/WorkData";


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;
`

const Main =  styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 1rem;
  margin: 15vw;
  height: 55vh;
  z-index: 3;
  line-height: 1.5;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
 backdrop-filter: blur(4px);
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
`


const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
margin-bottom:2rem;
font-size: calc(1em + 1vw);

}

&>*:first-child{
margin-right: 1rem;
}
`

const Title2 = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

`
const Title3 = styled.h2`
display: flex;
font-size: calc(1em);

`

const Container = styled.div`
box-shadow: 10px 10px 19px #1c1e22, -10px -10px 19px #31363a;
padding:10px;
border-radius:20px;
width: 60vw;
border: 2px solid ${(props) => props.theme.text};
color: ${(props) => props.theme.text};
padding: 2rem;
margin: 5rem;
height: 85vh;
z-index: 3;
line-height: 1.5;
justify-content: center;
align-items: center;
font-size: calc(0.6rem + 1vw);
backdrop-filter: blur(4px);
font-family: 'Ubuntu Mono', monospace;
font-style: italic;
@media(max-width:50rem){

height: 75vh;
}
`

const Skill =styled.div`
margin: 5px;
width:100%;
padding: 15px;
border:none;
margin-left:0px;
border-radius:20px;
`
const Bar = styled.div`
background:rgb(54, 54, 54);
height: 24px;
border:none;
border-radius:14px;
background:black;
`

const Progress=styled.div`
visibility: visible;
animation-duration: 0.5s;
animation-delay: 0.3s;
animation-name: fadeInLeft;
overflow: visible;
height: 24px;
position: relative;
border-radius: 14px;
background:rgb(115, 147, 179);
`
const S= styled.div`
position: absolute;
right: -7px;
top: -22px;
font-weight: 400;
color: black;
font-size: 14px;
text-transform: uppercase;
letter-spacing: 2px;
opacity: 0.9;
text-align: center;
white-space: nowrap;
`
const MySkillsPage = () => {
    return (
    <ThemeProvider theme={lightTheme}>
            <Box>

            <LogoComponent theme='light'/>
            <SocialIcons theme='light'/>
            <PowerButton />
            <ParticleComponent theme='light' />
            <Main>
            <Title>
                <Design width={40} height={40} /> Designer
            </Title>
            I remember when I stepped into my first project I had a foundational knowledge of mechanical design. I felt I can work with myself on it.<br/><br/>
            By this time I was learning autocad and in a matter of few months I switched to CATIA.
            I learnt to perform proper analysis of the designed product and prepare a report of the same.
                        </Main>

                        <BigTitle text="SKILLS" top="80%" right="30%" />

            </Box>
            <Box>

                <ParticleComponent theme='light' />
                  <Container>
                       <Title2>My Skills</Title2>
                           <Skill>
                               <Title3>CAD</Title3>
                               <Bar><Progress style={{width:'90%'}}><S>90%</S></Progress></Bar>
                           </Skill>
                           <Skill>
                               <Title3>AutoCAD</Title3>
                               <Bar><Progress style={{width:'70%'}}><S>70%</S></Progress></Bar>
                           </Skill>
                           <Skill>
                               <Title3>CATIA</Title3>
                               <Bar><Progress style={{width:'90%'}}><S>90%</S></Progress></Bar>
                           </Skill>
                           <Skill>
                               <Title3>Ansys</Title3>
                               <Bar><Progress style={{width:'80%'}}><S>80%</S></Progress></Bar>
                           </Skill>
                           <Skill>
                               <Title3>InterPersonal Skills</Title3>
                               <Bar><Progress style={{width:'90%'}}><S>90%</S></Progress></Bar>
                           </Skill>
                           <Skill>
                               <Title3>Research and Analytics</Title3>
                               <Bar><Progress style={{width:'85%'}}><S>85%</S></Progress></Bar>
                           </Skill>
                           <Skill>
                               <Title3>Market Research</Title3>
                               <Bar><Progress style={{width:'70%'}}><S>70%</S></Progress></Bar>
                           </Skill>
                </Container>
                <BigTitle text="SKILLS" top="80%" right="30%" />
            </Box>

    </ThemeProvider>
        
    )
}

export default MySkillsPage
