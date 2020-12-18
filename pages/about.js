import React from 'react'
import { Main, InfoCard } from '../styles/styles'
import { FaBuilding, FaMapMarkerAlt, FaGithub } from 'react-icons/fa'

const About = () => {
  return (
    <Main maxWidth="md">
      <a href="/">Voltar</a>
      <h1>Sobre o Github Stats</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

      <h1>Time Dev</h1>

      <h1>Apoio</h1>
      <InfoCard>
        <img
          src="https://avatars1.githubusercontent.com/u/22846975?s=460&u=8e3c8ec17cbaab2892d8eaefc350fa4d23de3976&v=4"
          alt="Guilherme José"
          className="image"
        />

        <div className="info-div">
          <h2 className="name">Guilherme José</h2>
          <p className="description">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>

          <div className="local-info">
            <div className="work">
              <FaBuilding className="icon"/>
              InfoGlobo
            </div>
            <div className="local">
              <FaMapMarkerAlt className="icon"/>
              Rio de Janeiro - RJ
          </div>
          </div>


          <div className="links">
            <a
              href="https://github.com/X5GuilhermeBR"
              target="_blank"
              rel="noopener noreferrer">
                <FaGithub />
            </a>
          </div>
        </div>

      </InfoCard>
    </Main>
  )
}

export default About
