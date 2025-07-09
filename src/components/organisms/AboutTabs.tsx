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
      <TabsList className="bg-[oklch(.200_0_0)] text-neutral-400">
        <TabsTrigger value="AboutMe">About Me</TabsTrigger>
        <TabsTrigger value="Skills">Skills</TabsTrigger>
      </TabsList>
      <TabsContent value="AboutMe">
        <Card className="bg-[oklch(.200_0_0)] text-neutral-50">
          <CardHeader>
            <CardTitle className="text-xl">About Me</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-5">
            <div className="grid">
              <div className="flex items-center">
                <div className="mr-3 text-neutral-100">
                  <h2 className="font-bold">宮崎 健太</h2>
                  <p className="text-xs font-semibold">KENTA MIYAZAKI</p>
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
              <CardDescription className="text-xs text-neutral-300">
                1995年生まれ。フロントエンジニア。
                <br />
                アイデアを「かたち」で表現するのが好きです。新たなWEB表現を求め、Blender・3Dアニメーションを勉強中。
              </CardDescription>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="Skills">
        <Card className="bg-[oklch(.200_0_0)] text-neutral-50">
          <CardHeader>
            <CardTitle className="text-xl">Skills</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="grid gap-2">
              <Label className="text-sm flex align-middle">
                <Globe
                  className="mr-1"
                  size={20}
                  strokeWidth={1.5}
                  absoluteStrokeWidth
                  color="#3654ce"
                />
                開発言語
              </Label>
              <CardDescription className="text-xs text-neutral-300">
                HTML, CSS, JavaScript, TypeScript
              </CardDescription>
            </div>
            <div className="grid gap-2">
              <Label className="text-sm flex align-middle">
                <SquareDashedBottomCode
                  className="mr-1"
                  size={20}
                  strokeWidth={1.5}
                  absoluteStrokeWidth
                  color="#e2747a"
                />
                フレームワーク
              </Label>
              <CardDescription className="text-xs text-neutral-300">
                React, Next.js, Tailwind CSS
              </CardDescription>
            </div>
            <div className="grid gap-2">
              <Label className="text-sm flex align-middle">
                <Columns3Cog
                  className="mr-1"
                  size={20}
                  strokeWidth={1.5}
                  absoluteStrokeWidth
                  color="#bbbf82"
                />
                CMS
              </Label>
              <CardDescription className="text-xs text-neutral-300">
                Wordpress, MovableType7
              </CardDescription>
            </div>
            <div className="grid gap-2">
              <Label className="text-sm flex align-middle">
                <Box
                  className="mr-1"
                  size={20}
                  strokeWidth={1.5}
                  absoluteStrokeWidth
                  color="#74e295"
                />
                3D
              </Label>
              <CardDescription className="text-xs text-neutral-300">
                Three.js, WebGL, Blender
              </CardDescription>
            </div>
            <div className="grid gap-2">
              <Label className="text-sm flex align-middle">
                <ToolCase
                  className="mr-1"
                  size={20}
                  strokeWidth={1.5}
                  absoluteStrokeWidth
                  color="#b074e2"
                />
                開発ツール
              </Label>
              <CardDescription className="text-xs text-neutral-300">
                WindowsPC/MackBook, Github, VSCode, Figma, Photoshop,
                Illustrator, ChatGPT
              </CardDescription>
            </div>
            <div className="grid gap-2">
              <Label className="text-sm flex align-middle">
                <GraduationCap
                  className="mr-1"
                  size={20}
                  strokeWidth={1.5}
                  absoluteStrokeWidth
                  color="#bababa"
                />
                勉強中
              </Label>
              <CardDescription className="text-xs text-neutral-300">
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
