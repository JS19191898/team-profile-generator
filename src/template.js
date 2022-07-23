const createTeam = team => {

    console.log("Our team from index.js", team)

    // you will filter through all of the team members by job title (manager, intern, engineer)
    // you will separate them and put them in their respective bootstrap cards 
    // then bring all the cards back together and export the entire team in their cards to the html template

    const generateManager = manager => {
        return `
        <div class="card" style="width: 18rem;">
         <div class="card-body">
         <h5 class="card-title">${manager.getRole()}</h5>
         <p class="card-text">Name: ${manager.getName()}</p>
         <p class="card-text">Id: ${manager.getId()}</p>
         <p class="card-text">Email: ${manager.getEmail()}</p>
         <p class="card-text">Office Number: ${manager.getOfficeNumber()}</p>
         </div>
        </div>
        `
    }

    const finishedTeam = [];

    finishedTeam.push(team.filter(employee => employee.getRole() === "Manager").map(manager => generateManager(manager)));


    return finishedTeam.join("")

    // follow the flow for generateManager for intern and engineer

}

module.exports = team => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <title>Team Profile Generator</title>
</head>
<body>
    ${createTeam(team)}
</body>
</html>
    `
}