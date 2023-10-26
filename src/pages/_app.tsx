import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import PagesLayout from '@/layouts/PagesLayout';
import SignInPage from './sign-in';
import SignUpPage from './sign-up';
import Provider from '@/components/Provider';
import Home from './index';
import NotFoundPage from './notfound';



export default function App({ Component, pageProps }: AppProps) {
  if (Component === SignInPage
    || Component === SignUpPage 
    || Component === Home
    || Component === NotFoundPage
    ) {
    // 如果当前页面是登录页面，不使用布局
    return <Provider>
      <Component {...pageProps} />;
    </Provider>
  }

  return (
    <Provider>
      <PagesLayout>
        <Component {...pageProps} />
      </PagesLayout>
    </Provider>
  );
}

