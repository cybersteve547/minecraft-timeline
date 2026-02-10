import type { Version } from "..";

export const events: Version[] = [
  {
    title: "Game bought by Microsoft",
    type: "event",
    date: "2014-11-06",
    icon: "/event_microsoft.png",
    learnMore: "https://web.archive.org/web/20140915195135/https://mojang.com/2014/09/yes-were-being-bought-by-microsoft/",
    longDescription: [
      "On November of 2014, all of Mojang was acquired by Microsoft for $2.5 billion. This included Minecraft, of course.",
      "The process began a few months earlier. Many suspected this acquisition was happening, but Mojang only confirmed it on September.",
      "According to Notch, he sold Mojang because he didn't want the responsibility of owning a company of such global significance.",
      "As soon as Mojang was sold, Notch and the other two founders (Carl and Jakob) left the company."
    ]
  },
  {
    title: "MINECON 2011",
    type: "event",
    date: "2011-11-18",
    icon: "/event_microsoft.png",
    learnMore: "https://minecraft.wiki/w/MINECON_2011",
    longDescription: [
      "MINECON 2011 was held at Mandalay Bay, Las Vegas, Nevada, USA on November 18th, coinciding with the official release of the game.[3] Tickets went on sale on August 11, 2011.",
      "MINECON featured many exciting events, including the official release of Minecraft, keynote speeches from members of the Minecraft community (including one from Notch), building contests, breakout classes with different Minecraft topics, costume contests, exhibits, meeting worldwide Minecraft personalities and commemorative merchandise."
      "Attendees received an exclusive MINECON 2011 cape, which depicts a creeper.""
    ]
  }
] as const;
