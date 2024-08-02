"use client";

import { Separator } from "@/components/ui/separator";
import React, { useEffect, useState } from "react";
import CareerSection from "../components/CareerSection";
import GithubSection from "../components/GithubSection";
import SkillSection from "../components/SkillSection";
import Particles from "@/components/magicui/particles";
import { useTheme } from "next-themes";
import { TracingBeam } from "@/components/ui/tracing-beam";

const AboutPage = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  return (
    <div className="relative">
      <div className="container px-60 my-20 text-neutral-800 dark:text-neutral-300 space-y-10 antialiased">
        <h1 className="font-sora text-3xl font-bold text-center text-neutral-800 dark:text-neutral-200">
          About Me
        </h1>
        <p className="mt-4 mb-8 text-lg text-center text-neutral-700 dark:text-neutral-300">
          Discover the journey and the passion behind my career
        </p>
        <div className="flex flex-col space-y-6 font-sans text-neutral-800 dark:text-neutral-300">
          <p>
            Halo! Perkenalkan, saya memulai perjalanan saya di dunia teknologi
            tidak dari bangku universitas, melainkan dari bangku SMK, di mana
            saya mengambil jurusan teknik elektro industri. Kecintaan saya pada
            coding bermula dari sebuah momen krusial saat ujian praktek, di mana
            saya pertama kali menggunakan Arduino. Itu adalah pengalaman pertama
            saya dengan coding, dan sejak itu, saya terpikat.
          </p>
          <p>
            Setelah lulus, saya tidak langsung melanjutkan ke jenjang pendidikan
            yang lebih tinggi. Sebaliknya, saya menghabiskan hari-hari saya
            bermain game dan menonton video tutorial di YouTube. Di sela-sela
            waktu luang itu, saya mulai menggali lebih dalam tentang pemrograman
            dengan belajar Python. Namun, semuanya berubah ketika saya menemukan
            sebuah tutorial tentang cara membuat website. Saya terpesona oleh
            bagaimana kode bisa diubah menjadi desain visual yang menarik.
          </p>
          <p>
            Keinginan untuk lebih menguasai bidang ini mendorong saya untuk
            kembali ke dunia akademik. Saya memutuskan untuk kuliah, meskipun
            saya sadar bahwa banyak ilmu yang saya dapatkan justru dari luar
            kampus. Selama kurang lebih 8 bulan 'menganggur', saya memutuskan
            untuk mengambil risiko tersebut. Itu adalah keputusan yang mengubah
            jalur karir saya.
          </p>
          <p>
            Dari situ, saya tidak pernah berhenti belajar dan selalu berusaha
            untuk meningkatkan diri. Saya terus mengasah keterampilan saya, baik
            yang didapat dari dalam maupun luar kelas, dan selalu berusaha untuk
            tetap update dengan perkembangan terbaru di industri teknologi. Saya
            percaya bahwa dengan kemampuan dan dedikasi yang saya miliki, saya
            dapat memberikan solusi yang efektif dan berkualitas, baik bekerja
            secara mandiri maupun dalam tim.
          </p>
        </div>
        <CareerSection />
        <GithubSection />
        <SkillSection />
      </div>
    </div>
  );
};

export default AboutPage;
