// import 'puresoulcss/dist/css/puresoulcss.css';
import 'boxicons/css/boxicons.css';
import Header from '../components/Header/Header'
import '../styles/dist/style.scss'
import '../styles/styles.scss';
import Footer from '@/components/Footer/Footer';
// import '../styles/style.css';


export default function App({ Component, pageProps }) {
  return (
    <>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}

