const data = [
  {
    title: "maryam",
    description: "hhhhgiugiu",
  },
  {
    title: "maryam3",
    description: "hhh678hgiugiu",
  },
];


import Link from "next/link";
export default function Home() {
  return (
    <div className={"mainContainer"}>
      <h1 className={"mainHeading"}>
        Welcome to <span>My Blogs!</span>
      </h1>
      <h2 className={"subHeading"}>
        Explore insights, trends, and guides across a variety of engaging
        topics.
      </h2>
      <p className={"mainparagraph"}>
        Whether you’re looking to stay updated on the latest AI advancements,
        discover adventure travel destinations, or gain valuable tips on digital
        marketing, I’ve got you covered. My content is crafted to inspire,
        inform, and guide you through the ever-evolving digital and physical
        landscapes.
      </p>
      <div className="buttonContainer">
        <Link href={"/blogs"}>
          <button className="learn-more">
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text">Explore Now</span>
          </button>
        </Link>
      </div>
    </div>
  );
}