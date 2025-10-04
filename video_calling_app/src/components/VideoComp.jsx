import React, { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';


function VideoComp() {
  const { roomID } = useParams();
  
  const containerRef = useRef(null);

  useEffect(()=>{
    let myMeeting = async (element) => {
      if(!roomID || !containerRef.current) return;
      // generate Kit Token
       const appID = Number(import.meta.env.VITE_APP_APP_ID);
       const serverSecret = String(import.meta.env.VITE_APP_SERVER_SECRET);
       const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(), "Anonymous");
     
     
      // Create instance object from Kit Token.
       const zp = ZegoUIKitPrebuilt.create(kitToken);
       // start the call
       zp.joinRoom({
         container: element,
         sharedLinks: [
           {
             name: 'Personal link',
             url:
              window.location.protocol + '//' + 
              window.location.host + window.location.pathname +
               '?roomID=' +
               roomID,
           },
         ],
         scenario: {
           mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
         },
       });
      };   
      myMeeting();  
      return()=>{
        //Cleanup Function
        if(containerRef.current){
          containerRef.current.innerHTML = '';
        }
      };
  },[roomID]);

  return (
    <div
      className="myCallContainer"
      ref={containerRef}
      style={{ width: '100vw', height: '100vh' }}
    ></div>
  );
}

export default VideoComp