"use client";

import { useState } from "react";
import React from "react";

const maxLength = 150;

export default function Home() {
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value.slice(0, maxLength));
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-6 font-sans">
      <div className="w-full max-w-md">
        <div>
          <textarea
            className="h-48 w-full rounded-xl border border-black/10 bg-black/5 p-6 text-xl text-black/90 backdrop-blur-sm transition-all focus:border-black/20 focus:bg-black/10 placeholder:text-black/30"
            placeholder="Type your message..."
            value={message}
            onChange={handleChange}
          />
        </div>
        <div className="mt-3 pr-1 text-right text-2xl font-light text-black/50 tabular-nums">
          {message.length}/{maxLength}
        </div>
      </div>
    </div>
  );
}
