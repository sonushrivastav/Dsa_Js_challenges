function phoneNumberDirectory(phonenumber){
  const directory = new Map()
  for(const entry of phonenumber){
    const [name,phonenumber] = entry.split(":")

    directory.set(name,phonenumber)
  }

  return directory
}

module.exports =  phoneNumberDirectory