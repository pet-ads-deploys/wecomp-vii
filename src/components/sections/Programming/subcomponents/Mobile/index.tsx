import { useState, useEffect } from "react";
import useToggleCardContent from "../../../../../hooks/toggle/useToggleCardContent";
import RedirectButton from "../../../../commons/toolkit/RedirectButton";
import AvailabilityTag from "../../../../commons/toolkit/tags/AvailabilityTag";
import DifficultyTag from "../../../../commons/toolkit/tags/DifficultyTag";

import {
  Container,
  ContainerVacancies,
  TagGroup,
  VagasWrapper,
  EventImage,
  ContainerMain,
  EventDetails,
  EventTitle,
  TagContainer,
  Icon,
  IconContainer,
  ContainerHead,
  ContainerTitle,
  ContainerFooter,
  ContainerButtons,
  EventDescriptionButton,
} from "./styles";

import { generatedIconEvent } from "../../../../../utils/generatedIconEvent";
import { ProgrammingProps } from "../../types";
import LabeledValue from "../../../../commons/toolkit/LabeledValue";

interface Props extends ProgrammingProps {
  pagination?: {
    current: number;
    total: number;
    onNext: () => void;
    onPrev: () => void;
  };
}

export default function CardProjeto({
  classification,
  description,
  bio,
  name,
  author,
  image,
  imageDescription,
  vacancies,
  status,
  typeEvent,
  location,
  link
}: Props) {
  const eventIconProps = generatedIconEvent(typeEvent);

  const { labelButton, cardText, handleChangeCardText } = useToggleCardContent(
    description,
    bio,
    "Ver biografia"
  );

  const eventsDisablingActionButton = ["TechnicalVisit", "Opening"];

  const cutoffDate = new Date("2026-09-14T00:00:00-03:00");
  const [isAfterCutoff, setIsAfterCutoff] = useState(new Date() >= cutoffDate);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      if (now >= cutoffDate) {
        setIsAfterCutoff(true);
        clearInterval(interval);
      }
    }, 1000 * 30);

    return () => clearInterval(interval);
  });

  const isShowSubscriveButton = isAfterCutoff && link && status != "Closed";

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      <Container>
        <ContainerHead>
          <ContainerTitle>
            <IconContainer>
              <Icon
                src={eventIconProps.iconPath}
                alt={`Icone evento ${eventIconProps.label}`}
              />
            </IconContainer>
            <EventTitle isOpen={false}>{name}</EventTitle>
          </ContainerTitle>

          <EventDetails isOpen={false}>
            {[location, author].filter(Boolean).join(" | ")}
          </EventDetails>
        </ContainerHead>

        <ContainerVacancies>
          <EventImage 
            src={image} 
            alt={imageDescription} 
            draggable={false}
          />
          <TagContainer isOpen={false}>
            <TagGroup>
              <AvailabilityTag label={status} />
              <DifficultyTag label={classification} />
            </TagGroup>
            <VagasWrapper>
              <LabeledValue label="Vagas" value={vacancies} />
            </VagasWrapper>
          </TagContainer>
        </ContainerVacancies>

        <ContainerMain>
          {cardText}
        </ContainerMain>

        <ContainerFooter>
          <ContainerButtons>
            {bio?.trim() && !eventsDisablingActionButton.includes(typeEvent) && (
              <EventDescriptionButton onClick={handleChangeCardText}>
                {labelButton}
              </EventDescriptionButton>
            )}
            
            {isShowSubscriveButton && (
              <RedirectButton link={link}>Inscrever-se</RedirectButton>
            )}
          </ContainerButtons>
        </ContainerFooter>
      </Container>
    </div>
  );
}