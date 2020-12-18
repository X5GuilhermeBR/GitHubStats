import React from 'react';
import { FaBuilding, FaMapMarkerAlt, FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa'
import { Card } from './styles'

const InfoCard = ({
  name="Nome",
  description="Descrição",
  image, work="Trabalho / Faculdade",
  local="Cidade",
  github,
  linkedin,
  instagram,
  twitter
}) => {
  return(
    <Card className="info-card">
      <div className="image-container">
        <img
          src={image}
          alt={name}
          className="image"
        />
      </div>


      <div className="info-div">
        <h2 className="name">{name}</h2>
        <div className="description">
          {description}
        </div>

        <div className="local-info">
          <div className="work">
            <FaBuilding className="icon"/>
            {work}
          </div>
          <div className="local">
            <FaMapMarkerAlt className="icon"/>
            {local}
        </div>
        </div>

        <div className="links">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer">
                <FaGithub />
            </a>
          )}

        {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer">
                <FaLinkedin />
            </a>
          )}

          {instagram && (
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer">
                <FaInstagram />
            </a>
          )}

          {twitter && (
            <a
              href={twitter}
              target="_blank"
              rel="noopener noreferrer">
                <FaTwitter />
            </a>
          )}
        </div>
      </div>
    </Card>
  )
}

export default InfoCard
