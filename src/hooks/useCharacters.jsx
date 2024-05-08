import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function useCharacters(url, query) {
  const [isLoading, setIsLoading] = useState(false);
  const [allCharacters, setAllCharacters] = useState([]);
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    async function startFetchData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`${url}=${query}`);
        setAllCharacters(data.results);
      } catch (err) {
        toast.error(err.response.data.error);
        setCharacters([]);
        setAllCharacters([]);
      } finally {
        setIsLoading(false);
      }
    }
    startFetchData();
  }, [query]);
  return [ isLoading, allCharacters, characters, setCharacters ];
}
