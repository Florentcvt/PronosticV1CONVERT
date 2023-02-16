import { IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
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
        <IonImg src="logo.png"   className='logo'></IonImg>
        {/* //////////////////////////////////////////////////////////////////////
      
       /////////////////////////////////////////////////////////////////// */}
        <IonList>
        <IonItem>
        <IonSelect placeholder="Veuillez selectionnez votre sport">
          <IonSelectOption value="apples">Foot</IonSelectOption>
        </IonSelect>
      </IonItem>
      <IonItem>
        <IonSelect placeholder="Veuillez selectionnez votre compétition">
          <IonSelectOption value="apples">Ligue 1</IonSelectOption>
          <IonSelectOption value="apples">Ligue 2</IonSelectOption>
        </IonSelect>
      </IonItem>   
      <IonItem>
        <IonSelect placeholder="Veuillez selectionnez votre match">
          <IonSelectOption value="apples">PSG - OM</IonSelectOption>
          <IonSelectOption value="apples">Arsenal - ManchesterUnited</IonSelectOption>
        </IonSelect>
      </IonItem>  
      <IonItem>
        <IonSelect placeholder="Veuillez selectionnez votre type de paris">
          <IonSelectOption value="apples">Victoire - PSG</IonSelectOption>
          <IonSelectOption value="apples">Victoire - OM</IonSelectOption>
          <IonSelectOption value="apples">Defaite - PSG</IonSelectOption>
          <IonSelectOption value="apples">Defaite - OM</IonSelectOption>
        </IonSelect>
      </IonItem>  

      <IonItem>
        <IonLabel>Pronostic</IonLabel>
        <IonInput placeholder="Veuillez saisir votre Pronostic"></IonInput>
      </IonItem>

    </IonList>
    {/* ///////////////////////////////////////////////////////////////////// */}
        <center><IonButton color="success">Valider</IonButton>
        <IonButton color="danger">Supprimer</IonButton></center>
        
        </form>
        
      </IonContent>
      
    </IonPage>
    
    
  );
};

export default Tab2;
