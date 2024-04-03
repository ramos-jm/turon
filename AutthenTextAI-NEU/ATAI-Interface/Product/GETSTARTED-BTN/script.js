function chatgpt(){
  var text = "The advent of electric vehicles has been touted as a cornerstone in the transition towards sustainable transportation. With global efforts to reduce carbon emissions and mitigate climate change, EVs have gained substantial attention and investment. This paper aims to dissect the multifaceted nature of EVs, weighing their advantages against the inherent limitations.\n\nBenefits of Electric Vehicles:\n\nEnvironmental Impact:\nEVs offer a substantial reduction in greenhouse gas emissions, especially when powered by renewable energy sources. The absence of tailpipe emissions contributes significantly to improving air quality in urban areas.\n\nEnergy Efficiency:\nElectric vehicles are inherently more efficient than their internal combustion engine counterparts. The direct conversion of electrical energy to power provides a higher efficiency rate, reducing overall energy consumption.\n\nPerformance Advantages:\nElectric motors can provide instant torque, offering a smooth and swift acceleration. This feature, combined with low center of gravity designs, often results in superior handling and an enhanced driving experience.\n\nDrawbacks of Electric Vehicles:\n\nLimited Range and Range Anxiety:\nDespite advancements, most EVs still offer a limited range compared to gasoline vehicles. This limitation, coupled with long charging times, contributes to range anxiety among potential consumers.\n\nCharging Infrastructure:\nThe lack of widespread and uniform charging infrastructure remains a significant barrier. The variability in charging station availability, especially in rural or underserved urban areas, poses a challenge for long-distance travel.\n\nConclusion:\nElectric vehicles present a promising avenue towards a more sustainable future in personal transportation. They offer substantial environmental benefits, improved efficiency, and performance advantages. However, challenges like limited range, underdeveloped charging infrastructure, battery issues, high upfront costs, and the potential impact on the power grid remain substantial hurdles. Addressing these challenges is crucial for the widespread adoption and long-term success of electric vehicles. As technology advances and infrastructure improves, the balance of these factors may shift further in favor of EVs, solidifying their position as a viable alternative to traditional combustion engines.";
  insertText(text);
  var h =[
    "The advent of electric vehicles has been touted as a cornerstone in the transition towards sustainable transportation.",   
      "With global efforts to reduce carbon emissions and mitigate climate change, EVs have gained substantial attention and investment.",
      "This paper aims to dissect the multifaceted nature of EVs, weighing their advantages against the inherent limitations.", 
      "Benefits of Electric Vehicles:",
      "Environmental Impact:",
      "EVs offer a substantial reduction in greenhouse gas emissions, especially when powered by renewable energy sources.",      
      "The absence of tailpipe emissions contributes significantly to improving air quality in urban areas.",
      "Energy Efficiency:",
      "Electric vehicles are inherently more efficient than their internal combustion engine counterparts.",
      "The direct conversion of electrical energy to power provides a higher efficiency rate, reducing overall energy consumption.",
      "This feature, combined with low center of gravity designs, often results in superior handling and an enhanced driving experience.",      
      "Drawbacks of Electric Vehicles:",  
      "This limitation, coupled with long charging times, contributes to range anxiety among potential consumers.",        
      "Charging Infrastructure:",
      "The lack of widespread and uniform charging infrastructure remains a significant barrier.",
      "The variability in charging station availability, especially in rural or underserved urban areas, poses a challenge for long-distance travel.",
      "Electric vehicles present a promising avenue towards a more sustainable future in personal transportation.",
      "However, challenges like limited range, underdeveloped charging infrastructure, battery issues, high upfront costs, and the potential impact on the power grid remain substantial hurdles.",
      "Addressing these challenges is crucial for the widespread adoption and long-term success of electric vehicles.",
      "As technology advances and infrastructure improves, the balance of these factors may shift further in favor of EVs, solidifying their position as a viable alternative to traditional combustion engines."]; 

  var isHuman = 0; 
  var feedback = "Your Text is AI/GPT Generated";
  var inputText= "The advent of electric vehicles has been touted as a cornerstone in the transition towards sustainable transportation. With global efforts to reduce carbon emissions and mitigate climate change, EVs have gained substantial attention and investment. This paper aims to dissect the multifaceted nature of EVs, weighing their advantages against the inherent limitations.\n\nBenefits of Electric Vehicles:\n\nEnvironmental Impact:\nEVs offer a substantial reduction in greenhouse gas emissions, especially when powered by renewable energy sources. The absence of tailpipe emissions contributes significantly to improving air quality in urban areas.\n\nEnergy Efficiency:\nElectric vehicles are inherently more efficient than their internal combustion engine counterparts. The direct conversion of electrical energy to power provides a higher efficiency rate, reducing overall energy consumption.\n\nPerformance Advantages:\nElectric motors can provide instant torque, offering a smooth and swift acceleration. This feature, combined with low center of gravity designs, often results in superior handling and an enhanced driving experience.\n\nDrawbacks of Electric Vehicles:\n\nLimited Range and Range Anxiety:\nDespite advancements, most EVs still offer a limited range compared to gasoline vehicles. This limitation, coupled with long charging times, contributes to range anxiety among potential consumers.\n\nCharging Infrastructure:\nThe lack of widespread and uniform charging infrastructure remains a significant barrier. The variability in charging station availability, especially in rural or underserved urban areas, poses a challenge for long-distance travel.\n\nConclusion:\nElectric vehicles present a promising avenue towards a more sustainable future in personal transportation. They offer substantial environmental benefits, improved efficiency, and performance advantages. However, challenges like limited range, underdeveloped charging infrastructure, battery issues, high upfront costs, and the potential impact on the power grid remain substantial hurdles. Addressing these challenges is crucial for the widespread adoption and long-term success of electric vehicles. As technology advances and infrastructure improves, the balance of these factors may shift further in favor of EVs, solidifying their position as a viable alternative to traditional combustion engines.";
  var specialIndexes= 0;
  var additional_feedback="";
  var aiWords = 271;
  var textWords = 313;
  var fakePercentage = 86.59;
  var originalParagraph = "The advent of electric vehicles has been touted as a cornerstone in the transition towards sustainable transportation. With global efforts to reduce carbon emissions and mitigate climate change, EVs have gained substantial attention and investment. This paper aims to dissect the multifaceted nature of EVs, weighing their advantages against the inherent limitations.\n\nBenefits of Electric Vehicles:\n\nEnvironmental Impact:\nEVs offer a substantial reduction in greenhouse gas emissions, especially when powered by renewable energy sources. The absence of tailpipe emissions contributes significantly to improving air quality in urban areas.\n\nEnergy Efficiency:\nElectric vehicles are inherently more efficient than their internal combustion engine counterparts. The direct conversion of electrical energy to power provides a higher efficiency rate, reducing overall energy consumption.\n\nPerformance Advantages:\nElectric motors can provide instant torque, offering a smooth and swift acceleration. This feature, combined with low center of gravity designs, often results in superior handling and an enhanced driving experience.\n\nDrawbacks of Electric Vehicles:\n\nLimited Range and Range Anxiety:\nDespite advancements, most EVs still offer a limited range compared to gasoline vehicles. This limitation, coupled with long charging times, contributes to range anxiety among potential consumers.\n\nCharging Infrastructure:\nThe lack of widespread and uniform charging infrastructure remains a significant barrier. The variability in charging station availability, especially in rural or underserved urban areas, poses a challenge for long-distance travel.\n\nConclusion:\nElectric vehicles present a promising avenue towards a more sustainable future in personal transportation. They offer substantial environmental benefits, improved efficiency, and performance advantages. However, challenges like limited range, underdeveloped charging infrastructure, battery issues, high upfront costs, and the potential impact on the power grid remain substantial hurdles. Addressing these challenges is crucial for the widespread adoption and long-term success of electric vehicles. As technology advances and infrastructure improves, the balance of these factors may shift further in favor of EVs, solidifying their position as a viable alternative to traditional combustion engines.";
  const extractedAttributes = {
    h: h, // Extract 'h' attribute
    isHuman: isHuman,
    feedback: feedback,
    input_text: inputText,
    specialIndexes: specialIndexes,
    additional_feedback: additional_feedback,
    aiWords: aiWords, // Extract 'aiWords' attribute
    textWords: textWords, // Extract 'textWords' attribute
    fakePercentage: fakePercentage, // Extract 'fakePercentage' attribute
    originalParagraph: originalParagraph // Extract 'originalParagraph' attribute

};
console.log(extractedAttributes);
localStorage.setItem("extractedAttributes", JSON.stringify(extractedAttributes));
window.location.href = "../SingleResult/index.html";

}

function gpt4(){
  var text = "⁤Basketball is a dynamic and widely popular sport that originated in 1891 when Dr. James Naismith, a physical education instructor, sought to keep his students active during the winter. ⁤⁤He devised a game involving a ball and two peach baskets, laying the foundation for what would evolve into modern basketball. ⁤⁤The objective is to score points by shooting the ball through the opposing team's hoop, a task complicated by the rules and the opposing team's defense. ⁤\n\n\n⁤The game is played on a rectangular court with a hoop at each end. ⁤⁤Standard rules include dribbling the ball while moving, passing it to teammates, and attempting to score by shooting. ⁤⁤Each game is divided into four quarters, with the team having the most points at the end winning. ⁤⁤Violations such as traveling (moving without dribbling), double dribbling, and various forms of illegal physical contact can lead to turnovers or free throws. ⁤\n\n\n⁤Basketball has grown into a global phenomenon with multiple leagues. ⁤⁤The National Basketball Association (NBA) in the United States is the most prominent, featuring elite players and a massive following. ⁤⁤Other significant leagues include the EuroLeague, the Chinese Basketball Association, and the National Collegiate Athletic Association (NCAA), which showcases university-level talent in the U.S. ⁤\n\n\n⁤Internationally, the sport is governed by the International Basketball Federation (FIBA), which oversees world championships and sets the rules for international play, slightly different from those in the NBA. ⁤\n\n\n⁤From its humble beginnings to its current status as a global sporting powerhouse, basketball continues to captivate fans with its blend of strategic play, athletic prowess, and dynamic action. ⁤⁤Whether at the amateur or professional level, it unites players and fans alike in their passion for the game. ⁤";
  insertText(text);
  var h =["⁤Basketball is a dynamic and widely popular sport that originated in 1891 when Dr. James Naismith, a physical education instructor, sought to keep his students active during the winter. ⁤⁤He devised a game involving a ball and two peach baskets, laying the foundation for what would evolve into modern basketball. ⁤⁤The objective is to score points by shooting the ball through the opposing team's hoop, a task complicated by the rules and the opposing team's defense. ⁤",
  "⁤The game is played on a rectangular court with a hoop at each end. ⁤⁤Standard rules include dribbling the ball while moving, passing it to teammates, and attempting to score by shooting. ⁤⁤Each game is divided into four quarters, with the team having the most points at the end winning. ⁤⁤Violations such as traveling (moving without dribbling), double dribbling, and various forms of illegal physical contact can lead to turnovers or free throws. ⁤",
  "⁤Basketball has grown into a global phenomenon with multiple leagues. ⁤⁤The National Basketball Association (NBA) in the United States is the most prominent, featuring elite players and a massive following. ⁤⁤Other significant leagues include the EuroLeague, the Chinese Basketball Association, and the National Collegiate Athletic Association (NCAA), which showcases university-level talent in the U.S. ⁤"
  ];
    
  var isHuman = 0; 
  var feedback = "Your Text is AI/GPT Generated";
  var inputText= "⁤Basketball is a dynamic and widely popular sport that originated in 1891 when Dr. James Naismith, a physical education instructor, sought to keep his students active during the winter. ⁤⁤He devised a game involving a ball and two peach baskets, laying the foundation for what would evolve into modern basketball. ⁤⁤The objective is to score points by shooting the ball through the opposing team's hoop, a task complicated by the rules and the opposing team's defense. ⁤\n\n\n⁤The game is played on a rectangular court with a hoop at each end. ⁤⁤Standard rules include dribbling the ball while moving, passing it to teammates, and attempting to score by shooting. ⁤⁤Each game is divided into four quarters, with the team having the most points at the end winning. ⁤⁤Violations such as traveling (moving without dribbling), double dribbling, and various forms of illegal physical contact can lead to turnovers or free throws. ⁤\n\n\n⁤Basketball has grown into a global phenomenon with multiple leagues. ⁤⁤The National Basketball Association (NBA) in the United States is the most prominent, featuring elite players and a massive following. ⁤⁤Other significant leagues include the EuroLeague, the Chinese Basketball Association, and the National Collegiate Athletic Association (NCAA), which showcases university-level talent in the U.S. ⁤\n\n\n⁤Internationally, the sport is governed by the International Basketball Federation (FIBA), which oversees world championships and sets the rules for international play, slightly different from those in the NBA. ⁤\n\n\n⁤From its humble beginnings to its current status as a global sporting powerhouse, basketball continues to captivate fans with its blend of strategic play, athletic prowess, and dynamic action. ⁤⁤Whether at the amateur or professional level, it unites players and fans alike in their passion for the game. ⁤";
  var specialIndexes= 0;
  var additional_feedback = "Please input more text for a more accurate result";
  var aiWords = 206;
  var textWords = 285;
  var fakePercentage = 72.28;
  var originalParagraph = "⁤Basketball is a dynamic and widely popular sport that originated in 1891 when Dr. James Naismith, a physical education instructor, sought to keep his students active during the winter. ⁤⁤He devised a game involving a ball and two peach baskets, laying the foundation for what would evolve into modern basketball. ⁤⁤The objective is to score points by shooting the ball through the opposing team's hoop, a task complicated by the rules and the opposing team's defense. ⁤\n\n\n⁤The game is played on a rectangular court with a hoop at each end. ⁤⁤Standard rules include dribbling the ball while moving, passing it to teammates, and attempting to score by shooting. ⁤⁤Each game is divided into four quarters, with the team having the most points at the end winning. ⁤⁤Violations such as traveling (moving without dribbling), double dribbling, and various forms of illegal physical contact can lead to turnovers or free throws. ⁤\n\n\n⁤Basketball has grown into a global phenomenon with multiple leagues. ⁤⁤The National Basketball Association (NBA) in the United States is the most prominent, featuring elite players and a massive following. ⁤⁤Other significant leagues include the EuroLeague, the Chinese Basketball Association, and the National Collegiate Athletic Association (NCAA), which showcases university-level talent in the U.S. ⁤\n\n\n⁤Internationally, the sport is governed by the International Basketball Federation (FIBA), which oversees world championships and sets the rules for international play, slightly different from those in the NBA. ⁤\n\n\n⁤From its humble beginnings to its current status as a global sporting powerhouse, basketball continues to captivate fans with its blend of strategic play, athletic prowess, and dynamic action. ⁤⁤Whether at the amateur or professional level, it unites players and fans alike in their passion for the game. ⁤";
  

  const extractedAttributes = {
    h: h, // Extract 'h' attribute
    isHuman: isHuman,
    feedback: feedback,
    input_text: inputText,
    specialIndexes: specialIndexes,
    additional_feedback: additional_feedback,
    aiWords: aiWords, // Extract 'aiWords' attribute
    textWords: textWords, // Extract 'textWords' attribute
    fakePercentage: fakePercentage, // Extract 'fakePercentage' attribute
    originalParagraph: originalParagraph // Extract 'originalParagraph' attribute

};
console.log(extractedAttributes);
localStorage.setItem("extractedAttributes", JSON.stringify(extractedAttributes));
window.location.href = "../SingleResult/index.html";
}


function llama(){
  var text = "Ah, the sweet and thrilling sport of ice hockey! Hockey is an exhilarating team sport played on frozen ice rinks across the globe. ⁤⁤Here's my attempt to verbosely describe this fast-paced, physical, and strategic game: ⁤\n\n\n⁤Hockey is a symphony of movement and skill, where players glide effortlessly on their skates while wielding curved sticks that can unleash lightning-fast shots or precise passes. ⁤⁤The objective? ⁤⁤To score more goals than your opponents by navigating the rink with grace, agility, and cunning. ⁤⁤Two teams of six players each compete in a high-stakes battle of endurance, speed, and strategy, as they race around the ice in pursuit of victory. ⁤\n\n\n⁤Each player brings their unique skills and strengths to the table - forwards are quick and agile, defensemen are strong and stoic, and goalies are masters of positioning and reflexes. ⁤⁤They work together seamlessly, anticipating each other's moves and countermoves like a well-choreographed dance. ⁤⁤Players must possess exceptional hand-eye coordination to handle their sticks deftly, expertly controlling the puck (a rubber disc) and executing precise maneuvers at breakneck speeds. ⁤\n\n\n⁤In conclusion, hockey is a captivating spectacle that demands respect, athleticism, and camaraderie among its participants. ⁤⁤It combines elements of gymnastics, boxing, soccer, and ballet, all rolled into one electrifying display of human performance art. ⁤⁤Whether you're new to the sport or a lifelong fanatic, there's no denying the raw energy, excitement, and drama that defines the great game of hockey. ⁤⁤So grab your skates, lace up those helmets, and get ready to experience the sheer exhilaration of this beloved winter classic! ⁤";
  insertText(text);

  var h =[
    "Ah, the sweet and thrilling sport of ice hockey!",
    "Hockey is an exhilarating team sport played on frozen ice rinks across the globe. ⁤⁤Here's my attempt to verbosely describe this fast-paced, physical, and strategic game: ⁤",
    "⁤Hockey is a symphony of movement and skill, where players glide effortlessly on their skates while wielding curved sticks that can unleash lightning-fast shots or precise passes. ⁤⁤The objective? ⁤⁤To score more goals than your opponents by navigating the rink with grace, agility, and cunning. ⁤⁤Two teams of six players each compete in a high-stakes battle of endurance, speed, and strategy, as they race around the ice in pursuit of victory. ⁤"
  ];
  var isHuman = 12.5; 
  var feedback = "Most of Your Text is AI/GPT Generated";
  var inputText= "Ah, the sweet and thrilling sport of ice hockey! Hockey is an exhilarating team sport played on frozen ice rinks across the globe. ⁤⁤Here's my attempt to verbosely describe this fast-paced, physical, and strategic game: ⁤\n\n\n⁤Hockey is a symphony of movement and skill, where players glide effortlessly on their skates while wielding curved sticks that can unleash lightning-fast shots or precise passes. ⁤⁤The objective? ⁤⁤To score more goals than your opponents by navigating the rink with grace, agility, and cunning. ⁤⁤Two teams of six players each compete in a high-stakes battle of endurance, speed, and strategy, as they race around the ice in pursuit of victory. ⁤\n\n\n⁤Each player brings their unique skills and strengths to the table - forwards are quick and agile, defensemen are strong and stoic, and goalies are masters of positioning and reflexes. ⁤⁤They work together seamlessly, anticipating each other's moves and countermoves like a well-choreographed dance. ⁤⁤Players must possess exceptional hand-eye coordination to handle their sticks deftly, expertly controlling the puck (a rubber disc) and executing precise maneuvers at breakneck speeds. ⁤\n\n\n⁤In conclusion, hockey is a captivating spectacle that demands respect, athleticism, and camaraderie among its participants. ⁤⁤It combines elements of gymnastics, boxing, soccer, and ballet, all rolled into one electrifying display of human performance art. ⁤⁤Whether you're new to the sport or a lifelong fanatic, there's no denying the raw energy, excitement, and drama that defines the great game of hockey. ⁤⁤So grab your skates, lace up those helmets, and get ready to experience the sheer exhilaration of this beloved winter classic!⁤";
  var specialIndexes= 0;
  var additional_feedback="Please input more text for a more accurate result.";
  var aiWords = 108;
  var textWords = 261;
  var fakePercentage = 41.38;
  var originalParagraph = "Ah, the sweet and thrilling sport of ice hockey! Hockey is an exhilarating team sport played on frozen ice rinks across the globe. ⁤⁤Here's my attempt to verbosely describe this fast-paced, physical, and strategic game: ⁤\n\n\n⁤Hockey is a symphony of movement and skill, where players glide effortlessly on their skates while wielding curved sticks that can unleash lightning-fast shots or precise passes. ⁤⁤The objective? ⁤⁤To score more goals than your opponents by navigating the rink with grace, agility, and cunning. ⁤⁤Two teams of six players each compete in a high-stakes battle of endurance, speed, and strategy, as they race around the ice in pursuit of victory. ⁤\n\n\n⁤Each player brings their unique skills and strengths to the table - forwards are quick and agile, defensemen are strong and stoic, and goalies are masters of positioning and reflexes. ⁤⁤They work together seamlessly, anticipating each other's moves and countermoves like a well-choreographed dance. ⁤⁤Players must possess exceptional hand-eye coordination to handle their sticks deftly, expertly controlling the puck (a rubber disc) and executing precise maneuvers at breakneck speeds. ⁤\n\n\n⁤In conclusion, hockey is a captivating spectacle that demands respect, athleticism, and camaraderie among its participants. ⁤⁤It combines elements of gymnastics, boxing, soccer, and ballet, all rolled into one electrifying display of human performance art. ⁤⁤Whether you're new to the sport or a lifelong fanatic, there's no denying the raw energy, excitement, and drama that defines the great game of hockey. ⁤⁤So grab your skates, lace up those helmets, and get ready to experience the sheer exhilaration of this beloved winter classic! ⁤";
  const extractedAttributes = {
    h: h, // Extract 'h' attribute
    isHuman: isHuman,
    feedback: feedback,
    input_text: inputText,
    specialIndexes: specialIndexes,
    additional_feedback: additional_feedback,
    aiWords: aiWords, // Extract 'aiWords' attribute
    textWords: textWords, // Extract 'textWords' attribute
    fakePercentage: fakePercentage, // Extract 'fakePercentage' attribute
    originalParagraph: originalParagraph // Extract 'originalParagraph' attribute

};

console.log(extractedAttributes);
localStorage.setItem("extractedAttributes", JSON.stringify(extractedAttributes));
window.location.href = "../SingleResult/index.html";

}

function human(){
  var text = "Climate change has likely led to the decline of some of Scotland's mountain plants, according to new research. \n\nScientists said many of the species relied on snow cover remaining high on hills until late spring and even summer to ensure a moist environment. \n\nThey also said plants that thrived on lower ground in warmer conditions were spreading to mountain habitats. \n\nSpecies found to be in decline include snow pearlwort, alpine lady-fern, and alpine speedwell. \n\nThe research by the Botanical Society of Britain and Ireland (BSBI) has taken 20 years to complete and has been published in the new Plant Atlas. \n\nData used to produce the report included more than three million plant records of 2,555 species collected by hundreds of botanists across Scotland. \n\nClimate change, habitat loss, and the spread of non-native species were found to be key threats to the health of British and Irish native plants. \n\nBSBI said devastating losses of species in Scotland were among the findings. \n\nAlmost the entire British population of snow pearlwort is found on Ben Lawers, but half of the Perthshire mountain's known colonies have disappeared over the last 40 years.";
  insertText(text);
  var h =[];
  var isHuman = 100; 
  var feedback = "This text is entirely Human Generated";
  var inputText= "Climate change has likely led to the decline of some of Scotland's mountain plants, according to new research. \n\n\n\nScientists said many of the species relied on snow cover remaining high on hills until late spring and even summer to ensure a moist environment. \n\n\n\nThey also said plants that thrived on lower ground in warmer conditions were spreading to mountain habitats. \n\n\n\nSpecies found to be in decline include snow pearlwort, alpine lady-fern and alpine speedwell. \n\n\n\nThe research by the Botanical Society of Britain and Ireland (BSBI) has taken 20 years to complete and has been published in the new Plant Atlas. \n\n\n\n\n\nData used to produce the report included more than three million plant records of 2,555 species collected by hundreds of botanists across Scotland. \n\n\n\nClimate change, habitat loss and the spread of non-native species were found to key threats to the health of British and Irish native plants. \n\n\n\nBSBI said devastating losses of species in Scotland were among the findings. \n\n\n\nAlmost the entire British population of snow pearlwort is found on Ben Lawers, but half of the Perthshire mountain's known colonies have disappeared over the last 40 years.⁤";
  var specialIndexes= 0;
  var additional_feedback="Please input more text for a more accurate result.";
  var aiWords = 0;
  var textWords = 187;
  var fakePercentage = 0;
  var originalParagraph = "Climate change has likely led to the decline of some of Scotland's mountain plants, according to new research. \n\n\n\nScientists said many of the species relied on snow cover remaining high on hills until late spring and even summer to ensure a moist environment. \n\n\n\nThey also said plants that thrived on lower ground in warmer conditions were spreading to mountain habitats. \n\n\n\nSpecies found to be in decline include snow pearlwort, alpine lady-fern and alpine speedwell. \n\n\n\nThe research by the Botanical Society of Britain and Ireland (BSBI) has taken 20 years to complete and has been published in the new Plant Atlas. \n\n\n\n\n\nData used to produce the report included more than three million plant records of 2,555 species collected by hundreds of botanists across Scotland. \n\n\n\nClimate change, habitat loss and the spread of non-native species were found to key threats to the health of British and Irish native plants. \n\n\n\nBSBI said devastating losses of species in Scotland were among the findings. \n\n\n\nAlmost the entire British population of snow pearlwort is found on Ben Lawers, but half of the Perthshire mountain's known colonies have disappeared over the last 40 years.";
  const extractedAttributes = {
    h: h, // Extract 'h' attribute
    isHuman: isHuman,
    feedback: feedback,
    input_text: inputText,
    specialIndexes: specialIndexes,
    additional_feedback: additional_feedback,
    aiWords: aiWords, // Extract 'aiWords' attribute
    textWords: textWords, // Extract 'textWords' attribute
    fakePercentage: fakePercentage, // Extract 'fakePercentage' attribute
    originalParagraph: originalParagraph // Extract 'originalParagraph' attribute

};

console.log(extractedAttributes);
localStorage.setItem("extractedAttributes", JSON.stringify(extractedAttributes));
window.location.href = "../SingleResult/index.html";
};


function mixed(){
var text = "Climate change refers to the long-term shift in global weather patterns caused by human activities, particularly the release of greenhouse gases into the atmosphere. The main greenhouse gas is carbon dioxide, which is primarily produced by burning fossil fuels like coal, oil, and natural gas. The effects of climate change are already visible, including rising temperatures, melting glaciers and ice caps, and more frequent extreme weather events such as hurricanes, droughts, and floods. These changes significantly impact ecosystems, biodiversity, and human health, increasing the risk of respiratory diseases, food and water shortages, and the spread of infectious diseases.\n\nTo address climate change, it is crucial to reduce greenhouse gas emissions through various measures, including increased use of renewable energy sources, greater energy efficiency, and improved transportation systems.\n\nClimate change has likely led to the decline of some of Scotland's mountain plants, according to new research. Scientists said many of the species relied on snow cover remaining high on hills until late spring and even summer to ensure a moist environment. They also said plants that thrived on lower ground in warmer conditions were spreading to mountain habitats. Species found to be in decline include snow pearlwort, alpine lady-fern, and alpine speedwell. The research by the Botanical Society of Britain and Ireland (BSBI) has taken 20 years to complete and has been published in the new Plant Atlas. Data used to produce the report included more than three million plant records of 2,555 species collected by hundreds of botanists across Scotland.";
insertText(text);
var h =["Climate change refers to the long-term shift in global weather patterns caused by human activities, particularly the release of greenhouse gases into the atmosphere.",
"The main greenhouse gas is carbon dioxide, which is primarily produced by burning fossil fuels like coal, oil, and natural gas.",
"The effects of climate change are already visible, including rising temperatures, melting glaciers and ice caps, and more frequent extreme weather events such as hurricanes, droughts, and floods.",
"These changes significantly impact ecosystems, biodiversity, and human health, increasing the risk of respiratory diseases, food and water shortages, and the spread of infectious diseases.",
"To address climate change, it is crucial to reduce greenhouse gas emissions through various measures, including increased use of renewable energy sources, greater energy efficiency, and improved transportation systems.",
"Climate change has likely led to the decline of some of Scotland's mountain plants, according to new research.",
"Species found to be in decline include snow pearlwort, alpine lady-fern and alpine speedwell.",
"The research by the Botanical Society of Britain and Ireland (BSBI) has taken 20 years to complete and has been published in the new Plant Atlas.",
"Data used to produce the report included more than three million plant records of 2,555 species collected by hundreds of botanists across Scotland."
];
  var isHuman = 0; 
  var feedback = "Your Text is AI/GPT Generated";
  var inputText= "Climate change refers to the long-term shift in global weather patterns caused by human activities, particularly the release of greenhouse gases into the atmosphere. The main greenhouse gas is carbon dioxide, which is primarily produced by burning fossil fuels like coal, oil, and natural gas. The effects of climate change are already visible, including rising temperatures, melting glaciers and ice caps, and more frequent extreme weather events such as hurricanes, droughts, and floods. These changes significantly impact ecosystems, biodiversity, and human health, increasing the risk of respiratory diseases, food and water shortages, and the spread of infectious diseases. To address climate change, it is crucial to reduce greenhouse gas emissions through various measures, including increased use of renewable energy sources, greater energy efficiency, and improved transportation systems.\n\n\n\nClimate change has likely led to the decline of some of Scotland's mountain plants, according to new research. Scientists said many of the species relied on snow cover remaining high on hills until late spring and even summer to ensure a moist environment. They also said plants that thrived on lower ground in warmer conditions were spreading to mountain habitats. Species found to be in decline include snow pearlwort, alpine lady-fern and alpine speedwell. The research by the Botanical Society of Britain and Ireland (BSBI) has taken 20 years to complete and has been published in the new Plant Atlas. Data used to produce the report included more than three million plant records of 2,555 species collected by hundreds of botanists across Scotland.";
  var specialIndexes= 0;
  var additional_feedback="Please input more text for a more accurate result.";
  var aiWords = 250;
  var textWords = 208;
  var fakePercentage = 83.2;
  var originalParagraph = "Climate change refers to the long-term shift in global weather patterns caused by human activities, particularly the release of greenhouse gases into the atmosphere. The main greenhouse gas is carbon dioxide, which is primarily produced by burning fossil fuels like coal, oil, and natural gas. The effects of climate change are already visible, including rising temperatures, melting glaciers and ice caps, and more frequent extreme weather events such as hurricanes, droughts, and floods. These changes significantly impact ecosystems, biodiversity, and human health, increasing the risk of respiratory diseases, food and water shortages, and the spread of infectious diseases. To address climate change, it is crucial to reduce greenhouse gas emissions through various measures, including increased use of renewable energy sources, greater energy efficiency, and improved transportation systems.\n\n\n\nClimate change has likely led to the decline of some of Scotland's mountain plants, according to new research. Scientists said many of the species relied on snow cover remaining high on hills until late spring and even summer to ensure a moist environment. They also said plants that thrived on lower ground in warmer conditions were spreading to mountain habitats. Species found to be in decline include snow pearlwort, alpine lady-fern and alpine speedwell. The research by the Botanical Society of Britain and Ireland (BSBI) has taken 20 years to complete and has been published in the new Plant Atlas. Data used to produce the report included more than three million plant records of 2,555 species collected by hundreds of botanists across Scotland. ";
  const extractedAttributes = {
    h: h, // Extract 'h' attribute
    isHuman: isHuman,
    feedback: feedback,
    input_text: inputText,
    specialIndexes: specialIndexes,
    additional_feedback: additional_feedback,
    aiWords: aiWords, // Extract 'aiWords' attribute
    textWords: textWords, // Extract 'textWords' attribute
    fakePercentage: fakePercentage, // Extract 'fakePercentage' attribute
    originalParagraph: originalParagraph // Extract 'originalParagraph' attribute

};

console.log(extractedAttributes);
localStorage.setItem("extractedAttributes", JSON.stringify(extractedAttributes));
window.location.href = "../SingleResult/index.html";

}

function insertText(text) {
  document.getElementById('inputText').value = text;
}

document.addEventListener('DOMContentLoaded', function() {
  function uploadFile() {
      var fileInput = document.getElementById('inpFile');
      var file = fileInput.files[0];

      if (!file) {
          alert('Please select a file.');
          return;
      }

      const url = "http://localhost:3000/api/detect/detectFile";
      const formData = new FormData();
      formData.append('file', file);

      axios.post(url, formData, {
          headers: {
              'Content-Type': 'multipart/form-data'
          }
      })
      .then(function(response) {
          console.log(response.data.data);
          const data = response.data.data;
          const extractedAttributes = 
          {
            h: data.h, // Extract 'h' attribute
            isHuman: data.isHuman,
            feedback: data.feedback,
            input_text: data.input_text,
            specialIndexes: data.specialIndexes,
            additional_feedback: data.additional_feedback,
            aiWords: data.aiWords, // Extract 'aiWords' attribute
            textWords: data.textWords, // Extract 'textWords' attribute
            fakePercentage: data.fakePercentage, // Extract 'fakePercentage' attribute
            originalParagraph: data.originalParagraph // Extract 'originalParagraph' attribute
        };
          
        localStorage.setItem("extractedAttributes", JSON.stringify(extractedAttributes));
        window.location.href = "../SingleResult/index.html";
      })
      .catch(function(error) {
          console.error('Error uploading file:', error);
          // Handle error here
      });
  }

  const inputElement = document.getElementById('inpFile');
  const clearButton = document.getElementById('clearBtn');

  inputElement.addEventListener('change', function() {
      if (this.files && this.files.length > 0) {
          clearButton.style.display = 'inline-block';
          this.classList.add('has-files');
      } else {
          clearButton.style.display = 'none';
          this.classList.remove('has-files');
      }
  });

  clearButton.addEventListener('click', function() {
      inputElement.value = ''; // Clear the selected file
      clearButton.style.display = 'none'; // Hide the clear button
      inputElement.classList.remove('has-files');
      inputElement.classList.remove('border-black');
  });

  // Add event listener for focus to apply border color
  inputElement.addEventListener('focus', function() {
      this.classList.add('border-black');
  });

  // Add event listener for blur to remove border color if no files selected
  inputElement.addEventListener('blur', function() {
      if (!this.classList.contains('has-files')) {
          this.classList.remove('border-black');
      }
  });

  // Add event listener for upload button
  document.getElementById('btnUpload').addEventListener('click', uploadFile);
});



document.addEventListener("DOMContentLoaded", function() {
  const agreeCheckbox = document.getElementById("agree");
  const inpFile = document.getElementById("inpFile");
  const btnUpload = document.getElementById("btnUpload");
  const inputText = document.getElementById("inputText");
  const charCount = document.querySelector('.char-count');
  const submitButton = document.getElementById("submitButton");

  // Initially hide submitButton
  submitButton.style.display = "none";

  // Event listener for checkbox change
  agreeCheckbox.addEventListener("change", function() {
    if (this.checked) {
        submitButton.style.display = "inline-block"; // Display submitButton when checkbox is checked
        submitButton.disabled = false; // Enable submitButton when checkbox is checked
    } else {
        submitButton.style.display = "none"; // Hide submitButton when checkbox is not checked
        submitButton.disabled = true; // Disable submitButton when checkbox is not checked
    }
  });


  // Event listener for inputText
  inputText.addEventListener('input', function() {
    charCount.textContent = `${this.value.length} / 5000`;
    // totalCharacters variable was not defined, corrected below
    const totalCharacters = this.value.length;
    localStorage.setItem("totalCharacters", JSON.stringify(totalCharacters));
  });

  document.getElementById("submitButton").addEventListener("click", () => {
    const inputTextValue = inputText.value;
    if (inputTextValue !== '') {
        processInput(inputTextValue);
    } else {
        console.error('Input text is empty');
        // Handle empty input text
    }
  });

  function processInput(inputTextValue) {
    fetch("/api/detect/detectText", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ input_text: inputTextValue })
    })
    .then(response => response.json()) // Parse response as JSON
    .then(result => { 
        const data = result.data; // Extract 'data' object from the response
        const extractedAttributes = {
            h: data.h, // Extract 'h' attribute
            isHuman: data.isHuman,
            feedback: data.feedback,
            input_text: data.input_text,
            specialIndexes: data.specialIndexes,
            additional_feedback: data.additional_feedback,
            aiWords: data.aiWords, // Extract 'aiWords' attribute
            textWords: data.textWords, // Extract 'textWords' attribute
            fakePercentage: data.fakePercentage, // Extract 'fakePercentage' attribute
            originalParagraph: data.originalParagraph // Extract 'originalParagraph' attribute
        };
        console.log(result);
        localStorage.setItem("extractedAttributes", JSON.stringify(extractedAttributes));
        window.location.href = "../SingleResult/index.html";
    })
    .catch(error => {
        console.error('Error:', error);
        // Handle error
    });
  }


});
