import styled from "styled-components";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";

export const SandWichIcon = styled.div`
  display: none;

  @media (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: end;

    padding: 0 0.5rem;

    position: absolute;
    top: 0;
    right: 0;

    z-index: 1001;
  }
`;

export const WrapperOpenIcon = styled(IoMenuOutline)`
  font-size: 2.5rem;

  color: white;

  cursor: pointer;
`;

export const WrapperCloseIcon = styled(IoCloseOutline)`
  font-size: 2.5rem;

  color: white;

  cursor: pointer;
`;