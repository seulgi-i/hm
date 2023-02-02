import React, { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSearchParams } from 'react-router-dom';
import { productAction } from "../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";

const ProductAll = () => {
  const productList = useSelector(state => state.product.productList)
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch()

  const getProducts = () => {
    let searchQuery = query.get('q') || "";
    console.log("쿼리값은?", searchQuery)
    dispatch(productAction.getProducts(searchQuery));
    //바로 reducer로 가는 게 아니라 미들웨어인 productAction를 거쳐간다. 
    //비동기처리 가능.getProducts()함수호출
    //보내면서 서치쿼리까지 같이 보내야한다. 매개변수로 전달.
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
