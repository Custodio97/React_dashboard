import styled from "styled-components";
import { applyCardStyles } from "components/Reusable/style";

export const Section = styled.section`
${applyCardStyles}
color: white;
.title-container{
    display: flex;
    justify-content: space-between;
    .title{
        h1{
            font-size: 2rem;
            letter-spacing: 0.2rem;
        }
    }
    .slider{
        .services{
            display: flex;
            gap: 1rem;
            .service{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 0.6rem;
            min-width: 5rem;
            img{
                height: 2rem;
             }
            }
           
            
        }
    }

}
.chart{
    height: 10rem;
    .recharts-default-tooltip{
        background-color: var(--dark-background-color) !important;
        border: none !important;
        border-radius: 1rem;
        box-shadow: 0 0 60px 8px var(--primary-color);

    }
}
@media screen and (min-width: 280px) and (max-width:1080px) {
    height: 100%;
    .title-container{
        flex-direction: column;
        gap: 0.5rem;
        .title{
            text-align: center;
        }
        .slider{
            .services{
                grid-template-columns: 1fr 1fr;
                .service{
                    gap: 0.5rem;
                    min-width: 1rem;
                }
            }
        }
    }
}
`