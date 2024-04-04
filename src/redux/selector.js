import { useSelector } from "react-redux";

export const useStoreState = (name) =>
    useSelector((state) => (name ? state[name] : state));
