import HomeScss from "./Home.module.scss";
import { Products } from "../../components/Products/Products";
import prData from "../../product.json";
import { useEffect, useState } from "react";

export const Home = () => {
  const [productsData, setProductsData] = useState(prData);
  const [errorMsg, setErrorMsg] = useState(false);
  const [searchWord, setSearchWord] = useState("");

  useEffect(() => {
    if (productsData.length === 0) {
      setErrorMsg(true);
    } else {
      setErrorMsg(false);
    }
  }, [productsData]);

  const handleSearch = (event) => {
    setSearchWord(event.target.value);
  };

  const filteredProducts = productsData.filter((product) =>
    product.title.toLowerCase().includes(searchWord.toLowerCase())
  );

  return (
    <>
      <div className={HomeScss.home}>
        <div className={HomeScss.searchCont}>
          <input
            className={HomeScss.search}
            type="search"
            placeholder="search..."
            value={searchWord}
            onChange={handleSearch}
          />
        </div>
        <div className={HomeScss.productCont}>
          {filteredProducts.map((item, index) => (
            <Products key={index} id={item.id} data={item} />
          ))}
        </div>
        {errorMsg && <p className={HomeScss.error}>item was not found :(</p>}
      </div>
    </>
  );
};
