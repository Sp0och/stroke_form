import React from "react";
import styled from "styled-components";
import { fonts, colors } from "../utils/theme";
import { useState } from "react";
import Slider from "./Slider";
import axios from "axios";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: ${colors.white};
  padding: 100px;
`;

const Header = styled.header`$
  position: relative;
  width: calc(100% - 200px);
  margin-bottom: 150px;
  border-bottom: 1.5px solid ${colors.turquoise};
  color: ${colors.turquoise};
  ${fonts.heading1}
`;

const Section = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-bottom: 70px;
  margin-left: 100px;
`;

const Question = styled.h4`
  color: ${colors.turquoise};
  margin-left: 50px;
  margin-bottom: 20px;
  ${fonts.heading2}
`;

const Text = styled.input`
  ${fonts.input}
  color: ${colors.darkGrey};
  height: 60px;
  width: 500px;
  box-shadow: 0px .5px .5px rgba(0, 0, 0, 0.25);
  margin-left: 100px;
  padding: 10px;
  padding-left: 25px;
  border-radius: 15px;
  border: 2px solid ${colors.grey};
  &:focus {
    outline: none;
    border-color: ${colors.black};
  }
  &::placeholder {
    color: ${colors.placeholderGrey};
  }
`;

const MC = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  margin-left: 100px;
  justify-content: space-between;
  width: 500px;
`;
const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  label {
    color: ${colors.turquoise};
    ${fonts.input};
    margin-bottom: 30px;
  }
  button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    outline: none;
    background: ${colors.white};
    border: 2px solid ${colors.turquoise};
    cursor: pointer;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    i {
      color: ${colors.white};
      font-size: 30px;
    }
  }
`;

const SubmitButton = styled.button`
  outline: none;
  border: none;
  width: 300px;
  height: 100px;
  border-radius: 15px;
  margin-left: 100px;
  ${fonts.submitButton}
  background: ${colors.turquoise};
  color: ${colors.white};
  &:hover {
    cursor: pointer;
    background: ${colors.turquoiseHover};
  }
`;

const Form = () => {
  const [email, setEmail] = useState("");
  const [food, setFood] = useState("");
  const [age, setAge] = useState(0);
  const [animals, setAnimals] = useState([
    { name: "Dogs", checked: false },
    { name: "Cats", checked: false },
    { name: "Birds", checked: false },
    { name: "Fish", checked: false },
    { name: "Reptiles", checked: false },
  ]);
  const [messi, setMessi] = useState(0);
  const [cage, setCage] = useState("");
  const [slider, setSlider] = useState(0);

  async function submit(e) {
    e.preventDefault();
    const webHookURL = "https://hooks.slack.com/services/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";
    const data = {
      text: `Data Submission:
      \nEmail: ${email}
      \nFood: ${food}
      \nAge: ${age}
      \nAnimals: ${animals.filter((animal) => animal.checked).map((animal) => animal.name)}
      \nMessi: ${messi}
      \nCage: ${cage}
      \nSlider: ${slider}`,
    };
    let res = await axios.post(webHookURL, JSON.stringify(data), {
      withCredentials: false,
      transformRequest: [
        (data, headers) => {
          delete headers["Content-Type"];
          return data;
        },
      ],
    });

    if (res.status === 200) {
      alert("Success!");
    } else {
      alert("message failed to send");
    }
  }

  const checkBoxClick = (index) => {
    setAnimals(
      animals.map((animal, i) => {
        if (i === index) {
          animal.checked = !animal.checked;
        }
        return animal;
      })
    );
  };

  const binaryClick = (state, fct, answer) => {
    if (state === answer) {
      fct("");
    } else {
      fct(answer);
    }
  };

  const sliderMove = (e) => {
    setSlider(e.target.value);
  };

  return (
    <StyledForm>
      <Header>Check Your Stats</Header>
      <Section>
        <Question>1. What is your age?</Question>
        <Text
          type="text"
          placeholder="age"
          style={{ width: "200px" }}
          onChange={(e) => setAge(e.target.value)}
          value={age}
        ></Text>
      </Section>
      <Section>
        <Question>2. What is your favorite food?</Question>
        <Text type="text" placeholder="food" onChange={(e) => setFood(e.target.value)} value={food} />
      </Section>
      <Section>
        <Question>3. Choose all cool animals</Question>
        <MC style={{ width: "1000px" }}>
          <CheckboxContainer>
            <label>Dog</label>
            <button
              type="button"
              onClick={() => checkBoxClick(0)}
              style={{ background: animals[0].checked ? colors.turquoise : colors.white }}
            >
              {animals[0].checked && <i className="fa-solid fa-check"></i>}
            </button>
          </CheckboxContainer>
          <CheckboxContainer>
            <label>Cat</label>
            <button
              type="button"
              onClick={() => checkBoxClick(1)}
              style={{ background: animals[1].checked ? colors.turquoise : colors.white }}
            >
              {animals[1].checked && <i className="fa-solid fa-check"></i>}
            </button>
          </CheckboxContainer>
          <CheckboxContainer>
            <label>Elephant</label>
            <button
              type="button"
              onClick={() => checkBoxClick(2)}
              style={{ background: animals[2].checked ? colors.turquoise : colors.white }}
            >
              {animals[2].checked && <i className="fa-solid fa-check"></i>}
            </button>
          </CheckboxContainer>
          <CheckboxContainer>
            <label>Bat</label>
            <button
              type="button"
              onClick={() => checkBoxClick(3)}
              style={{ background: animals[3].checked ? colors.turquoise : colors.white }}
            >
              {animals[3].checked && <i className="fa-solid fa-check"></i>}
            </button>
          </CheckboxContainer>
          <CheckboxContainer>
            <label>Bear</label>
            <button
              type="button"
              onClick={() => checkBoxClick(4)}
              style={{ background: animals[4].checked ? colors.turquoise : colors.white }}
            >
              {animals[4].checked && <i className="fa-solid fa-check"></i>}
            </button>
          </CheckboxContainer>
        </MC>
      </Section>
      <Section>
        <Question>4. Is Nicholas Cage a good actor?</Question>
        <MC style={{ width: "400px" }}>
          <CheckboxContainer>
            <label>Yes</label>
            <button
              type="button"
              onClick={() => binaryClick(cage, setCage, true)}
              style={{ background: cage ? colors.turquoise : colors.white }}
            >
              {cage && <i className="fa-solid fa-check"></i>}
            </button>
          </CheckboxContainer>
          <CheckboxContainer>
            <label>No</label>
            <button
              type="button"
              onClick={() => binaryClick(cage, setCage, false)}
              style={{ background: cage === false ? colors.turquoise : colors.white }}
            >
              {!cage && <i className="fa-solid fa-check"></i>}
            </button>
          </CheckboxContainer>
        </MC>
      </Section>
      <Section>
        <Question>5. How much money should Barcelona pay Messi?</Question>
        <Text
          type="text"
          placeholder="Please write a number"
          onChange={(e) => setMessi(e.target.value)}
          value={messi}
        />
      </Section>
      <Section>
        <Question>6. On a scale from one to ten how cool are you?</Question>
        <Slider type="range" min="1" max="10" value={slider} sliderMove={sliderMove}></Slider>
      </Section>
      <Section>
        <Question>7. What is your favorite food?</Question>
        <Text type="text" placeholder="food" onChange={(e) => setFood(e.target.value)} value={food} />
      </Section>
      <Section>
        <Question>8. What is your favorite food?</Question>
        <Text type="text" placeholder="food" onChange={(e) => setFood(e.target.value)} value={food} />
      </Section>
      <Section>
        <Question>9. What is your favorite food?</Question>
        <Text type="text" placeholder="food" onChange={(e) => setFood(e.target.value)} value={food} />
      </Section>
      <Section>
        <Question>10. What is your favorite food?</Question>
        <Text type="text" placeholder="food" onChange={(e) => setFood(e.target.value)} value={food} />
      </Section>
      <Section>
        <Question>11. What is your favorite food?</Question>
        <Text type="text" placeholder="food" onChange={(e) => setFood(e.target.value)} value={food} />
      </Section>
      <Section>
        <Question style={{ color: colors.black }}>Please fill in your email address so we can contact you.</Question>
        <Text type="text" placeholder="Your Email" onChange={(e) => setEmail(e.target.value)} value={email} />
      </Section>
      <SubmitButton type="submit" onClick={(e) => submit(e)}>
        Submit
      </SubmitButton>
    </StyledForm>
  );
};

export default Form;
