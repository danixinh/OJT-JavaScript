import Head from 'next/head'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Contents from '../components/contents'

export default function Home({contents}) {
  return (
    <div className=''>
      <Head></Head>
      {/* 헤더 */}
      <Header />

      {/* 메뉴 */}
      <Nav />

      {/* 컨텐츠 */}
      <Contents contents={contents}/>
      {/* 컨텐츠2222*/}
      {/* 컨텐츠3333*/}

      </div>
  )
}
export async function getServerSideProps(context) {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  const menu = context.query.menu;

  const BASE_URL = 'https://api.themoviedb.org';
  const API_KEY = process.env.API_KEY;

  const res = await fetch(`${BASE_URL}/3/discover/movie?api_key=${API_KEY}&language=kr&with_genres=${menu}`);
  const data = await res.json()
  return {
      props: {
          contents: data.results
      },
  }
}