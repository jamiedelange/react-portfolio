import React from 'react';
import Footer from '../Footer';
import ss1 from '../../assets/1.png'
import ss2 from '../../assets/2.png'
import ss3 from '../../assets/3.png'
import ss4 from '../../assets/4.png'
import ss5 from '../../assets/5.png'
import ss6 from '../../assets/6.png'

function Portfolio() {
    return (
        <section className="portfolio-box">
            <div>
                <h2>Portfolio</h2>
            </div>
            <div className="grid">
                <div className="grid-row"></div>
                    <div className="grid-item">
                        <a>
                            <img className="img-thumbnail" src={`${ss1}`}></img>
                            <h3>item 1</h3>
                            <a><i></i></a>
                        </a>
                    </div>
                    <div className="grid-item">
                        <a>
                            <img className="img-thumbnail" src={`${ss2}`}></img>
                            <h3>item 2</h3>
                            <a><i></i></a>
                        </a>
                    </div>
               
                <div className="grid-row">
                    <div className="grid-item">
                        <a>
                            <img className="img-thumbnail" src={`${ss3}`}></img>
                            <h3>item 3</h3>
                            <a><i></i></a>
                        </a>
                    </div>
                    <div className="grid-item">
                        <a>
                            <img className="img-thumbnail" src={`${ss4}`}></img>
                            <h3>item 4</h3>
                            <a><i></i></a>
                        </a>
                    </div>
                </div>
                <div className="grid-row">
                    <div className="grid-item">
                        <a>
                            <img className="img-thumbnail" src={`${ss5}`}></img>
                            <h3>item 5</h3>
                            <a><i></i></a>
                        </a>
                    </div>
                    <div className="grid-item">
                        <a>
                            <img className="img-thumbnail" src={`${ss6}`}></img>
                            <h3>item 6</h3>
                            <a><i></i></a>
                        </a>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </section>
    )
}

export default Portfolio;