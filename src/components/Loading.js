const Loading = () => {
  const loading = document.createElement("div");
  loading.className = "main-center loading";
  loading.innerHTML = `
    <h2 class="loading-title">Loading</h2>
    `;

  document.body.appendChild(loading);

  const loadingTitle = loading.querySelector(".loading-title");
  let points = 0;
  let interval;

  interval = setInterval(() => {
    points = (points + 1) % 4;
    loadingTitle.textContent = "Loading" + ".".repeat(points);
  }, 500);

  const removeLoading = () => {
    clearInterval(interval);
    loading.remove();
  };

  return { loading, removeLoading };
};

export default Loading;
