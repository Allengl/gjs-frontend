import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import PagesLayout from '@/layouts/PagesLayout';
import SignInPage from './sign-in';
import SignUpPage from './sign-up';

export default function App({ Component, pageProps }: AppProps) {
  if (Component === SignInPage || Component === SignUpPage) {
    // 如果当前页面是登录页面，不使用布局
    return <Component {...pageProps} />;
  }

  return (
    <PagesLayout>
      <Component {...pageProps} />
    </PagesLayout>
  );
}

