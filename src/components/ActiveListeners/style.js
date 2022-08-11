import styled from "styled-components";

export const Section = styled.section`
border-bottom: 0.1rem solid #242424;
color: white;
.title-container{
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    padding-top: 1rem;
    .title{
        h4{
            font-size: 0.8rem;
            margin-bottom: 0.2rem;
        }
        h1{
            font-size: 1.5rem;
            letter-spacing:0.2rem;
        }
    }
    .chart{
        position: relative;
        .percent{
            position: absolute;
            top:0;
            left: 0;
            color: var(--primary-color);
            font-size: 0.8rem;
        }
        height: 4rem;
        width: 1005;
    }
}
.active{
    max-height: 11rem;
    overflow: auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-right: 1.5rem;
    margin: 1rem 0;
    ::-webkit-scrollbar{
        width: 0.2rem;
        background-color: #6e6e6ec3;
        &-thumb{
            background-color: #b8b8b8;
        }
    }
    h5{
        font-weight: 100;
    }
    .country{
        display: flex;
        align-items: center;
        justify-content: space-between;
        .name{
            display: flex;
            gap: 1rem;
            align-items: center;
            img{
                height: 2rem;
                border-radius: 2rem;
            }
        }
    }
}
` 