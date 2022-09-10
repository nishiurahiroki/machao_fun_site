import { NextPageWithLayout } from 'next';
import { SideBar } from '../../components/SideBar';

const Stamp: NextPageWithLayout = () => {
  return <div>スタンプ</div>;
};

Stamp.getLayout = (page) => {
  return <SideBar title="スタンプ集">{page}</SideBar>;
};

export default Stamp;
