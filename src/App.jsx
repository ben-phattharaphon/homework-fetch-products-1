import { useEffect, useState } from "react";

function App() {
  const [product, setProduct] = useState([]);
  const [productlist, setProductList] = useState([]);
  // console.log(product);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((resp) => resp.json())
      .then((data) => {
        setProduct(data);
        setProductList(data);
      });
  }, []);

  const btnListCategory = [
    ...new Set(product.map((item) => item.category)),
  ].sort();
  // console.log(btnListCategory);

  const hdlClickProduct = (item) => {
    const catergoryName = item.target.textContent;
    console.log(item.target.textContent);
    const result = product.filter((el) => el.category === catergoryName);
    setProductList(result);
  };

  const hdlAllProduct = () => {
    setProductList(product);
  };

  return (
    <div className="app bg-[#FFEDFA] p-6 min-h-screen w-full font-kanit">
      <h1 className="flex justify-center text-[#BE5985] text-6xl font-black tracking-tighter uppercase mb-2">
        PINK MATTER
      </h1>
      <hr className="text-[#FB9B8F]" />

      <div className="p-2 flex justify-center gap-4">
        {btnListCategory.map((item) => (
          <button
            key={item}
            onClick={hdlClickProduct}
            className="bg-[#BE5985] text-white px-5 py-2 rounded-full hover:bg-[#F57799] transition-all active:scale-95 capitalize shadow-md"
          >
            {item}
          </button>
        ))}
        <button
          onClick={hdlAllProduct}
          className="bg-[#BE5985] text-white px-5 py-2 rounded-full hover:bg-[#F57799] transition-all active:scale-95 capitalize shadow-md"
        >
          All
        </button>
      </div>
      <p className="text-[19px] text-[#BE5985] font-bold">
        Current Amount : {productlist.length}{" "}
      </p>
      <div className="flex flex-wrap justify-center gap-6 p-4 ">
        {productlist.map((item) => (
          <div
            key={item.id}
            class=" flex flex-col shadow max-w-75 text-center mx-auto gap-2 p-2 bg-[#FFB8E0] rounded-2xl"
          >
            <img
              src={item.image}
              alt=""
              className="h-40 mx-auto object-contain"
            />
            <h1 className="text-[22px] font-bold text-[#8A244B] line-clamp-2">
              {item.title}
            </h1>
            <h2 className="text-sm text-left text-gray-600 items-start line-clamp-2 grow ">
              {item.description}
            </h2>
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-pink-100">
              <h3 className=" text-[#D02752] font-bold">
                Price: ${item.price}
              </h3>
              <button className="bg-[#BE5985] text-white px-5 py-2 rounded-full hover:bg-[#F57799] transition-all active:scale-95 capitalize shadow-md">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
