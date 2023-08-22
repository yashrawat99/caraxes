"use client";
import SkeletonCard from "@/app/components/templates/TripTemplate/SkeletonCard";
import React from "react";

const Loading = () => {
  return (
    <div>
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  );
};

export default Loading;
