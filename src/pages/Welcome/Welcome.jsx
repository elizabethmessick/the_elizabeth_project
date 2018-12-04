import React from 'react';
import './Welcome.css';
import elizabethPic from '../../img/elizabeth.jpeg';


const Welcome = (props) => (
    <div className="Welcome">
        <h1>My Story</h1>
        <img className="elizabethPic" src={elizabethPic} alt="elizabeth" />
        <p>My name is Elizabeth Messick and I am a victim of nonconsensual pornography, otherwise known as revenge porn. According to Cyber Civil Rights Initiative, nonconsensual pornography transforms unwilling individuals into sexual entertainment for strangers. A vengeful ex-partner or opportunistic hacker can upload an explicit image of a victim to a website where thousands of people can view it and hundreds of other websites can share it. In a matter of days, that image can dominate the first several pages of “hits” on the victim’s name in a search engine, as well as being emailed or otherwise exhibited to the victim’s family, employers, co-workers, and peers.
<br />
            I became a victim in February of 2013 when I got a facebook message from a fake facebook account threatening to blackmail me with my private photos that they supposedly found on an ex-girlfriend revenge porn website. They ended up making a fake profile of me with all of my photos and adding my facebook friends. At that moment I was terrified and didn’t know what to do or who to turn to. There was only so much the police could do and only so much money I could spend to get the photos taken down. The internet can be a nasty place, but it can also be used as a safe space. For years I wished that there was something I could do to help in any way that I can. Even if it means being a shoulder to cry on. After years of being harassed on the internet, I decided to take a programming course at the end of 2018 so that way I would be able to build a webapp to support victims. Something that I wish existed when I was 22 years old and hurting. I built this webapp as a place to support others who are going through the same thing. I may not be able to take all of the pictures off of the internet, but I have been through it and understand how horrible it feels. To this day I still get people messaging me horrible things, but I’ve learned to ignore them. I know it will never go away, but I want victims to know that it’s not their fault and that it’s not the end of the world even though it may feel like that in the moment. We are so much stronger than we think.
<br />
            <br />
            <br />
            <br />
        </p>
    </div>
);

export default Welcome;

