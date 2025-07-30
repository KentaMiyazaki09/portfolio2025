import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Globe,
  SquareDashedBottomCode,
  Box,
  ToolCase,
  GraduationCap,
  Columns3Cog,
} from "lucide-react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AboutTabs = () => (
  <div className="flex w-full flex-col gap-4 max-w-lg m-auto">
    <Tabs defaultValue="AboutMe">
      <TabsList className="bg-black/20 backdrop-blur-sm text-neutral-400">
        <TabsTrigger
          value="AboutMe"
          className="text-[clamp(0.75rem,2.5vw,1.2rem)] font-bold tracking-normal"
        >
          About Me
        </TabsTrigger>
        <TabsTrigger
          value="Skills"
          className="text-[clamp(0.75rem,2.5vw,1.2rem)] font-bold tracking-normal"
        >
          Skills
        </TabsTrigger>
      </TabsList>
      <TabsContent value="AboutMe">
        <Card className="bg-black/20 backdrop-blur-sm text-neutral-50">
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
                <Avatar>
                  <AvatarImage src="/avatar.jpg" className="object-cover" />
                  <AvatarFallback>CN</AvatarFallback>
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
                  <FaGithub size={25} color="#3654ce" />
                </a>
                <a
                  href="https://instagram.com/kmiyazaki09"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={25} color="#b074e2" />
                </a>
              </div>
            </div>
            <div className="grid gap-3">
              <CardDescription className="text-[clamp(0.75rem,2.5vw,1.2rem)] text-neutral-300">
                1995年生まれ。フロントエンジニア。
                <br />
                アイデアを視覚や感覚で伝える表現に落とし込むのが好きです。新たなWEB表現を求め、Blender・3Dアニメーションを勉強中。
              </CardDescription>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="Skills">
        <Card className="bg-black/50 backdrop-blur-sm text-neutral-50">
          <CardHeader>
            <CardTitle className="text-xl">Skills</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="grid gap-2">
              <Label className="text-[clamp(0.9rem,1.39vw,1.1rem)] flex items-center">
                <Globe
                  className="mr-1"
                  size={20}
                  strokeWidth={1.5}
                  absoluteStrokeWidth
                  color="#3654ce"
                />
                <span>開発言語</span>
              </Label>
              <CardDescription className="text-xs text-neutral-300">
                HTML, CSS, JavaScript, TypeScript
              </CardDescription>
            </div>
            <div className="grid gap-2">
              <Label className="text-[clamp(0.9rem,1.39vw,1.1rem)] flex items-center">
                <SquareDashedBottomCode
                  className="mr-1"
                  size={20}
                  strokeWidth={1.5}
                  absoluteStrokeWidth
                  color="#e2747a"
                />
                フレームワーク
              </Label>
              <CardDescription className="text-[clamp(0.8rem,1.26vw,1.0rem)] text-neutral-300">
                React, Next.js, Tailwind CSS
              </CardDescription>
            </div>
            <div className="grid gap-2">
              <Label className="text-[clamp(0.9rem,1.39vw,1.1rem)] flex items-center">
                <Columns3Cog
                  className="mr-1"
                  size={20}
                  strokeWidth={1.5}
                  absoluteStrokeWidth
                  color="#bbbf82"
                />
                CMS
              </Label>
              <CardDescription className="text-[clamp(0.8rem,1.26vw,1.0rem)] text-neutral-300">
                Wordpress, MovableType7
              </CardDescription>
            </div>
            <div className="grid gap-2">
              <Label className="text-[clamp(0.9rem,1.39vw,1.1rem)] flex items-center">
                <Box
                  className="mr-1"
                  size={20}
                  strokeWidth={1.5}
                  absoluteStrokeWidth
                  color="#74e295"
                />
                3D
              </Label>
              <CardDescription className="text-[clamp(0.8rem,1.26vw,1.0rem)] text-neutral-300">
                Three.js, WebGL, Blender
              </CardDescription>
            </div>
            <div className="grid gap-2">
              <Label className="text-[clamp(0.9rem,1.39vw,1.1rem)] flex items-center">
                <ToolCase
                  className="mr-1"
                  size={20}
                  strokeWidth={1.5}
                  absoluteStrokeWidth
                  color="#b074e2"
                />
                開発ツール
              </Label>
              <CardDescription className="text-[clamp(0.8rem,1.26vw,1.0rem)] text-neutral-300">
                WindowsPC/MackBook, Github, VSCode, Figma, Photoshop,
                Illustrator, ChatGPT
              </CardDescription>
            </div>
            <div className="grid gap-2">
              <Label className="text-[clamp(0.9rem,1.39vw,1.1rem)] flex items-center">
                <GraduationCap
                  className="mr-1"
                  size={20}
                  strokeWidth={1.5}
                  absoluteStrokeWidth
                  color="#bababa"
                />
                勉強中
              </Label>
              <CardDescription className="text-[clamp(0.8rem,1.26vw,1.0rem)] text-neutral-300">
                GLSL, Advanced Blender and three.js, Advanced React
              </CardDescription>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  </div>
);

export default AboutTabs;
