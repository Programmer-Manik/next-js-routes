const ProductIdPage = ({params, searchParams}) => {
   // console.log(params)
   console.log(searchParams)
 return (
 <div>
 <h2>Welcome to the ProductIdPage page {params.productId}</h2>
 </div>
 );
};

export default ProductIdPage;