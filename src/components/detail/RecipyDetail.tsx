import Rating from "../Rating";
import Ingredients from "./Ingredients";
import Methods from "./Methods";
import Preparation from "./Preparation";

const RecipyDetail: React.FC = () => {
  return (
    <div className="flex flex-col">
      <img className="w-full" src="/assets/images/bread.png"  alt="food"/>
      <div className="flex flex-col p-2">
        <div className="font-bold mt-2">Bread</div>
        <div className="my-2">Door Polo</div>
        <Rating />
        <div>Description</div>
        <Preparation />
        <Ingredients />
        <Methods />
      </div>
    </div>
  );
};

export default RecipyDetail;
