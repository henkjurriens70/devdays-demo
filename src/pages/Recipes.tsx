import { IonContent, IonPage } from "@ionic/react";
import RecipeCollection from "../components/RecipeCollection";
import "./Recipes.css";

const Recipes: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <RecipeCollection />
      </IonContent>
    </IonPage>
  );
};

export default Recipes;
