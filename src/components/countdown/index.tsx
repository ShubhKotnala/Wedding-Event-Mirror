import React, { Component } from "react";
import {
  TimerContainer,
  StyledTimerContainer,
  Container,
  SecondContainer,
} from "./style";
import { Text, FontSize, FontWeight } from "../../helpers/text";
import { imgs } from "../../assets/images";
import MyImage from "../../helpers/image";

class CountDown extends Component<any, any> {
  state = {
    days: 0,
    hours: "00",
    minutes: "00",
    seconds: "00",
    timeUp: false,
  };

  componentDidMount() {
    setInterval(() => {
      let difference =
        new Date(this.props.date).getTime() - new Date().getTime();
      if (difference < 1) {
        this.setState({ timeUp: true });
      } else {
        let days = Math.floor(difference / (1000 * 60 * 60 * 24));
        let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        let minutes = Math.floor((difference / (1000 * 60)) % 60);
        let seconds = Math.floor((difference / 1000) % 60);
        this.setState({
          hours: hours > 9 ? hours : `0${hours}`,
          minutes: minutes > 9 ? minutes : `0${minutes}`,
          seconds: seconds > 9 ? seconds : `0${seconds}`,
          days,
        });
      }
    }, 1000);
  }

  showTimerBox(label: string, value: any) {
    return (
      <StyledTimerContainer>
        <Text
          size={FontSize.Large}
          color="#CD5454"
          weight={FontWeight.Medium}
          styles={{ paddingTop: "4rem" }}
        >
          {value}
        </Text>
        <Text size={FontSize.ExtraSmall} color="rgba(205, 84, 84, 0.9)">
          {label.toUpperCase()}
        </Text>
      </StyledTimerContainer>
    );
  }

  render() {
    const { days, hours, minutes, seconds, timeUp } = this.state;
    const dayString = days > 1 ? "days" : "day";
    return (
      <>
        <Container>
          <MyImage
            src={imgs.saveTheDate}
            alt="Countdown"
            className="headerImg"
            loading="lazy"
          />
          <SecondContainer>
            <Text
              size={FontSize.ExtraRegular}
              weight={FontWeight.Bold}
              styles={{
                fontFamily: "Marck Script",
                margin: "0.5rem",
                textAlign: "center",
              }}
              color="#668679"
            >
              {timeUp
                ? "So it begins... Bless our holy union with your presence!"
                : " We are excited to celebrate our special day with you!"}
            </Text>
          </SecondContainer>
          <TimerContainer>
            {this.showTimerBox(dayString, days)}
            {this.showTimerBox("hours", hours)}
            {this.showTimerBox("minutes", minutes)}
            {this.showTimerBox("seconds", seconds)}
          </TimerContainer>
        </Container>
      </>
    );
  }
}
export default CountDown;
