import React from 'react'

import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents'
import { Box, Boxes, BoxNum, BoxText } from './ReviewsStyles'

const data = [
  {
    number: 'MR Soufiane - Directeur FCPO',
    text:
      "JELTI, votre travail est superbe! Il est clair que vous vous souciez de votre travail et que vous prenez le temps de le faire correctement. J'ai particulièrement aimé que vous ayez interrogé le client sur ses préférences de conception avant de créer son site Web, et je suis ravi de voir ce que vous faites ensuite...",
  },
  {
    number: 'S-Y - Client',
    text:
      'Je suis trés satisfait du travail avec toi, Le site et responsive avec tous les écrans avec une trés bonne optimisation seo merci.',
  },
]

const Acomplishments = () => (
  <Section>
    <SectionTitle>Avis</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
)

export default Acomplishments
