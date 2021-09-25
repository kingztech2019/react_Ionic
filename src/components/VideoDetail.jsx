import React, {useEffect,useState} from 'react';
import { IonContent, IonHeader,IonPage, IonTitle, IonToolbar, IonCard,  IonCardContent} from '@ionic/react';
import parse from 'html-react-parser';
const VideoDetail=()=>{
    const [video, setVideo] = useState()
    useEffect(()=>{
        const showVideo = localStorage.getItem('video')
        setVideo(showVideo)

    },[])
return(
    <IonPage>
    <IonHeader>
        <IonToolbar>
            <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
          
             <IonCard>
             <IonCardContent >
                 {parse(video||"")}
                  
            </IonCardContent>
             
         </IonCard>

         
        


        
  


         
    </IonContent>
</IonPage>
)
}
export default VideoDetail