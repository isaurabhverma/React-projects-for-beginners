import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context";
import Loader from "../../components/Loader";

export default function Details() {
  const { id } = useParams();
  const {
    recipeDetailsData,
    setRecipeDetailsData,
    favoritesList,
    handleAddToFavorite,
    error,
    info
  } = useContext(GlobalContext);

  useEffect(() => {
    async function getRecipeDetails() {
      try {
        const response = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
        );
        const data = await response.json();

        console.log(data);
        if (data?.data) {
          setRecipeDetailsData(data?.data);
        }
      } catch (e) {
        console.log(e);
      }
    }

    getRecipeDetails();
  }, [id, setRecipeDetailsData]);

  console.log(recipeDetailsData, "recipeDetailsData");

  if (!recipeDetailsData && !error) return <Loader />;

  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="row-start-2 lg:row-start-auto">
        <div className="h-96 overflow-hidden rounded-xl group">
          <img
            src={recipeDetailsData?.recipe?.image_url}
            alt={recipeDetailsData?.recipe?.title || "recipe image"}
            loading="lazy"
            className="w-full h-full object-cover block group-hover:scale-105 duration-300"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-sm text-cyan-700 font-medium">
          {recipeDetailsData?.recipe?.publisher}
        </span>
        <h3 className="font-bold text-2xl truncate text-black dark:text-white">
          {recipeDetailsData?.recipe?.title}
        </h3>
        <div>
          <button
            onClick={() => handleAddToFavorite(recipeDetailsData?.recipe)}
            className="p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-md bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 duration-200"
          >
            {favoritesList && favoritesList.length > 0 && favoritesList.findIndex(
              (item) => item.id === recipeDetailsData?.recipe?.id
            ) !== -1
              ? "Remove from favorites"
              : "Add to favorites"}
          </button>
          {info && <p className="mt-2 text-green-600 dark:text-green-400">{info}</p>}
        </div>
        <div>
          <span className="text-2xl font-semibold text-black dark:text-white">
            Ingredients:
          </span>
          <ul className="flex flex-col gap-3">
            {recipeDetailsData?.recipe?.ingredients?.map((ingredient) => (
              <li key={`${ingredient?.description}-${ingredient?.unit}-${ingredient?.quantity}`}>
                <span className="text-2xl font-semibold text-black dark:text-white">
                  {ingredient?.quantity} {ingredient?.unit}
                </span>
                <span className="text-2xl font-semibold text-black dark:text-white">
                  {ingredient?.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
        {error && (
          <div className="lg:col-span-2 text-center text-red-600 dark:text-red-400 font-semibold">{error}</div>
        )}
      </div>
    </div>
  );
}
