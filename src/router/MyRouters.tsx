import pageList from "../constant/pageList";

const MyRouters = () => {
  return (
    <div className="sectionsWrapper">
      {pageList
        .filter((item) => item.is_visible)
        .map((page) => (
          <section key={page.id} id={page.id}>
            {page.element}
          </section>
        ))}
    </div>
  );
};

export default MyRouters;
