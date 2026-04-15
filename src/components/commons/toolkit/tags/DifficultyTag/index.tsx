import { DifficultyEventProps } from "../types.ts";

import { Container } from "./styles.ts";

export default function DifficultyTag({ label }: DifficultyEventProps) {
  const getAvailabilityProperties = () => {
    const options = {
      Free: {
        backgroundColor: "#DCF7E4",
        textColor: "#146907",
        translateText: "Livre",
      },
      Basic: {
        backgroundColor: "#E3F0FF",
        textColor: "#2A61C6",
        translateText: "Básico",
      },
      Intermediary: {
        backgroundColor: "#FCF2D6",
        textColor: "#856204",
        translateText: "Intermediário",
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
