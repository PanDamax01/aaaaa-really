const daysOfWeek = document.querySelector('.days')
const text = document.querySelector('.text')
const ballonBtn = document.querySelector('.btn')
const canvas = document.querySelector('#confetti')

const data = new Date()
const days = [
	'Niedziela',
	'Poniedziałek',
	'Wtorek',
	'Środa',
	'Czwartek',
	'Piątek',
	'Sobota',
]
daysOfWeek.textContent = days[data.getDay()]

const proverbs = [
	'Sukces to beznadziejny nauczyciel. Zwodzi inteligentnych ludzi, mamiąc ich, że od tej pory wszystko im się uda.',
	'Nie ma nic złego w świętowaniu sukcesu, ale ważniejsze jest wyciągnięcie nauki z porażki.',
	'Bóg dał nam zmysły, abyśmy czuli miłość, a nie złudzenia wywołane przez bogactwo.',
	'Aby zerwać z nawykiem, wyrób sobie inny, który go wymarze.',
	'Twój czas jest ograniczony, więc nie marnuj go na bycie kimś kim nie jesteś.',
	'Pudłujesz 100% strzałów, jeżeli ich w ogóle nie wykonujesz.',
	'Na szczycie zawsze znajdzie się miejsce.',
	'Człowiek, który goni dwa zające nie złapie ani jednego.',
	'Zawsze wydaje się, że coś jest niemożliwe, dopóki nie zostanie to zrobione.',
	'Aby przebyć tysiąc mil, trzeba zrobić pierwszy krok.',
	'Człowiek ma w życiu albo wymówki, albo wyniki.',
	'Prawdziwe bogactwo to nie to, ile twoja praca pozwoli ci zarobić, ale to, kim cię uczyni.',
	'Lepiej zużywać się niż rdzewieć.',
	'Zazwyczaj mamy dość czasu, jeżeli potrafimy wykorzystać go właściwie.',
	'Puste kieszenie nigdy nie powstrzymały nikogo przed podjęciem działania. Mogą to zrobić tylko puste głowy i puste serca.',
	'Ludzie, którzy tracą czas, czekając, aż zaistnieją najbardziej sprzyjające warunki, nigdy nic nie zdziałają. Najlepszy czas na działanie jest teraz!',
	'Cierpliwość może być gorzka, ale jej owoce są zawsze słodkie.',
	'Sukces to nie to, co masz, ale to, kim jesteś.',
	'Jeśli chcesz być tam, gdzie nigdy nie byłeś, musisz iść drogą, którą nigdy nie szedłeś. Jeśli chcesz osiągnąć to, czego nigdy nie miałeś, musisz robić to, czego nigdy nie robiłeś.',
	'Żaden wiatr nie jest pomyślny temu, który nie wie, do którego portu płynie.',
	'Najlepszą metodą przewidywania przyszłości jest jej tworzenie.',
	'Jeżeli robisz to, co zawsze robiłeś, dostaniesz w zamian to, co zawsze dostajesz.',
	'Jakże szybko „nie teraz” staje się „nigdy”.',
]

const randomProverbs = () => {
	const number = Math.floor(Math.random() * proverbs.length)
	text.textContent = proverbs[number]
}
randomProverbs()

const jsConfetti = new JSConfetti()

const animateConfetti = () => {
	jsConfetti
		.addConfetti({
			emojis: ['🌈', '⚡️', '💥', '✨', '🤪', '🌸'],
		})
		.then(() => jsConfetti.addConfetti())
}
setTimeout(animateConfetti(), 300)
ballonBtn.addEventListener('click', animateConfetti)
