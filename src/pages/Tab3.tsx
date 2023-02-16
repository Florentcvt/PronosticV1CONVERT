import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid,IonRow } from '@ionic/react';

import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import React from 'react';
import { IonButton } from '@ionic/react';
import { IonImg } from '@ionic/react';
import { IonAvatar } from '@ionic/react';
import { IonInput, IonItem, IonLabel, IonList, IonAccordion, IonAccordionGroup, IonSelect, IonSelectOption, IonCol, } from '@ionic/react';


const Tab3: React.FC = () => {
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

{/* ////////////////////////////////////////////////////////////////////////////// */}

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <form>
        <center><IonImg src="logo2.png"   className='logo' ></IonImg></center>
{/* //////////////////////////////////////// */}
        <IonGrid fixed={true}>
      <IonRow>
        <IonCol></IonCol>
        <IonCol>Equipe A</IonCol>
        <IonCol>Equipe B</IonCol>      
      </IonRow>
    </IonGrid>

    <IonGrid fixed={true}>
      <IonRow>
        <IonCol>Victoire</IonCol>
        <IonCol></IonCol>
        <IonCol></IonCol> 
      </IonRow>
    </IonGrid>

    <IonGrid fixed={true}>
      <IonRow>
        <IonCol>Defaite</IonCol>
        <IonCol></IonCol>
        <IonCol></IonCol>  
      </IonRow>
    </IonGrid>

    <IonGrid fixed={true}>
      <IonRow>
        <IonCol>Mi-Temps</IonCol>
        <IonCol></IonCol>
        <IonCol></IonCol>  
      </IonRow>
    </IonGrid>

    <IonGrid fixed={true}>
      <IonRow>
        <IonCol>Prolongation</IonCol>
        <IonCol></IonCol>
        <IonCol></IonCol>  
      </IonRow>
    </IonGrid>

    <IonGrid fixed={true}>
      <IonRow>
        <IonCol>Tir Au But</IonCol>
        <IonCol></IonCol>
        <IonCol></IonCol>  
      </IonRow>
    </IonGrid>

    <IonGrid fixed={true}>
      <IonRow>
        <IonCol>Durée</IonCol>
        <IonCol></IonCol>
        <IonCol></IonCol>  
      </IonRow>
    </IonGrid>

    <IonGrid fixed={true}>
      <IonRow>
        <IonCol>Score</IonCol>
        <IonCol></IonCol>
        <IonCol></IonCol>  
      </IonRow>
    </IonGrid>

    <center><IonButton color="tertiary">Afficher point paris</IonButton></center>
        </form>
        

      </IonContent>
    </IonPage>
  );
};

export default Tab3;
