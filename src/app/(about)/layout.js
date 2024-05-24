import InsightRoll from "@/src/components/About/InsightRoll";


const insights = [
    "30+ Projects Completed on Fiverr",
    "2+ Years of Experience in Devops Field",
    "1+ Years of Blogging Experience ",
    "Authored In-Depth Course on Educative",
    "Contributed as a Technical Course Reviewer 📝",
    "AWS and Docker Certified ",
  ];

export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}
