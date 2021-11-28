import parse, {
  attributesToProps,
  domToReact,
  Element,
  HTMLReactParserOptions,
  htmlToDOM,
  Text,
} from 'html-react-parser';
import Image from 'next/image';
import Script from 'next/script';

import {
  Anchor,
  Blockquote,
  IframeWrapper,
  ImageWrapper,
  MediaWrapper,
  Ul,
} from './style';

const parseOption: HTMLReactParserOptions = {
  replace: (domNode) => {
    const { name, attribs, children } = domNode as Element;
    const attrProps = attributesToProps(attribs);

    switch (name) {
      case 'h1':
        return <h2>{parseChildren(children)}</h2>;
      case 'h2':
        return <h3>{parseChildren(children)}</h3>;
      case 'a': {
        return (
          <Anchor href={attribs.href} target='_blank' rel='noreferrer'>
            {parseChildren(children)}
          </Anchor>
        );
      }
      case 'img':
        return (
          <ImageWrapper>
            <Image
              src={`${attribs.src}?w=800&dpr=1 1x, ${attribs.src}?w=800&dpr=2 2x`}
              alt={attribs.alt}
            />
          </ImageWrapper>
        );
      case 'iframe':
        return (
          <IframeWrapper>
            <iframe src={attribs.src} title={attribs.title} loading='lazy' />
          </IframeWrapper>
        );
      case 'ul':
        return <Ul>{parseChildren(children)}</Ul>;
      case 'blockquote': {
        return (
          <MediaWrapper>
            <Blockquote {...attrProps}>{parseChildren(children)}</Blockquote>
          </MediaWrapper>
        );
      }
      case 'script': {
        return (
          <Script
            id={attrProps.id}
            src={attrProps.src}
            strategy='lazyOnload'
            async={!!attrProps.async}
            defer={!!attrProps.defer}
          >
            {children.length > 0 && (children[0] as Text).data}
          </Script>
        );
      }
      default:
        return null;
    }
  },
};

const parseChildren = (children: Element['children']) => {
  return domToReact(children, parseOption);
};

export const htmlToThemed = (html: string): ReturnType<typeof parse> => {
  return parse(html, parseOption);
};

const parseDOMText = (dom: ReturnType<typeof htmlToDOM>): string => {
  return dom
    .reduce((acc, current) => {
      if (['script', 'iframe'].includes((current as Element).name)) {
        return acc;
      }

      let newText = '';
      if ((current as Element).children) {
        newText = parseDOMText(
          (current as Element).children as ReturnType<typeof htmlToDOM>,
        );
      } else if (current.type === 'text') {
        newText = (current as Text).data;
      }

      return newText === '' ? acc : [...acc, newText];
    }, [] as string[])
    .join(' ');
};

export const htmlToTextContent = (html: string): string => {
  return parseDOMText(htmlToDOM(html));
};
