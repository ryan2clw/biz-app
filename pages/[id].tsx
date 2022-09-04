import { API_HOST } from '../services/constants';
import Page from '../components/Page';

export async function getServerSideProps(context: any) {
  const { id } = context.query;
  const res = await fetch(`${API_HOST}/api/page-data?url=${id}`);
  console.log(`fetch API_HOST: ${API_HOST}`);
  const pageData = await res.json();

  return {
    props: {
      ...pageData
    }
  }
}

const DynamicPage = (props: any) => {

  return (
    <Page {...props}/>
  )
}

export default DynamicPage
