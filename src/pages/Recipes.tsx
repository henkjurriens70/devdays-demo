import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import RecipyCollection from '../components/RecipyCollection';

const Recipes: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Recepten</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Recepten</IonTitle>
          </IonToolbar>
        </IonHeader>

        <RecipyCollection/>
      
      </IonContent>
    </IonPage>
  );
};

export default Recipes;
