import Recipy from "./Recipy";

const RecipyCollection: React.FC = () => {
  return (
    <div className="m-2 grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4">
      <Recipy></Recipy>
      <Recipy></Recipy>
      <Recipy></Recipy>
      <Recipy></Recipy>
      <Recipy></Recipy>
      <Recipy></Recipy>
      <Recipy></Recipy>
      <Recipy></Recipy>
    </div>
  );
};

export default RecipyCollection;
