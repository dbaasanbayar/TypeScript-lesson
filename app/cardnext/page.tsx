"use client";
import Image from "next/image";
import { Card } from "@/app/_component/Card";
import { useState } from "react";

type UserType = {
  name: string;
  age: number;
  email: any;
};

const user: UserType[] = [
  { name: "bat", age: 24, email: "bat@example.com" },
  { name: "bata", age: 244, email: "bata@example.com" },
  { name: "bataa", age: 243, email: "bataa@example.com" },
];
export default function Home() {
  const [data, setData] = useState(0);
  const handleNext = () => {
    setData(() => data + 1);
  };
  const handleBack = () => {
    setData(data - 1);
  };
  return (
    <div className="p-5">
      <Card user={user[data]} />
      <div className="flex  gap-2">
        <button onClick={handleBack}>back</button>
        <button onClick={handleNext}>next</button>
      </div>
    </div>
  );
}
