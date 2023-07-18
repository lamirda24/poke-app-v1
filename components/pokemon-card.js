import React, { useEffect, useState } from "react";

import axios from "axios";

import { Card, CardContent, CardFooter, CardTitle } from "./ui";
import Link from "next/link";

const PokemonCard = (props) => {
  const { url, name } = props;
  const [detail, setDetail] = useState("");

  const fetchDetail = async () => {
    const res = await axios.get(url);
    setDetail(res.data);
  };

  useEffect(() => {
    fetchDetail();
  }, []);

  return (
    <Link href={`/detail/${detail?.id}`}>
      <Card className="p-2">
        <CardTitle className="capitalize">{name}</CardTitle>
        <CardContent>
          <img src={detail?.sprites?.front_default} alt={name} className="w-full h-[100px] object-contain" />
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </Link>
  );
};

export default PokemonCard;
