import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import {
  Container,
  EventImage,
  EventSpeakers,
  EventTitle,
  TagContainer,
  AbertoContainer,
  BoxHead,
  BoxFooter,
  CloseButton,
  ContainerVacancies,
  Vacancies,
  ContainerButtons,
  ContainerMainModal,
  ContainerLogoTag,
  ModalContentWrapper,
  ResponsiveTagWrapper,
} from "./styles";

import { HighlightsProps } from "../../types";
import LabeledValue from "../../../../commons/toolkit/LabeledValue";
import ExpirienceTag from "../../../../commons/toolkit/tags/ExperienceTag";
import RedirectButton from "../../../../commons/toolkit/RedirectButton";

export default function CardProjeto({
  title,
  image,
  companyName,
  vacancies,
  link,
  description,
  typeEvent,
}: HighlightsProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const setingIsOpen = () => setIsOpen(!isOpen);
  const portalElement = document.getElementById("portal-root");

  const modalContent = (
    <AbertoContainer>
      <ModalContentWrapper>
        <CloseButton onClick={setingIsOpen} />
        <TagContainer isOpen>
          <ExpirienceTag label={typeEvent} />
          <EventImage
            src={image}
            alt={"logo da empresa:" + companyName}
            draggable={false}
          />
        </TagContainer>
        <ContainerLogoTag>
          <EventSpeakers isOpen={isOpen}>{companyName}</EventSpeakers>
        </ContainerLogoTag>
        <div>
          <EventTitle isOpen={isOpen}>{title}</EventTitle>
          <ContainerMainModal>
            {description.split("\n").map((line, i) => (
              <p key={i}>{line.trim()}</p>
            ))}
          </ContainerMainModal>
        </div>
        <ContainerVacancies>
          <LabeledValue label="Vagas" value={vacancies} />
          <ContainerButtons>
            <RedirectButton children="Acesse" link={link} />
          </ContainerButtons>
        </ContainerVacancies>
      </ModalContentWrapper>
    </AbertoContainer>
  );

  return (
    <>
      {!isOpen && (
        <Container isOpen key={title} onClick={setingIsOpen}>
          <BoxHead>
            <EventSpeakers isOpen={isOpen}>{companyName}</EventSpeakers>
            <EventTitle isOpen={isOpen}>{title}</EventTitle>
          </BoxHead>
          <BoxFooter>
            <ResponsiveTagWrapper>
              <Vacancies>Vagas: {vacancies}</Vacancies>
              <ExpirienceTag label={typeEvent} />
            </ResponsiveTagWrapper>
          </BoxFooter>
        </Container>
      )}
      {isOpen &&
        portalElement &&
        ReactDOM.createPortal(modalContent, portalElement)}
    </>
  );
}
