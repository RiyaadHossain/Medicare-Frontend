import { useEffect, useState } from "react";
import { token } from "../config/config";
import { toast } from "react-hot-toast";

export default function useFetchData(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(url, {
            headers: { Authorization: token },
        });

        const result = await res.json();

        if (!result.success) throw new Error(result.message);

        setData(result.data);
      } catch (err) {
        toast.error(err.message, { id: "err" });
        setError(err.message);
      }
      setLoading(false);
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}
