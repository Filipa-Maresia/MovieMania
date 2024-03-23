import { FaLinkedin, FaGithub } from 'react-icons/fa';
const AboutMe = () => {
    return (
      <div className="about">
        <h2>About Me</h2>
        <p>
        I was born in Marco de Canaveses, 60km from Porto, always lived in Matosinhos, near the smell of sea and fresh sardines.
        I am a very eclectic person. I like gaming, camping, hiking, watching tv shows and movies, reading (you will find me always with a book or my e-reader on my hands), riding motorcycle near the coast and I love animals. 
        If you have a dog, you’re my person already. I only have agaponis (bird) now, and my dream is to have horses.  
        If you ask me the thing I like most in the world, I would probably say trying food for the first time in a new country/city.
        I am often asked if I surf, unfortunately no, I never surfed but I have some free lessons which I will do this spring. 
        I love the ocean and the beach (who doesn’t?) but I’m a Gerês person.  
        I usually go camping in Gerês and in Góis (Coimbra). Those are my favorite places to go in the summer, filled with green places, nature, and fresh river waters. 
        Amongst the things I don’t like… Controversial opinion, but I hate bacalhau and chocolate and I’m not a fan of potatoes (give me rice and I’m a happy kid). 
        I don’t eat mammals, I’m mainly a vegetarian but sometimes (to get easier on social meetings) I eat chicken and fish.
        I try keeping distance from social media, reality shows, loudly and overpopulated places.
        Prejudice and any kind of injustice is what most makes me out of myself.
        </p>

        <div className="social-icons">
        <a href="https://www.linkedin.com/in/filipa-mendes-302babba/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Filipa-Maresia" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
      </div>
    );
  };
  
  export default AboutMe;