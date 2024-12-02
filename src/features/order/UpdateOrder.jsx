import Button from '../../ui/Button';
import { useFetcher } from 'react-router-dom';
import { updateOrder } from '../../services/apiRestaurant';

function UpdateOrder({ order }) {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type={'primary'}>Make Priority</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

export async function action({ req, params }) {
  //   const reqData = await req.formData();   ده لو انا باخد داتا من الفورم
  //   const data = Object.fromEntries(reqData);
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
