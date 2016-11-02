export class InMemoryStoreService {

    createDb() {
        let comun = {
            'headerContent': {
                'phoneTitle': 'Angular 2',
                'help': 'Cheatsheet',
                'urlHelp': 'https://angular.io/docs/ts/latest/cheatsheet.html',
                'textPhome': 'Proximamente...'
            },
            'helpInfo': {
                'title': '¿Ya eres cliente de Sanitas?',
                'subtitle': 'Te ayudamos',
                'url': 'https://www.sanitas.es/cparticulares/contratacion/contenido/dudas'
            },
            'modalMessage': {
                'title': 'Te llamaremos lo antes posible',
                'subtitle': 'Intentaremos llamarte lo antes posible dentro de nuestro horario de Lunes a Viernes de 9 a 21'
            },
            'modalForm': {
                'title': 'Te llamamos',
                'subtitle': 'Dejanos tus datos y te llamamos pronto',
                'schelude': '',
                'terms': 'He leído y acepto la política de privacidad',
                'urlTerms': 'http://www.angular.io',
                'url': 'http://www.angular.io'
            }
        };

        let sessions = [
            {
                'id': 130,
                'name': 'Angular 2 First Look',
                'level': 'beginner'
            },
            {
                'id': 132,
                'name': 'RxJS',
                'level': 'beginner'
            },
            {
                'id': 133,
                'name': 'Angular Material',
                'level': 'beginner'
            },
            {
                'id': 134,
                'name': 'Redux',
                'level': 'beginner'
            },
            {
                'id': 135,
                'name': 'React',
                'level': 'beginner'
            },
            {
                'id': 136,
                'name': 'TypeScript',
                'level': 'beginner'
            },
            {
                'id': 137,
                'name': 'ES2015',
                'level': 'beginner'
            },
            {
                'id': 138,
                'name': 'Mongo',
                'level': 'beginner'
            },
            {
                'id': 139,
                'name': 'Redis',
                'level': 'beginner'
            },
            {
                'id': 140,
                'name': 'Node',
                'level': 'beginner'
            },
            {
                'id': 141,
                'name': 'Express',
                'level': 'beginner'
            }
        ];

        let rooms = [
            {
                'id': 30,
                'name': 'Millennium Falcon',
                'type': 'space'
            },
            {
                'id': 32,
                'name': 'X-Wing Fighter',
                'type': 'space'
            },
            {
                'id': 33,
                'name': 'Imperial Star Destroyer',
                'type': 'space'
            },
            {
                'id': 34,
                'name': 'AT-AT Walker',
                'type': 'land'
            },
            {
                'id': 35,
                'name': 'TIE Fighter',
                'type': 'space'
            },
            {
                'id': 36,
                'name': 'B-Wing Fighter',
                'type': 'space'
            },
            {
                'id': 37,
                'name': 'ETA-2 Jedi Starfighter',
                'type': 'space'
            },
            {
                'id': 38,
                'name': 'TIE Interceptor',
                'type': 'space'
            },
            {
                'id': 39,
                'name': 'X-34 Landspeeder',
                'type': 'land'
            },
            {
                'id': 40,
                'name': 'Snow Speeder',
                'type': 'land'
            },
            {
                'id': 41,
                'name': 'X-34 Landspeeder',
                'type': 'land'
            }
        ];

        return { comun, rooms, sessions };
    }
}
