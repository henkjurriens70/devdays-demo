import { IonIcon } from "@ionic/react";
import { cellularOutline, timeOutline } from "ionicons/icons";

const Preparation: React.FC = () => {
  return (
    <div className="grid grid-cols-2 mt-5">
      <div className="flex items-center">
        <IonIcon icon={timeOutline} />
        <div className="ml-2">
          <div>
            <span className="font-bold">Prep</span>
            <span className="ml-2">25 mins</span>
          </div>
          <div>
            <span className="font-bold">Cook</span>
            <span className="ml-2">40 mins</span>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <IonIcon icon={cellularOutline} />
        <div className="ml-2">Easy</div>
      </div>
    </div>
  );
};

export default Preparation;
