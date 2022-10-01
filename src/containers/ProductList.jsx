import React, { useEffect, useState } from 'react';
import ProductItem from '@components/ProductItem';
import '@styles/ProductList.scss';
import axios from 'axios';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
	const [products, setProducts] = useState([]);//el estado inicial es [] porque la api asi esta estructurada

	useEffect(() => {
		const fetchProducts = async () => {
			const response = await axios(API);
			setProducts(response.data);
		}
		fetchProducts();
	},[]);

	return (
		<section className="main-container">
			<div className="ProductList">
				{products.map(product =>(
					<ProductItem />
				))}
			</div>
		</section>
	);
}

export default ProductList;
