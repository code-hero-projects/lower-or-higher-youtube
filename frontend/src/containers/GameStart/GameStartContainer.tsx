import { useDispatch } from "react-redux";
import { GameStart } from "../../components";
import { startGame } from "../../redux";

export function GameStartContainer() {
    const dispatch = useDispatch();

    return <GameStart onStartGame={() => dispatch(startGame())} />;
}