const manhwaList = [
    {
        title: 'Second life ranker',
        image: 'manhwa_image/second-life-ranker-1.jpg',
        link: 'https://www.anime-planet.com/manga/second-life-ranker'
    },  
                
    {
        title: 'martial_peak',
        image: 'manhwa_image/Martial_peak.webp',
        link: 'https://martial-peak-mp.fandom.com/wiki/Martial_Peak_Wiki'
    },
    {
        title: 'Omniscient_Reader_viewpoint',
        image: 'manhwa_image/Kim_Dokja_Cover.webp',
        link: 'https://omniscient-readers-viewpoint.fandom.com/wiki/Kim_Dokja'
    },
    
];

const carouselContainer = document.querySelector('.carousel');

manhwaList.forEach(manhwa => {
    const item = document.createElement('div');
    item.className = 'carousel-item';
    item.innerHTML = `<a href="${manhwa.link}"><img src="${manhwa.image}" alt="${manhwa.title}"></a>`;
    carouselContainer.appendChild(item);
});
