import React from 'react';
import {Button, makeStyles, Typography} from "@material-ui/core";
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import DialogConatainer from "../сomponents/modal";

const useStyles = makeStyles((theme) => (
    {
        wrapper: {
            display: 'flex',
            height: 'calc(100vh - 80px)',
        },
        faqSide: {
            backgroundColor: '#71c9f8',
            width: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            position: 'relative',
        },
        faqSideBack: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            height: '350%',
            width: '350%',
            transform: 'translate(-50%, -50%)',
        },
        faqSideList: {
            listStyle: 'none',
            padding: 0,
            margin: 0,
            maxWidth: 380,
            position: 'relative',
            '& h6': {
                display: 'flex',
                alignItems: 'center',
                fontWeight: '600',
                color: 'white',
                fontSize: 20,
                '& svg': {
                    marginRight: 20,
                    fontSize: 32,
                }
            }

        },
        interactiveSide: {
            width: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        interactiveSideInner: {
            maxWidth: 380,
        },
        interactiveSideTitle: {
            fontWeight: 700,
            fontSize: 32,
            marginBottom: 45,
            marginTop: 20
        },
        twitterIcon: {
            fontSize: 45,
        },
        modalInput: {
            marginBottom: 18
        }
    }
));

const SignIn = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <div className={classes.wrapper}>
                <section className={classes.faqSide}>
                    <TwitterIcon className={classes.faqSideBack} color='primary'/>
                    <ul className={classes.faqSideList}>
                        <li>
                            <Typography variant='h6'>
                                <SearchIcon/>
                                Читайте о том, что вам интересно.
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='h6'>
                                <PeopleOutlineIcon/>
                                Узнайте о чем говорят в мире.
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='h6'>
                                <ModeCommentOutlinedIcon/>
                                Присоединяйтесь к общению.
                            </Typography>
                        </li>
                    </ul>
                </section>
                <section className={classes.interactiveSide}>
                    <div className={classes.interactiveSideInner}>
                        <TwitterIcon className={classes.twitterIcon} color='primary'/>
                        <Typography variant="h4" className={classes.interactiveSideTitle}>
                            Узнайте, что происходит в мире прямо сейчас
                        </Typography>
                        <Typography>
                            <b>Присоединяйтесь к Твиттеру прямо сейчас</b>
                        </Typography>
                        <br/>
                        <Button variant='contained' color='primary' fullWidth
                                style={{marginBottom: 20}}>Зарегистрироватьтся</Button>
                        <Button variant='outlined' color='primary' fullWidth onClick={handleClickOpen}>Войти</Button>
                    </div>
                </section>
            </div>

            <div>
                <DialogConatainer handleClose={handleClose} open={open}/>
            </div>
        </div>

    );
};

export default SignIn;


