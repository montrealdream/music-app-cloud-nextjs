import type { Metadata } from "next";

// components
import { Section1 } from './components/section1/Section1';
import { Section2 } from './components/section2/Section2';
import { Section3 } from './components/section3/Section3';

// Metadata
export const metadata: Metadata = {
  title: "Music AppCloud",
  description: "Ứng dụng nghe nhạc trực tuyến",
};

export default function Home() {
  return (
    <>
      <Section1 />
      <Section2 />
      <Section3 />
    </>
  );
}
