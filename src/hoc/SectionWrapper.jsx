const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <section className="">
        <span id={idName}></span>
        <Component />
      </section>
    );
  };

export default SectionWrapper;
