import { Formik } from 'formik';
import { useState, useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import { chatMessageSchema } from '../../schemas/chatValidationSchema';
import { Container } from 'components/Container/Container.styled';
import { ErrorToastIcon } from 'components/ToastIcon/ToastIcon.styled';
import { useAuth } from 'hooks';
import {
  FlexBox,
  ChatWrapper,
  Heading,
  Form,
  Input,
  Label,
  Error,
  IconButton,
  MessageList,
  HeaderWrapper,
  StyledPawIcon,
  Messagewrapper,
  MessagewrapperSender,
  TextWrapper,
  Text,
  AuthorTitle,
  DateWrapper,
  AuthorTitleSender,
  DateWrapperSender
} from './Chat.styled';
import { ReactComponent as SendIcon } from '../../images/send.svg';

export const Chat = ({ socket }) => {
  const { user } = useAuth();

  const [messageList, setMessageList] = useState([]);
  const lastMessageRef = useRef(null);
  const initialValues = {
    message: '',
  };

  useEffect(() => {
    socket.on('allMessages', allMessages => {
      setMessageList(allMessages);
    });
  }, [messageList, socket]);

  useEffect(() => {
    socket.on('showMessage', data => {
      setMessageList([...messageList, data]);
    });
  }, [messageList, socket]);

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messageList]);

  const handleSendMessage = (values, { resetForm }) => {
    if (!values.message.trim()) {
      toast.error('Message can not be empty', { icon: <ErrorToastIcon /> });
      return;
    }
    const newMessage = {
      author: { _id: user._id, name: user.name },
      text: values.message,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    };
    socket.emit('newMessage', newMessage);
    setMessageList([...messageList, newMessage]);
    resetForm();
  };

  const handleTyping = () =>
    socket.emit('typing', `${user.name || 'New User'} is typing...`);

  return (
    <Container>
      <FlexBox>
        <ChatWrapper>
          <HeaderWrapper>
            <Heading>
              <StyledPawIcon /> Chat Online
            </Heading>
          </HeaderWrapper>
          <MessageList>
            {messageList.map((item, idx) =>
              item.author._id === user._id ? (
                <MessagewrapperSender key={idx}>
                  <AuthorTitleSender>{item.author.name || 'New User'}</AuthorTitleSender>
                  <TextWrapper>
                    <Text>{item.text}</Text>
                  </TextWrapper>
                  <DateWrapperSender>
                    {item.date} | {item.time}
                  </DateWrapperSender>
                </MessagewrapperSender>
              ) : (
                <Messagewrapper key={idx}>
                  <AuthorTitle>{item.author.name || 'New User'}</AuthorTitle>
                  <TextWrapper>
                    <Text>{item.text}</Text>
                  </TextWrapper>
                  <DateWrapper>
                    {item.date} | {item.time}
                  </DateWrapper>
                </Messagewrapper>
              )
            )}
            <div ref={lastMessageRef} />
          </MessageList>

          <Formik
            initialValues={initialValues}
            validationSchema={chatMessageSchema}
            onSubmit={handleSendMessage}
          >
            <Form>
              <Label>
                <Input
                  autoComplete="on"
                  type="text"
                  name="message"
                  placeholder="Type your message..."
                  onKeyDown={handleTyping}
                ></Input>
                <Error name="message" component="p"></Error>
                <IconButton type="submit">
                  <SendIcon />
                </IconButton>
              </Label>
            </Form>
          </Formik>
        </ChatWrapper>
      </FlexBox>
    </Container>
  );
};
