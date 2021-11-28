import React, { useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';
import { Transition, TransitionStatus } from 'react-transition-group';

import { Background, Container, transitionDuration } from './style';

export interface ModalBasicProps {
  isOpen: boolean;
  handleClose: () => void;
  containerRef?: React.RefObject<any>;
}

export interface ModalBaseProps extends ModalBasicProps {}

let globalZIndex = 2000;

const root = document ? document.getElementById('modal-root') : null;

const ModalBaseContent: React.FC<
  ModalBaseProps & {
    transitionStatus: TransitionStatus;
  }
> = ({ transitionStatus, isOpen, containerRef, handleClose, children }) => {
  // モーダル多重表示のため z-indexを加算・減算
  const baseZIndex = useMemo(() => {
    return globalZIndex;
  }, []);
  useEffect(() => {
    globalZIndex += isOpen ? 3 : -3;
  }, [isOpen]);

  return (
    <Background
      transitionStatus={transitionStatus}
      baseZIndex={baseZIndex}
      onClick={handleClose}
    >
      <Container
        transitionStatus={transitionStatus}
        baseZIndex={baseZIndex}
        ref={containerRef}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </Container>
    </Background>
  );
};

const BaseModal: React.FC<ModalBaseProps> = (props) => {
  const { isOpen } = props;

  if (root === null) {
    return <></>;
  }

  return ReactDOM.createPortal(
    <Transition
      in={isOpen}
      timeout={transitionDuration}
      mountOnEnter
      unmountOnExit
    >
      {(status) => <ModalBaseContent transitionStatus={status} {...props} />}
    </Transition>,
    root,
  );
};

export default BaseModal;
