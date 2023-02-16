import { IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar,IonSegment, IonSegmentButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import React from 'react';
import { IonButton } from '@ionic/react';
import { IonImg } from '@ionic/react';
import { IonAvatar } from '@ionic/react';
import { IonInput, IonItem, IonLabel, IonList, IonAccordion, IonAccordionGroup, IonSelect, IonSelectOption } from '@ionic/react';



const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>

        <IonToolbar className='toolbar'>
          <IonGrid>
            <IonRow><IonTitle>ExpertsPronostics</IonTitle>
            
          <IonAvatar>
        <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
      </IonAvatar></IonRow></IonGrid>
          

        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Pronostics</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        {/* <ExploreContainer name="Tab 2 page" /> */}
        
        <form>
        <center><IonImg src="logo2.png"   className='logo'></IonImg></center>
        {/* //////////////////////////////////////////////////////////////////////
      
       /////////////////////////////////////////////////////////////////// */}
        <IonList>
      

      <IonItem>
        <IonLabel>Sport</IonLabel>
        <IonInput placeholder="Veuillez entrer votre sport"></IonInput>
      </IonItem>

      <IonItem>
        <IonLabel>Compétition</IonLabel>
        <IonInput placeholder="Veuillez entrer votre compétition"></IonInput>
      </IonItem>

      <IonItem>
        <IonLabel>Match</IonLabel>
        <IonInput placeholder="Veuillez entrer le match"></IonInput>
      </IonItem>

      <IonItem>
        <IonLabel>Paris</IonLabel>
        <IonInput placeholder="Veuillez entrer un type de paris"></IonInput>
      </IonItem>

    </IonList>
    {/* ///////////////////////////////////////////////////////////////////// */}
        <center><IonButton color="success">Créer</IonButton>
        <IonButton color="danger">Effacer</IonButton></center>
        
        </form>
        
      </IonContent>
      
    </IonPage>
    
    
  );
};

export default Tab2;
