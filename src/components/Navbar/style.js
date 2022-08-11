import styled from "styled-components";

export const Nav = styled.section`
display: flex;
justify-content:space-between;
color: white;
margin: 2rem;
.timeline{
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    svg{
        color: var(--primary-color);
        font-size: 2rem;
    }
}
@media screen and (min-width: 280px) and (max-width:1080px) {
 flex-direction:column;
 align-items: center;
 margin: 1rem;
 margin-bottom:0;
 .timeline{
    gap: 1rem;
 }
}
`