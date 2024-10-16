export default function About() {
    return (
      <div className="aboutContainer">
        <div>
          <h1 className="aboutHeading"> About Me</h1>
          <h2 className="aboutsubHeading">
            Hi, I’m <span> Maryam Hussain</span>, a passionate graphic designer,
            web developer and content creator.
          </h2>
          <p className="aboutparagraph">
            I made this blog website to share my journey and insights on
            technology, digital marketing, travel, and personal growth. My
            career has been shaped by a deep love for learning and a
            determination to overcome challenges. Coming from a background with
            limited opportunities, I’ve worked hard to turn my passions into a
            profession, and now, I’m excited to share what I’ve learned with
            you. On this blog, you’ll find a mix of topics I care about, from
            the latest in tech and digital marketing to tips for personal
            development and travel adventures. My goal is to inspire others to
            pursue their passions and continue growing. Thanks for stopping by—I
            hope you find something here that sparks your curiosity!
          </p>
        </div>
        <div className="image">
          <img
            src="/profile.webp"
            alt="Maryam Hussain"
            className="profileImage"
          />
        </div>
      </div>
    );
}