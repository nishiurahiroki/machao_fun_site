import { NextPageWithLayout } from 'next';
import { SideBar } from '../../components/SideBar';

const Links: NextPageWithLayout = () => {
  return <div>工事中</div>;
};

Links.getLayout = (page) => {
  return <SideBar title="リンク集">{page}</SideBar>;
};

export default Links;
