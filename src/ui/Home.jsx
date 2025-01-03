import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';

function Home() {
  const username = useSelector((state) => state.user.userName);
  return (
    <div className="px-4 text-center sm:my-16">
      <h1 className="mb-8 text-center text-xl font-semibold md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {username === '' ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          To Menu, {username}
        </Button>
      )}
    </div>
  );
}

export default Home;

const isLeape = (year) => {
  return year % 4 === 0 && year % 100 === 0 && year % 400 == 0
    ? 'is Leap'
    : 'not Leap';
};

console.log(isLeape(1992));
