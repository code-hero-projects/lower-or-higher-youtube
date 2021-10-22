import { useDispatch } from "react-redux";
import { ShowInstructions } from "../../components";
import { showInstructions } from "../../redux";

export function InstructionsContainer() {
    const dispatch = useDispatch();

    return <ShowInstructions onShowInstructions={() => dispatch(showInstructions())} />;
}