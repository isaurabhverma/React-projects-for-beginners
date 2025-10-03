import { Link } from "react-router-dom";

export default function RecipeItem({ item }) {
  return (
    <div className="flex flex-col w-80 overflow-hidden p-5 bg-white/75 dark:bg-white/10 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 duration-200 gap-5 border-2 rounded-2xl border-white/70 dark:border-white/10">
      <div className="h-40 flex justify-center overflow-hidden items-center rounded-xl">
        <img src={item?.image_url} alt={item?.title || "recipe item"} loading="lazy" className="block w-full group-hover:scale-105 duration-200" />
      </div>
      <div>
        <span className="text-sm text-cyan-700 font-medium">
          {item?.publisher}
        </span>
        <h3 className="font-bold text-2xl truncate text-black dark:text-white">
          {item?.title}
        </h3>
        <Link
          to={`/recipe-item/${item?.id}`}
          className="text-sm p-3 mt-5 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 duration-200"
        >
          Recipe Details
        </Link>
      </div>
    </div>
  );
}
