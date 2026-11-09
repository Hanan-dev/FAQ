const faqList = document.querySelector(".faq__list");

faqList.addEventListener("click", (event) => {
  if (!(event.target instanceof Element)) {
    return;
  }

  const question = event.target.closest(".faq__question");

  if (!question) {
    return;
  }

  const answer = document.getElementById(question.getAttribute("aria-controls"));
  const isExpanded = question.getAttribute("aria-expanded") === "true";

  question.setAttribute("aria-expanded", String(!isExpanded));
  answer.hidden = isExpanded;
});
