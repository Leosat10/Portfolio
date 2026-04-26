import Titlebar from '../components/Titlebar';
import Sidebar from '../components/Sidebar';
import Explorer from '../components/Explorer';
import Bottombar from '../components/Bottombar';
import Tabsbar from './Tabsbar';
import styles from '../styles/Layout.module.css';
import Head from 'next/head';
import FindMeEffect from "./FindMeEffect";
import ChatBot from "./ChatBot";


const Layout = ({ children, title = 'Home' }) => {
  return (
    <>
      <Head>
        <title>Santhosh | {title}</title>
      </Head>

      <Titlebar />
      <div className={styles.main}>
        <Sidebar />
        <Explorer />
        <div style={{ width: '100%' }}>
          <Tabsbar />
          <main className={styles.content}>{children}</main>
        </div>
      </div>
      <Bottombar />
      <ChatBot />
      <FindMeEffect/>
    </>
  );
};

export default Layout;
