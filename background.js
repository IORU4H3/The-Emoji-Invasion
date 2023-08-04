if (chrome.webNavigation) {
  chrome.webNavigation.onDOMContentLoaded.addListener(details => {
    chrome.scripting.executeScript({
      target: {tabId: details.tabId},
      func: function() {
        function generateLoremIpsum() {
          var words = ["😀", "😁", "😂", "🤣", "😃", "😄", "😅", "😆", "😉", "😊", "😋", "😌", "😍", "😎", "😏", "😐", "😑", "😒", "😓", "😔", "😕", "😖", "😗", "😘", "😙", "😚", "😛", "😜", "😝", "😞", "😟", "😠", "😡", "😢", "😣", "😤", "😥", "😦", "😧", "😨", "😩", "😪", "😫", "😬", "😭", "😮", "😯", "😰", "😱", "😲", "😳", "😴", "😵", "😶", "😷", "🙁", "🙂", "🙃", "🙄", "🤔", "🤥", "🤗", "🤩", "🤪", "🤫", "🤬", "🤭", "🤮", "🤯", "🥰", "🥱", "🥳", "🥴", "🥺"];
          var loremIpsumText = "";
          loremIpsumText += words[Math.floor(Math.random() * words.length)] + " ";
          return loremIpsumText;
        }

        var elements = document.querySelectorAll('p, span, ul, li');
        for (var i = 0; i < elements.length; i++) {
          var wordCount = elements[i].textContent.split(" ").length;
          var loremIpsumText = "";

          for (var j = 0; j < wordCount; j++) {
           loremIpsumText += generateLoremIpsum();
          }

          elements[i].textContent = loremIpsumText.trim();
        }
      }
    });
  }, {url: [{schemes: ['http', 'https']}]});
}
