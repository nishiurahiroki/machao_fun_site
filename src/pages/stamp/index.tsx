import { NextPageWithLayout } from 'next';
import { SideBar } from '../../components/SideBar';
import Grid from '@mui/material/Unstable_Grid2';
import { Typography } from '@mui/material';

import dynamic from 'next/dynamic';

const Stamps = dynamic(() => import('../../components/Stamps'), { ssr: false });

const urls = [
  'https://pbs.twimg.com/media/FbyVGi1agAAh_2B?format=jpg&name=large',
  'https://pbs.twimg.com/media/FddESf4VIAAgna6?format=jpg&name=360x360',
  'https://pbs.twimg.com/media/FdgEVOHVsAAaS4y?format=jpg&name=large',
];

const Stamp: NextPageWithLayout = () => {
  return (
    <Grid container spacing={2}>
      <Grid xs={8} xsOffset={2} textAlign="center">
        <Typography typography="h5">まちゃお作成スタンプ集</Typography>
      </Grid>
      <Stamps urls={urls} />
    </Grid>
  );
};

Stamp.getLayout = (page) => {
  return <SideBar title="スタンプ集">{page}</SideBar>;
};

export default Stamp;
