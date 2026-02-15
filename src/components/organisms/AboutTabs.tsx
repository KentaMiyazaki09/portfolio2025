import Image from "next/image";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiZenn } from "react-icons/si";
import { Avatar } from "@/components/ui/avatar";

import { type LucideIcon } from "lucide-react";

type Item = {
  icon: LucideIcon;
  color: string;
  name: string;
  desc: string | React.ReactNode;
};

type AboutTabsProps = {
  skillList: Item[];
  QandA: Item[];
  favo: Item[];
};

const AboutTabs = ({ skillList, QandA, favo }: AboutTabsProps) => (
  <div className="max-w-[600px] mt-auto ml-auto mr-auto">
    <Tabs defaultValue="About">
      <TabsList className="bg-black/0 text-neutral-400">
        <TabsTrigger
          value="About"
          className="text-[clamp(0.75rem,2.5vw,1.2rem)] font-bold tracking-normal bg-black/60 mr-2"
        >
          About
        </TabsTrigger>
        <TabsTrigger
          value="Skill"
          className="text-[clamp(0.75rem,2.5vw,1.2rem)] font-bold tracking-normal bg-black/60 mr-2"
        >
          Skill
        </TabsTrigger>
        <TabsTrigger
          value="QandA"
          className="text-[clamp(0.75rem,2.5vw,1.2rem)] font-bold tracking-normal bg-black/60 mr-2"
        >
          Q&A
        </TabsTrigger>
        <TabsTrigger
          value="Favo"
          className="text-[clamp(0.75rem,2.5vw,1.2rem)] font-bold tracking-normal bg-black/60"
        >
          Favorite
        </TabsTrigger>
      </TabsList>
      <TabsContent value="About">
        <Card className="will-change-[backdrop-filter] bg-black/60 text-neutral-50 overflow-y-auto h-auto scrollbar-hide">
          <CardHeader>
            <CardTitle className="text-xl">About Me</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-5">
            <div className="grid">
              <div className="flex items-center">
                <div className="mr-6 text-neutral-100">
                  <h2 className="font-bold text-[clamp(1.3rem,2.28vw,1.8rem)]">
                    宮崎 健太
                  </h2>
                  <p className="font-semibold text-[clamp(0.7em,1.26vw,1.0rem)]">
                    KENTA MIYAZAKI
                  </p>
                </div>
                <Avatar className="w-20 h-20 aspect-square">
                  <Image
                    src="/avatar.png"
                    width={100}
                    height={100}
                    alt="Avatar"
                    className="rounded-full object-cover"
                    priority
                  />
                </Avatar>
              </div>
            </div>
            <div className="grid gap-3">
              <div className="flex">
                <a
                  className="mr-3"
                  href="https://github.com/KentaMiyazaki09"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={25} color="#fefefe" />
                </a>
                <a
                  className="mr-3"
                  href="https://note.com/k_miyaz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src="/icons/note.svg" width={25} height={25} alt="" />
                </a>
                <a
                  className="mr-3"
                  href="https://zenn.dev/nekoengineer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiZenn size={24} color="#3EA8FF" />
                </a>
                <a
                  href="https://x.com/k_miyazaki09"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter size={25} color="#f0f0f0" />
                </a>
              </div>
            </div>
            <div className="grid gap-3">
              <CardDescription className="text-[clamp(0.75rem,2.5vw,1.2rem)] text-neutral-200">
                1995年生まれ。フロントエンドエンジニア。
                <br />
                Reactを軸に、UI設計・状態管理・アニメーション実装まで一気通貫で作るのが得意です。
                <br />
                Next.jsも継続して学びつつ、息抜きにWebGLも楽しんでいます。
              </CardDescription>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="Skill">
        <Card className="will-change-[backdrop-filter] bg-black/60 text-neutral-50 overflow-y-auto h-80 scrollbar-hide">
          <CardHeader>
            <CardTitle className="text-xl">Skill</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-6">
            {skillList.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.name} className="grid gap-2">
                  <Label className="text-[clamp(0.9rem,1.39vw,1.1rem)] flex items-center">
                    <Icon
                      className="mr-1"
                      size={20}
                      strokeWidth={1.5}
                      absoluteStrokeWidth
                      color={item.color}
                    />
                    <span>{item.name}</span>
                  </Label>
                  <CardDescription className="text-xd text-neutral-200">
                    {item.desc}
                  </CardDescription>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="QandA">
        <Card className="will-change-[backdrop-filter] bg-black/60 text-neutral-50 overflow-y-auto h-80 scrollbar-hide">
          <CardHeader>
            <CardTitle className="text-xl">Q&A</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-6">
            {QandA.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.name} className="grid gap-2">
                  <Label className="text-[clamp(0.9rem,1.39vw,1.1rem)] flex items-center">
                    <Icon
                      className="mr-1"
                      size={20}
                      strokeWidth={1.5}
                      absoluteStrokeWidth
                      color={item.color}
                    />
                    <span>{item.name}</span>
                  </Label>
                  <CardDescription className="text-xd text-neutral-200">
                    {item.desc}
                  </CardDescription>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="Favo">
        <Card className="will-change-[backdrop-filter] bg-black/60 text-neutral-50 overflow-y-auto h-80 scrollbar-hide">
          <CardHeader>
            <CardTitle className="text-xl">Favorite</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-6">
            {favo.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.name} className="grid gap-2">
                  <Label className="text-[clamp(0.9rem,1.39vw,1.1rem)] flex items-center">
                    <Icon
                      className="mr-1"
                      size={20}
                      strokeWidth={1.5}
                      absoluteStrokeWidth
                      color={item.color}
                    />
                    <span>{item.name}</span>
                  </Label>
                  <CardDescription className="text-xd text-neutral-200">
                    {item.desc}
                  </CardDescription>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  </div>
);

export default AboutTabs;
