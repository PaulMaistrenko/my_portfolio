import './about.scss';

export const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about__photo"></div>
        <article className="about__content">
          <p className="accented-text">Hi, my name is</p>
          <p className="title-text">Pavlo Maistrenko</p>
          <p className="about__text">
            I have spent a significant portion of my career collaborating
            with foreign companies in the field of trade. Confronted with
            new technological solutions every day, I became increasingly
            fascinated by the development in the field of information technology.
            Acquiring essential skills in determination, resilience and perseverance.
            Combining these qualities along with my inclination to explore new facets
            of our daily lives side by side with my love for exact sciences, in 2021,
            I decided to embark on the journey of learning web development.
          </p>
          <p className="about__text">
            The decisive factor in choosing these technologies was the broad
            range of possibilities and prospects that open up for a developer
            when utilizing technologies such as:
          </p>
          <div className="skills">
            <span className="accented-text">JavaScript <br /> HTML<br /> CSS<br /> React<br /> TypeScript<br /></span>
          </div>
          <p className="about__text">
            Furthermore, the ability to immediately witness the results of my work
            and the opportunity to apply a certain level of creativity played a
            pivotal role. This is how I began my path as a Frontend developer.
            During my free time, away from studying and work, I enjoy traveling and
            discovering new places.
          </p>
        </article>
      </div>
    </section>
  );
}
