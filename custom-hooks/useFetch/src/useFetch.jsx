import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(url)
      .then((res) => setUsers(res.data))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  return { users, error, loading };
}
