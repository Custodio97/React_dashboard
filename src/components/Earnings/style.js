import styled from "styled-components";
import { applyCardStyles } from '../Reusable/style'


export const Section = styled.section`
${applyCardStyles}
color: white;
display: flex;
flex-direction: column;
.title-container{
    display: flex;
    justify-content: space-between;
    .title{
        h1{
            font-size: 2rem;
            letter-spacing: 0.2rem;
        }
    }
    .more{
        color: var(--primary-color);
    }
}
.earnings{
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
    .earning{
        display: flex;
        flex-direction: column;
        gap: 0.1rem;
        .data{
            display: flex;
            justify-content: space-between;
            h5{
                font-weight: 100;
            }
        }
        progress{
            width: 100%;
            -webkit-appearance: none;
            &::-webkit-progress-bar{
                border-radius: 1rem;
                height: 0.15rem;
            }
            &::-webkit-progress-value{
                border-radius: 1rem;
                background-color: orange;
            }
        }
        .cleared{
            &::-webkit-progress-bar{
                background-color: var(--primary-color);
            }
        }
    }
}
@media screen and (min-width: 280px) and (max-width:1080px) {
    .title{
        flex-direction: column;
        text-align: center;
    }
}
`