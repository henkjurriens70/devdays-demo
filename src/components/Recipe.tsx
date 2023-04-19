import { IonRouterLink } from "@ionic/react";
import Rating from "./Rating";

const Recipe: React.FC = () => {
  return (
    <>
      <IonRouterLink href="/detail">
        <div className="flex flex-col">
          <img className="w-full" src="/assets/images/burger.jpg" alt="" />
          <div className="flex flex-col">
            <div className="font-bold mt-2">Bread</div>
            <Rating />
            <div className="text-sm">
              Fill the house with the aroma of freshly baked bread. From an easy
              white loaf to sourdough, focaccia and brioche, we have
            </div>
          </div>
        </div>
      </IonRouterLink>
    </>
  );
};

export default Recipe;
