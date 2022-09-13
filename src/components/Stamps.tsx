import Grid from '@mui/material/Unstable_Grid2';
import { Button } from '@mui/material';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import { useSnackbar } from 'notistack';
import { SnackbarProvider } from 'notistack';

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
      {urls.map((url: string) => (
        <>
          <Grid xs={6} xsOffset={3} textAlign="center">
            <img
              src={url}
              width={500}
              height={240}
              onClick={handleClickStamp(url)}
              style={{
                cursor: 'pointer',
                marginTop: '4vh',
              }}
            />
          </Grid>
          <Grid xs={6} xsOffset={3} textAlign="center">
            <Button
              variant="contained"
              onClick={handleClickButton(url)}
              startIcon={<FilePresentIcon />}
            >
              クリップ
            </Button>
          </Grid>
        </>
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
