import Head from 'next/head';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { PostMain, PostContent, PostContainer } from '../components/Post';
import ShortcutHome from '../components/ShortcutHome';
import { Wrapper } from '../components/Wrapper';
import { styled } from '../stitches.config';

import styles from "../styles/home.module.css";

export async function getStaticProps() {
  return {
    props: {
      title: 'Primata LAB',
      name: 'Primata',
      description: '',
      image: '/static/images/home-bw.jpg',
      primaryColor: 'cyan',
      secondaryColor: 'green',
    },
  };
}

export default function Index(props) {
  const { title, name, description, image, primaryColor, secondaryColor } =
    props;

  return (
    <Wrapper>
      <Head>
        <title>{name}</title>
        <meta content={name} property="og:title" />
        <meta content={description} name="description" />
        <meta content={description} property="og:description" />
        <meta content="https://primata.tec.br" property="og:url" />
        <meta
          content={`https://ialexanderbrito.dev${image}`}
          property="og:image"
        />
      </Head>

      <Navbar />
      <Home>
        <PostContent>
          <PostContainer>
            <div>
              <GradientTitle
                css={{
                  backgroundColor: `#FFF`,
                }}
                
              >
                <h1 className={styles.typewriter}>{title}</h1>
              </GradientTitle>
              <p>
                <strong style={{fontSize: 22}}>O que fazemos?</strong><br />
                Criamos desafios em diversos clientes com <br/>
                uma cultura ligada a resultados sólidos e <br/> foco em inovação.
              </p>
              <ShortcutHome />
            </div>
          </PostContainer>
        </PostContent>
      </Home>
    </Wrapper>
  );
}

const Home = styled(PostMain, {
  alignItems: 'center',
  display: 'flex',
  margin: '0 auto',
  '@bp2': { width: 800 },
});

const GradientTitle = styled('h1', {
  backgroundSize: '100%',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  MozBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  MozTextFillColor: 'transparent',
  WebkitBoxDecorationBreak: 'clone',
});
