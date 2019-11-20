import data from "../data"

 console.log (data);
const initialState = {
    tech: [
        {
            id: 0,
            name: "calculator",
            description: "it is a calculator",
            category: "handheld device",
            startDate: "11/5/2019",
            endDate: "11/15/2019",
            dailyPrice: 1,
            imgUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Casio-fx115ES-5564.jpg",
    
        },
    
    
        {
            id: 1,
            name: "LG Nano 8 Series 4K 65 inch Class Smart UHD NanoCell TV w/ AI ThinQ",
            description: "it is a tv",
            category: "tv",
            startDate: "11/22/2019",
            endDate: "11/27/2019",
            dailyPrice: 10,
            imgUrl: "https://www.lg.com/us/images/tvs/md06065057/gallery/Dz01.jpg"
    
        },
        {
            id: 2,
            name: "calculator",
            description: "it is a calculator",
            category: "handheld device",
            startDate: "11/5/2019",
            endDate: "11/15/2019",
            dailyPrice: 1,
            imgUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Casio-fx115ES-5564.jpg",
    
        },
    
    
        {
            id: 3,
            name: "LG Nano 8 Series 4K 65 inch Class Smart UHD NanoCell TV w/ AI ThinQ",
            description: "it is a tv",
            category: "tv",
            startDate: "11/22/2019",
            endDate: "11/27/2019",
            dailyPrice: 10,
            imgUrl: "https://www.lg.com/us/images/tvs/md06065057/gallery/Dz01.jpg"
    
        },
        {
            id: 4,
            name: "calculator",
            description: "it is a calculator",
            category: "handheld device",
            startDate: "11/5/2019",
            endDate: "11/15/2019",
            dailyPrice: 1,
            imgUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Casio-fx115ES-5564.jpg",
    
        },
    
    
        {
            id: 5,
            name: "LG Nano 8 Series 4K 65 inch Class Smart UHD NanoCell TV w/ AI ThinQ",
            description: "it is a tv",
            category: "tv",
            startDate: "11/22/2019",
            endDate: "11/27/2019",
            dailyPrice: 10,
            imgUrl: "https://www.lg.com/us/images/tvs/md06065057/gallery/Dz01.jpg"
    
        },
        {
            id: 6,
            name: "calculator",
            description: "it is a calculator",
            category: "handheld device",
            startDate: "11/5/2019",
            endDate: "11/15/2019",
            dailyPrice: 1,
            imgUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Casio-fx115ES-5564.jpg",
    
        },
    
    
        {
            id: 7,
            name: "LG Nano 8 Series 4K 65 inch Class Smart UHD NanoCell TV w/ AI ThinQ",
            description: "it is a tv",
            category: "tv",
            startDate: "11/22/2019",
            endDate: "11/27/2019",
            dailyPrice: 10,
            imgUrl: "https://www.lg.com/us/images/tvs/md06065057/gallery/Dz01.jpg"
    
        },
        {
            id: 8,
            name: "calculator",
            description: "it is a calculator",
            category: "handheld device",
            startDate: "11/5/2019",
            endDate: "11/15/2019",
            dailyPrice: 1,
            imgUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Casio-fx115ES-5564.jpg",
    
        },
    
    
        {
            id: 9,
            name: "LG Nano 8 Series 4K 65 inch Class Smart UHD NanoCell TV w/ AI ThinQ",
            description: "it is a tv",
            category: "tv",
            startDate: "11/22/2019",
            endDate: "11/27/2019",
            dailyPrice: 10,
            imgUrl: "https://www.lg.com/us/images/tvs/md06065057/gallery/Dz01.jpg"
    
        }
    ]
}



const reducer = (state =initialState, action) => {
    switch(action.type) {
        default:
            return {...state};
    }
  
}


export default reducer;