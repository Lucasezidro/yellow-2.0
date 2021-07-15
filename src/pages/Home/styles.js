import styled from 'styled-components';

export const Container = styled.div`
    .container{
        position: absolute;
        top: 170px;
        left: 520px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 300px;
        height: 300px;
        border-radius: 8px;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        background: var(--gray-800);

        h1{
            position: relative;
            font: 500 24px "Poppins", sans-serif;
            bottom: 50px;
            left: 40px;
            color: var(--yellow-500);
            opacity: 0.8;
        }

        .input{
            display: flex;
            flex-direction: column;
            width: 220px;
            padding: 5px;
            margin-bottom: 20px;
            margin-left: 40px;
            font-size: 14px;
            border-radius: 3px;
            color: var(--gray-900);
            background: var(--gray-800);              
            border: none;
            border-bottom: 1px solid var(--yellow-500);
            transition: filter 0.5s;

            &::placeholder{
                font-size: 12px;
                opacity: 0.8;
                color: var(--gray-100);
            }

            &:hover{
                filter: brightness(0.8);
            }
        }

        .error{
            position: relative;
            color: #ff8080;
            font-size: 14px;
            font-family: "Roboto";
            font-weight: bold;
        }

        .login-google{
            position: relative;
            margin-left: 65px;
            top: 20px;
            color: var(--yellow-500);
            border-radius: 10px;
            text-decoration: underline;
            background: transparent;
            transition: opacity 0.5s;

            &:hover{
                opacity: .7;
            }

        }

        .btn-submit{
            position: relative;
            width: 200px;
            padding: 10px;
            background: var(--yellow-500);
            border-radius: 50px;
            top: 40px;
            left: 50px;
            opacity: 0.7;
            transition: opacity 0.5s;
            color: var(--gray-900);
            font: 600 15px "Roboto", sans-serif;

            &:hover{
                opacity: 1;
                box-shadow: 2px 2px 4px var(--gray-900)
            }
        }

    }

    .link{
        position: absolute;
        bottom: 50px;
        font-size: 14px;
        left: 590px;
        text-decoration: none;
        color: var(--purple-500);
        opacity: .8;
        transition: opacity 0.5s;

        &:hover{
            opacity: 1;
        }
    }
`