import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./components/Modal";
import { globalStyle } from "./globalStyle";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Button = styled.div`
  min-width: 100px;
  padding: 16px 32px;
  border: none;
  border-radius: 4px;
  background: #299;
  color: #fff;
  font-size: 25px;
  cursor: pointer;
`;

function App() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <>
      <Container>
        <Button onClick={openModal}>This is a Modal </Button>
        <Modal showModal={showModal} setShowModal={setShowModal} />
        < globalStyle />
      </Container>
    </>
  );
}

export default App;
