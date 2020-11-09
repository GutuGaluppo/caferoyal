import React from 'react'
import adri from '../img/adri.png'
import joca from '../img/joca.png'
import julio from '../img/julio.png'
import luiz from '../img/luiz.png'
import moa from '../img/moa.png'

export default function About() {

	const directors = [
		{
			id: 1,
			picture: adri,
			// picture: 'http://caferoyal.art.br/wp-content/uploads/2020/04/adri_round.png',
			name: 'Adriana Tavares',
			description: 'As an executive producer at MTV, she was responsible for more than 50 programs, including VMB, Acoustic MTV Arnaldo Antunes, MTV Live Jorge Ben, Legião Urbana concert (with participation of Wagner Moura), and the fiction show “The Girl With no Qualities”, directed by Felipe Hirsch. For Globo TV, she developed the show “My Platonic Love” (by Felipe Hirsch) and produced special assets for the nonprofit “Hope for Kids” for three years. For GNT channel, she produced “Paradise Apartment House”, directed by Pedro Amorim, and “Love is Beautiful”, directed by Andrea Cassola. For Multishow channel, she produced the program “I am Free”, directed by Marco Rodrigo. For the film industry, she produced the documentaries “Clown” (2017) and “Life in Motion”(2019). She is currently finalizing the film “45 of the Second Half”, by Luiz Villaça, and the documentaries “From Love No One Escape” and “Samadhi Road”, by Julio Hey.'
		},
		{
			id: 2,
			picture: joca,
			// picture: 'http://caferoyal.art.br/wp-content/uploads/2020/04/joca_round-1.png',
			name: 'Georgia Guerra-Peixe - Joca',
			description: 'Joca has been always researching new languages and ways to tell stories. She has specialized and built her career upon documental language for advertising, so called “docvertising”. She has directed more than 1,000 advertising films and innumerous branded content projects. In 2011, was her feature film debut, with the documentary “The Samba Inside Me”. She has also been working with contemporary art since 2015, as curator and director of the project “THROUGH”, having produced more than 400 mini documentaries about the artists’ creative process.'
		},
		{
			id: 3,
			picture: julio,
			// picture: 'http://caferoyal.art.br/wp-content/uploads/2020/04/julio_round.png',
			name: 'Julio Hey',
			description: 'In 2017, he launched his first documentary “Clown” (with GloboNews and Canal Brasil). In 2018, he was associate producer of “Hibridos, the spirits of Brazil”, a film by Vincent Moon and Priscilla Telmon, which immerses in the Sacred Brazilian culture throughout the music, exhibited at MOMA in NY, at Barbican in London, and at IDFA in Amsterdam. He is currently working on the post-production of two other feature documentaries that he co-directed with Daniel Hey: “Samadhi Road”, in which interviews are conducted with world-renowned characters such as Sonny Rollins (jazz player), Sir Jackie Stewart (former F1 driver), Gilberto Gil (musician), Paulo Coelho (writer), Agnes Heller (philosopher), João Carlos Martins (conductor), Kaz Tanahashi (peace activist) and Robert Thurman (teacher of Tibetan Buddhism). And “From Love No One Escapes”, a journey through fundamental aspects that make up an atmosphere of transformation of an APAC, a Brazilian humanized system of imprisonment that has gained international recognition by creating jails without guards or guns.'
		},
		{
			id: 4,
			picture: luiz,
			// picture: 'http://caferoyal.art.br/wp-content/uploads/2020/04/luiz_round.png',
			name: 'Luiz Villaça',
			description: 'For the cinematographic market, he has directed and scripted the films:  “Behind that Curtain” (1999), “Cristina Wants to Get Married” (Fox/ 2003), “The Storyteller” (Warner/ 2009) and “From Where I See You” (Warner Bros./ 2016. In 2017, he launched the documentary “Clown” (Globo News and Canal Brasil). For the TV, he created and directed several programs at Globo, such as: “Portrait”, “Mel’s World Cups”, “Glory Days”, “I Want You America”, “Norma” and “The Mayor’s Wife”, show nominated to the Emmy Internacional in 2014. In 2013 and 2014, he created and directed the two seasons of the show “3 Teresas” for the channel GNT. In 2015, he created and directed the show “Neighbors”, for GNT as well. In the theater, he directed the plays “The Visit from the Old Lady” (in 2017, by Friedrich Durrenmatt), “Descent Morgan Mount” (in 2013, by Arthur Miller) and “Without Thinking” (in 2011, by Anya Reiss). He also produced “The Good Soul” (in 2009), “Setsuan” and “Galileu Galilei” (both in 2015, by Bertold Brecht). Currently, he is finalizing his next film, “45 of the Second Half” (with Paris Filmes).'
		},
		{
			id: 5,
			picture: moa,
			// picture: 'http://caferoyal.art.br/wp-content/uploads/2020/04/moa_round2.jpg',
			name: 'Moa Ramalho',
			description: 'Executive producer of films, tv, music, and advertising productions, Moa has in his portfolio films such as “Playing at the Lord’s Fields”, by Hector Babenco, “Country of the Lieutenants”, by João Batista de Andrade, “Happy Old Year”, by Roberto Gervitz, “Antonia”, by Tata Amaral and “Elis”, by Hugo Prata. For the tv channel Turner, he has produced “Fashion TV” (in diverse cities around the world) and “A Day With”. For the channel OFF, he has produced “Children of This Land”. For the music market, he has produced several special DVDs such as: “Mutantes at Barbican” in London, “Rediscover” for Maria Rita, and “Lovers’ Street” for Djavan. In the advertising field, he has handled the executive production of more than 20 branded content projects and 1,500 films.'
		},
	]

	return (
		<div>
			<div className='header'>
				<div>
					<h1>About us</h1>
					<p>
						We are storytellers. Our daily routine is amidst cinema, tv shows, theater, advertising, branded content and visual arts.<br/>
						Our essence is composed of thought, human values, understanding, group.<br/>
						Our purpose is to tell stories capable of conveying, transforming, moving.
					</p>
				</div>
			</div>
			<div className='directorsBg'>
				{directors.map(director => {
					return (
						<div className='directContainer'>
							<img src={director.picture} alt={director.name} width='20%'/>
							<div>
								<h2>{director.name}</h2>
								<p>{director.description}</p>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}
