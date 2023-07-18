"use client";

import { fetchPokemonDetail } from "@/api";
import { useEffect, useState } from "react";
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);
export default function Page(props) {
  const [data, setData] = useState("");
  const [stats, setStats] = useState("");

  const fetchDetail = async (id) => {
    const res = await fetchPokemonDetail(id);
    setData(res?.data);
    let det = [];
    res?.data?.stats?.map((item) => {
      det.push(item?.base_stat);
    });
    setStats(det);
  };

  useEffect(() => {
    const {
      params: { slug },
    } = props;

    fetchDetail(slug);
  }, []);

  const radarData = {
    labels: ["HP", "ATK", "DEF", "SP ATK", "SP DEF", "SPD"],
    datasets: [
      {
        label: `Stats`,
        data: stats,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 2,
      },
    ],
  };
  return (
    <div className="flex flex-col gap-2 w-full items-center justify-center">
      <h2 className="font-bold capitalize text-3xl">{data?.name}</h2>
      <div className="grid grid-cols-3 gap-2 w-full items-center justify-center ">
        <div className="text-center">Weigth: {data?.weight} kg</div>
        <div className="text-center">Height: {data?.height} meter</div>
        <div className="text-center">Type: {data?.types?.map((items) => items.type.name)} </div>
      </div>
      <div className="w-[500px] h-[500px]">
        <Radar data={radarData} />
      </div>
      <div className="flex flex-row w-[400px] gap-4">
        <img src={data?.sprites?.front_default} alt={(data.name, 1)} className="w-full object-contain" />
        <img src={data?.sprites?.front_shiny} alt={(data?.name, 2)} className="w-full object-contain" />
      </div>
    </div>
  );
}
