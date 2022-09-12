import { NextPageWithLayout } from 'next';
import { useRouter } from 'next/router';

const Index: NextPageWithLayout = () => {
  const router = useRouter();

  return (
    <div className="welcome">
      <div className="sp-container">
        <div className="sp-content">
          <div className="sp-globe"></div>
          <h2 className="frame-1">Machao 24 presents</h2>
          <h2 className="frame-2">Game writer</h2>
          <h2 className="frame-3">Pro Game player</h2>
          <a className="sp-circle-link" onClick={() => router.push('/stamp')}>
            Go to the Machao’s World
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;
