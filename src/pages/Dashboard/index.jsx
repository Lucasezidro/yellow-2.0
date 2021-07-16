import { Container } from './styles'
import { Link } from 'react-router-dom'


import img1 from '../../assets/images/img1.jpg'
import img2 from '../../assets/images/img2.jpg'
import img3 from '../../assets/images/img3.jpg'
import img4 from '../../assets/images/img4.jpg'

export default function Dashboard(){

    return(
        <Container>
            <nav className="nav-menu">
                <ul className="menu">
                    <a href="/" className="link-menu">
                        <li>Home</li>
                    </a>
                    <a href="#" className="link-menu">
                        <li>Serviços</li>
                    </a>
                    <a href="#" className="link-menu">
                        <li>Cursos</li>
                    </a>
                </ul>
            </nav>

            <div className="slider">
                <div className="slides">
                    <input type="radio" name="radio-btn" id="radio1" />
                    <input type="radio" name="radio-btn" id="radio2" />
                    <input type="radio" name="radio-btn" id="radio3" />
                    <input type="radio" name="radio-btn" id="radio4" />

                    <div className="slide first">
                        <img src={img1} alt="imagem dev 1" />
                        
                        <div>
                            <h1>Welcome to Yellow</h1>
                            <span>The best place to learn about <strong>Tecnology</strong></span>
                            <p>or</p>
                            <small>Create or have someone to take care of your website</small>
                        </div>
                    </div>

                    <div className="slide">
                        <img src={img2} alt="imagem dev 2" />
                    </div>

                    <div className="slide">
                        <img src={img3} alt="imagem dev 3" />
                    </div>

                    <div className="slide">
                        <img src={img4} alt="imagem dev 4" />
                    </div>

                    <div className="navigation-auto">
                        <div className="auto-btn1"></div>
                        <div className="auto-btn2"></div>
                        <div className="auto-btn3"></div>
                        <div className="auto-btn4"></div>
                    </div>
                </div>

                <div className="navigation-manual">
                    <label htmlFor="radio1" className="manual-btn"></label>
                    <label htmlFor="radio2" className="manual-btn"></label>
                    <label htmlFor="radio3" className="manual-btn"></label>
                    <label htmlFor="radio4" className="manual-btn"></label>
                </div>
            </div>
        </Container>
    )
}