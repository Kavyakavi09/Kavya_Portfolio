import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import Typical from 'react-typical';

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>

        <h1>
          <Typical
            loop={Infinity}
            steps={[
              'Hello, thereπ',
              2000,
              'Hiπ, I am Kavya Karuppusamy',
              2000,
              'Fullstack Developer π',
              2000,
              'MERN Stack Dev π©βπ»',
              2000,
            ]}
          />
        </h1>

        <SectionText>
          Hi, I am Kavya. A passionate fullstack web developer from India. I
          have learned MERN stack to explore my knowledge in web development.
        </SectionText>

        {/* <Button
          onClick={() => {
            window.location = 'https://github.com/Kavyakavi09';
          }}>
          Learn More
        </Button> */}
        <a href='kavyaprofile.pdf' download={'kavyaprofile.pdf'}>
          <Button>Download Resume</Button>
        </a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
