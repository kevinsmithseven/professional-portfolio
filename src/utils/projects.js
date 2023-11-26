import GigGuideImage from '../images/gigguide-image.png';
import HistoryHuddle from '../images/history-huddle.png';
import WeatherDashboard from '../images/weather-dashboard.png';
import NoteTaker from '../images/note-taker.png';
import WorkdayScheduler from '../images/workday-scheduler.png';
import NationalParksQuiz from '../images/national-parks-quiz.png';

const projects = [
    {
        id: 1, 
        name: 'GigGuide',
        image: GigGuideImage,
        repoLink: 'https://github.com/kevinsmithseven/concert-finder',
        siteLink: 'https://kevinsmithseven.github.io/concert-finder/'
    },
    {
        id: 2,
        name: 'History Huddle',
        image: HistoryHuddle,
        repoLink: 'https://github.com/kevinsmithseven/thoughts-blog',
        siteLink: 'https://intense-sierra-33338-d926b5b9f060.herokuapp.com/'
    },
    {
        id: 3,
        name: 'Weather Dashboard',
        image: WeatherDashboard,
        repoLink: 'https://github.com/kevinsmithseven/weather-dashboard',
        siteLink: 'https://kevinsmithseven.github.io/weather-dashboard/'
    },
    {
        id: 4,
        name: 'Note Taker',
        image: NoteTaker,
        repoLink: 'https://github.com/kevinsmithseven/note-taker',
        siteLink: 'https://salty-sands-14541-496b51c248e5.herokuapp.com/'
    },
    {
        id: 5,
        image: WorkdayScheduler,
        repoLink: 'https://github.com/kevinsmithseven/work-day-scheduler',
        siteLink: 'https://kevinsmithseven.github.io/work-day-scheduler/'
    },
    {
        id: 6,
        name: 'National Parks Quiz',
        image: NationalParksQuiz,
        repoLink: 'https://github.com/kevinsmithseven/national-parks-quiz-game',
        siteLink: 'https://kevinsmithseven.github.io/national-parks-quiz-game/'
    }
];

export default projects;