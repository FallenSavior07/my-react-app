import '../../css/style.css';
import React, { useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from 'react-redux';
import { gistsSelector } from '../../selectors/gists';
import { fetchGists } from '../../actions/gists';
import { GISTS_REQUEST_STATUS } from './constants';
import { useCallback } from 'react';

export default function GistsList() {
    const dispatch = useDispatch();
    const { gists, status } = useSelector(gistsSelector);

    const requestGists = useCallback(() => {
        dispatch(fetchGists());
    }, [dispatch])

    useEffect(() => {
        requestGists();
    }, [requestGists]);

    const renderGist = useCallback((gist) => {
        return <li className="gists__item" key={gist.id}>{gist.description}</li>
    }, [])

    if (status === GISTS_REQUEST_STATUS.ERROR) {
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

    if (status === GISTS_REQUEST_STATUS.LOADING) {
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
                    <ul className="gists__list">{gists.map(renderGist)}</ul>
                </div>
            </section>
        </main>
    );
};