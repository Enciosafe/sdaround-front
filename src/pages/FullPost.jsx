import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import { Post, Index, CommentsBlock } from "../components";
import axios from "../axios";

export const FullPost = () => {

    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams()

    useEffect(() => {
        axios.get(`/posts/${id}`).then(res => {
            setData(res.data)
            setIsLoading(false)
        }).catch(e => {
            console.warn(e)
            alert('Помилка при отриманні статті')
        })
    }, []);

    if(isLoading) {
        return <Post isLoading={isLoading} isFullPost/>
    }

    return (
        <>
            <Post
                id={data._id}
                title={data.title}
                imageUrl={data.imageUrl}
                user={data.user}
                createdAt={data.createdAt}
                viewsCount={data.viewsCount}
                commentsCount={3}
                tags={data.tags}
                isFullPost
            >
                <p>
                    {data.text}
                </p>
            </Post>
            <CommentsBlock
                items={[
                    {
                        user: {
                            fullName: "Ігор Бабіч",
                            avatarUrl: "https://mui.com/static/images/avatar/1.jpg",
                        },
                        text: "Це тестовий коментар",
                    },
                    {
                        user: {
                            fullName: "Юлія Пилипенко",
                            avatarUrl: "https://mui.com/static/images/avatar/2.jpg",
                        },
                        text: "When displaying three lines or more, the avatar is not aligned at the top. You should set the prop to align the avatar at the top",
                    },
                ]}
                isLoading={false}
            >
                <Index />
            </CommentsBlock>
        </>
    );
};
