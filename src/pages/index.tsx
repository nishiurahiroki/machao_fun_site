import { NextPageWithLayout } from 'next';
import { SideBar } from '../components/SideBar';

const Index: NextPageWithLayout = () => {
  return <div>test</div>;
};

Index.getLayout = (page) => {
  return <SideBar title="トップページ">{page}</SideBar>;
};

export default Index;
