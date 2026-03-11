import { useState, useEffect } from "react";

// Components
import { Section } from "../../commons/structure/Section";
//import Slider from "../../commons/toolkit/Slider";
import Card from "./subcomponents/Card";
import CardProjeto from "./subcomponents/Modal";
import SoonCard from "../../commons/toolkit/SoonCard";

// Hooks
import useIsMobile from "../../../hooks/window/Mobile";
import useIsMobileHeight from "../../../hooks/window/MobileHeight";

// Data
import programmingContent from "../../../assets/content/programming";

// Styles
import { 
  Container, 
  DaysTabs, 
  TimeTabs, 
  ContentWrapper, 
  TabButton, 
  TimeButton,
  EventsList
} from "./styles";

// Utils
//import groupProgramming from "../../../utils/groupProgramming";

// Constants
const soonOrNot = false;

export default function Programming() {

  const isMobile = useIsMobile();
  const isMobileHeight = useIsMobileHeight();
  const shouldUseMobileLayout = isMobile || isMobileHeight;

  //const sortedData = groupProgramming(programmingContent);

  const days = Array.from(new Set(programmingContent.map(event => event.date.trim()))).sort();

  const [selectedDay, setSelectedDay] = useState(days[0] || "");
  const [selectedTime, setSelectedTime] = useState("");

  const availableTimesOfDay = Array.from(
    new Set(
      programmingContent
        .filter(event => event.date.trim() === selectedDay.trim())
        .map(event => event.time.trim())
    )
  ).sort();

  useEffect(() => {
    if (availableTimesOfDay.length > 0) {

      if (!availableTimesOfDay.includes(selectedTime)) {
        setSelectedTime(availableTimesOfDay[0]);
      }
    }
  }, [selectedDay, availableTimesOfDay, selectedTime]);

  const filteredEvents = programmingContent.filter(
    (event) => event.date.trim() === selectedDay.trim() && event.time.trim() === selectedTime.trim()
  );

  return (
    <Section
      title="Programação"
      currentSectionId="Programming"
      nextSectionId="Highlights"
    >
      <Container>
        {soonOrNot ? (
          <SoonCard />
        ) : (
          <>
            <DaysTabs>
              {days.map((day) => (
                <TabButton 
                  key={day} 
                  $active={selectedDay === day}
                  onClick={() => setSelectedDay(day)}
                >
                  {day}
                </TabButton>
              ))}
            </DaysTabs>

            <ContentWrapper>
              <TimeTabs>
                {availableTimesOfDay.map((time) => (
                  <TimeButton 
                    key={time} 
                    $active={selectedTime === time} 
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </TimeButton>
                ))}
              </TimeTabs>

              <EventsList>
                {filteredEvents.map((event) => (
                  shouldUseMobileLayout ? (
                    <CardProjeto key={event.name} {...event} />
                  ) : (
                    <Card key={event.name} {...event} />
                  )
                ))}
              </EventsList>
            </ContentWrapper>

            {/* <div style={{ display: 'none' }}>
               <Slider
                items={sortedData}
                renderItem={(event) =>
                  shouldUseMobileLayout ? (
                    <CardProjeto key={event.name} {...event} />
                  ) : (
                    <Card key={event.name} {...event} />
                  )
                }
              />
            </div> */}
          </>
        )}
      </Container>
    </Section>
  );
}
