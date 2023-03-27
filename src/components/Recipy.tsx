import { IonIcon, IonRouterLink } from "@ionic/react";
import { starOutline } from "ionicons/icons";
import { Link } from "react-router-dom";

const Recipy: React.FC = () => {
  return (
    <>
      <IonRouterLink href="/detail">
        <div className="flex flex-col">
          <img className="w-full" src="/assets/images/bread.png" />
          <div className="flex flex-col">
            <div className="font-bold mt-2">Bread</div>
            <div className="mb-2 flex items-center">
              <IonIcon
                aria-hidden="true"
                className="text-yellow-500"
                icon={starOutline}
              />
              <IonIcon
                aria-hidden="true"
                className="text-yellow-500"
                icon={starOutline}
              />
              <IonIcon
                aria-hidden="true"
                className="text-yellow-500"
                icon={starOutline}
              />
              <IonIcon
                aria-hidden="true"
                className="text-yellow-500"
                icon={starOutline}
              />
              <div className="ml-2">4 ratings</div>
            </div>
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
