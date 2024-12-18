import { useLoaderData, useSearchParams } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant';
import MenuItem from './MenuItem';
import useFilteredMenu from './useFilteredMenu.js';

function Menu() {
  const menu = useLoaderData();
  // console.log(menu);

  const [searchParams] = useSearchParams();
  const value = searchParams.get('value');
  const sortValue = searchParams.get('sort');
  let filteredMenu = useFilteredMenu({ menu, value, sortValue });
  console.log(filteredMenu);

  return (
    <ul className="divide-y divide-stone-200 px-2">
      {filteredMenu.length ? (
        filteredMenu.map((pizza) => <MenuItem pizza={pizza} key={pizza.id} />)
      ) : (
        <p className="mt-[25%] text-center text-gray-400">
          There is no such an {sortValue}...
        </p>
      )}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
