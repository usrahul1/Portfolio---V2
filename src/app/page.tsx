import FirstPage from "@/components/FirstPage";
import Slider from "@/components/Slider";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";

const tilesData = [
  {
    titleImg:
      "https://res.cloudinary.com/dkwsaqfz6/image/upload/v1742751487/ghfv4n99156j6mbv9xne.jpg",
    titleName: "Pragnya Club Member",
    titleDesc: "Top 10 coder of GITAM.",
    titleYear: "2023-01-01",
  },
  {
    titleImg:
      "https://res.cloudinary.com/dkwsaqfz6/image/upload/v1742752010/snsfhzuh00xqkwraxpun.png",
    titleName: "Master Coder",
    titleDesc: "Master League in Code 360.",
    titleYear: "2025-01-01",
  },
  {
    titleImg:
      "https://res.cloudinary.com/dkwsaqfz6/image/upload/v1742752088/v1lppjcmaocjfeylne6q.png",
    titleName: "Competitive Programmer",
    titleDesc: "Ranked #1 in GITAM in Code 360.",
    titleYear: "2025-01-01",
  },
  {
    titleImg:
      "https://res.cloudinary.com/dkwsaqfz6/image/upload/v1742752148/zzrs8xzaxthqsokyrn37.png",
    titleName: "LeetCode",
    titleDesc: "Solved more than 350 problems.",
    titleYear: "2025-01-01",
  },
];

const projArray = [
  {
    image:
      "https://res.cloudinary.com/dkwsaqfz6/image/upload/v1742749981/spgseslfzcmkvnicrkqr.png",
    projectTitle: "easyBike",
    projDesc: "Peer-To-Peer Bike Rental Platform.",
    githubLink: "https://github.com/usrahul1/easyBike",
  },
  {
    image:
      "https://res.cloudinary.com/dkwsaqfz6/image/upload/v1755443587/Screenshot_2025-08-17_204202_i8e1ui.png",
    projectTitle: "SmartCart AI - Walmart Sparkathon Project",
    projDesc: "Smart AI assistant.",
    githubLink: "https://github.com/usrahul1/SmartCart-AI-Walmart-Sparkathon",
  },
  {
    image:
      "https://res.cloudinary.com/dkwsaqfz6/image/upload/v1748436098/oiamclefpgycxiuixsde.png",
    projectTitle: "motoHealth",
    projDesc: "Helps new car buyers compare vehicles.",
    githubLink: "https://github.com/usrahul1/motoHealth",
  },
];

export const metadata = {
  title: "Sai Rahul Urumu",
  description:
    "Official portfolio of Sai Rahul Urumu - Coder, Developer, and a Student.",
  icons: {
    icon: "/profile_circle.png",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <FirstPage />
      <Slider titleArray={tilesData} />
      <TechStack />
      <Projects projArray={projArray} />
      <Footer />
    </div>
  );
}
