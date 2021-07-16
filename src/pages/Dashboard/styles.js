import styled from 'styled-components'

export const Container = styled.div`

margin: 0;
padding: 0;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;    

    .nav-menu{
        position:absolute;
        display: flex;
        right: 100px;
        top: 10px;

        .menu{
            display: flex;
            margin-left: 10px;

            .link-menu{
                display: flex;
                text-decoration: none;
                color: var(--yellow-500);
                transition: all 0.5s;

                &:hover{
                    filter: brightness(0.8);
                    text-decoration: underline;
                }

                li{
                    margin-left: 50px;
                    list-style: none;
                }
            }
        }

    }

    .slider{
        width: 1000px;
        height: 470px;
        border-radius: 10px;
        overflow: hidden;

        .slides{
            width: 500%;
            height: 500px;
            display: flex;

            input{
                display: none;
            }

            #radio1:checked ~ .first{
                margin-left: 0;
            }

            #radio2:checked ~ .first{
                margin-left: -20%;
            }

            #radio3:checked ~ .first{
                margin-left: -40%;
            }

            #radio4:checked ~ .first{
                margin-left: -60%;
            }

            .slide{
                width: 20%;
                transition: 2s;
                

                img{
                    width: 1000px;
                    height: 470px;
                }

                h1{
                    position: absolute;
                    top: 100px;
                    left: 280px;
                    font: 900 50px "Poppins", sans-serif;
                    color: var(--yellow-500);
                }

                span{
                    position: absolute;
                    top: 180px;
                    left: 330px;
                    font: 400 20px "Poppins", sans-serif;
                    color: var(--purple-500);

                    strong{
                        color: var(yellow-500);
                    }
                }

                p{
                    position: absolute;
                    top: 220px;
                    left: 520px;
                    font: 400 18px "Poppins", sans-serif;
                    color: var(--yellow-500);

                    &::before{
                        position: absolute;
                        content: '';
                        height: 1px;
                        width: 190px;
                        top: 14px;
                        left: 23px;
                        color: var(--yellow-500);
                        background-color: var(--yellow-500);
                        opacity: .5;

                    }

                    &::after{
                        position: absolute;
                        content: '';
                        height: 1px;
                        width: 190px;
                        top: 14px;
                        right: 23px;
                        color: var(--yellow-500);
                        background-color: var(--yellow-500);
                        opacity: .5;
                    }

                }

                small{
                    position:absolute;
                    top: 270px;
                    left: 320px;
                    font: 400 16px "Poppins", sans-serif;
                    color: var(--yellow-500);
                    opacity: .7;
                }


            }

            .navigation-auto{
                position: absolute;
                display: flex;
                width: 1000px;
                justify-content: center;
                margin-top: 440px;

                div{
                    border: 2px solid var(--yellow-500);
                    padding: 5px;
                    border-radius: 10px;
                    transition: 1s;

                    &:not(:last-child){
                        margin-right: 40px;
                    }
                }

                #radio1:checked ~ .navigation-auto{

                    .auto-btn1{
                        background: var(--yellow-500);
                    }
                }

                #radio2:checked ~ .navigation-auto{

                    .auto-btn2{
                        background: var(--yellow-500);
                    }
                }

                #radio3:checked ~ .navigation-auto{

                    .auto-btn3{
                        background: var(--yellow-500);
                    }
                 }

                 #radio4:checked ~ .navigation-auto{

                    .auto-btn4{
                        background: var(--yellow-500);
                    }
                }




            }
        }

        .navigation-manual{
            position: absolute;
            width: 1000px;
            margin-top: -60px;
            display: flex;
            justify-content: center;


            .manual-btn{
                border: 2px solid var(--yellow-500);
                padding: 5px;
                border-radius: 10px;
                cursor: pointer;
                transition: 1s;

                &:not(:last-child) {
                    margin-right: 40px;
                }

                &:hover{
                    background: var(--yellow-500);
                }
            }
        }
    }
`