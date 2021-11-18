import { Button } from "@material-ui/core";
import { styled } from "@material-ui/system";

export const GameStartButtonWrapper = styled(Button)`
  width: 30%;
  font-weight: bold;
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 50%;
  }
`;