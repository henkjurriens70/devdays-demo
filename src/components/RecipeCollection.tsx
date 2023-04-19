import { IonSearchbar, IonSlide, IonSlides } from "@ionic/react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./RecipeCollection.css";
import "@ionic/react/css/ionic-swiper.css";
import RecipySlide from "./RecipeSlide";
import Recipe from "./Recipe";
import RecipeSlide from "./RecipeSlide";

const RecipeCollection: React.FC = () => {
  return (
    <>
      <div className="mx-2 mt-10">
        <IonSearchbar></IonSearchbar>
      </div>
      <Swiper className="block md:hidden ">
        <SwiperSlide>
          <RecipeSlide></RecipeSlide>
        </SwiperSlide>
        <SwiperSlide>
          <RecipySlide></RecipySlide>
        </SwiperSlide>
        <SwiperSlide>
          <RecipySlide></RecipySlide>
        </SwiperSlide>
        <SwiperSlide>
          <RecipySlide></RecipySlide>
        </SwiperSlide>
      </Swiper>
      <div className="invisible md:visible m-2 grid grid-cols-4 gap-4">
        <Recipe></Recipe>
      </div>
    </>
  );
};

export default RecipeCollection;
