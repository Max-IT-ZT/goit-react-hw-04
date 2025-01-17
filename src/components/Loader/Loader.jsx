import css from "./Loader.module.css";
import { ColorRing } from "react-loader-spinner";
export default function Loader() {
  return (
    <div className={css.container}>
      <ColorRing
        visible={true}
        height="120"
        width="120"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
    </div>
  );
}
