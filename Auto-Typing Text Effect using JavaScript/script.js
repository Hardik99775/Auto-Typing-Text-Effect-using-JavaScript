const wordslist1 = ["Developer.", "Coder.", "Teacher.", , "YouTuber"];
const wordslist2 = ["Ready.",  "Happy.","Sleepy",  "YouTuber","Reading",  "Laughing",];
const span = document.querySelector("h1 span");
const span2 = document.querySelector("h2 span");
function autotype(wordslist,element) {
  let wordIndex = 0;
  let cha = 0;
  let skipUpdate = 0;
  let retype = false;
  const intervalId = setInterval(() => {
    if (skipUpdate) {
      skipUpdate--;
      return;
    }
    if (!retype) {
      skipUpdate = 2;
      element.innerText = element.innerText + wordslist[wordIndex][cha];
      cha++;
    } else {
        element.innerText = element.innerText.slice(0, element.innerText.length - 1);
      cha--;
    }
    if (cha === wordslist[wordIndex].length) {
      skipUpdate = 5;
      retype = true;
    }
    if (element.innerText.length === 0 && retype) {
      retype = false;
      wordIndex++;
    }
    if (wordIndex === wordslist.length - 1) {
      wordIndex = 0;
    }
  }, 200);
}
autotype(wordslist2, span);
autotype(wordslist1, span2);
