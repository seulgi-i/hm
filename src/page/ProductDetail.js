import Dropdown from 'react-bootstrap/Dropdown';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/seulgi-i/hm/products/${id}`
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
            {product?.size.map((size) => (
              <Dropdown.Item href="#/action-1">
                {size}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </Col>

    </Row>


  </Container>

};

export default ProductDetail;
