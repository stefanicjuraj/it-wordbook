import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebaseService";
import { WordBook } from "../types/wordbook";

export const useData = () => {
  const [data, setData] = useState<WordBook[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, "it-wordbook"));
        const data: WordBook[] = [];
        querySnapshot.forEach((document) => {
          const wordbookData = document.data();
          for (const key in wordbookData) {
            data.push({
              id: document.id + "-" + key,
              word: wordbookData[key].word,
              definition: wordbookData[key].definition,
              tags: wordbookData[key].tags,
            });
          }
        });
        setData(data);
        setTags(getTags(data));
      } catch (err) {
        return err;
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, tags, loading };
};

const getTags = (data: WordBook[]): string[] => {
  const tags = data.flatMap((item) => item.tags);
  return Array.from(new Set(tags));
};
