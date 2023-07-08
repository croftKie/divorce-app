import { catData } from "./catData";

export const categories = [];

export function catFilter() {
  catData.forEach((brand) => {
    brand.children.forEach((child) => {
      categories.push({
        brand: child.content.title,
        id: child.link.categoryId,
        segment: brand.content.title,
      });
    });
  });
}
