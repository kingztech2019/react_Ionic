 import { IonContent, IonHeader, IonImg,IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import { pin} from 'ionicons/icons';
import './Tab1.css';
import {useHistory} from 'react-router-dom';
 


const Tab1 = ({dataApi}) => {
	let history = useHistory();
 const showVideo=(images)=>{
	 localStorage.setItem('video', images.videos[0].embed)
	 history.push('/video')
	  
 }
    
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Tab 1</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				 {dataApi===undefined?[]:dataApi.map((images, i)=>(
					 <IonCard key={i}>
					 <IonCardContent >
						 <IonImg onClick={()=>showVideo(images)} src={images.thumbnail}/>
					</IonCardContent>
					 
				 </IonCard>

				 ))}
				
		
	 
				
          
        

				 
			</IonContent>
		</IonPage>
	);
};

export default Tab1;
