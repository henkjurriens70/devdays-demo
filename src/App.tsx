import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { ellipse, heart, person, pizzaOutline, square } from "ionicons/icons";
import Recipes from "./pages/Recipes";
import Tab2 from "./pages/Favorites";
import Tab3 from "./pages/Profile";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import Detail from "./pages/Detail";
import Profile from "./pages/Profile";
import Favorites from "./pages/Favorites";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/recipes">
            <Recipes />
          </Route>
          <Route exact path="/detail">
            <Detail />
          </Route>
          <Route exact path="/favorites">
            <Favorites />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route exact path="/">
            <Redirect to="/recipes" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/recipes">
            <IonIcon aria-hidden="true" icon={pizzaOutline} />
            <IonLabel>Recepten</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/favorites">
            <IonIcon aria-hidden="true" icon={heart} />
            <IonLabel>Favorieten</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/profile">
            <IonIcon aria-hidden="true" icon={person} />
            <IonLabel>Profiel</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
