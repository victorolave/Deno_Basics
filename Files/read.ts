//File Path
const filePath = './text.txt';

//Save the file content
let file = await Deno.open(filePath);

//Display the file content
await Deno.copy(Deno.stdout, file);