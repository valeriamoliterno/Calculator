/**************************************************************************
* In questo file è riportato l'endpoint richiesto e alcune funzioni       *
* utilitarie                                                              *
***************************************************************************/

const express = require('express');
const router = express.Router();


// chiamata post
router.post('/', async (req, res) => {
	const n1 = parseInt(req.body.n1);
	const n2 = parseInt(req.body.n2);

	const count = n1 + n2 + nextPrime(maxNumber(n1, n2));

	res.status(200).json({ result: count });
});


/**
 * controlla se un numero è primo; secondo un teorema matematico basta cercare divisori 
 * solo fino alla radice quadrata del numero
 */
function isPrime(number) {
	const checkPrime = (nr, limit) => {
		for (let start = 3; start <= limit; start += 2) {
			if (0 === nr % start) {
				return false;
			}
		}
		return nr > 1;
	};
	return number === 2 || number % 2 !== 0 && checkPrime(number, Math.sqrt(number));
}

// trova il primo numero primo maggiore di n
function nextPrime(n) {
	let prime = n + 1;
	while (!isPrime(prime)) {
		prime++;
	}
	return prime;
}

// ritorna il maggiore tra i due numeri
function maxNumber(nr1, nr2) {
	return nr1 > nr2 ? nr1 : nr2;
}

module.exports = router;