export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer>
      <button id="toTheTopButton" onClick={scrollToTop}>
        <h2>Back To The Top</h2>
      </button>
    </footer>
  );
};
