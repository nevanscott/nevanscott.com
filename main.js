const articles = document.querySelectorAll("article");

articles.forEach((article) => {
  const footer = article.querySelector("footer");
  if (footer) {
    const options = {
      rootMargin: "0px",
      threshold: 1,
    };

    const callback = (entries) => {
      entries.forEach(({ isIntersecting, target }) => {
        if (isIntersecting) {
          target.classList.add("is-fully-visible");
        } else {
          target.classList.remove("is-fully-visible");
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(footer);
  }
});
