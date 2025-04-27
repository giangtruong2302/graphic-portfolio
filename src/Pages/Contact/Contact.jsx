import Social from "../../Components/SocialCard/Social";
import "./Contact.scss";

import whatsapp from "../../assets/whatsapp.png";
import twitch from "../../assets/twitch.png";
import twitter from "../../assets/twitter.png";
import discord from "../../assets/discord.png";
import deviantart from "../../assets/deviantart.png";
import github from "../../assets/github.png";
import vimeo from "../../assets/vimeo.png";
import linkedin from "../../assets/linkedin.png";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Get in Touch</h1>
      <span>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, iure
        assumenda at veritatis mollitia error esse debitis porro nobis
        perferendis ipsum sapiente sequi exercitationem
      </span>

      <div className="socials">
        <Social logo={github} value="GitHub" />
        <Social logo={linkedin} value="Linkedin" />
        <Social logo={twitter} value="Twitter" />
        <Social logo={discord} value="Discord" />
        <Social logo={whatsapp} value="Whatsapp" />
        <Social logo={twitch} value="Twitch" />
        <Social logo={deviantart} value="Deviantart" />
        <Social logo={vimeo} value="Vimeo" />
      </div>

      <footer>
        <span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum omnis
          reprehenderit consequatur.
        </span>
      </footer>
    </div>
  );
};

export default Contact;
