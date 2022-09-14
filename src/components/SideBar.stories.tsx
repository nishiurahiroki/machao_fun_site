import React, { useState } from 'react';

import { SideBar } from './SideBar';

export default {
  title: 'components/SideBar',
  component: SideBar,
};

export const Default = () => {
  const [open, setOpen] = useState<boolean>(false);

  const mockProps = {
    open,
    toggle: (open: boolean) => setOpen(open),
    children: <>コンテンツ</>,
    title: 'テストページ',
  };

  return <SideBar {...mockProps} />;
};
