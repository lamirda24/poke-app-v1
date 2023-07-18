"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Page(props) {
  const [data, setData] = useState("");

  useEffect(() => {
    fetchDetail();
  }, []);

  const fetchDetail = async () => {
    const res = await axios.get(url);
    setData(res.data);
    console.log(res, "asd");
  };
  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-bold">Pokemon Detail</h2>
      {/* <div className="grid grid-cols-5 gap-4">
        {data.length > 0 && data?.map((item) => <PokemonCard key={item?.name} name={item?.name} url={item?.url} />)}
      </div> */}
    </div>
  );
}
