"use client";
import React from "react";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return <div onClick={reset}>{error.message}</div>;
};

export default Error;
