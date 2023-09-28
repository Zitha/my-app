import Login from '../../pages/Login/Login'
import Profile from '../../pages/Profile/Profile'
import Tasks from '../../pages/Tasks/Tasks'
import Motivation from '../../pages/Motivation/Motivation';
import Pomodoro from '../../pages/Pomodoro/Pomodoro';
import FlashcardDeck from '../../pages/Flashcard/FlashcardDeck';
import NotesTaker from '../../pages/Notes/NotesTaker';

export const privateRoutes = [
	{ path: '/tasks', element: <Tasks />, exact: true },
	{ path: '/profile', element: <Profile />, exact: true },
	{ path: '/login', element: <Login />, exact: true },
	{ path: '/motivation', element: <Motivation />, exact: true },
	{ path: '/pomodoro', element: <Pomodoro />, exact: true },
	{ path: '/flashcards', element: <FlashcardDeck />, exact: true },
	{ path: '/notes', element: <NotesTaker />, exact: true } 
]

export const publicRoutes = [
	{ path: '/login', element: <Login />, exact: true },
]