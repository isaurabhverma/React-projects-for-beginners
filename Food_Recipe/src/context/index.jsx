import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState(() => localStorage.getItem('searchParam') || "");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState(() => {
    try { return JSON.parse(localStorage.getItem('recipeList')) || []; } catch { return []; }
  });
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favoritesList, setFavoritesList] = useState(() => {
    try { return JSON.parse(localStorage.getItem('favorites')) || []; } catch { return []; }
  })
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') === 'dark' ? 'dark' : 'light')
  const [error, setError] = useState("")
  const [info, setInfo] = useState("")

  const navigate = useNavigate()

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError("");
    setInfo("");
    try {
      const start = Date.now();
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );

      const data = await res.json();
      if (data?.data?.recipes) {
        setRecipeList(data?.data?.recipes);
        if (!data?.data?.recipes?.length) {
          setInfo("No recipes found. Try another search.")
        }
        setSearchParam("");
        navigate('/')
      }
      const elapsed = Date.now() - start;
      const remaining = 1000 - elapsed;
      if (remaining > 0) {
        setTimeout(() => setLoading(false), remaining);
      } else {
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setError("Failed to fetch recipes. Please try again.")
      setTimeout(() => setLoading(false), 1000);
      setSearchParam("");
    }
  }

  function handleAddToFavorite(getCurrentItem){
    console.log(getCurrentItem);
    let cpyFavoritesList = [...favoritesList];
    const index = cpyFavoritesList.findIndex(item=> item.id === getCurrentItem.id)

    if(index === -1) {
      cpyFavoritesList.push(getCurrentItem)
      setInfo("Added to favorites")
    } else {
      cpyFavoritesList.splice(index, 1)
      setInfo("Removed from favorites")
    }

    setFavoritesList(cpyFavoritesList)
  }

  // set initial html class for theme on mount
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [])

  // persist favorites to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('favorites', JSON.stringify(favoritesList));
    } catch (e) {
      console.log(e);
    }
  }, [favoritesList]);

  // persist recipe list and search term
  useEffect(() => {
    try {
      localStorage.setItem('recipeList', JSON.stringify(recipeList));
    } catch (e) { console.log(e); }
  }, [recipeList]);

  useEffect(() => {
    try {
      localStorage.setItem('searchParam', searchParam);
    } catch (e) { console.log(e); }
  }, [searchParam]);

  // persist theme and update html class
  useEffect(() => {
    try {
      localStorage.setItem('theme', theme)
      document.documentElement.classList.toggle('dark', theme === 'dark')
    } catch (e) {
      console.log(e)
    }
  }, [theme])

  function toggleTheme(){
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  // auto-clear info messages after a short delay
  useEffect(() => {
    if (!info) return;
    const t = setTimeout(() => setInfo("") , 2000);
    return () => clearTimeout(t);
  }, [info])

  console.log(favoritesList, 'favoritesList');

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        loading,
        recipeList,
        setSearchParam,
        handleSubmit,
        recipeDetailsData,
        setRecipeDetailsData,
        handleAddToFavorite,
        favoritesList,
        theme,
        toggleTheme,
        error,
        info,
        setInfo,
        setError
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
