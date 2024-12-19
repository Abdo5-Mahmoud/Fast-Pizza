import { useLoaderData, useSearchParams } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant';
import MenuItem from './MenuItem';
import { filterData } from './useFilteredMenu.js';
import { useEffect, useState } from 'react';

function Menu() {
  const menu = useLoaderData();
  // console.log(menu);
  const [filteredMenu, setFilteredMenu] = useState([]);
  const [searchParams] = useSearchParams();
  const value = searchParams.get('value');
  const sortValue = searchParams.get('sort');

  useEffect(() => {
    async function fetchFilteredMenu() {
      // Assuming useFilteredMenu returns a promise
      const data = await filterData({ menu, value, sortValue });
      setFilteredMenu(data);
    }

    fetchFilteredMenu();
  }, [menu, value, sortValue]);
  return (
    <ul className="divide-y divide-stone-200 px-2">
      {filteredMenu.length ? (
        filteredMenu.map((pizza) => <MenuItem pizza={pizza} key={pizza.id} />)
      ) : (
        <p className="mt-[25%] text-center text-gray-400">
          There is no such {sortValue ? 'a ' + sortValue : '' || 'a Pizza'}...
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
