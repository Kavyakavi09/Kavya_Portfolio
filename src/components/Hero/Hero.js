import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          Hi, I am Kavya. A passionate fullstack web developer from India. I
          have learned MERN stack to explore my knowledge in web development.
        </SectionText>
        <Button
          onClick={() => {
            window.location = 'https://github.com/Kavyakavi09';
          }}>
          Learn More
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
