
// Checkout the repo examples to get an idea of other ways you can use scripting 
// https://github.com/latitudegames/Scripting/blob/master/examples

const modifier = (text) => {
  let modifiedText = text
  const lowered = text.toLowerCase()

  // The text passed in is either the user's input or players output to modify.
    if (lowered.match(/([\d]+:[\d]+\s*[ap]m)/g)) {

     text = lowered.replace(/([\d]+:[\d]+\s*[ap]m)/g, getTime());
      console.log("match found! current time= "+getTime());
    }
    
    

    modifiedText = text
    // You must return an object with the text property defined.
    return { text: modifiedText }
  
}
// Don't modify this part
modifier(text)
