import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { PostMain, PostContent, PostContainer } from '../components/Post';
import { Wrapper } from '../components/Wrapper';
import { styled } from '../stitches.config';

export default function Base({ children }) {
  const { title, tagline, primaryColor, secondaryColor } = children.props;

  return (
    <Wrapper>
      <Navbar />
      <PostMain
        css={{
          '& ::selection': {
            background: `$${primaryColor}`,
            color: '#000',
            WebkitTextFillColor: '#000',
          },
        }}
      >
        <PostContent>
          <PostContainer>
            <GradientTitle
              css={{
                backgroundColor: `white`,
              }}
            >
              {tagline ? tagline : title}
            </GradientTitle>
            {children}
          </PostContainer>
        </PostContent>
      </PostMain>
    </Wrapper>
  );
}

const GradientTitle = styled('h1', {
  backgroundSize: '100%',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  MozBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  MozTextFillColor: 'transparent',
  WebkitBoxDecorationBreak: 'clone',
});
