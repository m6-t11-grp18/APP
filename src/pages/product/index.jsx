import Headerr from '../../components/header';
import Footer from '../../components/footer';
import Mobile from './mobile';
import Desktop from './desktop';
import useWindowDimensions from './useWindowDimensions';

function ProductMobile() {
  const windowSize = useWindowDimensions();

  return (
    <>
      <Headerr />
      {windowSize.width <= 1080 ? <Mobile /> : <Desktop />}
      <Footer />
    </>
  );
}

export default ProductMobile;
