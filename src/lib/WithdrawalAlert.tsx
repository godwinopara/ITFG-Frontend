import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaRocketchat } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const WithdrawalSentences = [
  "Sophia Anderson, who lives in Paris, France, withdrew $4321.25",
  "Jackson Brown, who lives in Paris, France, withdrew $5678.90",
  "Ava Carter, who lives in Paris, France, withdrew $1234.50",
  "Ethan Davis, who lives in Paris, France, withdrew $7890.60",
  "Olivia Evans, who lives in Paris, France, withdrew $6543.25",
  "Noah Foster, who lives in Paris, France, withdrew $9876.40",
  "Emma Garcia, who lives in Berlin, Germany, withdrew $3456.75",
  "Mia Hall, who lives in Berlin, Germany, withdrew $8901.20",
  "Liam Irwin, who lives in Berlin, Germany, withdrew $2109.75",
  "Aria Johnson, who lives in Berlin, Germany, withdrew $5432.90",
  "Ethan Kelly, who lives in Berlin, Germany, withdrew $8765.30",
  "Sophie Lee, who lives in Tokyo, Japan, withdrew $6789.50",
  "Oliver Mitchell, who lives in Tokyo, Japan, withdrew $2345.60",
  "Lucas Nelson, who lives in Tokyo, Japan, withdrew $5678.75",
  "Isabella Olson, who lives in Tokyo, Japan, withdrew $9012.80",
  "Aiden Parker, who lives in Tokyo, Japan, withdrew $3456.95",
  "Lily Quinn, who lives in Sydney, Australia, withdrew $6789.10",
  "Mia Robinson, who lives in Sydney, Australia, withdrew $1234.25",
  "Aria Smith, who lives in Sydney, Australia, withdrew $4567.30",
  "Noah Turner, who lives in Sydney, Australia, withdrew $7890.45",
  "Emma Underwood, who lives in Sydney, Australia, withdrew $1098.50",
  "Ava Vasquez, who lives in New York, USA, withdrew $8765.20",
  "Sophia Ward, who lives in New York, USA, withdrew $2109.35",
  "Ethan Xavier, who lives in New York, USA, withdrew $5432.40",
  "Jackson Young, who lives in New York, USA, withdrew $9012.55",
  "Isabella Zane, who lives in New York, USA, withdrew $2345.70",
  "Olivia Adams, who lives in Mumbai, India, withdrew $5678.85",
  "Liam Baker, who lives in Mumbai, India, withdrew $7890.95",
  "Ava Clark, who lives in Mumbai, India, withdrew $1098.15",
  "Jackson Dixon, who lives in Mumbai, India, withdrew $4321.25",
  "Sophie Evans, who lives in Mumbai, India, withdrew $8765.30",
  "Oliver Fisher, who lives in Beijing, China, withdrew $7890.40",
  "Mia Garcia, who lives in Beijing, China, withdrew $2109.55",
  "Liam Harper, who lives in Beijing, China, withdrew $5432.70",
  "Emma Irwin, who lives in Beijing, China, withdrew $9012.85",
  "Noah Johnson, who lives in Beijing, China, withdrew $2345.95",
  "Aiden Kim, who lives in Berlin, Germany, withdrew $5678.25",
  "Lily Lee, who lives in Berlin, Germany, withdrew $1098.35",
  "Sophia Miller, who lives in Berlin, Germany, withdrew $4321.45",
  "Isabella Nelson, who lives in Berlin, Germany, withdrew $7890.60",
  "Olivia Olson, who lives in Berlin, Germany, withdrew $2109.75",
  "Mia Patel, who lives in Paris, France, withdrew $5432.90",
  "Ethan Quinn, who lives in Paris, France, withdrew $8765.05",
  "Jackson Robinson, who lives in Paris, France, withdrew $1098.15",
  "Ava Smith, who lives in Paris, France, withdrew $2345.30",
  "Liam Turner, who lives in Paris, France, withdrew $5678.45",
];

export default function WithdrawalAlert({ children }: { children: React.ReactNode }) {
  const [randomSentence, setrandomSentence] = useState("");

  const notify = () =>
    toast.custom(
        (t) => (
            <div
                className={`${
                    t.visible ? "animate-enter" : "animate-leave"
                } max-w-[19rem] w-full bg-notify opacity-80 text-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
            >
                <div className="flex-1 w-0 p-3">
                    <div className="flex items-start">
                        <div className="flex-1">
                            <div className="flex gap-x-3 items-center">
                                <div className="text-2xl">
                                    <FaRocketchat />
                                </div>
                                <div>
                                    <div className="flex justify-between items-center">
                                        <h4 className="font-bold text-xl">Recent withdrawal!</h4>
                                        <button
                                            onClick={() => toast.dismiss()}
                                            className="flex items-center justify-center text-xl font-bold"
                                        >
                                            <IoMdClose />
                                        </button>
                                    </div>
                                    <p className="mt-1 text-white text-lg">{randomSentence}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ),
        {
            position: "bottom-left",
            duration: 1800,
        }
    );
  useEffect(() => {
    const intervalId = setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * WithdrawalSentences.length);
      const newRandomSentence = WithdrawalSentences[randomIndex];
      setrandomSentence(newRandomSentence);
    }, 5000);

    // Clean up the interval when the component is unmounted
    return () => clearTimeout(intervalId);

    //eslint-disable-next-line
  }, [randomSentence]);

  useEffect(() => {
    if (randomSentence !== "") {
      // Only notify and show toast if randomSentence is not empty
      notify();
    }

    //eslint-disable-next-line
  }, [randomSentence]);
  return <React.Fragment>{children}</React.Fragment>;
}
