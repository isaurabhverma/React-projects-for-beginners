import { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/recipe-item";
import Loader from "../../components/Loader";

export default function Home() {
  const { recipeList, loading, error, info } = useContext(GlobalContext);

  if (loading) return <Loader />;

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {error ? (
        <p className="text-red-600 dark:text-red-400 font-semibold">{error}</p>
      ) : recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => <RecipeItem key={item.id} item={item} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black dark:text-white font-extrabold">Nothing to show. Please search something</p>
          {info && <p className="text-gray-600 dark:text-gray-300 text-center mt-2">{info}</p>}
        </div>
      )}
    </div>
  );
}
