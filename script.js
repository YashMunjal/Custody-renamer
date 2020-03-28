replaceText(document.body);


function replaceText(element) {
    if (element.hasChildNodes()) {
        element.childNodes.forEach(replaceText)
    } else if (element.nodeType === Text.TEXT_NODE) {
            element.textContent = element.textContent.replace(/facebook|instagram|fb|google|[gG][oO][gG][lL][eE]|[fF][aA][cC][eE][bB][oO][kK]/gi, 'Custody');
            
                }
    }