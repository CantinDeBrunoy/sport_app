const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <div>Header</div>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
