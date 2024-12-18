// const API_URL_Menu = 'api/menu';
// const API_URL_Order = 'api/order';
// console.log(5 * 10);

// console.log(import.meta.env.VITE_MAIN_API);

export async function getMenu() {
  const res = await fetch(`${import.meta.env.VITE_MAIN_API}/menu`);

  // fetch won't throw error on 400 errors (e.g. when URL is wrong), so we need to do it manually. This will then go into the catch block, where the message is set
  if (!res.ok) throw Error('Failed getting menu');

  const { data } = await res.json();
  return data;
}

export async function getOrder(id) {
  const res = await fetch(`${import.meta.env.VITE_MAIN_API}/order/${id}`);
  if (!res.ok) throw Error(`Couldn't find order #${id}`);

  const { data } = await res.json();
  return data;
}

export async function createOrder(newOrder) {
  try {
    const res = await fetch(`${import.meta.env.VITE_MAIN_API}/order`, {
      method: 'POST',
      body: JSON.stringify(newOrder),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) throw Error();
    const { data } = await res.json();
    return data;
  } catch {
    throw Error('Failed creating your order');
  }
}

export async function updateOrder(id, updateObj) {
  const fetchAPI = `${import.meta.env.VITE_MAIN_API}/order/${id}`;
  try {
    const res = await fetch(`${fetchAPI}`, {
      method: 'PATCH',
      body: JSON.stringify(updateObj),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) throw Error();
    // We don't need the data, so we don't return anything
  } catch (err) {
    throw Error('Failed updating your order');
  }
}

try {
  const data = await fetch('sadfsadf');
} catch (er) {
  console.log(er);
}


// const [error,data] ?= await fetch('asdfasdf')