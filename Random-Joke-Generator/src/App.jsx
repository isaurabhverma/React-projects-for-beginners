import { useState, useEffect } from "react";

export default function App() {
  const [jokes, setJokes] = useState([]);
  const [currentJoke, setCurrentJoke] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchJokes = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://api.freeapi.app/api/v1/public/randomjokes/joke/random"
      );
      const data = await response.json();
      //console.log(data?.statusCode);
      
      if (data?.statusCode==200) {
        setJokes();
        let joke = (data.data.content);
        
        const randomIndex = Math.floor(Math.random() * data.data.length);
        setCurrentJoke(joke);
      }
    } catch (error) {
      console.error("Error fetching jokes:", error);
    }
    setLoading(false);
  };

  const generateRandomJoke = () => {
    fetchJokes();
    
    
  };

  useEffect(() => {
    fetchJokes();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white p-4">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-6">😂 Random Joke Generator</h1>

        {loading ? (
          <p className="text-lg animate-pulse">Loading jokes...</p>
        ) : currentJoke ? (
          <>
            <p className="text-lg italic mb-4 text-yellow-100">
              "{currentJoke}"
            </p>
            <p className="text-sm text-gray-200 mb-6">
              — {currentJoke.author || "Unknown"}
            </p>
            <button
              onClick={generateRandomJoke}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-full transition-transform transform hover:scale-105"
            >
              Tell Me Another!
            </button>
          </>
        ) : (
          <p>No jokes available. Try again later!</p>
        )}
      </div>

      <footer className="mt-8 text-sm opacity-80">
        Made with 💜 using FreeAPI.app
      </footer>
    </div>
  );
}
