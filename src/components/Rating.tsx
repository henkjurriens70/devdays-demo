import { IonIcon } from "@ionic/react";
import { starOutline } from "ionicons/icons";

const Rating: React.FC = () => {
  return (
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
  );
};

export default Rating;
