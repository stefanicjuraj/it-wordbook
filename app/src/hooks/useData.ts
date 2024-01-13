import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebaseService";
import { WordBook } from "../types/wordbook";

export const useData = () => {
  const [data, setData] = useState<WordBook[]>([]);

  useEffect(() => {
    const fetchData = async () => {
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
            });
          }
        });
        setData(data);
      } catch (err) {
        return err;
      }
    };

    fetchData();
  }, []);

  return { data };
};
