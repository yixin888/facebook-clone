import React from 'react';
import Story from './Story';
import './StoryReel.css';

function StoryReel() {
    return (
        <div className='storyReel'>
            <Story 
             image="http://5b0988e595225.cdn.sohucs.com/images/20170902/e592cddafa5447c28b761ed266ae665b.jpeg“
             profileSrc=“https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/star-pig-logo-callum-s-ansell.jpg”
             title=“L”
            />
            
            <Story 
             image=https://neilpatel.com/wp-content/uploads/2017/09/image-editing-tools.jpg"
             profileSrc="https://neilpatel.com/wp-content/uploads/2017/09/image-editing-tools.jpg"
             title="Lin"
            />

            <Story 
             image="https://s3-us-west-2.amazonaws.com/flx-editorial-wordpress/wp-content/uploads/2019/09/01093013/Endgame-Lead-1.jpg"
             profileSrc="https://friendlystock.com/wp-content/uploads/2018/08/5-pirate-kid-holding-wooden-sword-cartoon-clipart.jpg"
             title="Sam"
            />

            <Story 
             image="http://n.sinaimg.cn/ent/transform/20161228/UUoP-fxyxusa5706683.jpg"
             profileSrc="http://www.sinaimg.cn/ent/m/2007-06-23/U105P28T3D1609834F328DT20070623192524.jpg"
             title="Anna"
            />

            <Story 
             image="https://i.pinimg.com/564x/4b/6f/ec/4b6fec352ad65acf6c1265201432dfa1.jpg"
             profileSrc="https://i.pinimg.com/564x/4b/6f/ec/4b6fec352ad65acf6c1265201432dfa1.jpg"
             title="Win"
            />

            <Story 
             image="https://i.pinimg.com/564x/4b/6f/ec/4b6fec352ad65acf6c1265201432dfa1.jpg"
             profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsompo3kfyC2TAuqU1Vu_LtOPGoUiTz6MEObm1HYJVV0dcOQin87GxV8XqqQO-T6W0h7w&usqp=CAU"
             title="Tomy"
            /> 
        </div>
    );
}

export default StoryReel;
