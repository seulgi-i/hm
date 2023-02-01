import Dropdown from 'react-bootstrap/Dropdown';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    let url = `http://localhost:5000/products/${id}`
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
  }
  useEffect(() => {
    getProductDetail();
  }, []);
  return <Container>
    <Row>
      <Col className='product-img'>
        <img src={product?.img} />
      </Col>
      <Col>
        <div>{product?.title}</div>
        <div>{product?.price}</div>
        <Dropdown>
          <Dropdown.Toggle variant="danger" id="dropdown-basic">
            사이즈
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">{product?.size[0]}</Dropdown.Item>
            <Dropdown.Item href="#/action-1">{product?.size[1]}</Dropdown.Item>
            <Dropdown.Item href="#/action-1">{product?.size[2]}</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Col>

    </Row>


  </Container>

};

export default ProductDetail;
