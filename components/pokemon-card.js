import React, { useEffect, useState } from "react";

import axios from "axios";

import { Button, Card, CardContent, CardFooter, CardTitle } from "./ui";
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
    <Card>
      <CardTitle className="capitalize p-2 text-center">{name}</CardTitle>
      <CardContent className="p-2">
        <img src={detail?.sprites?.front_default} alt={name} className="w-full h-[100px] object-contain" />
      </CardContent>
      <CardFooter>
        <Link href={`/detail/${detail?.id}`} className="w-full">
          <Button className="w-full">Detail</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default PokemonCard;
