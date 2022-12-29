import React from "react";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import SimpleMDE from "react-simplemde-editor";

import "easymde/dist/easymde.min.css";
import styles from "./AddPost.module.scss";

export const AddPost = () => {
    const [value, setValue] = React.useState("");

    const onChange = React.useCallback((value) => {
        setValue(value);
    }, []);

    const options = React.useMemo(
        () => ({
            spellChecker: false,
            maxHeight: "400px",
            autofocus: true,
            placeholder: "Введіть текст...",
            status: false,
            autosave: {
                enabled: true,
                delay: 1000,
            },
        }),
        []
    );

    return (
        <Paper style={{ padding: 30 }}>
            <Button variant="outlined" size="large">
                Як воно буде...
            </Button>
            <br />
            <br />
            <TextField
                classes={{ root: styles.title }}
                variant="standard"
                placeholder="Заголовок статті..."
                fullWidth
            />
            <TextField
                classes={{ root: styles.tags }}
                variant="standard"
                placeholder="Теги"
                fullWidth
            />
            <SimpleMDE
                className={styles.editor}
                value={value}
                onChange={onChange}
                options={options}
            />
            <div className={styles.buttons}>
                <Button size="large" variant="contained">
                    Опублікувати
                </Button>
                <Button size="large">Відміна</Button>
            </div>
        </Paper>
    );
};
