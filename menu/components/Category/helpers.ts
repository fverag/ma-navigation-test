import { CategoryStateSetter } from "./types";

export const toggleCategoryState = ({
  categoryIndex,
  setCurrentCategory,
  currentCategory,
  setHasCategoryOpen,
}: CategoryStateSetter): void => {
  const oldValue = currentCategory;
  const newValue = currentCategory !== categoryIndex ? categoryIndex : null;
  const shouldScroll = newValue !== currentCategory && newValue !== null && oldValue !== null;

  setCurrentCategory(newValue);
  setHasCategoryOpen(newValue !== null);

  if (shouldScroll) {
    // delay a little to achieve a smoother scrolling effect while the panel is collapsing
    setTimeout(() => {
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  }
};
