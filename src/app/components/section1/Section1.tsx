/* eslint-disable @typescript-eslint/no-explicit-any */
// components
import { Banner } from "../Banner/Banner";
import { Song } from '../Song/Song';
import { BoxTitle } from "../BoxTitle/BoxTitle";

// interface
import { SongInterface, SingerInterface } from '../../interfaces/song';

// firebase
import { ref, onValue } from "firebase/database";

// firebase config
import { Database } from '../../config/firebaseConfig';

// collection lấy dữ liệu từ firebase
const songRef = ref(Database, 'songs'); 

// lấy danh sách tên ca sĩ
const getSingerList = (singerListId: string[]): SingerInterface[] => {
    const singerNames: SingerInterface[] = []; // mảng chứa danh sách tên ca sĩ
    
    singerListId.forEach( ( singerId: string ) => {
        if(singerId) {
            const singerRefId = ref(Database, 'singers/' + singerId); 
            onValue(singerRefId, ( snapshot ) => {
                const item: SingerInterface = { title: snapshot.val().title, href: singerId };
                singerNames.push(item);
            });
        }
    })
    return singerNames;
}

export const Section1 = () => {
    // mảng chứa data 
    const DataSection: SongInterface[] = [];

    // lấy dữ liệu từ firebase
    onValue(songRef, (songItems) => {
        songItems.forEach( ( songItem ) => {
            const songId = songItem.key;        // ID bài nhạc
            const songData = songItem.val();    // Data bài nhạc

            // lấy danh sách ca sĩ của bài nhạc
            const singerNames: SingerInterface[] = getSingerList(songData.singerId); // mảng chứa danh sách tên ca sĩ

            // giới hạn chỉ có 3 item
            if(DataSection.length < 3) {
                DataSection.push({
                    id: songId,
                    title: songData.title,
                    image: songData.image,
                    singers: singerNames,
                    listen: songData.listen
                });
            }
        });
    });
    
    return (
        <>
            <div className="flex items-end mb-[30px]" > {/* wrap */}
                <Banner />

                <div className="w-[425px] ml-[20px]">
                    <BoxTitle title="Nghe nhiều" className="" />
                    <Song data = {DataSection} />  {/* nghe nhiều */}
                </div>
            </div>
        </>
    );
}