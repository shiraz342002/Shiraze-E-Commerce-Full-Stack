import React, { useState, useEffect } from 'react';

const Test = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/products/getAll')
      .then(response => response.json())
      .then(data => {
        // Check if data is an array
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          setError('Unexpected data format');
        }
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {products.length ? (
        products.map(product => (
          <div key={product._id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
            {product.image && product.image.length ? (
              product.image.map((img, idx) => (
                <img key={idx} src={img} alt={product.name} />
              ))
            ) : (
              <div>No images available</div>
            )}
          </div>
        ))
      ) : (
        <div>No products found</div>
      )}
    </div>
  );
};

export default Test;
