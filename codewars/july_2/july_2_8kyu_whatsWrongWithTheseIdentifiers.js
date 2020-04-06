An identifier is simply a name...
Can you amend this object so that its properties comprise only vaild identifiers?

var Person = {
    firstname: "John",
    second_name: "Doe",
    emailaddress: "john.doe@email.com",
    malefemale: "M"
  };

  var Person = {
    '1stname': "John",
    'second-name': "Doe",
    'email@ddress': "john.doe@email.com",
    'male.female': "M"
  }