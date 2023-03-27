import { IonIcon } from "@ionic/react";
import { starOutline } from "ionicons/icons";

const RecipyDetail: React.FC = () => {
  return (
    <div className="flex flex-col">
      <img className="w-full" src="/assets/images/bread.png" />
      <div className="flex flex-col p-2">
        <div className="font-bold mt-2">Bread</div>
        <div className="my-2">Door Polo</div>
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
      </div>
    </div>
  );
};

export default RecipyDetail;
