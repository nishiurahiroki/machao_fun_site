import Grid from '@mui/material/Unstable_Grid2';
import { Button, Card, CardActions, CardMedia } from '@mui/material';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import { useSnackbar } from 'notistack';
import { SnackbarProvider } from 'notistack';
import React from 'react';

export type StampProps = {
  urls: string[];
};

const Stamps: React.FC<StampProps> = (props: StampProps) => {
  const { urls } = props;

  const { enqueueSnackbar } = useSnackbar();

  const handleClickStamp = (url: string) => () => {
    navigator.clipboard.writeText(url);
    enqueueSnackbar('スタンプのURLをコピーしました！', { variant: 'success' });
  };

  const handleClickButton = (url: string) => () => {
    navigator.clipboard.writeText(url);
    enqueueSnackbar('スタンプのURLをコピーしました！', { variant: 'success' });
  };

  return (
    <>
      {urls.map((url: string, index: number) => (
        <React.Fragment key={index}>
          <Grid xs={6} xsOffset={3} textAlign="center">
            <Card sx={{ maxWidth: 600 }}>
              <CardMedia
                onClick={handleClickStamp(url)}
                component="img"
                height="300"
                image={url}
              />
              <CardActions>
                <Button
                  onClick={handleClickButton(url)}
                  startIcon={<FilePresentIcon />}
                >
                  コピー
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </React.Fragment>
      ))}
    </>
  );
};

function WithSnacBarProvider(props: StampProps) {
  return (
    <SnackbarProvider>
      <Stamps {...props} />
    </SnackbarProvider>
  );
}

export default WithSnacBarProvider;
