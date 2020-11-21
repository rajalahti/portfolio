import React from "react";
import "./About.css";
import { SocialIcon } from "react-social-icons";

export default function About() {
  return (
    <main class="about_grid">
      <section className="about_me">
        <div className="title" role="presentation">
          <h1>ABOUT ME</h1>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit
          amet facilisis mi. Vivamus sed pulvinar leo. Integer non turpis felis.
          Integer vitae metus dui. Fusce molestie luctus purus, et sollicitudin
          leo tincidunt non. Donec euismod tellus quis massa condimentum
          pretium. Nam tortor lacus, scelerisque id enim vel, suscipit porttitor
          orci. Donec commodo nec ante sed tincidunt. Ut quis consequat enim.
          Curabitur non viverra dolor. Curabitur egestas aliquet erat eu
          posuere.
        </p>
        <p>
          Ut a eros sit amet nisl mattis porta non non nunc. Vestibulum interdum
          neque ac luctus cursus. Aliquam dignissim sed nisl quis euismod.
          Praesent tristique elit accumsan, elementum felis vitae, ultrices
          magna. Aliquam erat volutpat. Donec odio ex, lacinia et scelerisque
          maximus, vehicula vitae sem. Phasellus sodales lorem ut augue
          imperdiet, quis luctus elit porta. Donec dapibus pulvinar nulla nec
          efficitur. Integer gravida dictum libero ac vestibulum.
        </p>
        <h2>Contact me</h2>
        <SocialIcon
          className="some_icon"
          url="https://www.linkedin.com/in/juhani-rajalahti-b822b911/"
        />
        <SocialIcon
          className="some_icon"
          url="mailto:juhani.rajalahti@gmail.com"
        />
      </section>
      <img
        id="juhani"
        src="photos/juhani_rajalahti.jpg"
        alt="Juhani Rajalahti"
      />
    </main>
  );
}
