const mobileButton = document.querySelector(".navigation__button");

mobileButton.addEventListener("click", () => {
  showMobileModal();
});

function showMobileModal() {
  document.body.classList.add("modal-open");

  const mobileModal = document.createElement("div");
  mobileModal.classList.add("mobile-modal");

  mobileModal.innerHTML = `
  <header>
  <div class="header__container container">
  <span class="mobile__close-btn">&times;</span>
  <a class="logo" href="./index.html">MoGo</a>
  </header>
  <div>
    <ul class="mobile__list">
      <li>
        <a class="mobile__item" href="./about.html">About</a>
      </li>
      <li>
        <a class="mobile__item" href="./service.html">Service</a>
      </li>
      <li>
        <a class="mobile__item" href="./work.html">Work</a>
      </li>
      <li>
        <a class="mobile__item" href="./blog.html">Blog</a>
      </li>
      <li>
      <a class="mobile__item" href="./contact.html">Contact</a>
    </li>
    </ul>
    </div>
  </div>
  `;

  function closeMobileModal() {
    document.body.classList.remove("modal-open");
    document.body.removeChild(mobileModal);
    document.removeEventListener("keydown", handleKeyPress);
  }

  function handleKeyPress(event) {
    if (event.key === "Escape") {
      closeMobileModal();
    }
  }

  mobileModal.addEventListener("click", (event) => {
    if (event.target.classList.contains("mobile__close-btn")) {
      closeMobileModal();
    }
  });

  document.addEventListener("keydown", handleKeyPress);

  document.body.appendChild(mobileModal);
}
