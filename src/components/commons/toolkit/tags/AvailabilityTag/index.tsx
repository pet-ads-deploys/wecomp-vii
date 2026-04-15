import { AvailabilityProps } from "../types.ts";

import { Container } from "./styles.ts";

export default function AvailabilityTag({ label }: AvailabilityProps) {
  const getAvailabilityProperties = () => {
    const options = {
      Available: {
        backgroundColor: "#DCF7E4",
        textColor: "#146907",
        translateText: "Disponível",
      },
      LastVacancies: {
        backgroundColor: "#FCF2D6",
        textColor: "#856204",
        translateText: "Últimas vagas",
      },
      Closed: {
        backgroundColor: "#F2E6E6",
        textColor: "#AA3E38",
        translateText: "Esgotado",
      },
    };
    return options[label];
  };

  const tagProps = getAvailabilityProperties();

  return (
    <Container
      backgroundColor={tagProps.backgroundColor}
      textColor={tagProps.textColor}
    >
      {tagProps.translateText}
    </Container>
  );
}
