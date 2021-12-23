import React from 'react';

function About() {
  return (
    <div className="about">
      <h1 id="allneeded"> About Me </h1>
      <img
        src="https://media-exp1.licdn.com/dms/image/C4E03AQGiDhNVc7za-g/profile-displayphoto-shrink_100_100/0/1611689852626?e=1645660800&v=beta&t=-kjQBTAJj4M0vaS7dT3lt6Rk4kqM7OoROial9nRpFdw"
        width="110"
        height="110"
      />
      <hr />
      <br />
      <section className="psections">
        <article>
          <p>The Developer's name is Calvin Menyfield</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </article>
        <ul className="sociallinks">
          <li>
            <a href="https://www.linkedin.com/in/calvin-menyfield/">
              <img
                alt="LinkedIn"
                src="https://www.pngrepo.com/png/103404/512/linkedin-logo.png"
                width="80"
                height="70"
              />
            </a>
          </li>
          <li>
            <a href="https://github.com/Kiiris/">
              <img
                alt="GitHub"
                src="https://img.favpng.com/4/20/21/github-computer-icons-icon-design-png-favpng-KaDTwuHWgG8D1qn47QW2hK7Gj.jpg"
                width="80"
                height="70"
              />
            </a>
          </li>
          <li>
            <a href="https://trello.com/userworkspace52981285">
              <img
                alt="Trello"
                src="https://cdn3.iconfinder.com/data/icons/inficons/512/trello.png"
                width="80"
                height="70"
              />
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default About;
