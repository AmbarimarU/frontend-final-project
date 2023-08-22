const API =
  process.env.NODE_ENV === "production"
    ? `https://backend-final-herbal-store.onrender.com/products`
    : `http://localhost:3001/products`;

export default API;
