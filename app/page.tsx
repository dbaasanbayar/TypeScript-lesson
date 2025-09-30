"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CardContent } from "@/components/ui/card";
import { Card } from "@/components/ui/card";
import { Movies } from "./_component/Movies";
import { MovieType } from "@/lib/types";

export default function Home() {
  const [number, setNumber] = useState<number>(0);
  const [numOrStr, setnumOrstr] = useState<number | string>("");
  const [grades, setGrades] = useState<number[]>([]);
  const [movies, setMovies] = useState<MovieType[]>();

  const movie: MovieType = {
    name: "Avatar",
    release: 2025,
    rating: 7.8,
    images: [
      "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=",
    ],
  };

  const testMovies: MovieType[] = [
    {
      name: "Avatar",
      release: 2025,
      rating: 7.8,
      images: [
        "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=",
      ],
    },
    {
      name: "Moana",
      release: 2025,
      rating: 7.8,
      images: [
        "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=",
      ],
    },
  ];

  const incrementHandler = () => {
    setNumber(number + 1);
  };
  return (
    <div className="p-10 flex gap-2">
      <Card className="w-fit">
        <CardContent className="flex flex-col gap-4">
          {number}
          <Button onClick={incrementHandler} className="w-fit">
            increment
          </Button>
        </CardContent>
      </Card>
      <Card className="w-fit">
        <CardContent className="flex flex-col gap-4">
          {numOrStr}
          <Button onClick={() => setnumOrstr(100)} className="w-fit">
            change into number
          </Button>
          <Button onClick={() => setnumOrstr("hello")} className="w-fit">
            change into string
          </Button>
        </CardContent>
      </Card>
      <Movies movies={testMovies}></Movies>
    </div>
  );
}
