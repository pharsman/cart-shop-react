import HeaderScss from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={HeaderScss.header}>
      <h1 className={HeaderScss.title}>
        <a className={HeaderScss.a} to="/">
          Simple Shop System
        </a>
      </h1>
      <p className={HeaderScss.cart}>
        <span className={HeaderScss.amount}> 0 </span>
        <a className={HeaderScss.a} to="/cart">
          Cart
        </a>
      </p>
    </header>
  );
};
