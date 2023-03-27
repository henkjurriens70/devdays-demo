import { IonIcon, IonRouterLink } from "@ionic/react";
import { starOutline } from "ionicons/icons";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Recipy: React.FC = () => {
  return (
    <>
      <IonRouterLink href="/detail">
        <div className="flex flex-col">
          <img className="w-full" src="/assets/images/bread.png" />
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

export default Recipy;
