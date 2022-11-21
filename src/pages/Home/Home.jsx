import React from 'react'
import { Header } from '../../components'
import './Home.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import photo from '../../img/xiumai.jpeg'

const Home = () => {
  return (
    <div className='app__homepage'>
      <Container className="home__detail">
        <Row className="category__name rice"><h1><span>Cơm dĩa</span></h1>
          <ul className="product">
            <li className="product__list">
              <div className="product__detail">
                <img className='product__img' src={photo} alt="xiu mai" />
                <div className='product__food'>
                  <div className='product__content'>
                    <h4>Com xiu mai</h4>
                    <span></span>
                    <h4>69000</h4>
                  </div>
                  <div className="product__description">
                    <h5 >Bánh mì kẹp thịt heo Việt Nam</h5>
                  </div>
                </div>
              </div>
            </li>
            <li className="product__list">
              <div className="product__detail">
                <img className='product__img' src={photo} alt="xiu mai" />
                <div className='product__food'>
                  <div className='product__content'>
                    <h4>Com xiu mai</h4>
                    <span></span>
                    <h4>69000</h4>
                  </div>
                  <div className="product__description">
                    <h5 >Bánh mì kẹp thịt heo Việt Nam</h5>
                  </div>
                </div>
              </div>
            </li>
            <li className="product__list">
              <div className="product__detail">
                <img className='product__img' src={photo} alt="xiu mai" />
                <div className='product__food'>
                  <div className='product__content'>
                    <h4>Com xiu mai</h4>
                    <span></span>
                    <h4>69000</h4>
                  </div>
                  <div className="product__description">
                    <h5 >Bánh mì kẹp thịt heo Việt Nam</h5>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </Row>

        <Row fluid className="category__name bread"><h1><span>Bánh mì</span></h1>
          <ul>
            <li className="product__list">
              <div className="product__detail">
                <img className='product__img' src={photo} alt="xiu mai" />
                <div className='product__food'>
                  <div className='product__content'>
                    <h4>Com xiu mai</h4>
                    <span></span>
                    <h4>69000</h4>
                  </div>
                  <div className="product__description">
                    <h5 >Bánh mì kẹp thịt heo Việt Nam</h5>
                  </div>
                </div>
              </div>
            </li>
            <li className="product__list">
              <div className="product__detail">
                <img className='product__img' src={photo} alt="xiu mai" />
                <div className='product__food'>
                  <div className='product__content'>
                    <h4>Com xiu mai</h4>
                    <span></span>
                    <h4>69000</h4>
                  </div>
                  <div className="product__description">
                    <h5 >Bánh mì kẹp thịt heo Việt Nam</h5>
                  </div>
                </div>
              </div>
            </li>
            <li className="product__list">
              <div className="product__detail">
                <img className='product__img' src={photo} alt="xiu mai" />
                <div className='product__food'>
                  <div className='product__content'>
                    <h4>Com xiu mai</h4>
                    <span></span>
                    <h4>69000</h4>
                  </div>
                  <div className="product__description">
                    <h5 >Bánh mì kẹp thịt heo Việt Nam</h5>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </Row>
        <Row fluid className="category__name noodle"><h1><span>Bún phở (Món nước)</span></h1>
          <ul>
            <li className="product__list">
              <div className="product__detail">
                <img className='product__img' src={photo} alt="xiu mai" />
                <div className='product__food'>
                  <div className='product__content'>
                    <h4>Com xiu mai</h4>
                    <span></span>
                    <h4>69000</h4>
                  </div>
                  <div className="product__description">
                    <h5 >Bánh mì kẹp thịt heo Việt Nam</h5>
                  </div>
                </div>
              </div>
            </li>
            <li className="product__list">
              <div className="product__detail">
                <img className='product__img' src={photo} alt="xiu mai" />
                <div className='product__food'>
                  <div className='product__content'>
                    <h4>Com xiu mai</h4>
                    <span></span>
                    <h4>69000</h4>
                  </div>
                  <div className="product__description">
                    <h5 >Bánh mì kẹp thịt heo Việt Nam</h5>
                  </div>
                </div>
              </div>
            </li>
            <li className="product__list">
              <div className="product__detail">
                <img className='product__img' src={photo} alt="xiu mai" />
                <div className='product__food'>
                  <div className='product__content'>
                    <h4>Com xiu mai</h4>
                    <span></span>
                    <h4>69000</h4>
                  </div>
                  <div className="product__description">
                    <h5 >Bánh mì kẹp thịt heo Việt Nam</h5>
                  </div>
                </div>
              </div>
            </li>
            <li className="product__list">
              <div className="product__detail">
                <img className='product__img' src={photo} alt="xiu mai" />
                <div className='product__food'>
                  <div className='product__content'>
                    <h4>Com xiu mai</h4>
                    <span></span>
                    <h4>69000</h4>
                  </div>
                  <div className="product__description">
                    <h5 >Bánh mì kẹp thịt heo Việt Nam</h5>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </Row>
      </Container>  
    </div>
  )
}

export default Home