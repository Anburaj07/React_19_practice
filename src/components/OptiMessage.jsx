import { useState, useOptimistic } from "react";

const MessageForm = ({ addOptimisticMessage, sendMessage }) => {
  const formAction = async (formData) => {
    addOptimisticMessage(formData.get("message"));
    await sendMessage(formData);
  };
  return (
    <form action={formAction} className="flex items-center mb-5 mt-4">
      <input
        type="text"
        name="message"
        placeholder="Hello!"
        className="border border-gray-300 rounded py-1 px-2 mr-2 focus:outline-none focus:border-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-500 p-3 hover:bg-blue-600 text-white font-semibold py-1 rounded focus:outline-none focus:shadow-outline"
      >
        Send
      </button>
    </form>
  );
};

const Thread = ({ messages, sendMessage }) => {
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    // updateFn
    (state, newMessage) => [
      ...state,
      {
        text: newMessage,
        sending: true,
      },
    ]
  );
  return (
    <div>
      <MessageForm
        addOptimisticMessage={addOptimisticMessage}
        sendMessage={sendMessage}
      />
      {optimisticMessages?.map((message, index) => (
        <div key={index} className="flex items-center">
          <span>{message.text}</span>
          {message.sending && (
            <small className="ml-1 text-gray-500">(Sending...)</small>
          )}
        </div>
      ))}
    </div>
  );
};

const deliverMessage = async (message) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return message;
};

const MessageBox = () => {
  const [messages, setMessages] = useState([]);

  const sendMessage = async (formData) => {
    const sendMessage = await deliverMessage(formData.get("message"));
    setMessages((messages) => [...messages, { text: sendMessage }]);
  };
  return <Thread messages={messages} sendMessage={sendMessage} />;
};

export default MessageBox;
