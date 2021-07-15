import styled from 'styled-components';

export const Container = styled.div`
    h1{
        position: absolute;
        display: flex;
        margin-left: 505px;
        font: 500 30px "Poppins", sans-serif;
        color: var(--yellow-500)
    }

    span{
        position: absolute;
        display: inline-block;
        margin-left: 580px;
        margin-top: 50px;
        color: var(--purple-500);

        strong{
            color: var(--yellow-500);
            opacity: .8;
        }
    }

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


        .input{
            display: flex;
            flex-direction: column;
            width: 220px;
            padding: 5px;
            margin-bottom: 20px;
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

        .btn-submit{
            position: relative;
            width: 200px;
            padding: 10px;
            background: var(--yellow-500);
            border-radius: 50px;
            top: 40px;
            left: 10px;
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

    .btn-google{
        position: absolute;
        bottom: 10px;
        left: 546px;
        padding: 7px;
        border-radius: 7px;
        background: #8B008B;
        color: var(--gray-100);
        width: 250px;
        transition: filter 0.5s;
        opacity: .9;



        &:hover{
            filter: brightness(0.8);
        }
    }
    

    
`