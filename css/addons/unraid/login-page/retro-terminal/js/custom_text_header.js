
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>   __                        
  / /  ___ _ __  _ __  _   _ 
 / /  / _ \ '_ \| '_ \| | | |
/ /__|  __/ | | | | | | |_| |
\____/\___|_| |_|_| |_|\__, |
                       |___/ </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
