import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({text}) { // component는 함수일 뿐. ()인자로 받는 것이 properties   
    return <button className={styles.title}>{text}</button>
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Button // 다른 파일에서 Button 컴포넌트를 import 할 수 있도록 export 해줘야 한다. 