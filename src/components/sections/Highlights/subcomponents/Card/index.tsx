import CardHeader from "../CardHeader";
import CardFooter from "../CardFooter";

import {
  Container,
  EventImage,
  ContainerHeader,
  ContainerIconTag,
} from "./styles";

import { HighlightsProps } from "../../types";
import { Title } from "../../../../commons/toolkit/Card/styles";
import { TagContainer } from "../CardHeader/styles";
import ExpirienceTag from "../../../../commons/toolkit/tags/ExperienceTag";
import { ContainerMainModal } from "../Modal/styles";

export default function Card({
  title,
  companyName,
  image,
  link,
  vacancies,
  description,
  typeEvent,
}: HighlightsProps) {
  return (
    <Container key={title}>
      <ContainerHeader>
        <ContainerIconTag>
          <TagContainer>
            <ExpirienceTag label={typeEvent} />
          </TagContainer>
        </ContainerIconTag>
        <EventImage 
          src={image} 
          alt={`Logo da empresa ${companyName}`} 
          draggable={false} 
        />
      </ContainerHeader>
      <Title>{title}</Title>
      <CardHeader companyName={companyName} />
      <ContainerMainModal>
        {description.split("\n").map((line, i) => (
          <p key={i}>{line.trim()}</p>
        ))}
      </ContainerMainModal>
      <CardFooter vacancies={vacancies} link={link} />
    </Container>
  );
}
