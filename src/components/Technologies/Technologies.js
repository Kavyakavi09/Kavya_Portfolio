import React from 'react';
import {
  DiFirebase,
  DiReact,
  DiNodejsSmall,
  DiJavascript1,
  DiHtml5,
  DiCss3,
  DiVisualstudio,
  DiGit,
  DiGithubBadge,
} from 'react-icons/di';
import { SiNetlify, SiHeroku, SiPostman } from 'react-icons/si';
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from './TechnologiesStyles';

const Technologies = () => (
  <Section id='tech'>
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've learned some technologies in the web development world.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size='3rem' />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Work with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiNodejsSmall size='3rem' />
        </picture>
        <ListContainer>
          <ListTitle>Back-End/Server</ListTitle>
          <ListParagraph>
            Work with <br />
            Node.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size='3rem' />
        </picture>
        <ListContainer>
          <ListTitle>Back-End/DataBase</ListTitle>
          <ListParagraph>
            Work with <br />
            Databases mysql and mongodb
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiJavascript1 size='3rem' />
        </picture>
        <ListContainer>
          <ListTitle>Javascript</ListTitle>
          <ListParagraph>
            Work with <br />
            Javascript
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiHtml5 size='3rem' />
        </picture>
        <ListContainer>
          <ListTitle>HTML5</ListTitle>
          <ListParagraph>
            Work with <br />
            HTML5
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiCss3 size='3rem' />
        </picture>
        <ListContainer>
          <ListTitle>CSS3</ListTitle>
          <ListParagraph>
            Work with <br />
            CSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiVisualstudio size='3rem' />
        </picture>
        <ListContainer>
          <ListTitle>VS Code</ListTitle>
          <ListParagraph>
            Work with <br />
            VS CODE
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiGit size='3rem' />
        </picture>
        <ListContainer>
          <ListTitle>Git</ListTitle>
          <ListParagraph>
            Work with <br />
            Git
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiGithubBadge size='3rem' />
        </picture>
        <ListContainer>
          <ListTitle>Github</ListTitle>
          <ListParagraph>
            Work with <br />
            Github
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiNetlify size='3rem' />
        </picture>
        <ListContainer>
          <ListTitle>Netlify</ListTitle>
          <ListParagraph>
            Work with <br />
            Netlify
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiHeroku size='3rem' />
        </picture>
        <ListContainer>
          <ListTitle>Heroku</ListTitle>
          <ListParagraph>
            Work with <br />
            Heroku
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiPostman size='3rem' />
        </picture>
        <ListContainer>
          <ListTitle>Postman</ListTitle>
          <ListParagraph>
            Work with <br />
            Postman tool
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
