import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Section } from '../styles/GlobalComponents';
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Certificate from '../components/Certificate/Certificate'

const Home = () => {
  return (
    <div>
      <Header />
      <Section grid>
        <Hero />
      </Section>
      <Projects />
      <Technologies />
      <Certificate />
      <Timeline />
      <Footer />
    </div>
  );
};

export default Home;


