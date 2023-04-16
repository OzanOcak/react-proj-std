const Footer = () => {
  const today = new Date();
  return (
    <footer className="flex-none h-[4rem]">
      <p>Copyright &copy {today.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
