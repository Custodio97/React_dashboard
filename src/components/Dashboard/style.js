import styled from "styled-components";

export const Section = styled.section`
height: 100%;
width: 100%;
background-color: rgba(3,3,27,0.7);
.grid{
    padding: 2rem;
    padding-top: 0;
    display: grid;
    grid-template-rows: 1fr 1fr;
    gap: 1rem;
    .row{
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 1rem;
    }
    .row2{
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 1rem;
    }
}
@media screen and (min-width: 280px) and (max-width:1080px){
    height: max-content;
    .grid{
        grid-template-columns: 1fr;
        padding: 1rem;
        height: max-content;
        .row,
        .row2{
            grid-template-columns: 1fr;
        }
    }
}
`