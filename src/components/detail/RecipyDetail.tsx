import Rating from "../Rating";
import Ingredients from "./Ingredients";
import Methods from "./Methods";

const RecipyDetail: React.FC = () => {
  return (
    <div className="flex flex-col">
      <img className="w-full" src="/assets/images/bread.png" />
      <div className="flex flex-col p-2">
        <div className="font-bold mt-2">Bread</div>
        <div className="my-2">Door Polo</div>
        <Rating />
        <Ingredients />
        <Methods />
      </div>
    </div>
  );
};

export default RecipyDetail;
