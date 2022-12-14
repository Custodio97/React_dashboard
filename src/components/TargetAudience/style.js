import styled from "styled-components";
import { applyCardStyles } from '../Reusable/style'

export const Section = styled.section`
${applyCardStyles}
color: white;
display: flex;
flex-direction: column;
justify-content: space-between;
.title-container{
    margin-bottom: 1rem;
    .title{
        display: flex;
        justify-content: space-between;
        svg{
            color: var(--primary-color);
            font-size: 1.3rem;
            cursor: pointer;
        }
    }
}
.chart{
    height: 13rem;
    .recharts-default-tooltip{
        background-color:var(--dark-background-color) !important;
        border: none !important;
        border-radius: 1rem;
        box-shadow: 0 0 60px 8px var(--primary-color) ;
    }
}
`

