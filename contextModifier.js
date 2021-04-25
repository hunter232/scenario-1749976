
// Checkout the repo examples to get an idea of other ways you can use scripting
// https://github.com/latitudegames/Scripting/blob/master/examples

// info.memoryLength is the length of the memory section of text.
// info.maxChars is the maximum length that text can be. The server will truncate the text you return to this length.

// This modifier re-implements Author's Note as an example.
const modifier = (text) => {
  let modifiedText = text
  const lowered = text.toLowerCase()
  if (lowered.match(/([\d]+:[\d]+\s*[ap]m)/g)) {

    text = lowered.replace(/([\d]+:[\d]+\s*[ap]m)/g, getTime());
    console.log('mod text ' + text)
  }
  // Setting state.memory.context will cause that to be used instead of the user set memory
  state.memory = { context: '' }

  // You can modify world info entries using the below commands
  // addWorldEntry(keys, entry)
  // removeWorldEntry(index)
  // updateWorldEntry(index, keys, entry)

  // You can read world info keys with worldInfo 
  const entries = worldInfo

  // Setting state.message will set an info message that will be displayed in the game
  // This can be useful for debugging



  // You can log things to the side console when testing with console.log

  modifiedText = text

  return { text: modifiedText }
}  // You must return an object with the text property defined.

// Don't modify this part
modifier(text)
