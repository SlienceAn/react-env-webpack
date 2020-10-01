import styled from 'styled-components'
export const Container = styled.section`
    width:80%;
    margin:0 auto;
    display:flex;
    justify-content:space-between;
    color:${props => props.color};
    font-size:${props => props.size}px;
`;
export const SlideSection = styled.div`
    width: 100%;
    min-height:${props => props.size};
    background-repeat:no-repeat;
    background-size:cover;
    background-image:url(${props => props.bg});
    background-position:center;
    color:#fff;
    display:flex;
    text-align:center;
    align-items:center;
    justify-content:center;
`