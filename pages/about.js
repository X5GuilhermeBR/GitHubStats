import React from 'react'

import { AboutPage, CardGroup, BackButton } from '../styles/styles'
import InfoCard from '../components/InfoCard'
import { BsArrowLeft } from 'react-icons/bs'

const About = () => {
  return (
    <AboutPage maxWidth="md">

      <BackButton href="/" className="back">
        <BsArrowLeft />
      </BackButton>

      <h1>Sobre o Github Stats</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

      <h1>Time Dev</h1>
      <CardGroup>
        <InfoCard
          name="Guilherme José"
          description="Desenvolvedor Back-End"
          work="Rede Globo"
          local="Rio de Janeiro"
          image="https://avatars1.githubusercontent.com/u/22846975?s=460&u=8e3c8ec17cbaab2892d8eaefc350fa4d23de3976&v=4"
          github="https://github.com/X5GuilhermeBR"
          linkedin="https://www.linkedin.com/in/guilhermejfmello/"
        />

        <InfoCard
          name="Rafael Paes"
          description="Desenvolvedor Frontend | WordPress"
          work="POINTEC"
          local="Brasil"
          image="https://avatars3.githubusercontent.com/u/46358065?s=460&u=763faeb578f0904b8d843df18d3b02b08777260e&v=4"
          github="https://github.com/paesrafael"
          linkedin="https://www.linkedin.com/in/rafael-paes/"
          instagram="https://www.instagram.com/pointecitsolutions/"
          twitter="https://twitter.com/paesrfael"
        />

        <InfoCard
          name="João Victor Silva"
          description="Estudante de Engenharia da Computação"
          work="IFPB - Campus Campina Grande"
          local="Campina Grande, Paraíba"
          image="https://avatars2.githubusercontent.com/u/65730630?s=460&u=2e1f6eaa101fec9e605dadaade686cb95a2e9f5b&v=4"
          github="https://github.com/joaovictornsv"
          linkedin="http://linkedin.com/in/joaovictornsv"
        />
      </CardGroup>


      <h1>Apoio</h1>


    </AboutPage>
  )
}

export default About
