import 'stylehub/dist/css/stylehub.min.css';
import 'boxicons/css/boxicons.css';
import Header from '../components/Header/Header'
import '../styles/styles.scss';
import Footer from '@/components/Footer/Footer';
import { Provider } from 'react-redux';
import { store } from '@/redux/store/store';
// import '../styles/style.css';


export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
        <Footer />
     </Provider>
    </>
  );
}

