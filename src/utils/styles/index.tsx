import styled from "styled-components";

export const InputContainer = styled.div`
    background-color: #131313;
    padding: 12px 16px;
    border-radius: 10px;
    width: 100%;
`;
export const InputFields = styled.input`
    font-family: "Inter";
    outline: none;
    border: none;
    color: #fff;
    font-size: 18px;
    width: 100%;
    background-color: inherit;
    margin: 4px 0;
`;

export const InputLabel = styled.label`
    display: block;
    color: #8f8f8f;
    font-size: 14px;
    margin: 4px 0;
`;

export const Button = styled.button`
    width: 100%;
    outline: none;
    border: none;
    font-family: "Inter";
    font-size: 16px;
    background-color: #2b09ff;
    color: #fff;
    border-radius: 10px;
    padding: 25px 0;
    transition: 200ms background-color ease;
    transition: 200ms border ease;
    font-weight: 500;
    &:focus {
        background-color: #573dfc;
    }
    &:hover {
        cursor: pointer;
        background-color: #3415ff;
    }

    &:active {
        background-color: #3a1cff;
    }
`;

export const Page = styled.div`
    /* background-color: #fff; */
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
