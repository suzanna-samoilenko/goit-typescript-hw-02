import { FC } from "react";
import styles from "./ErrorMessage.module.css";

const ErrorMessage: FC = () => {
  return (
    <div>
      <p className={styles.error}>
        Whoops, something went wrong! Please try reloading this page!
      </p>
    </div>
  );
};

export default ErrorMessage;
