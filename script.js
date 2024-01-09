let adjective = prompt("Enter an adjective:");
let noun = prompt("Enter a noun:");
let verb = prompt("Enter a verb:");
let adverb = prompt("Enter an adverb:");

let story = `Once upon a time, during a ${adjective} and ${color} afternoon, I ${adverb} went on a ${adjective} journey to the theaters to watch the latest Barbie movie, titled "Barbie's ${adjective} ${noun}." Excitement bubbled within me as I ${verb} into my ${adjective} seat, surrounded by a ${noun} of ${verb-ing} ${noun} adorned in ${noun} and ${adjective} ${noun}. The aroma of ${adjective} popcorn wafted through the air, creating a ${adjective} ambiance fit for a ${adjective} tale. As the ${noun} dimmed, the ${adjective} world of ${character} unfolded on the big ${noun}, transporting us into a ${noun} where ${noun} and ${noun} collided in a ${adjective} dance. With each ${adjective} twist and ${noun}, I couldn't help but be $[verb] away by the ${adjective} spectacle, leaving the ${noun} with a ${noun} full of ${noun} and a newfound appreciation for the ${noun} that is a ${character} adventure on the ${adjective} ${noun}.`;

let madLibOutputDiv = document.getElementById("madLibOutput");

madLibOutputDiv.innerHTML = `<p>${story}</p>`;
