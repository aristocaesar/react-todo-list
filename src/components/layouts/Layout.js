import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

function Layout(props) {
  return (
    <main>
      <MainNavigation />
      <div className={classes.main}>{props.children}</div>
    </main>
  );
}

export default Layout;
