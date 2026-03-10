import { Key, useEffect, useState, useRef } from "react";
import faqContent from "../../../../assets/content/faq";
import {
  ChatWrapper,
  ToggleButton,
  ChatBox,
  ChatContainer,
  MessageLeft,
  MessageRight,
  QuestionButtons,
  TypingIndicator,
} from "./styles";
import { FaCommentDots } from "react-icons/fa";
import GraceAvatar from "../../../../assets/icons/chat/grace.png";
import { IoCloseOutline } from "react-icons/io5";

const welcomeMessage = {
  from: "grace" as const,
  text: "Oi! Eu sou a Grace, a assistente virtual da Semana da Computação do IFSP São Carlos. Estou aqui para te ajudar com as dúvidas mais frequentes. Pode perguntar!",
};

export default function FAQChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [chat, setChat] = useState<{ from: "user" | "grace"; text: string }[]>(
    []
  );
  const [typing, setTyping] = useState(false);
  const [showFaqButtons, setShowFaqButtons] = useState(false);
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const chatRef = useRef<HTMLDivElement | null>(null);

  const toggleChat = () => {
    setIsOpen((prev) => !prev);
  };


  const handleClick = (item: { question: string; answer: string }) => {
    setChat((prev) => [...prev, { from: "user", text: item.question }]);
    setTyping(true);
    setShowFaqButtons(false);

    setTimeout(() => {
      setTyping(false);
      setChat((prev) => [...prev, { from: "grace", text: item.answer }]);
      setShowFaqButtons(true);
    }, 3000);
  };

  useEffect(() => {
    if (isOpen && chat.length === 0) {
      setChat([welcomeMessage]);
      setShowFaqButtons(true);
    }
  }, [isOpen, chat.length]);

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chat]);

  return (
    <ChatWrapper>
      <ToggleButton onClick={toggleChat}
      aria-label={isOpen ? "Fechar chat de suporte" : "Abrir chat de suporte"}>
        {isOpen ? (
          <IoCloseOutline size="1.25rem" />
        ) : (
          <FaCommentDots size={20} />
        )}
      </ToggleButton>

      {isOpen && (
        <ChatBox ref={chatRef}>
          <ChatContainer>
            {chat.map((msg, index) => {
              const isLast = index === chat.length - 1;
              return msg.from === "grace" ? (
                <MessageLeft key={index}>
                  <img src={GraceAvatar} alt="Assistente Virtual Grace" draggable={false} />
                  <span ref={isLast ? buttonRef : null}>{msg.text}</span>
                </MessageLeft>
              ) : (
                <MessageRight key={index} ref={isLast ? buttonRef : null}>
                  {msg.text}
                </MessageRight>
              );
            })}
            {typing && (
              <TypingIndicator>Grace está digitando...</TypingIndicator>
            )}
            {showFaqButtons && (
              <QuestionButtons>
                {faqContent.map(
                  (
                    item: { question: string; answer?: string },
                    index: Key | null | undefined
                  ) => (
                    <button
                      key={index}
                      onClick={() =>
                        item.answer !== undefined &&
                        handleClick(
                          item as { question: string; answer: string }
                        )
                      }
                    >
                      {item.question}
                    </button>
                  )
                )}
              </QuestionButtons>
            )}
            <div ref={buttonRef} />
          </ChatContainer>
        </ChatBox>
      )}
    </ChatWrapper>
  );
}
