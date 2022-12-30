import React from "react";
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom'

import styles from "./Header.module.scss";
import Container from "@mui/material/Container";

export const Header = () => {
    const isAuth = false

    const onClickLogout = () => {}

    return (
        <div className={styles.root}>
            <Container maxWidth="lg">
                <div className={styles.inner}>
                    <Link className={styles.logo} to="/">
                        <div>SD_Around</div>
                    </Link>
                    <div className={styles.buttons}>
                        {isAuth ? (
                            <>
                                <Link to="/posts/create" style={{ textDecoration: 'none' }} >
                                    <Button variant="contained">Написати статтю</Button>
                                </Link>
                                <Button onClick={onClickLogout} variant='contained' color='error' >
                                    Вийти
                                </Button>
                            </>
                        ) : (
                            <>
                                <Link to="/login" style={{ textDecoration: 'none' }}>
                                    <Button variant="outlined">Зайти</Button>
                                </Link>
                                <Link to="/register" style={{ textDecoration: 'none' }}>
                                    <Button variant="contained">Створити аккаунт</Button>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </Container>
        </div>
    );
};
