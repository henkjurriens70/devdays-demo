import { IonIcon, IonRouterLink } from "@ionic/react";
import Rating from "./Rating";
import { cellularOutline, heart, timeOutline } from "ionicons/icons";

const RecipeSlide: React.FC = () => {
  return (
    <>
      <IonRouterLink href="/detail">
        <div className="flex h-full mx-5">
          <img
            className="rounded-md h-full"
            src="/assets/images/burger.jpg"
            alt=""
          />
          <div className="absolute left-0 bottom-0 h-36">
            <div className="font-bold mt-2 text-white text-3xl text-left mx-10">
              Hamburger van sojabonen met ananas
            </div>
          </div>

          <div className="absolute inset-x-0 top-0 h-16">
            <div className="flex justify-between text-white mx-10 mt-5">
              <div>
                <IonIcon icon={heart}></IonIcon>
              </div>
              <div>
                <div className="flex items-cente">
                  <IonIcon icon={timeOutline}></IonIcon>
                  <div className="ml-2 text-sm">15 min</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </IonRouterLink>
    </>
  );
};

export default RecipeSlide;
