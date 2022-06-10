import styles from "./Header.module.css";

function Header(){
	return (
		<header>
			<h1 className={styles.logo}>MOVE APP</h1>
			<nav></nav>
		</header>
	)
}

export default Header;