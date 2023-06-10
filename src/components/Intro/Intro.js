import React, { useState } from 'react'
import ReactPlayer from 'react-player';
import { VscMute, VscUnmute } from 'react-icons/vsc';
import styled from 'styled-components';
import '../Intro/Intro.css'

function Intro() {
  const [isMuted, setIsMuted] = useState(false)
 
  return (
    <>  
    <IntroContainer>
      <ReactPlayer
     
        playing={true}
        loop={true}
        width="100%"
        height="100%"
        volume={1}
        muted={isMuted}
        url="https://www.youtube.com/embed/32RAq6JzY-w"
        className="video__Intro"
      />
      <div className='infor__Intro'>
        <h1 className='heading__Intro'>Netflix React - Fast X</h1>
        <p className='overview_Intro'>Over many missions and against impossible odds, Dom Toretto (Vin Diesel) and his family have outsmarted, out-nerved and outdriven every foe in their path.

        </p>
      </div>
      {
        isMuted ? (<VscMute className='btnVolune' onClick={() => setIsMuted(prev => !prev)}
        />) : (<VscUnmute className='btnVolune' onClick={() => setIsMuted(prev => !prev)}
        />)
      }

      <div className='fadeBottom'></div>
    </IntroContainer>
    

    </>



  )
}

export default Intro;

const IntroContainer = styled.div`
    background-color: var(--color-background);
    position: relative;
    color: var(--body_background);
    padding-top: 60%;


    .video__Intro{
        position: absolute;
        top: 0px;
        left: 0;
    }   

    .infor__Intro{
        position: absolute;
        top: 160px;
        left: 30px;

        @media screen and (max-width: 800px) {
            top: 120px;
            left: 25px;     
        }
        @media screen and( max-width:600px) {
            top: auto;
            left:auto;
            
        }
        .heading__Intro{
            font-size: 60px;
            transition: all 0.3s ease;

            @media screen and (max-width: 800px) {
            
            font-size: 40px;     
            }
            @media screen and( max-width:600px) {
            
            font-size:24px;
            
            }
        }
        .overview_Intro{
            max-width: 550px;
            width: 100%;
            line-height: 1.3;
            padding-top: 25px;
        }
      }
    .btnVolune{
      position: absolute;
      height: 40px;
      width: 40px;
      right: 10%;
      top:50%;
      cursor: pointer;
      border-radius: 50%;
      padding: 6px;
      color: #bbb;
      border: #fff solid 1px;
      transition: all 0.3s ease;
      transform: scale(1) ;
      &:hover {
        color: #fff;
        transform: scale(1.2);
        background-color:rgba(255,255,211,0.18);

      }
      @media screen and ( max-width: 800px) {
        height: 30px;
        width: 30px;
        padding: 4px;
      }
      @media screen and (max-width: 600) {
        height: 20px;
        width:20px;
        padding: 1px;
      }

    }
  .fadeBottom{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    background-image: linear-gradient(
      180deg,
      transparent,
      rgba(15,15,15,0.6) 40%,
      rgb(17,17,17),
      rgb(17,17,17)
    );
  }
`;