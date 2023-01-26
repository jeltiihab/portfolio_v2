import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Bonjour, Bienvenue <br />
        Dans mon portfolio
      </SectionTitle>
      <SectionText>
        "Je suis un développeur web full stack expérimenté, capable de créer des
        sites web esthétiques et fonctionnels. Je maîtrise plusieurs langages de
        programmation et frameworks, et j'ai une expérience en développement
        front-end et back-end. Je suis dédié à la qualité et toujours à jour
        avec les dernières technologies."{' '}
      </SectionText>
      <Button
        onClick={() =>
          (window.location = 'https://www.jeltiihab.com/JELTI-Ihab.pdf')
        }
      >
        Télecharger le CV
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
