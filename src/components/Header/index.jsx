import React from "react";
import Button from "@mui/material/Button";

import styles from "./Header.module.scss";
import Container from "@mui/material/Container";

export const Header = () => {
    return (
        <div className={styles.root}>
            <Container maxWidth="lg">
                <div className={styles.inner}>
                    <a className={styles.logo} href="/">
                        <div>SD_Around</div>
                    </a>
                    <div className={styles.buttons}>
                        <Button variant="outlined">Зайти</Button>
                        <Button variant="contained">Створити аккаунт</Button>
                    </div>
                </div>
            </Container>
        </div>
    );
};
