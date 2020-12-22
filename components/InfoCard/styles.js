import styled from 'styled-components'

export const Card = styled.div`
  width: 500px;
  height: 170px;
  display: flex;
  align-items: center;
  background-color: rgba(174, 174, 174, .4);
  border-radius: 12px;
  overflow: hidden;

  .image-container {
    min-width: 140px;
    max-width: 140px;
    overflow: hidden;
    height: 100%;
    display: flex;
    justify-content: center;
  }

  .image {
    height: 100%;
  }

  .info-div {
    height: 100%;
    width: 100%;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .name, .description {
    color: #FFF;
  }

  .name {
    font-size: 20px
  }

  .work, .local, .links a{
    color: var(--tertiary);
    font-size: 12px;
  }

  .description {
    font-size: 14px;
    height: 32px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    -webkit-box-orient: vertical;
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
    font-size: 18px;
    margin-right: 10px;
    text-decoration: none;

    transition: color 0.2s;
  }

  .links a:hover {
    color: #FFF;
  }

`
