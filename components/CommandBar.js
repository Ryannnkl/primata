import * as React from 'react';

import {
  KBarAnimator,
  KBarProvider,
  KBarPortal,
  useDeepMatches,
  KBarPositioner,
  KBarSearch,
  KBarResults,
} from 'kbar';
import { useRouter } from 'next/router';

import { styled } from '../stitches.config';
import { Box } from './Box';

export default function CommandBar(props) {
  const router = useRouter();

  const actions = [
    {
      id: 'copy',
      name: 'Copiar URL',
      shortcut: ['u'],
      keywords: 'copy-url',
      section: 'Geral',
      perform: () => navigator.clipboard.writeText(window.location.href),
      icon: <Icon className="ri-file-copy-line" />,
    },
    {
      id: 'email',
      name: 'Enviar Email',
      shortcut: ['e'],
      keywords: 'send-email',
      section: 'Geral',
      perform: () => window.open('mailto:contato@primata.tec.br', '_blank'),
      icon: <Icon className="ri-mail-line" />,
    },
    {
      id: 'home',
      name: 'Home',
      shortcut: ['g', 'h'],
      keywords: 'go-home',
      section: 'Ir para',
      perform: () => router.push('/'),
      icon: <Icon className="ri-home-5-line" />,
    },
    {
      id: 'projects',
      name: 'Projetos',
      shortcut: ['g', 'p'],
      keywords: 'go-projects',
      section: 'Ir para',
      perform: () => router.push('/projetos'),
      icon: <Icon className="ri-lightbulb-line" />,
    },
    {
      id: 'uses',
      name: 'Setup',
      shortcut: ['g', 's'],
      keywords: 'go-uses',
      section: 'Ir para',
      perform: () => router.push('/setup'),
      icon: <Icon className="ri-computer-line" />,
    },
  ];

  return (
    <KBarProvider actions={actions}>
      <KBarPortal>
        <Positioner>
          <Animator>
            <Search placeholder="Digite um comando ou pesquise…" />
            <RenderResults />
          </Animator>
        </Positioner>
      </KBarPortal>

      {props.children}
    </KBarProvider>
  );
}

function RenderResults() {
  const { results } = useDeepMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === 'string' ? (
          <GroupName>{item}</GroupName>
        ) : (
          <ResultItem action={item} active={active} />
        )
      }
    />
  );
}

const ResultItem = React.forwardRef(({ action, active }, ref) => (
  <Box ref={ref} css={getResultStyle(active)}>
    <Action>
      {action.icon && action.icon}
      <ActionRow>
        <span>{action.name}</span>
      </ActionRow>
    </Action>
    {action.shortcut?.length ? (
      <Shortcut aria-hidden>
        {action.shortcut.map((shortcut) => (
          <Kbd key={shortcut}>{shortcut}</Kbd>
        ))}
      </Shortcut>
    ) : null}
  </Box>
));

ResultItem.displayName = 'ResultItem';

const Positioner = styled(KBarPositioner, {
  position: 'fixed',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  width: '100%',
  inset: '0px',
  padding: '14vh 16px 16px',
  background: 'rgba(0, 0, 0, .8)',
  boxSizing: 'border-box',
});

const Search = styled(KBarSearch, {
  padding: '12px 16px',
  fontSize: '16px',
  width: '100%',
  boxSizing: 'border-box',
  outline: 'none',
  border: 'none',
  margin: 0,
  background: '$command',
  color: '$primary',
});

const GroupName = styled('div', {
  padding: '8px 16px',
  fontSize: '10px',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  background: '$command',
});

const Icon = styled('i', {
  fontSize: '20px',
  position: 'relative',
  top: '-2px',
});

const Kbd = styled('kbd', {
  background: 'rgba(255, 255, 255, .1)',
  color: '$secondary',
  padding: '4px 8px',
  textTransform: 'uppercase',
});

const Shortcut = styled('div', {
  display: 'grid',
  gridAutoFlow: 'column',
  gap: '4px',
});

const Action = styled('div', {
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
});

const ActionRow = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

const Animator = styled(KBarAnimator, {
  backgroundColor: '#1a1c1e',
  maxWidth: '600px',
  width: '100%',
  color: '$primary',
  borderRadius: '8px',
  overflow: 'hidden',
  '@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none))': {
    backgroundColor: '$command',
    WebkitBackdropFilter: 'saturate(300%) blur(25px)',
    backdropFilter: 'saturate(300%) blur(25px)',
  },
});

const getResultStyle = (active) => ({
  padding: '12px 16px',
  background: active ? 'rgba(255, 255, 255, 0.1)' : '$command',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: 0,
  cursor: 'pointer',
  color: active ? '$primary' : '$secondary',
});
