"use client";

import { fetchPokemon, fetchType } from "@/api/pokemon-api";
import PokemonCard from "@/components/pokemon-card";
import SelectFilter from "@/components/select-filter";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Page() {
  const [data, setData] = useState("");
  const [limit, setLimit] = useState(25);
  const [offset, setOffset] = useState(0);
  const [totalData, setTotalData] = useState(0);
  const [options, setOptions] = useState("");
  const params = {
    limit: limit,
    offset: offset,
  };
  useEffect(() => {
    getPokemon();
    fethTypeList();
  }, []);

  const getPokemon = async () => {
    const res = await fetchPokemon(params);
    const { results, count } = res?.data;
    setTotalData(count);
    setData(results);
  };

  const getMorePokemon = async () => {
    const res = await fetchPokemon({ limit: limit, offset: data?.length });
    const { results } = res?.data;

    setData((list) => [...list, ...results]);
  };

  const fethTypeList = async () => {
    const res = await fetchType({ limit: 10, offset: 0 });
    const { results } = res?.data;
    setOptions(results);
  };
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row justify-between">
        <h2 className="font-bold">List Pokemon</h2>
      </div>

      <InfiniteScroll
        dataLength={data?.length}
        next={getMorePokemon}
        hasMore={true}
        loader={<h3> Loading...</h3>}
        endMessage={<h4>Nothing more to show</h4>}
      >
        <div className="grid grid-cols-5 gap-4">
          {data.length > 0 && data?.map((item) => <PokemonCard key={item?.name} name={item?.name} url={item?.url} />)}
        </div>
      </InfiniteScroll>
    </div>
  );
}
