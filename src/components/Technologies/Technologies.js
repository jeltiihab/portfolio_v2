import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { FaAdobe } from 'react-icons/fa';
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
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Apprendre des structures de données et des algorithmes de programmation
      m'a donné la force et la capacité d'apprendre rapidement de nouvelles
      technologies, voici quelques-unes des technologies que j'ai déjà
      utilisées.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size='3rem' />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            HTML | CSS (Bootstrap, Tailwind CSS) | JavaScript (React.js)
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size='3rem' />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            JavaScript (Node.js) | PHP (Symfony, Laravel), Ruby, C#
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaAdobe size='3rem' />
        <ListContainer>
          <ListTitle>Design</ListTitle>
          <ListParagraph>
            Adobe (Photoshop, Ullistrator, Indesign) <br /> Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
