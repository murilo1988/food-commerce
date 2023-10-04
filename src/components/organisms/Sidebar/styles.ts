import styled from "styled-components";

export const Container = styled.aside`
  background-color: ${({ theme }) => theme.colors.red};
  width: 7.75rem;
  padding: 2rem 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;

  button{
    background: none;
    width: 100%;
    border: none;
  }

  nav{
    flex: 1;
    width: 100%;
    height: 100%;

    ul{
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 0;
      gap:1.5rem;
    }

    li{
        list-style: none;

        a{
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-decoration: none;
          color: white;

          span{
            margin-top: 0.2rem;
            text-align: center;
          }

        }
      }
  }
`
