// Random Pokemon Generator (React)
// --------------------------------------------------
// Single-file React component (default export)
// - Uses the free PokeAPI (https://pokeapi.co)
// - Fetches a list of available Pokémon on mount, picks a random one,
//   fetches its details, and displays image, abilities, types, stats, etc.
// - Tailwind CSS classes are used for styling (no Tailwind import here).
//
// How to use:
// 1. Create a React app (Vite or Create React App).
// 2. Ensure Tailwind is installed if you want the same styling (optional).
// 3. Paste this component into a file, e.g. src/RandomPokemon.jsx and import it in App.jsx.
// 4. Run the app.
//
// Example: in App.jsx
// import RandomPokemon from './RandomPokemon';
// function App(){ return <div className="min-h-screen bg-gray-100 p-6"><RandomPokemon/></div> }

import React, { useEffect, useState, useCallback } from 'react';

export default function RandomPokemon() {
  const [pokemonListUrl, setPokemonListUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=100000');
  const [allPokemon, setAllPokemon] = useState([]);
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Load the full list once so we can pick randomly from available entries
  useEffect(() => {
    let cancelled = false;
    async function loadList() {
      try {
        setError(null);
        const res = await fetch(pokemonListUrl);
        if (!res.ok) throw new Error('Failed to load Pokemon list');
        const data = await res.json();
        if (!cancelled) setAllPokemon(data.results || []);
      } catch (err) {
        if (!cancelled) setError(err.message || 'Unknown error');
      }
    }
    loadList();
    return () => (cancelled = true);
  }, [pokemonListUrl]);

  const fetchPokemonDetails = useCallback(async (url) => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch(url);
      if (!res.ok) throw new Error('Failed to fetch pokemon details');
      const data = await res.json();
      setPokemon(data);
    } catch (err) {
      setError(err.message || 'Unknown error');
      setPokemon(null);
    } finally {
      setLoading(false);
    }
  }, []);

  const pickRandom = useCallback(() => {
    if (!allPokemon || allPokemon.length === 0) {
      setError('Pokemon list not loaded yet');
      return;
    }
    const idx = Math.floor(Math.random() * allPokemon.length);
    const p = allPokemon[idx];
    fetchPokemonDetails(p.url);
  }, [allPokemon, fetchPokemonDetails]);

  // Fetch a random one as soon as list is available
  useEffect(() => {
    if (allPokemon && allPokemon.length > 0) pickRandom();
  }, [allPokemon, pickRandom]);

  function capitalize(s){
    if (!s) return '';
    return s[0].toUpperCase() + s.slice(1);
  }

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded-2xl p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Random Pokémon Generator</h2>
        <div className="space-x-2">
          <button
            onClick={pickRandom}
            className="px-4 py-2 rounded-lg border transition hover:shadow-md"
          >
            New Random
          </button>
          <button
            onClick={() => { setPokemon(null); setError(null); setLoading(false); setAllPokemon([]); setPokemonListUrl('https://pokeapi.co/api/v2/pokemon?limit=100000'); }}
            className="px-3 py-2 rounded-lg border text-sm"
          >
            Reset
          </button>
        </div>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-50 text-red-700 rounded">Error: {error}</div>
      )}

      {loading && (
        <div className="text-center py-8">Loading...</div>
      )}

      {!loading && !pokemon && !error && (
        <div className="text-center py-8 text-gray-600">Click "New Random" or wait while we auto-select a Pokémon.</div>
      )}

      {pokemon && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-1 flex flex-col items-center">
            <div className="w-56 h-56 flex items-center justify-center bg-gray-100 rounded-xl p-4">
              {/* Prefer official artwork if available */}
              <img
                src={
                  pokemon.sprites?.other?.['official-artwork']?.front_default ||
                  pokemon.sprites?.front_default ||
                  pokemon.sprites?.other?.dream_world?.front_default || ''
                }
                alt={pokemon.name}
                className="max-w-full max-h-full"
              />
            </div>
            <h3 className="mt-3 text-xl font-semibold">{capitalize(pokemon.name)} <span className="text-sm text-gray-500">#{pokemon.id}</span></h3>
            <div className="mt-2 text-sm text-gray-600">
              Height: {pokemon.height} | Weight: {pokemon.weight}
            </div>

            <div className="mt-3 flex gap-2 flex-wrap justify-center">
              {pokemon.types.map(t => (
                <span key={t.slot} className="px-2 py-1 rounded-full border text-sm">{capitalize(t.type.name)}</span>
              ))}
            </div>
          </div>

          <div className="col-span-2">
            <div className="mb-4">
              <h4 className="text-lg font-semibold">Abilities</h4>
              <ul className="mt-2 space-y-2">
                {pokemon.abilities.map(a => (
                  <li key={a.ability.name} className="flex items-center justify-between p-2 border rounded">
                    <div>
                      <strong>{capitalize(a.ability.name.replace('-', ' '))}</strong>
                      {a.is_hidden && <span className="ml-2 text-xs text-gray-500">(Hidden)</span>}
                    </div>
                    <div className="text-sm text-gray-500">Slot {a.slot}</div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="text-lg font-semibold">Stats</h4>
              <div className="mt-2 space-y-2">
                {pokemon.stats.map(s => (
                  <div key={s.stat.name} className="flex items-center justify-between p-2 border rounded">
                    <div className="capitalize">{s.stat.name.replace('-', ' ')}</div>
                    <div className="font-semibold">{s.base_stat}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold">Moves (first 8)</h4>
              <div className="mt-2 grid grid-cols-2 md:grid-cols-4 gap-2">
                {pokemon.moves.slice(0, 8).map(m => (
                  <div key={m.move.name} className="text-sm p-2 border rounded text-center">{capitalize(m.move.name.replace('-', ' '))}</div>
                ))}
              </div>
            </div>
          </div>

        </div>
      )}

      <footer className="mt-6 text-xs text-gray-500">Data provided by <a href="https://pokeapi.co" target="_blank" rel="noreferrer" className="underline">PokeAPI</a></footer>
    </div>
  );
}
