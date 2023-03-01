import styled from 'styled-components';

const Navigation = () => {
    return(
        <div>
            <Title>
                코멘토 쇼핑 
            </Title>
        </div>
    )
}

const Title = styled.div`
    position: absolute;
    width: 187px;
    height: 26px;
    left: 120px;

    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #000000;
`;

export default Navigation;