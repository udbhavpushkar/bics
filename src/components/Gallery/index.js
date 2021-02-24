import React, {useEffect, useState} from 'react';
import Parallax from "../Parallax";
import Materialize from "materialize-css";
import {Col, Container, Row, Section, Preloader, PreloaderColor} from "react-materialize";
import faker from "faker";
import ImageBox from "../ImageBox";

const Gallery = () => {
    const [images, setImages] = useState([])
    const [isload, setLoad] = useState(false)
    let para = {
            title: "Gallery",
            content: null,
            image: "https://images.pexels.com/photos/296649/pexels-photo-296649.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940img3",
            video: false
    }

    let image = "https://source.unsplash.com/random/300x200"
    const fetchImages = ()=>{
        setLoad(true)
        fetch("https://picsum.photos/v2/list")
            .then(res=>res.json())
            .then(res=>{
                setLoad(false)
                setImages(res)
            })
    }

    useEffect(()=>{
        Materialize.AutoInit()
        fetchImages()
    },[])
    return (
        <>
            <Parallax data={para} />
            <Section>
                <Container>
                    {isload?<Preloader
                            active
                            color="red"
                            flashing={false}
                            size="big"/>:
                        <Row>
                            {images.map(e=>(
                                <ImageBox src={e.download_url} />
                            ))}
                        </Row>
                    }

                </Container>
            </Section>
        </>
    );
};

export default Gallery;