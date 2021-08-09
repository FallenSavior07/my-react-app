import '../../css/style.css';
import React, { useState, useEffect } from 'react';
import { API_URL_PUBLIC } from '../App/constants';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Button } from "@material-ui/core";

export default function GistsList() {
    const [gists, setGists] = useState([]);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const requestGists = async () => {
        setError(false);
        setIsLoading(true);
        try {
            const response = await fetch(API_URL_PUBLIC);
            if (!response.ok) {
                throw new Error(`Request failed with status ${response.status}`);
            }
            const result = await response.json();
            setGists(result);
        }
        catch (err) {
            setError(true);
            console.error(err);
        }
        finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        requestGists()
    }, []);

    if (error) {
        return (
            <main className="app__main main">
                <section className="gists">
                    <div className="gists__error container error">
                        <p className="error__text">Ошибка соединения. Для повторной загрузки нажмите кнопку ниже.</p>
                        <Button
                            className="error__button"
                            onClick={requestGists}
                            variant="contained"
                            color="primary"
                        >
                            Попробовать снова
                        </Button>
                    </div>
                </section>
            </main>
        );
    }

    if (isLoading) {
        return (
            <main className="app__main main">
                <section className="gists">
                    <div className="gists__loading container">
                        <p className="loading__text">Загрузка, подождите...</p>
                        <CircularProgress />
                    </div>
                </section>
            </main>
        )
    }

    return (
        <main className="app__main main">
            <section className="gists">
                <div className="gists__inner container">
                    <ul className="gists__list">{gists.map((gist) => {
                        return <li className="gists__item" key={gist.id}>{gist.description}</li>
                    })}</ul>
                </div>
            </section>
        </main>
    );
};