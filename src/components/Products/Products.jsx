import ProductsScss from "./Products.module.scss";
import { useNavigate } from "react-router-dom";

export const Products = ({ data }) => {
  let navigate = useNavigate();

  const openInner = (id) => {
    navigate(
      { pathname: "inner", search: `id=${data.id.toString()}` },
      { state: data.id }
    );
  };

  return (
    <>
      <div className={ProductsScss.product}>
        <div className={ProductsScss.img}>
          <img src={data.url} alt={data.title} />
        </div>
        <p className={ProductsScss.title}>{data.title}</p>
        <p className={ProductsScss.description}>{data.desc}</p>
        <p className={ProductsScss.price}>{data.price} GEL</p>
        <button
          className={ProductsScss.view}
          onClick={() => openInner(data.id)}
        >
          View
        </button>
      </div>
    </>
  );
};
