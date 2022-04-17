import Link from 'next/link';
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react';
import Icon from '@mdi/react';
import { mdiWeatherNight, mdiWhiteBalanceSunny, mdiMenu, mdiDesktopMac, mdiCellphone  } from '@mdi/js';
import { DiCssdeck } from 'react-icons/di';
import { Container, ContainerColor, NavLinkDark, NavLinkLight, SocialIconsDark, SocialIconsLight } from './HeaderStyles';
import { useDispatch, useSelector } from 'react-redux'
import { setThemes } from '../../redux/Theme/actions'
import { Grid, Modal } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { makeStyles } from '@mui/styles';
import CloseIcon from '@mui/icons-material/Close';
import { StickyNav } from './../../ModuleFuction/react-js-stickynav/dist'
import './../../ModuleFuction/react-js-stickynav/dist/'


const useStyles = makeStyles({
  modalRoot: {
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    left: 0,
    zIndex: 250,
    backgroundColor: 'rgba(0,0,0,0.85)',
    width: '100%',
    height: '100%',
    fontSize: '14px',
  },

  popupIconsLight: {
    marginLeft: "20%",
    transition: "0.3s ease-out",
    color: "Black",
    borderRadius: "50%",
    '&:hover': {
      transform: "scale(1.2)",
      transition: "transform .5s ease-out"
    },
  },
  popupIconsDark: {
    marginLeft: "20%",
    transition: "0.3s ease-out",
    color: "White",
    borderRadius: "50%",
    '&:hover': {
      transform: "scale(1.2)",
      transition: "transform .5s ease-out"
    },
  },
  stickyThc: {
    th: {
      position: "sticky",
      top: 0,
    }
  },
  closeBtnLayout: {
    display: 'block',
    position: 'fixed',
    alignItems: 'center',
    justifyContent: 'center',
    top: '20%',
    right: '10%',
    zIndex: 1,
    width: '50px',
    height: '50px',
    cursor: 'pointer',
    transform: "scale(2)"
  },
});

const ThemeHeader = (props) => {

  const { themeChangeHandle, themeIcon, themeMode, color, router } = props
  const classes = useStyles();

  const NavLink = (text) => {
    if (themeMode == "dark") {
      return <NavLinkDark>{text}</NavLinkDark>;
    } else {
      return <NavLinkLight>{text}</NavLinkLight>;
    }
  }

  const ChangeThemeIcons = () => {
    if (themeMode == "dark") {
      return <div className={classes.popupIconsDark} onClick={themeChangeHandle}>
        <Icon path={themeIcon}
          size="3rem"
          horizontal
          vertical
          rotate={90}
        />
      </div>
    } else {
      return <div className={classes.popupIconsLight} onClick={themeChangeHandle}>
        <Icon path={themeIcon}
          size="2em"
          horizontal
          vertical
          rotate={90}
        />
      </div>
    }
  }

  const CallToHome = () => {
    router.push("/");
  }

  return (
    <div>

      <Grid container spacing={2} style={{ padding: "1.5vh", marginTop: 2, marginLeft: "5vh", paddingRight: "5vh" }}>

        <Grid item xs={2} onClick={CallToHome}>
          <Link href="/">
            <a style={{ display: 'flex', alignItems: 'center', color: color }}>
             <Icon path={mdiDesktopMac} size="2em" style={{marginRight: 5}}/> <span>Portfolio</span>
            </a>
          </Link>
        </Grid>

        <Grid item xs={9}>
          <Grid container spacing={3} justifyContent="flex-end" alignItems="center">
            <Grid item onClick={CallToHome}>

              <Link href="/">
                {NavLink("Home")}
              </Link>

            </Grid>

            <Grid item>

              <Link href="#projects">
                {NavLink("Project")}
              </Link>

            </Grid>
            <Grid item>

              <Link href="#tech">
                {NavLink("Technologies")}
              </Link>

            </Grid>
            <Grid item>

              <Link href="#about">
                {NavLink("Education")}
              </Link>
            </Grid>
            <Grid item>

              <Link href="#about">
                {NavLink("WorkExperiences")}
              </Link>

            </Grid>
            <Grid item>

              <Link href="#about">
                {NavLink("About")}
              </Link>

            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={1}>
          <Grid container justifyContent="center" alignItems="center" style={{ paddingRight: "5vh", cursor: 'pointer' }}>
            <ChangeThemeIcons />
          </Grid>
        </Grid>

      </Grid>
    </div>
  );
};

const ThemeHeaderMob = (props) => {

  const { themeChangeHandle, themeIcon, themeMode, color, menuHandler } = props
  const classes = useStyles();


  const ChangeThemeIcons = () => {
    if (themeMode == "dark") {
      return <div className={classes.popupIconsDark} onClick={themeChangeHandle}>
        <Icon path={themeIcon}
          size="2em"
          horizontal
          vertical
          rotate={90}
        />
      </div>
    } else {
      return <div className={classes.popupIconsLight} onClick={themeChangeHandle}>
        <Icon path={themeIcon}
          size="2em"
          horizontal
          vertical
          rotate={90}
        />
      </div>
    }
  }

  return (
    <div>

      <Grid container spacing={2} style={{ margin: 5, marginTop: 5, paddingRight: 20 }}>

        <Grid item xs={8}>
          <Link href="/">
            <a style={{ display: 'flex', alignItems: 'center', color: color }}>
            <Icon path={mdiCellphone} size="3rem" style={{marginRight: 5}}/> <span>Portfolio</span>
            </a>
          </Link>
        </Grid>


        <Grid item xs={2}>
          <Grid container justifyContent="center" alignItems="center">
            <ChangeThemeIcons />
          </Grid>
        </Grid>

        <Grid item xs={2}>
          <Grid onClick={menuHandler}>
            <Icon path={mdiMenu}
              size="2em"
              horizontal
              vertical
            />
          </Grid>
        </Grid>

      </Grid>
    </div>
  );
};

const ModalMenu = (props) => {

  const { handlerClose, themeMode, router } = props
  const classes = useStyles();

  const NavLink = (text) => {

    if (themeMode == "dark") {
      return <NavLinkDark>{text}</NavLinkDark>;
    } else {
      return <NavLinkDark>{text}</NavLinkDark>;
    }
  }

  const CallToHome = () => {
    router.push("/");
    handlerClose();
  }

  return (
    <div className={classes.modalRoot}>
      <div className={classes.closeBtnLayout} onClick={handlerClose}>
        <CloseIcon style={{ color: "rgba(255, 255, 255, 0.75)" }} />
      </div>
      <Grid item xs={9}>
        <Grid container spacing={3} justifyContent="flex-end" alignItems="center" direction="column">
          <Grid item>
            <Link href="/" >
                <div onClick={CallToHome}>
                  {NavLink("Home")}
                </div>
            </Link>
          </Grid>
          <Grid item>
            <Link href="#projects">
              <div onClick={handlerClose}>
                {NavLink("Project")}
              </div>
            </Link>
          </Grid>
          <Grid item>
            <Link href="#tech">
              <div onClick={handlerClose}>
                {NavLink("Technologies")}
              </div>
            </Link>
          </Grid>
          <Grid item>
            <Link href="#about">
              <div onClick={handlerClose}>
                {NavLink("Education")}
              </div>
            </Link>
          </Grid>
          <Grid item>
            <Link href="#about">
              <div onClick={handlerClose}>
                {NavLink("WorkExperiences")}
              </div>
            </Link>
          </Grid>
          <Grid item>
            <Link href="#about">
              <div onClick={handlerClose}>
                {NavLink("About")}
              </div>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

function Header(props) {

  const [themeIcon, setThemeIcon] = useState(mdiWeatherNight);
  const [color, setColor] = useState("white");
  const [modalOpen, setModalOpen] = useState(false);
  const [codeColor, setCodeColor] = useState("#0F1624");
  const dispatch = useDispatch();
  const themesSelector = useSelector(state => state.themesReducer);
  const matches = useMediaQuery("(min-width: 770px)");
  const router = useRouter();

  const themeChangeHandle = () => {
    if (themeIcon == mdiWeatherNight) {
      setThemeIcon(mdiWhiteBalanceSunny);
      dispatch(setThemes("light"));
      setColor("black");
      setCodeColor("#F2FFFF");
    } else {
      setThemeIcon(mdiWeatherNight);
      dispatch(setThemes("dark"))
      setColor("white");
      setCodeColor("#0F1624");
    }
  }

  const style = () => {
    return (
      <style jsx>{`
        .nav {
          transition: all 0.1s linear;
          position: fixed;
          width: 100%;
          z-index: 2000;
        }
        .scrollNav {
          transition: all 0.5s ease-in;
          z-index: 2000;
          width: 100%;
          background: ${codeColor};
          border-bottom: 1px solid ${color};
        }
        .styl {
          padding-top: 280px;
        }
      `}</style>
    )
  };

  const styleMob = () => {
    return (
      <style jsx>{`
        .nav {
          transition: all 0.1s linear;
          position: fixed;
          width: 100%;
          z-index: 2000;
        }
        .scrollNav {
          transition: all 0.5s ease-in;
          z-index: 2000;
          width: 100%;
          background: ${codeColor};
          border-bottom: 1px solid ${color};
        }
        .styl {
          padding-top: 280px;
        }
      `}</style>
    )
  };

  const menuHandler = () => {
    console.log("hello")
    setModalOpen(!modalOpen);
  }

  const handleClose = () => {
    setModalOpen(false);
  };


  return (
    <div>
      {modalOpen && modalOpen == true && <ModalMenu handlerClose={handleClose} themeMode={themesSelector.storeThemesDetail} router={router} />}
      {matches == true && (
        <div>
          {style()}
          <StickyNav length='50'>
            <ThemeHeader
              themeChangeHandle={themeChangeHandle}
              themeIcon={themeIcon}
              themeMode={themesSelector.storeThemesDetail}
              color={color}
              router={router} />
          </StickyNav>
        </div>
      )}

      {matches == false && (
        <div>
          {styleMob()}
          <StickyNav length='50'>
            <ThemeHeaderMob
              themeChangeHandle={themeChangeHandle}
              themeIcon={themeIcon}
              themeMode={themesSelector.storeThemesDetail}
              color={color}
              menuHandler={menuHandler} />
          </StickyNav>
        </div>
      )}


    </div>
  )
}

export default Header;

