import React, { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSearchParams } from 'react-router-dom';
const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts = async () => {
    let searchQuery = query.get('q') || "";
    console.log("쿼리값은?", searchQuery)
    let url = `https://my-json-server.typicode.com/seulgi-i/hm/products?q=${searchQuery}`;
    let response = await fetch(url)
    let data = await response.json();
    setProductList(data);
  }

  useEffect(() => {
    getProducts()
  }, [query]);
  return <div>
    <Container>
      <Row>
        {productList.map((menu, index) => (
          <Col lg={3} key={index} ><ProductCard item={menu} /></Col>
        ))}
      </Row>
    </Container>
  </div >;
};

export default ProductAll;
