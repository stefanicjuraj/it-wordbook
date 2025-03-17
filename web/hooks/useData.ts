"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { TechBook } from "../types/techbook";

export const useData = () => {
  const [data, setData] = useState<TechBook[]>([]);
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "it-wordbook"));
        const data: TechBook[] = [];
        querySnapshot.forEach((document) => {
          const techbookData = document.data();
          for (const key in techbookData) {
            data.push({
              id: document.id + "-" + key,
              word: techbookData[key].word,
              definition: techbookData[key].definition,
              tags: techbookData[key].tags,
            });
          }
        });
        setData(data);
        setTags(getTags(data));
      } catch (err) {
        return err;
      }
    };

    fetchData();
  }, []);

  return { data, tags };
};

const getTags = (data: TechBook[]): string[] => {
  const tags = data.flatMap((item) => item.tags);
  return Array.from(new Set(tags));
};
