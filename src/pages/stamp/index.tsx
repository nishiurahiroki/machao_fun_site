import { NextPageWithLayout } from 'next';
import { SideBar } from '../../components/SideBar';
import Grid from '@mui/material/Unstable_Grid2';
import { Typography } from '@mui/material';
import { SnackbarProvider } from 'notistack';

import dynamic from 'next/dynamic';

const Stamps = dynamic(() => import('../../components/Stamps'), { ssr: false });

const urls = [
  'https://pbs.twimg.com/media/FbyVGi1agAAh_2B?format=jpg&name=large',
];

const Stamp: NextPageWithLayout = () => {
  return (
    <Grid container spacing={2}>
      <Grid xs={6} xsOffset={3} textAlign="center">
        <Typography typography="h4">まちゃお作成スタンプ集</Typography>
      </Grid>
      <Stamps urls={urls} />
    </Grid>
  );
};

Stamp.getLayout = (page) => {
  return (
    <SnackbarProvider>
      <SideBar title="スタンプ集">{page}</SideBar>
    </SnackbarProvider>
  );
};

export default Stamp;
