import '../SongSearch/Songs.scss'
import Songs from '../../Data/Songs.json';
import Arrow from '../../Imgs/Arrow.svg'
import { useState, useEffect, useRef } from 'react';

export const SongSearch = (props) => {
    const [offset, setOffset] = useState(0);
    const ToTopDisplay = useRef(null);
    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);


    console.log(offset);
    const [searchTerm, setSearchTerm] = useState('')


    return (
        <>
            <h1>Sangir</h1>
            <div id='SearchField'>

                <input type="text" placeholder="Leita..." onChange={event => { setSearchTerm(event.target.value) }} />
            </div>
            {Songs.filter((song) => {
                if (searchTerm == "") {
                    return song
                }
                else if (
                    song.id.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
                    song.Title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
                    song.Artist.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
                ) {
                    return song
                }
            }).map((song, key) => {
                return <div id='SongsContainer'>
                    <div id='Songs'>
                        <h2>{song.Title} <span>{song.id}.</span></h2>
                        <address class="author"><a rel="author" class="url fn n" href="/author/john-doe">{song.Artist}</a></address>
                        <p>{song.Content[0].Verse1}</p>
                        <br />
                        <p>{song.Content[0].Verse2}</p>
                        <br />
                        <p>{song.Content[0].Verse3}</p>
                        <br />
                        <p>{song.Content[0].Verse4}</p>
                        <br />
                        <p>{song.Content[0].Verse5}</p>
                        <br />
                        <p>{song.Content[0].Verse6}</p>
                    </div>
                </div>
            })}

            <div ref={ToTopDisplay} id='ToTop'><a href="#SearchField"><img src={Arrow} alt="" /></a></div>

        </>
    );
}