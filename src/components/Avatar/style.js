import styled from "styled-components";

export const Section = styled.section`
color: white;
display: flex;
align-items: center;
gap: 1rem;
border-bottom: 0.1rem solid #242424;
padding-bottom: 1rem;
.image{
    img{
        height: 3rem;
        border-radius: 2rem;
    }
}
.name{
    display: flex;
    align-items: center;
    gap: 0.5rem;
    svg{
        color: var(--primary-color);
        font-size: 1.3rem;
    }
}
`