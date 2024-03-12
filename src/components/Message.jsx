import { use, useState, Suspense } from "react";

const fetchMessage = () => {
  return new Promise((resolve) => setTimeout(resolve, 1000,"❤️"));
};

const Message = () => {
  const [messagePromise, setMessagePromise] = useState(null);
  const [show, setShow] = useState(false);

  const download = () => {
    setMessagePromise(fetchMessage());
    setShow(true);
  };
  if (show) {
    return <MessageContainer messagePromise={messagePromise} />;
  } else {
    return <button onClick={download}>Download message</button>;
  }
};

const MessageContainer = ({ messagePromise }) => {
  return (
    <Suspense fallback={<h2>Downloading message...</h2>}>
      <MessageOutput messagePromise={messagePromise} />
    </Suspense>
  );
};

const MessageOutput = ({ messagePromise }) => {
  const messageContent = use(messagePromise);
  console.log('messageContent:', messageContent)
  return <p>Here is the message: {messageContent}</p>;
};


export default Message;
