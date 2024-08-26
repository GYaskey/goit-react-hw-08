import s from './NotFound.module.css';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className={s.container}>
      <img
        src="../../../public/hkRuanu.png"
        alt="Not Found"
        className={s.image}
      />
      <h2 className={s.heading}>This Page is Not Real</h2>
      <p className={s.paragraph}>
        The imposing figure with the trenchcoat shows you the two polaroids. One
        appears to show the Loch Ness monster herself in the middle of a stretch
        of dark water. The other shows a sasquatch picking it&#39;s way through
        a dark forest. You look closer. The animal shapes are drawn on with ink.
        &#34;This isn`t real!&#34; You scream and throw the polaroids to the
        floor, sobbing.
      </p>
      <NavLink to="/" className={s.navLink}>
        Take me back home
      </NavLink>
    </div>
  );
};

export default NotFound;
