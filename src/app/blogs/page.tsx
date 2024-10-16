

import Link from "next/link";

type IData = {
  title: string;
  description: string;
  image: string;
};

const data: IData[] = [
  {
    title: "The Rise of Artificial Intelligence",
    description:
      "This blog explores how AI is reshaping society, its benefits, and potential ethical challenges.",
    image: "blog1.webp",
  },
  {
    title: "Travel Destinations for Adventure Seekers in 2024",
    description:
      "This blog lists some of the best travel destinations for adventure lovers.",
    image: "blog2.webp",
  },
  {
    title: "Mastering Digital Marketing: Strategies for Success",
    description:
      "This blog highlights the key strategies every marketer should adopt in 2024",
    image: "blog3.webp",
  },
  {
    title: "The Ultimate Guide to Healthy Eating",
    description:
      "This blog is an ultimate guide to eating healthy, with tips and delicious recipes.",
    image: "blog4.webp",
  },
  {
    title: "The Future of Remote Work: Trends and Predictions",
    description:
      "This blog discusses the future of remote work and emerging trends.",
    image: "blog5.webp",
  },
  {
    title: "How to Start Coding: A Beginner’s Guide",
    description:
      "This blog provides a beginner-friendly guide on how to start coding.",
    image: "blog6.webp",
  },
];

export default function Blogs() {
  return (
    <>
      <h1 className="blogHeading">My Blogs</h1>
      <div className="cardsContainer">
        {data.map((IData,index) => (
          <div className="childContainer" >
            <div className="imageContainer">
              <img
                src={IData.image}
                alt={IData.title}
                className="imageContainer"
              />
            </div>
            <h1 className="title">{IData.title}</h1>
            <p className="description">{IData.description}</p>
            <Link href={`/blogs/blog${index + 1}`}>
              <button className="btn" >
                <i>R</i>
                <i>E</i>
                <i>A</i>
                <i>D</i>
                <i>M</i>
                <i>O</i>
                <i>R</i>
                <i>E</i>
              </button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
