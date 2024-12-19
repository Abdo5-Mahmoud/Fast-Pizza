export const filterData = async ({ menu, value, sortValue }) => {
  let filteredMenu = await menu;
  if (value)
    filteredMenu = [...menu].filter((pizza) =>
      pizza.name.toLowerCase().includes(`${value}`),
    );
  if (value && sortValue == 'ingredients')
    filteredMenu = [...menu].filter((pizza) => {
      for (let i in pizza.ingredients) {
        if (pizza.ingredients[i].toLowerCase().includes(`${value}`)) {
          return true;
        }
      }
    });

  // console.log(menu);
  // console.log(value);
  // console.log(sortValue);
  // console.log(filteredMenu);

  return filteredMenu;
};
