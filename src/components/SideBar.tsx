import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import LinkIcon from '@mui/icons-material/Link';

import { useRouter } from 'next/router';

export type Props = {
  children: React.ReactNode;
  title: string;
};

const drawerWidth = 240;
interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export type MenuProps = {
  title: string;
  onClick: () => void;
  icon: JSX.Element;
};

export const Menu: React.FC<MenuProps> = (props: MenuProps) => {
  const { title, onClick, icon } = props;

  return (
    <ListItem disablePadding>
      <ListItemButton onClick={onClick}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={title} />
      </ListItemButton>
    </ListItem>
  );
};

export const SideBar: React.FC<Props> = (props: Props) => {
  const { children, title } = props;

  const [open, setOpen] = useState(false);

  const router = useRouter();
  const handleRoute = () => {
    setOpen(false);
  };

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRoute);
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div
      style={{
        flexGrow: 1,
      }}
    >
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        anchor="left"
        open={open}
        onClose={handleDrawerClose}
        onOpen={handleDrawerOpen}
      >
        <Box sx={{ display: 'flex' }}>
          <List>
            <Menu
              title="まちゃおスタンプ"
              icon={<EmojiEmotionsIcon />}
              onClick={() => router.push('/stamp')}
            />
            <Menu
              title="リンク集"
              icon={<LinkIcon />}
              onClick={() => router.push('/links')}
            />
          </List>
        </Box>
      </SwipeableDrawer>
      {children}
    </div>
  );
};
