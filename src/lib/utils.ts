import { interviewCovers, mappings } from "@/constants";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import image1 from "../public/covers/hostinger.png"
import image2 from "../public/covers/pinterest.png"
import image3 from "../public/covers/adobe.png"
import image4 from "../public/covers/amazon.png"
import image5 from "../public/covers/facebook.png"
import image6 from "../public/covers/quora.png"
import image7 from "../public/covers/reddit.png"
import image8 from "../public/covers/telegram.png"
import image9 from "../public/covers/spotify.png"
import image10 from "../public/covers/skype.png"



export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
const techIconBaseURL = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

const normalizeTechName = (tech: string) => {
  const key = tech.toLowerCase().replace(/\.js$/, "").replace(/\s+/g, "");
  return mappings[key as keyof typeof mappings];
};

const checkIconExists = async (url: string) => {
  try {
    const response = await fetch(url, { method: "HEAD" });
    return response.ok; // Returns true if the icon exists
  } catch {
    return false;
  }
};

export const getTechLogos = async (techArray: string[]) => {
  const logoURLs = techArray.map((tech) => {
    const normalized = normalizeTechName(tech);
    return {
      tech,
      url: `${techIconBaseURL}/${normalized}/${normalized}-original.svg`,
    };
  });

  const results = await Promise.all(
    logoURLs.map(async ({ tech, url }) => ({
      tech,
      url: (await checkIconExists(url)) ? url : "/tech.svg",
    }))
  );

  return results;
};


const interviewCoverss = [image1, image2,image3,image4,image5,image6,image7,image8,image9,image10]


export const getRandomInterviewCover = () => {
  const randomIndex = Math.floor(Math.random() * interviewCoverss.length);
  return interviewCoverss[randomIndex];
};
