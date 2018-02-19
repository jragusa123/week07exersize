//zodiac project: use an array of objects and attributes:
console.log("start here")
var zodiac = [
	{
		zodiacName: "aries",
		birthdayRange: "March 21 - April 19",
		attributes: "The detriment of the Sun suddenly becomes clear as you rush into things that don’t really feel as good as you would want them to. Take a step back, refusing to force yourself into anything out of respect for other people or social norms that keep you tied up.",
		picture: "http://www.astrology-zodiac-signs.com/images/aries.jpg"
	},
	{
		zodiacName: "cancer",
		birthdayRange: "June 21 - July 22",
		attributes: "Some feelings and relationships are bound to end. If you hold on to them for too long, they will just drain your energy away and make you feel too weak to start something new. Regenerate and see where your boundaries lie, aware that the time for change is here.",
		picture: "http://www.astrology-zodiac-signs.com/images/cancer.jpg"
	},
	{
		zodiacName: "taurus",
		birthdayRange: "April 20 - May 20",
		attributes: "Male German drivers made BMW change their GPS system, refusing to take directions from a female voice. It is important to see the way you need to talk to some people to make them understand your position",
		picture: "http://www.astrology-zodiac-signs.com/images/taurus.jpg"
	},
	{
		zodiacName: "gemini",
		birthdayRange: "May 21 - June 20",
		attributes: "The love you believe in should be set as your goal today, but this is more of a love for yourself than for any other human being. To see yourself clearly and in all the glory of your personality, you’ll have to face some shadows and become your own opponent to find middle grounds.",
		picture: "http://www.sagethegeminiofficial.com/images/about-new.jpg"
	},
	{
		zodiacName: "capricorn",
		birthdayRange: "December 22 - January 19",
		attributes: "Everything turned out just as you expected it to, in the end. Be satisfied with your assessments and the way your mind processed everything that has been happening around you, aware of your need to make progress in any circumstances however tough they are.",
		picture: "https://www.horoscope.com/images-US/signs/profile-capricorn.png"
	},
	{
		zodiacName: "sagittarius",
		birthdayRange: "November 22 - December 21",
		attributes: "Feelings you have today might clear the skies and make you see things you have doubted for a long time with clarity. Rely on your emotions, not letting rational judgment and patterns you chose to follow years ago, taint your realistic image.",
		picture: "https://www.horoscope.com/images-US/signs/profile-sagittarius.png"
	},
	{
		zodiacName: "pisces",
		birthdayRange: "February 19 - March 20",
		attributes: "With Mercury knocking on your door today, you will be reminded of all incompetency and lack of confidence to express yourself that you have tried to shove under the rug. ",
		picture: "http://www.astrology-zodiac-signs.com/images/pisces.jpg"
	},
	{
		zodiacName: "aquarius",
		birthdayRange: "January 20 - February 18",
		attributes: "Japanese folklore sees otters as shapeshifting creatures that turned into beautiful women or small children to kill men. Some truly harmless things and relationships could turn out to be something entirely different than your primal perspective allowed you to see.",
		picture: "http://www.astrology-zodiac-signs.com/images/aquarius.jpg"
	},
	{
		zodiacName: "scorpio",
		birthdayRange: "October 23 - November 21",
		attributes: "The densest hair in the world is that of an otter. The strength of your personality hides in all the masks you can wear on your face at the moment, camouflaging and putting yourself through extreme conditions not showing how you really feel.",
		picture: "http://www.astrology-zodiac-signs.com/images/scorpio.jpg"
	},
	{
		zodiacName: "virgo",
		birthdayRange: "August 23 - September 22",
		attributes: "Ready for changes, once again, you will try to make some moves that will allow room for personal growth. Still, this doesn’t seem to be enough today, especially when stress from your workplace kicks in and you realize that too many things from your rational mind need to clear up.",
		picture: "http://www.astrology-zodiac-signs.com/images/virgo.jpg"
	},
	{
		zodiacName: "libra",
		birthdayRange: "September 23 - October 22",
		attributes: "You have a tendency to close your heart, feeling guilty for some choices you have made in the past. It is up to you to take responsibility and react appropriately, ready to never make the same mistakes again for your lessons have been learned.",
		picture: "http://www.astrology-zodiac-signs.com/images/libra.jpg"
	},
	{
		zodiacName: "leo",
		birthdayRange: "July 23 - August 22",
		attributes: "People born under the sign of Leo are natural born leaders. They are dramatic, creative, self-confident, dominant and extremely difficult to resist, able to achieve anything they want to in any area of life they commit to. There is a specific strength to a Leo and their "king of the jungle" status. Leo often has many friends for they are generous and loyal. Self-confident and attractive, this is a Sun sign capable of uniting different groups of people and leading them as one towards a shared cause, and their healthy sense of humor makes collaboration with other people even easier.",
		picture: "http://www.astrology-zodiac-signs.com/images/leo.jpg"
	}
]

// write a function to call appropriate zodiacName:
function astSign() {
	console.log("working")

	var userInput = document.getElementById("your-sign").value.toLowerCase()

	var sign = document.getElementById("yourSign")
	var range = document.getElementById("birthdayRange")
	var attributes = document.getElementById("attributes")
	var img = document.getElementById("zodiacImage")

	for(i = 0; i < zodiac.length; i++) {
		if(userInput == zodiac[i].zodiacName) {
			sign.innerHTML = zodiac[i].zodiacName

			range.innerHTML = zodiac[i].birthdayRange
			attributes.innerHTML = zodiac[i].attributes
			img.src = zodiac[i].picture
			return
		} else {
			sign.innerHTML = "oops! That's not a sign. Try again"
			range.innerHTML = " "
			attributes.innerHTML = " "
			img.src = "http://courtneysgamecoderocks.com/ZodiacProject/img/wrong.png"
		}
	}
}
