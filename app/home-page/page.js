"use client";

import { fetchPokemon } from "@/api/pokemon-api";
import PokemonCard from "@/components/pokemon-card";
import { useEffect, useState } from "react";

export default function Page() {
  const [data, setData] = useState("");
  const [limit, setLimit] = useState(25);
  const [offset, setOffset] = useState(0);
  const [totalData, setTotalData] = useState(0);
  const params = {
    limit: limit,
    offset: offset,
  };
  useEffect(() => {
    getPokemon();
  }, []);

  const getPokemon = async () => {
    const res = await fetchPokemon(params);
    const { results, count } = res?.data;
    setTotalData(count);
    setData(results);
  };
  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-bold">List Pokemon</h2>
      <div className="grid grid-cols-5 gap-4">
        {data.length > 0 && data?.map((item) => <PokemonCard key={item?.name} name={item?.name} url={item?.url} />)}
      </div>
    </div>
  );
}
