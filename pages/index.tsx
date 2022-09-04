import { API_HOST } from '../services/constants';
import Page from '../components/Page';

export async function getServerSideProps() {

  const res = await fetch(`${API_HOST}/api/page-data?url=%2Fhome`);
  const pageData = await res.json();

  return {
    props: {
      ...pageData
    }
  }
}

const Index = (props: any) => {

  return (
    <Page {...props}/>
  )
}

export default Index;