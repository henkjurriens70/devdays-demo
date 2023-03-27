import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import RecipyDetail from "../components/detail/RecipyDetail";

const Detail: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Bread</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <RecipyDetail />
      </IonContent>
    </IonPage>
  );
};

export default Detail;
