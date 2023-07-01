"use client";
import CityPicker from "@/components/CityPicker";
import { Card, Text, Metric, Divider, Subtitle } from "@tremor/react";

export default function Home() {
  return (
    <div className="min-h-screen p-10 bg-gradient-to-br from-cyan-600 to-sky-700 flex flex-col justify-center items-center ">
      <Card className="bg-white rounded max-w-4xl mx-auto">
        <Text className="text-6xl font-bold text-center mb-10">Weather AI</Text>
        <Subtitle className="text-2xl text-center">
          Powered by OpenAI, Next.js, Tailwind, Tremor
        </Subtitle>

        <Divider className="my-10" />

        <Card className="bg-gradient-to-br from-cyan-600 to-sky-700 rounded">
          <CityPicker/>
        </Card>
      </Card>
    </div>
  );
}
