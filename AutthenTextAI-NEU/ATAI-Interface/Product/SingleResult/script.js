const storedAttributes = localStorage.getItem("extractedAttributes");
const  char = localStorage.getItem("totalCharacters");


// Parse the stored JSON string back into a JavaScript object
const extractedAttributes = JSON.parse(storedAttributes);

console.log(extractedAttributes);

const totalCharacters = JSON.parse(char);

let h = extractedAttributes.h;
let inputTextValue = extractedAttributes.originalParagraph;

let percentage = extractedAttributes.fakePercentage;
console.log(extractedAttributes.feedback);
console.log(inputTextValue);

let text = extractedAttributes.originalParagraph;

//let text = extractedAttributes.h;

let feedback = extractedAttributes.feedback;

function countSentences(text) {
    // Define the punctuation marks that indicate the end of a sentence
    var punctuationMarks = [".", "!", "?"];

    // Initialize the sentence counter
    var sentenceCount = 0;

    // Iterate through each character in the text
    for (var i = 0; i < text.length; i++) {
        // If the current character is a punctuation mark indicating the end of a sentence,
        // and it's not followed by another punctuation mark, increment the sentence counter
        if (punctuationMarks.includes(text[i]) && (i === text.length - 1 || !punctuationMarks.includes(text[i + 1]))) {
            sentenceCount++;
        }
    }

    // Return the total number of sentences
    return sentenceCount;
}

document.addEventListener('DOMContentLoaded', function() {
    // Modify the "Human" progress bar

    let humanPercentage = extractedAttributes.isHuman;
    var total = 100;
    
    const humanProgressBar = document.getElementById('.prbr-cl');
    

    if (typeof humanPercentage === "undefined" || humanPercentage === null || humanPercentage == 0) {
        humanPercentage = total - percentage;
        humanPercentage = humanPercentage.toFixed(2);
    }
    else{
        humanPercentage = extractedAttributes.isHuman;
    }

    console.log(humanPercentage);
    
    humanProgressBar.setAttribute('num', `${humanPercentage}%`);
    humanProgressBar.style.setProperty('--prcnt', `${humanPercentage}`);
    
});

document.addEventListener('DOMContentLoaded', function() {
let humanPercentage = extractedAttributes.isHuman;
// Modify the "AI" progress bar
const aiProgressBar = document.getElementById('.ai-prbr-cl');
aiProgressBar.setAttribute('num', `${percentage}%`);
aiProgressBar.style.setProperty('--prcnt', `${percentage}`);

const feedbackDiv = document.getElementById('feedback');
feedbackDiv.textContent = `${feedback}`;
var sentenceCount = countSentences(inputTextValue);
const aiSentences = document.getElementById('sentences');
var hLength = h.length;
if(hLength > sentenceCount){
    aiSentences.textContent = `${hLength} phrases are likely AI generated from this document`;
}

if(humanPercentage==100){
    
     aiSentences.textContent = `${hLength}/${sentenceCount} sentences are likely AI generated from this document`;
}
else{
aiSentences.textContent = `${hLength} section/s highlighted in this document is/are likely AI generated`;
}

const char = document.getElementById('char_count');
char.textContent = `${totalCharacters} characters / ${extractedAttributes.textWords} words`;

let example = inputTextValue;

// Define an array of strings

// Highlight matching text
h.forEach(function(str) {
    var regex = new RegExp('(' + str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
    example = example.replace(regex, '<span class="highlight">$1</span>');
});

// Replace \n with <br> tags for line breaks
example = example.replace(/\n/g, '<br>');

// Update the content of the inputText div with highlighted text and line breaks
document.getElementById("inputText").innerHTML = example;

});


console.log(extractedAttributes.h); // Example usage