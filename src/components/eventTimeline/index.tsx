import { StyledContainer } from "./style";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { imgs } from "../../assets/images";
import { Text, FontSize, FontWeight } from "../../helpers/text";
import MyImage from "../../helpers/image";

function EventTimeline() {
  const venues = [
    {
      date: "Sunday, 19 June 2022",
      time: "12:00pm",
      function: "Ring Ceremony",
      logo: imgs.pagodaMap,
      name: "Pagoda Hotel",
      address: "14 Gol Bazar, Near Railway Station",
      url: "https://goo.gl/maps/X24ZuDZQfYUUJBJBA",
      color: "rgba(124, 30, 37, 0.9)",
      shadowColor: "rgba(124, 30, 37, 0.2)",
    },
    {
      date: "Wednesday, 22 June 2022",
      time: "10:15am",
      function: "Haldi",
      logo: imgs.vishwasMap,
      name: "Hotel Vishvas Residency",
      address: "Hanumangarh Road, Ramdev Colony",
      url: "https://goo.gl/maps/Hgia8fbPSVWUencC8",
      color: "rgba(219, 151, 31, 1)",
      shadowColor: "rgba(219, 151, 31, 0.2)",
    },
    {
      date: "Wednesday, 22 June 2022",
      time: "03:00pm",
      function: "Mehendi",
      logo: imgs.vishwasMap,
      name: "Hotel Vishvas Residency",
      address: "Hanumangarh Road, Ramdev Colony",
      url: "https://goo.gl/maps/Hgia8fbPSVWUencC8",
      color: "rgba(0, 100, 73, 0.9)",
      shadowColor: "rgba(0, 100, 73, 0.2)",
    },
    {
      date: "Wednesday, 22 June 2022",
      time: "08:00pm",
      function: "Ladies Sangeet",
      logo: imgs.vishwasMap,
      name: "Hotel Vishvas Residency",
      address: "Hanumangarh Road, Ramdev Colony",
      url: "https://goo.gl/maps/Hgia8fbPSVWUencC8",
      color: "rgba(19, 89, 144, 0.9)",
      shadowColor: "rgba(19, 89, 144, 0.2)",
    },  
    {
      date: "Thursday, 23 June 2022",
      time: "08:15pm",
      function: "Wedding",
      logo: imgs.rajwadaMap,
      name: "Fort Rajwada",
      address: "National Highway 62, 0.3 KM from Home Land City",
      url: "https://goo.gl/maps/JCgRMVg9aYmsdUkg9",
      color: "rgba(142, 100, 24, 0.9)",
      shadowColor: "rgba(142, 100, 24, 0.2)",
    },
  ];

  const handleClick = (url: string) => {
    window.open(url);
  };

  return (
    <StyledContainer>
      <MyImage
        src={imgs.weddingEvents}
        alt="Event Timeline"
        className="headerImg"
      />

      <div className="divider" />
      <VerticalTimeline lineColor="#e3dcdc">
        {venues.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
              border: `2px solid ${item.color}`,
              boxShadow: `inset 0em 0em .3em .3em ${item.shadowColor}`,
              borderRadius: "1rem",
            }}
            contentArrowStyle={{ display: "none" }}
            className="vertical-timeline-element--work"
            iconStyle={{
              background: item.color,
              color: "#000",
            }}
          >
            <div key={index} className="details">
              <Text
                size={FontSize.Large}
                weight={FontWeight.Medium}
                styles={{
                  fontFamily: "Caveat, cursive",
                  textAlign: "center",
                  marginTop: "0.5rem",
                }}
                color={item.color}
              >
                {item?.function}
              </Text>

              <Text
                size={FontSize.ExtraRegular}
                weight={FontWeight.Medium}
                styles={{
                  fontFamily: "Cursive",
                  textAlign: "center",
                  margin: "1rem 0",
                }}
              >
                {item?.date} at {item.time}
              </Text>

              <div
                className="dateTime"
                onClick={() => handleClick(item.url)}
                style={{ backgroundColor: item.color }}
              >
                <Text
                  size={FontSize.Regular}
                  weight={FontWeight.Bold}
                  color="white"
                >
                  {item?.name}
                </Text>
                <Text
                  size={FontSize.Small}
                  styles={{
                    marginTop: "0.5rem",
                    fontFamily: "Times new Roman",
                  }}
                  color="white"
                >
                  {item?.address}
                </Text>
              </div>

              <MyImage
                src={item?.logo}
                loading="lazy"
                alt={item?.name}
                className="mapImg"
                onClick={() => handleClick(item.url)}
              />
              <Text
                size={FontSize.Mini}
                weight={FontWeight.Medium}
                color="grey"
              >
                Click on map to get directions
              </Text>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </StyledContainer>
  );
}

export default EventTimeline;
