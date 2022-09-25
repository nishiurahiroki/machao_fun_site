import { NextPageWithLayout } from 'next';
import { SideBar } from '../../components/SideBar';
import Grid from '@mui/material/Unstable_Grid2';
import { ListItemIcon, MenuItem, MenuList, Typography } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import Link from 'next/link';

const links = [
  {
    url: 'https://twitter.com/machao_020',
    icon: TwitterIcon,
    label: 'Twitter',
  },
  {
    url: 'https://chara.ge/author/cs-machaon02/',
    icon: LibraryBooksIcon,
    label: 'Machaoきゃらげっ！ブログ',
  },
];

const Links: NextPageWithLayout = () => {
  return (
    <Grid container spacing={2}>
      <Grid xs={9} textAlign="center">
        <MenuList>
          {links.map((link, index) => (
            <Link key={index} href={link.url}>
              <a target="_blank" style={{ color: 'inherit' }}>
                <MenuItem>
                  <ListItemIcon>
                    <link.icon fontSize="small" />
                  </ListItemIcon>
                  <Typography variant="inherit">{link.label}</Typography>
                </MenuItem>
              </a>
            </Link>
          ))}
        </MenuList>
      </Grid>
    </Grid>
  );
};

Links.getLayout = (page) => {
  return <SideBar title="リンク集">{page}</SideBar>;
};

export default Links;
