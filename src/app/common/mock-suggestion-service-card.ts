import { ITypeSuggestion } from '../models/ITypeSuggestion';

export const SUGGESTIONS_SERVICE_CARD : ITypeSuggestion[] = [
		{ 
			id : 1,
			title : 'Sugerencias de la charla', 
			caption : '¿Tienes algún comentario acerca de la charla?',
			imageUri : 'icon_1.svg'
		},
		{
			id : 2, 
			title : 'Sugerencias al instructor', 
			caption : '¿Deseas sugerir algún comentario al instructor?',
			imageUri : 'icon_2.png'
		},
		{
			id : 3, 
			title : '¿Tienes preguntas?', 
			caption : '¿En qué podemos ayudarte?',
			imageUri : 'icon_3.png'
		},
		{ 
			id : 4,
			title : 'Feedback', 
			caption : 'Envíanos alguna retroalimentación.',
			imageUri : 'icon_4.png'
		}
	];