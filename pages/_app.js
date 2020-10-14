// import App from 'next/app'
import { fetchEntries } from 'util/contentfulPosts'

function MyApp({ Component, posts }) {
  return <Component posts={posts} />
}
  
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // MyApp.getInitialProps = async (appContext) => {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }


  MyApp.getInitialProps = async ({ Component, ctx }) => {
    // const footerRes = await fetch('http://API_URL');
    // const footerData = await footerRes.json(); 
    // let pageProps = {};
    // if (Component.getInitialProps) {
    //   pageProps = await Component.getInitialProps(ctx);
    // }
    // return { pageProps, footerData };

    const res = await fetchEntries()
    let posts = await res
      .filter((post) => {
        return post.sys.contentType.sys.id === 'blogPost'
      })
      .map((post) => {
        return post.fields
      })
    
      // console.log(posts)

      if (Component.getInitialProps) {
        posts = await Component.getInitialProps(ctx);
      }
    return { posts }
  };

  
  
  export default MyApp

 