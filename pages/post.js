import fetch from 'isomorphic-unfetch';
import Layout from '../components/MyLayout.js';

const Post = props => (
  <Layout>
    <h1>
      {props.show.name}
    </h1>
    <p>
      {props.show.summary.replace(/<[/]?p>/g, '')}
    </p>
    <img src={props.show.image.medium} alt="show" />
  </Layout>
);

Post.getInitialProps = async (context) => {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log(`Fetched show: ${show.name}`);

  return { show };
};

export default Post;
