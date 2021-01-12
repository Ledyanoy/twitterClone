import React from 'react';
import {Button, makeStyles, Typography} from "@material-ui/core";
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles((theme) => (
    {
        wrapper: {
            display: 'flex',
            height: '100%',
        },
        faqSide: {
            backgroundColor: '#1da1f2',
            width: '50%',
        },
        interactiveSide: {
            width: '50%',
        },
    }
));

const SignIn = () => {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <section className={classes.faqSide}>
                <ul>
                    <li>
                        <Typography>
                            Читайте это вот все
                        </Typography>
                    </li>
                    <li>
                        <Typography>
                            Узнайте о чем говорят в мире
                        </Typography>
                    </li>
                    <li>
                        <Typography>
                            Присоединяйтесь к общению
                        </Typography>
                    </li>
                </ul>
            </section>
            <section className={classes.interactiveSide}>
                <TwitterIcon/>
                <Typography>
                    Узнайте что происходит в мире прямо сейчас
                </Typography>
                <Typography>
                    Присоединяйтесь к Твиттеру прямо сейчас
                </Typography>
                <Button variant='contained' color='primary' fullWidth>Зарегистрироватьтся</Button>
                <Button variant='outlined' color='primary' fullWidth>Войти</Button>

            </section>
        </div>
    );
};

export default SignIn;


