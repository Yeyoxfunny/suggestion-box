import { ISuggestionServiceCard } from '../models/ISuggestionServiceCard';

export const SUGGESTIONS_SERVICE_CARD : ISuggestionServiceCard[] = [
		{ 
			id : 1,
			title : 'Sugerencias de la charla', 
			description : '¿Tienes algún comentario acerca de la charla?',
			image : 'icon_1.svg'
		},
		{
			id : 2, 
			title : 'Sugerencias al instructor', 
			description : '¿Deseas sugerir algún comentario al instructor?',
			image : 'icon_2.png'
		},
		{
			id : 3, 
			title : '¿Tienes preguntas?', 
			description : '¿En qué podemos ayudarte?',
			image : 'icon_3.png'
		},
		{ 
			id : 4,
			title : 'Feedback', 
			description : 'Envíanos alguna retroalimentación.',
			image : 'icon_4.png'
		}
	];