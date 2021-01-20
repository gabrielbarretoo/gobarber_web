import React from 'react';
import { useTransition } from 'react-spring';

import { ToastMessage, useToast } from '../../hooks/toast'
import { Container } from './styles'

import Toast from './Toast'

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {

  const messagesWithTransition = useTransition(
    messages,
    message => message.id,
    {
      from: { right: '-120%', opacity: 0},
      enter: { right: '0%', opacity: 1},
      leave: { right: '-120%', opacity: 0},
    }
    );

  const { removeToast } = useToast();

  return (
    <Container>
      {messagesWithTransition.map( ({item, key, props}) => (
        <Toast
          key={key}
          style={props}
          message={item} >
        </Toast>
      ))}
    </Container>
    )

  };

export default ToastContainer;
