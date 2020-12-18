import styled from 'styled-components'

export const Card = styled.div`
  width: 560px;
  height: 220px;
  display: flex;
  align-items: center;
  background-color: rgba(174, 174, 174, .4);
  border-radius: 12px;
  overflow: hidden;

  .image {
    height: 100%;
  }

  .info-div {
    height: 100%;
    padding: 22px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .name, .description {
    color: #FFF;
  }

  .name {
    font-size: 24px
  }

  .work, .local, .links a{
    color: var(--tertiary);
  }

  .local-info {
  }

  .local-info div{
    padding: 4px 0;
    display: flex;
    align-items: center;
  }

  .local-info div .icon {
    margin-right: 5px;
  }

  .links a {
    font-size: 24px;
    margin-right: 10px;
    text-decoration: none;

    transition: color 0.2s;
  }

  .links a:hover {
    color: #FFF;
  }

`
